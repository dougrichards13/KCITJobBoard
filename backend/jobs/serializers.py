from rest_framework import serializers
from .models import Job, Application


class JobSerializer(serializers.ModelSerializer):
    """Serializer for public job listings"""
    class Meta:
        model = Job
        fields = ['id', 'title', 'location', 'description', 'requirements', 
                  'responsibilities', 'salary_range', 'created_at']
        read_only_fields = ['id', 'created_at']


class ApplicationSerializer(serializers.ModelSerializer):
    """Serializer for job application submissions"""
    class Meta:
        model = Application
        fields = ['id', 'job', 'first_name', 'last_name', 'email', 'phone', 
                  'cover_letter', 'resume', 'linkedin_url']
        read_only_fields = ['id']
    
    def validate_resume(self, value):
        """Validate resume file upload"""
        # Check file size (max 5MB)
        if value.size > 5 * 1024 * 1024:
            raise serializers.ValidationError("Resume file size must be less than 5MB")
        
        # Check file extension
        allowed_extensions = ['.pdf', '.doc', '.docx']
        file_name = value.name.lower()
        if not any(file_name.endswith(ext) for ext in allowed_extensions):
            raise serializers.ValidationError(
                "Only PDF, DOC, and DOCX files are allowed for resumes"
            )
        
        return value
    
    def validate_email(self, value):
        """Validate email format"""
        return value.lower()
