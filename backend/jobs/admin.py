from django.contrib import admin
from django.utils.html import format_html
from django.urls import reverse
from .models import Job, Application, InterviewNote, Department

# Customize Django Admin branding for CFAFS
admin.site.site_header = "CFA Careers Administration"
admin.site.site_title = "CFA Careers Admin"
admin.site.index_title = "Cooperative Finance Association - Careers Management"


@admin.register(Department)
class DepartmentAdmin(admin.ModelAdmin):
    """Admin interface for managing departments"""
    list_display = ['name', 'description', 'job_count', 'created_at']
    search_fields = ['name', 'description']
    readonly_fields = ['created_at']
    
    def job_count(self, obj):
        count = obj.jobs.count()
        if count > 0:
            return f"{count} job(s)"
        return "0 jobs"
    job_count.short_description = 'Open Positions'


@admin.register(Job)
class JobAdmin(admin.ModelAdmin):
    """Admin interface for managing job postings"""
    list_display = ['title', 'location', 'status', 'application_count', 'created_at', 'posted_by']
    list_filter = ['status', 'created_at', 'location']
    search_fields = ['title', 'description', 'location']
    list_editable = ['status']
    readonly_fields = ['created_at', 'updated_at']
    
    filter_horizontal = ['hiring_team']
    
    fieldsets = (
        ('Job Information', {
            'fields': ('title', 'location', 'description')
        }),
        ('Details', {
            'fields': ('requirements', 'responsibilities', 'salary_range'),
            'description': 'Additional job details (requirements, responsibilities, salary)'
        }),
        ('Department & Hiring Team', {
            'fields': ('department', 'hiring_manager', 'hiring_team'),
            'description': 'Department this position belongs to, hiring manager, and team members involved in hiring'
        }),
        ('Publishing', {
            'fields': ('status', 'posted_by')
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )
    
    def application_count(self, obj):
        count = obj.applications.count()
        if count > 0:
            url = reverse('admin:jobs_application_changelist') + f'?job__id__exact={obj.id}'
            return format_html('<a href="{}">{} applications</a>', url, count)
        return '0 applications'
    application_count.short_description = 'Applications'
    
    def save_model(self, request, obj, form, change):
        if not change:  # If creating new job
            obj.posted_by = request.user
        super().save_model(request, obj, form, change)


class InterviewNoteInline(admin.TabularInline):
    """Inline admin for adding interview notes"""
    model = InterviewNote
    extra = 1
    fields = ['interview_date', 'interview_type', 'recommendation', 'notes', 'visibility', 'shared_with_emails']
    
    def save_model(self, request, obj, form, change):
        if not obj.interviewer:
            obj.interviewer = request.user
        super().save_model(request, obj, form, change)


@admin.register(Application)
class ApplicationAdmin(admin.ModelAdmin):
    """Admin interface for reviewing job applications (Read-Only, except status changes)"""
    list_display = ['full_name', 'job', 'email', 'phone', 'status', 'approved_for_interview', 'applied_at', 'resume_link']
    list_filter = ['status', 'approved_for_interview', 'job', 'applied_at']
    search_fields = ['first_name', 'last_name', 'email', 'job__title']
    list_editable = ['status', 'approved_for_interview']
    inlines = [InterviewNoteInline]
    
    # Make all application fields read-only (submitted via API only)
    readonly_fields = [
        'job', 'first_name', 'last_name', 'email', 'phone',
        'cover_letter', 'resume', 'linkedin_url', 'applied_at',
        'resume_preview', 'application_summary', 'interview_notes_display'
    ]
    
    fieldsets = (
        ('Candidate Information', {
            'fields': ('first_name', 'last_name', 'email', 'phone', 'linkedin_url'),
            'description': 'Applicant information (submitted via website)'
        }),
        ('Application Details', {
            'fields': ('job', 'cover_letter', 'resume_preview', 'applied_at'),
            'description': 'Submitted application content'
        }),
        ('Review & Status', {
            'fields': ('status', 'notes', 'reviewed_by', 'reviewed_at'),
            'classes': ('wide',),
            'description': 'Update status and add internal notes'
        }),
        ('Interview Coordination', {
            'fields': ('approved_for_interview', 'next_interviewer_email'),
            'description': 'Approve for interview and assign next interviewer'
        }),
        ('Interview Feedback', {
            'fields': ('interview_notes_display',),
            'description': 'View interview notes from hiring team (add notes via Interview Notes section below)'
        }),
        ('Quick Summary', {
            'fields': ('application_summary',),
            'classes': ('collapse',)
        }),
    )
    
    # Disable add permission - applications only come from API
    def has_add_permission(self, request):
        return False
    
    # Disable delete permission - keep all applications for records
    def has_delete_permission(self, request, obj=None):
        return False
    
    def resume_link(self, obj):
        if obj.resume:
            return format_html('<a href="{}" target="_blank">View Resume</a>', obj.resume.url)
        return '-'
    resume_link.short_description = 'Resume'
    
    def resume_preview(self, obj):
        if obj.resume:
            return format_html(
                '<a href="{}" target="_blank" class="button">Download Resume</a> '
                '<span style="color: #666; margin-left: 10px;">File: {}</span>',
                obj.resume.url,
                obj.resume.name.split('/')[-1]
            )
        return 'No resume uploaded'
    resume_preview.short_description = 'Resume File'
    
    def application_summary(self, obj):
        summary = f"""
        <div style="background: #f8f9fa; padding: 15px; border-radius: 5px;">
            <h3 style="margin-top: 0;">Application Summary</h3>
            <p><strong>Candidate:</strong> {obj.full_name}</p>
            <p><strong>Email:</strong> {obj.email}</p>
            <p><strong>Phone:</strong> {obj.phone or 'Not provided'}</p>
            <p><strong>Applied for:</strong> {obj.job.title}</p>
            <p><strong>Applied on:</strong> {obj.applied_at.strftime('%B %d, %Y at %I:%M %p')}</p>
            <p><strong>Status:</strong> <span style="color: {'green' if obj.status == 'accepted' else 'orange'}">{obj.get_status_display()}</span></p>
            <p><strong>Approved for Interview:</strong> {'Yes' if obj.approved_for_interview else 'No'}</p>
        </div>
        """
        return format_html(summary)
    application_summary.short_description = 'Summary'
    
    def interview_notes_display(self, obj):
        """Display interview notes from hiring team"""
        notes = obj.interview_notes.all()
        if not notes:
            return '<p style="color: #999;">No interview notes yet</p>'
        
        html = '<div style="background: #f8f9fa; padding: 15px; border-radius: 5px;">'
        html += '<h3 style="margin-top: 0;">Interview Feedback</h3>'
        
        for note in notes:
            color = {
                'strong_yes': '#28a745',
                'yes': '#5cb85c',
                'maybe': '#ffc107',
                'no': '#dc3545',
                'strong_no': '#c82333'
            }.get(note.recommendation, '#6c757d')
            
            html += f'<div style="margin-bottom: 20px; padding: 15px; background: white; border-left: 4px solid {color}; border-radius: 4px;">'
            html += f'<p><strong>{note.interviewer.get_full_name() if note.interviewer else "Unknown"}</strong> - {note.interview_date.strftime("%B %d, %Y")}</p>'
            if note.interview_type:
                html += f'<p><em>{note.interview_type}</em></p>'
            if note.recommendation:
                html += f'<p><strong>Recommendation:</strong> <span style="color: {color};">{note.get_recommendation_display()}</span></p>'
            html += f'<p style="white-space: pre-wrap;">{note.notes}</p>'
            html += f'<p style="font-size: 12px; color: #999;">Visibility: {note.get_visibility_display()}</p>'
            html += '</div>'
        
        html += '</div>'
        return format_html(html)
    interview_notes_display.short_description = 'Interview Notes'
    
    def save_model(self, request, obj, form, change):
        if change and 'status' in form.changed_data:
            obj.reviewed_by = request.user
            from django.utils import timezone
            obj.reviewed_at = timezone.now()
        super().save_model(request, obj, form, change)
    
    actions = ['mark_as_reviewing', 'mark_as_interview']
    
    def mark_as_reviewing(self, request, queryset):
        updated = queryset.update(status='reviewing', reviewed_by=request.user)
        self.message_user(request, f'{updated} application(s) marked as under review.')
    mark_as_reviewing.short_description = 'Mark selected as "Under Review"'
    
    def mark_as_interview(self, request, queryset):
        updated = queryset.update(status='interview', reviewed_by=request.user)
        self.message_user(request, f'{updated} application(s) marked as "Interview Scheduled".')
    mark_as_interview.short_description = 'Mark selected as "Interview Scheduled"'
