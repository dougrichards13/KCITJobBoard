from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.shortcuts import render
from .models import Job, Application
from .serializers import JobSerializer, ApplicationSerializer
from .emails import send_application_notification


def home_view(request):
    """Simple home page for the job board admin site"""
    return render(request, 'home.html')


class JobListView(generics.ListAPIView):
    """Public API endpoint to list active job postings"""
    serializer_class = JobSerializer
    
    def get_queryset(self):
        # Only return active jobs
        return Job.objects.filter(status='active')


class JobDetailView(generics.RetrieveAPIView):
    """Public API endpoint to view a specific job"""
    serializer_class = JobSerializer
    
    def get_queryset(self):
        # Only return active jobs
        return Job.objects.filter(status='active')


class ApplicationCreateView(generics.CreateAPIView):
    """Public API endpoint to submit job applications"""
    serializer_class = ApplicationSerializer
    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        # Check if the job is still active
        job_id = serializer.validated_data['job'].id
        job = Job.objects.get(id=job_id)
        
        if job.status != 'active':
            return Response(
                {'error': 'This job posting is no longer accepting applications'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Save the application
        application = serializer.save()
        
        # Send email notification to HR
        send_application_notification(application)
        
        return Response(
            {
                'message': 'Application submitted successfully',
                'application_id': application.id
            },
            status=status.HTTP_201_CREATED
        )


@api_view(['GET'])
def health_check(request):
    """Health check endpoint for the job board API"""
    return Response({'status': 'healthy', 'service': 'jobboard'})
