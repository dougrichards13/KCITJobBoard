from django.core.mail import send_mail
from django.conf import settings
from django.template.loader import render_to_string


def send_application_notification(application):
    """
    Send email notification to HR when a new application is submitted
    """
    subject = f"New Job Application: {application.job.title} - {application.full_name}"
    
    # Email body
    message = f"""
    A new job application has been submitted.
    
    Job Position: {application.job.title}
    Candidate: {application.full_name}
    Email: {application.email}
    Phone: {application.phone or 'Not provided'}
    Applied: {application.applied_at.strftime('%B %d, %Y at %I:%M %p')}
    
    Please log in to the admin panel to review the application:
    http://localhost:8001/admin/jobs/application/{application.id}/change/
    
    Resume: {application.resume.url if application.resume else 'Not uploaded'}
    LinkedIn: {application.linkedin_url or 'Not provided'}
    
    Cover Letter:
    {application.cover_letter or 'No cover letter provided'}
    
    ---
    CFAFS Job Board System
    """
    
    # In production, you would set up SMTP settings in settings.py
    # For now, we'll just print to console (Django will log it)
    try:
        # Get HR email from settings or use a default
        hr_email = getattr(settings, 'HR_EMAIL', 'hr@cfafs.com')
        
        send_mail(
            subject=subject,
            message=message,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[hr_email],
            fail_silently=False,
        )
        return True
    except Exception as e:
        # Log the error but don't fail the application submission
        print(f"Failed to send email notification: {e}")
        return False
