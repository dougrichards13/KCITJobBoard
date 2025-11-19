# How to View Job Applications - Complete Guide

## 🎯 Understanding the System

### Two Separate Servers

Your job board system has **two parts** that work together:

1. **Django Admin (Port 8001)** - Where HR manages jobs and views applications
2. **Next.js Frontend (Port 3000)** - Where candidates view jobs and apply

```
Candidates → Next.js (Port 3000) → Django API (Port 8001) → Database
HR Staff → Django Admin (Port 8001) → View Applications
```

## 📋 How Applications Work

### For Candidates (Public)
1. Visit: **http://localhost:3000/careers**
2. See list of active jobs
3. Click "Apply"
4. Fill out application form (name, email, resume, etc.)
5. Submit → Saved to Django database

### For HR (Admin)
1. Visit: **http://localhost:8001/admin/**
2. Click **"Job Applications"**
3. View all submitted applications
4. Click on applicant name to see details
5. Update status, add notes, download resume

## 🚀 Accessing Applications

### Step 1: Access Admin Panel
```
URL: http://localhost:8001/admin/
Username: admin
Password: admin123
```

### Step 2: Click "Job Applications"
You'll see a list of all applications with:
- Candidate name
- Job they applied for
- Email & phone
- Application status
- Date applied
- Resume download link

### Step 3: Review an Application
Click on the candidate's name to see:
- **Candidate Information**: Name, email, phone, LinkedIn
- **Application Details**: Job, cover letter, resume
- **Review & Status**: Change status, add internal notes

### What You CAN Do:
✅ View all application details
✅ Download resumes
✅ Change application status (New → Under Review → Interview → Accepted/Rejected)
✅ Add internal notes
✅ Filter by job, status, or date
✅ Search by candidate name or email

### What You CANNOT Do:
❌ Create applications manually (they only come from website)
❌ Delete applications (kept for records)
❌ Edit candidate information (submitted data is read-only)

## 🌐 The Careers Page Issue

### Current State:
- **Django Backend**: http://localhost:8001/ ✅ Running
- **Next.js Frontend**: http://localhost:3000/careers ❌ Not integrated yet

### Why You Can't Access the Careers Page:

The careers page is at **http://localhost:3000/careers** (Next.js), not localhost:8001.

**To see/test the careers page, you need to:**

1. Start the Next.js frontend server:
```powershell
cd F:\cfafs\frontend
npm run dev
```

2. Then visit: http://localhost:3000/careers

**OR** - For testing without Next.js, we can:
- Create a simple test page at localhost:8001/careers
- Use a tool like Postman to test the API directly
- Wait until we integrate with your Next.js frontend

## 🧪 Testing the System Without Next.js

### Option 1: Direct API Test (Using PowerShell)

**Get active jobs:**
```powershell
Invoke-WebRequest -Uri "http://localhost:8001/api/jobs/" -UseBasicParsing | Select-Object -ExpandProperty Content
```

**Submit a test application:**
```powershell
# Create a simple test file
"Test Resume Content" | Out-File -FilePath "test_resume.txt"

# Note: Full multipart form submission would need Postman or similar tool
```

### Option 2: Use the Admin to Create Test Data

1. Log into admin: http://localhost:8001/admin/
2. Click "Job Postings" → "Add Job Posting"
3. Create a test job with status "Active"
4. Save

**Now the job will appear in the API:**
http://localhost:8001/api/jobs/

## 📊 Current Status

| Component | Status | URL |
|-----------|--------|-----|
| Django Backend | ✅ Running | http://localhost:8001/ |
| Django Admin | ✅ Working | http://localhost:8001/admin/ |
| API Endpoints | ✅ Working | http://localhost:8001/api/jobs/ |
| Application Viewing | ✅ Available | Admin → Job Applications |
| Next.js Frontend | ⏳ Not started | http://localhost:3000/careers |

## 🔄 Complete Workflow

### Creating Jobs (Admin → Candidates)
1. **Admin creates job** at localhost:8001/admin
2. Set status to "Active"
3. **Job appears in API** at localhost:8001/api/jobs/
4. **Next.js fetches jobs** from API (when integrated)
5. **Candidates see jobs** at localhost:3000/careers (when integrated)

### Receiving Applications (Candidates → Admin)
1. **Candidate applies** via localhost:3000/careers (when integrated)
2. **Application submitted** to localhost:8001/api/applications/
3. **Django saves** to database
4. **Email sent** to HR (console during dev)
5. **Admin views application** at localhost:8001/admin

## 📝 Next Steps

To complete the system:

1. **Start Next.js frontend** (localhost:3000)
2. **Integrate careers page** to fetch from Django API
3. **Test application submission** from Next.js to Django
4. **Verify** applications appear in admin

**OR** 

For now, test using:
- Admin panel to manage jobs
- API directly to verify endpoints work
- Wait for Next.js integration

## ❓ Common Questions

**Q: Where do I see applications?**
A: Admin panel → Job Applications (after candidates submit via the website)

**Q: Why can't I add applications in admin?**
A: Applications only come from candidates via the public website. Admin is for viewing/managing only.

**Q: The careers page doesn't work at localhost:8001**
A: The public careers page will be at localhost:3000 (Next.js). Django (8001) is just the backend API.

**Q: How do I test without the Next.js frontend?**
A: Use API testing tools, or wait until we integrate with your Next.js frontend in the next step.

---

**Admin Panel Ready! ✅**

Log in to view applications: http://localhost:8001/admin/
(Applications will appear here once submitted via the website)
