from django.urls import path
from .views import JobListView, JobDetailView, ApplicationCreateView, health_check

app_name = 'jobs'

urlpatterns = [
    path('health/', health_check, name='health'),
    path('jobs/', JobListView.as_view(), name='job-list'),
    path('jobs/<int:pk>/', JobDetailView.as_view(), name='job-detail'),
    path('applications/', ApplicationCreateView.as_view(), name='application-create'),
]
