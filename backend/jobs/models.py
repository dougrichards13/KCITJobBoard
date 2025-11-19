from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone


class Department(models.Model):
    """Organizational department model"""
    name = models.CharField(max_length=100, unique=True, help_text="Department name (e.g., IT, HR, Finance)")
    description = models.TextField(blank=True, help_text="Department description")
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['name']
        verbose_name = 'Department'
        verbose_name_plural = 'Departments'
    
    def __str__(self):
        return self.name


class Job(models.Model):
    """Job posting model for career opportunities"""
    STATUS_CHOICES = [
        ('active', 'Active'),
        ('closed', 'Closed'),
        ('draft', 'Draft'),
    ]
    
    title = models.CharField(max_length=200, help_text="Job title")
    location = models.CharField(max_length=100, help_text="e.g., Remote, Hybrid, On-site")
    description = models.TextField(help_text="Full job description")
    requirements = models.TextField(blank=True, help_text="Job requirements (optional)")
    responsibilities = models.TextField(blank=True, help_text="Job responsibilities (optional)")
    salary_range = models.CharField(max_length=100, blank=True, help_text="e.g., $50k-$70k (optional)")
    
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='draft')
    
    # Department & Hiring team
    department = models.ForeignKey('Department', on_delete=models.SET_NULL, null=True, blank=True,
                                   related_name='jobs',
                                   help_text="Department this position belongs to")
    hiring_manager = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, 
                                       related_name='jobs_managing', 
                                       help_text="Primary hiring manager for this position")
    hiring_team = models.ManyToManyField(User, blank=True, 
                                         related_name='jobs_team_member',
                                         help_text="Team members who can review applications")
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    posted_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name='jobs_posted')
    
    class Meta:
        ordering = ['-created_at']
        verbose_name = 'Job Posting'
        verbose_name_plural = 'Job Postings'
    
    def __str__(self):
        return f"{self.title} - {self.location} ({self.status})"
    
    @property
    def is_active(self):
        return self.status == 'active'


class Application(models.Model):
    """Job application submitted by candidates"""
    STATUS_CHOICES = [
        ('new', 'New'),
        ('reviewing', 'Under Review'),
        ('interview', 'Interview Scheduled'),
        ('rejected', 'Rejected'),
        ('accepted', 'Accepted'),
    ]
    
    job = models.ForeignKey(Job, on_delete=models.CASCADE, related_name='applications')
    
    # Candidate Information
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True)
    
    # Application Details
    cover_letter = models.TextField(blank=True, help_text="Optional cover letter")
    resume = models.FileField(upload_to='resumes/%Y/%m/', help_text="Upload resume (PDF, DOC, DOCX)")
    linkedin_url = models.URLField(blank=True, help_text="LinkedIn profile (optional)")
    
    # Status & Tracking
    status = models.CharField(max_length=15, choices=STATUS_CHOICES, default='new')
    notes = models.TextField(blank=True, help_text="Internal notes (visible to hiring team)")
    
    applied_at = models.DateTimeField(auto_now_add=True)
    reviewed_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, related_name='applications_reviewed')
    reviewed_at = models.DateTimeField(null=True, blank=True)
    
    # Interview scheduling & team collaboration
    approved_for_interview = models.BooleanField(default=False, help_text="Approved by hiring manager")
    next_interviewer_email = models.EmailField(blank=True, help_text="Email of next person to interview (will integrate with Entra ID)")
    
    class Meta:
        ordering = ['-applied_at']
        verbose_name = 'Job Application'
        verbose_name_plural = 'Job Applications'
    
    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.job.title} ({self.status})"
    
    @property
    def full_name(self):
        return f"{self.first_name} {self.last_name}"


class InterviewNote(models.Model):
    """Interview feedback and notes from hiring team"""
    VISIBILITY_CHOICES = [
        ('private', 'Private (Only Me)'),
        ('team', 'Team (Hiring Team)'),
        ('all', 'All Reviewers'),
    ]
    
    application = models.ForeignKey(Application, on_delete=models.CASCADE, related_name='interview_notes')
    interviewer = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name='interviews_conducted')
    
    # Interview details
    interview_date = models.DateTimeField(help_text="When the interview took place")
    interview_type = models.CharField(max_length=50, blank=True, help_text="e.g., Phone Screen, Technical, Final")
    
    # Feedback
    notes = models.TextField(help_text="Interview notes and feedback")
    recommendation = models.CharField(max_length=20, choices=[
        ('strong_yes', 'Strong Yes - Hire'),
        ('yes', 'Yes - Move Forward'),
        ('maybe', 'Maybe - Needs Discussion'),
        ('no', 'No - Do Not Advance'),
        ('strong_no', 'Strong No - Reject'),
    ], blank=True)
    
    # Collaboration
    visibility = models.CharField(max_length=10, choices=VISIBILITY_CHOICES, default='team',
                                  help_text="Who can see this feedback")
    shared_with_emails = models.TextField(blank=True, 
                                          help_text="Additional team members to share with (comma-separated emails)")
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-interview_date']
        verbose_name = 'Interview Note'
        verbose_name_plural = 'Interview Notes'
    
    def __str__(self):
        return f"{self.interviewer.get_full_name() if self.interviewer else 'Unknown'} - {self.application.full_name} ({self.interview_date.strftime('%Y-%m-%d')})"
    
    def can_view(self, user):
        """Check if user can view this note"""
        if self.visibility == 'private':
            return user == self.interviewer
        elif self.visibility == 'team':
            return user in self.application.job.hiring_team.all() or user == self.application.job.hiring_manager
        else:  # all
            return True
