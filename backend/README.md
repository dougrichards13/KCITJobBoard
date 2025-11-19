# CFAFS Job Board

A lightweight Django-based job board system designed for companies hiring 5-10 people annually. Integrates with the CFAFS Next.js frontend via REST API.

## Features

- **Simple Job Management** - Create, edit, and manage job postings through Django admin
- **Application Tracking** - View and track candidate applications
- **Resume Upload** - Secure file uploads with validation (PDF, DOC, DOCX, max 5MB)
- **Email Notifications** - Automatic emails to HR when applications are submitted
- **RBAC** - Role-based access control (Super Admin and Admin roles)
- **REST API** - Clean API endpoints for frontend integration
- **Clean Design** - Django's beautiful admin interface, no bloat

## Quick Start

### 1. Install Dependencies

```powershell
cd F:\cfafs\jobboard
python -m venv venv
.\venv\Scripts\Activate.ps1
pip install -r requirements.txt
```

### 2. Run Migrations

```powershell
python manage.py migrate
```

### 3. Create Admin Users

**Super Admin (you):**
```powershell
python manage.py createsuperuser
# Username: your_username
# Email: your_email@cfafs.com
# Password: (your choice)
```

**HR Admin:**
1. Log into admin at http://localhost:8001/admin
2. Go to Users → Add user
3. Create username and password for HR head
4. Edit user: Check "Staff status" to allow admin access
5. In Permissions: Select "jobs | job posting | Can add/change/view"
6. In Permissions: Select "jobs | job application | Can view/change"

### 4. Run the Server

```powershell
python manage.py runserver 8001
```

The job board API will be available at: http://localhost:8001

## Admin Interface

### Accessing Admin Panel

1. Navigate to http://localhost:8001/admin
2. Log in with superuser or HR admin credentials

### Managing Job Postings

**Create a New Job:**
1. Admin → Jobs → Job Postings → Add Job Posting
2. Fill in required fields:
   - Title (e.g., "Loan Officer")
   - Location (e.g., "Remote", "Hybrid - Central Office")
   - Description (full job description)
3. Optional fields:
   - Requirements
   - Responsibilities
   - Salary Range
4. Set Status:
   - **Draft** - Not visible to public
   - **Active** - Visible and accepting applications
   - **Closed** - Not accepting applications
5. Click "Save"

**Edit/Close a Job:**
- Find the job in the list
- Change status to "closed" to stop accepting applications
- Or click the job title to edit details

### Reviewing Applications

**View All Applications:**
1. Admin → Jobs → Job Applications
2. Filter by:
   - Status (New, Under Review, Interview, etc.)
   - Job position
   - Date applied

**Review an Application:**
1. Click on applicant's name
2. View all details including:
   - Contact information
   - Cover letter
   - Resume (download link)
   - LinkedIn profile
3. Add internal notes
4. Change status as you review
5. Click "Save"

**Bulk Actions:**
- Select multiple applications
- Use "Actions" dropdown to:
  - Mark as "Under Review"
  - Mark as "Interview Scheduled"

## API Endpoints

### Public Endpoints (No Auth Required)

**Get Active Jobs:**
```
GET http://localhost:8001/api/jobs/
```

Response:
```json
[
  {
    "id": 1,
    "title": "Loan Officer",
    "location": "Remote / Midwest",
    "description": "Full job description...",
    "requirements": "Requirements...",
    "responsibilities": "Responsibilities...",
    "salary_range": "$50k-$70k",
    "created_at": "2025-01-18T19:00:00Z"
  }
]
```

**Get Single Job:**
```
GET http://localhost:8001/api/jobs/{id}/
```

**Submit Application:**
```
POST http://localhost:8001/api/applications/
Content-Type: multipart/form-data

{
  "job": 1,
  "first_name": "John",
  "last_name": "Doe",
  "email": "john@example.com",
  "phone": "555-1234",
  "cover_letter": "Optional cover letter...",
  "resume": (file upload),
  "linkedin_url": "https://linkedin.com/in/johndoe"
}
```

**Health Check:**
```
GET http://localhost:8001/api/health/
```

## Permission Roles

### Super Admin (You)
- Full access to everything
- Can create/edit/delete jobs
- Can view/manage all applications
- Can manage users and permissions

### Admin (HR Head)
- Can create/edit jobs
- Can view all applications
- Can change application status
- Cannot manage users or system settings

## Email Notifications

When an application is submitted, an email is automatically sent to `HR_EMAIL` (configured in settings.py).

**Development Mode:**
- Emails print to console
- Check the terminal running Django

**Production Setup:**
Edit `config/settings.py`:
```python
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_HOST_USER = 'your-email@gmail.com'
EMAIL_HOST_PASSWORD = 'your-app-password'
HR_EMAIL = 'hr@cfafs.com'
```

## File Storage

**Resume Storage:**
- Location: `F:\cfafs\jobboard\media\resumes\YYYY\MM\`
- Organized by year and month
- Accessible via admin panel

**Validation:**
- Max file size: 5MB
- Allowed formats: PDF, DOC, DOCX

## Database

**Development:**
- SQLite database: `db.sqlite3`
- Perfect for local development
- No setup required

**Production Migration:**
When ready for production, switch to PostgreSQL:

1. Install psycopg2: `pip install psycopg2`
2. Update `config/settings.py`:
```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'cfafs_jobs',
        'USER': 'your_db_user',
        'PASSWORD': 'your_db_password',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
```

## Integration with Next.js Frontend

The Next.js careers page at `frontend/src/app/careers/page.tsx` will fetch jobs from this API.

**API Base URL:**
- Development: `http://localhost:8001/api`
- Production: Update CORS settings and use production URL

## Troubleshooting

**Can't access admin:**
- Make sure user has "Staff status" checked
- Verify permissions are set correctly

**Resume upload fails:**
- Check file size (must be < 5MB)
- Verify file format (PDF, DOC, DOCX only)
- Ensure `media` directory is writable

**CORS errors from frontend:**
- Verify `http://localhost:3000` is in `CORS_ALLOWED_ORIGINS` in settings.py
- Check that `corsheaders` middleware is installed

## Next Steps

1. ✅ Django job board is set up
2. 🔄 Integrate with Next.js frontend (in progress)
3. 📝 Test complete flow
4. 🚀 Deploy when ready

## Support

For questions or issues, contact the development team.

---

**Built for CFAFS** - A focused solution for small-volume hiring needs.
