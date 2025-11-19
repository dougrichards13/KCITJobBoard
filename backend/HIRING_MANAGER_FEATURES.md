# Hiring Manager Collaboration Features

## ✅ New Features Added

### 1. Hiring Team Assignment (Job Level)
When creating/editing a job posting:
- **Hiring Manager**: Assign the primary hiring manager for the position
- **Hiring Team**: Select multiple team members who can review applications
- Easy-to-use interface with searchable user selection

### 2. Interview Approval & Coordination (Application Level)
For each application, you can now:
- ✅ **Approve for Interview**: Quick checkbox to mark candidates ready for interviews
- 📧 **Assign Next Interviewer**: Enter email of next person to interview (text field for now, will integrate with Entra ID later)
- 📊 **Filter by Approved**: Quickly see all interview-ready candidates

### 3. Interview Notes & Feedback
Collaborative interview feedback system:

**For Each Interview:**
- **Interview Date**: When the interview took place
- **Interview Type**: e.g., "Phone Screen", "Technical Interview", "Final Round"
- **Recommendation**: 
  - Strong Yes - Hire
  - Yes - Move Forward
  - Maybe - Needs Discussion
  - No - Do Not Advance
  - Strong No - Reject
- **Notes**: Detailed feedback from the interview

**Visibility Controls:**
- **Private (Only Me)**: Only you can see this feedback
- **Team (Hiring Team)**: Visible to hiring manager and team members
- **All Reviewers**: Visible to everyone who can access applications
- **Share with Specific People**: Add comma-separated emails to share with

### 4. Inline Interview Notes
Add interview feedback directly while viewing an application:
- No need to navigate away
- Add multiple interview notes for different rounds
- See all feedback in one place
- Color-coded recommendations (green = positive, red = negative)

## 🎯 User Stories Implemented

### As a Hiring Manager:
✅ I can assign myself and my team to a job posting
✅ I can view all applications for positions I manage
✅ I can approve candidates for interviews
✅ I can assign the next interviewer
✅ I can add interview feedback after conducting interviews
✅ I can control who sees my interview notes
✅ I can see all team feedback on a candidate in one place
✅ I can move candidates through the hiring pipeline

### As a Team Member:
✅ I can see applications for jobs I'm assigned to
✅ I can add my interview feedback
✅ I can see feedback from other team members (if shared)
✅ I can make recommendations for hiring decisions

## 📋 How to Use

### Setting Up a Job with Hiring Team

1. **Create/Edit Job Posting**
   - Navigate to: Admin → Job Postings → Add/Edit
   - Scroll to "Hiring Team" section
   - Select **Hiring Manager** (primary decision maker)
   - Select **Hiring Team** members (can select multiple)
   - Save

### Reviewing Applications as a Hiring Manager

1. **View Applications**
   - Navigate to: Admin → Job Applications
   - See all applications (filtered by your jobs if needed)
   - List shows: Name, Job, Status, **Approved for Interview**

2. **Review a Candidate**
   - Click on candidate name
   - See all submitted information
   - Scroll to "Interview Coordination" section
   - Check **Approved for Interview** if ready
   - Enter **Next Interviewer Email** (e.g., colleague@cfafs.com)
   - Add any general **Notes** (visible to hiring team)

### Adding Interview Feedback

1. **Open Application**
   - Click on candidate name
   - Scroll to bottom of page
   - See "Interview Notes" section

2. **Add Your Feedback**
   - Click "Add another Interview note"
   - Fill in:
     - **Interview Date**: When you interviewed them
     - **Interview Type**: e.g., "Technical Interview"
     - **Recommendation**: Select your recommendation
     - **Notes**: Detailed feedback
     - **Visibility**: Who can see this
     - **Shared with emails**: Additional people to share with (comma-separated)
   - Save

3. **View Team Feedback**
   - In "Interview Feedback" section (read-only display)
   - See all interview notes with:
     - Interviewer name
     - Date and type
     - Recommendation (color-coded)
     - Detailed notes
     - Visibility level

### Moving Candidates Forward

1. **Update Status**
   - From list view: Change status dropdown directly
   - From detail view: Update status field
   - Options: New → Under Review → Interview Scheduled → Accepted/Rejected

2. **Approve for Next Round**
   - Check "Approved for Interview"
   - Assign next interviewer email
   - They'll receive notification (when email is configured)

3. **Make Final Decision**
   - Review all interview feedback
   - Consider team recommendations
   - Update status to "Accepted" or "Rejected"
   - Add final notes if needed

## 🔐 Permissions & Visibility

### Hiring Manager
- Can see all applications for their jobs
- Can see all interview notes for their jobs (unless marked "Private")
- Can assign team members
- Can approve for interviews

### Hiring Team Member
- Can see applications for jobs they're assigned to
- Can add interview feedback
- Can see team feedback (unless marked "Private")
- Cannot delete applications

### Private Notes
- Marked "Private (Only Me)"
- Only visible to the person who wrote them
- Useful for personal observations before sharing with team

### Team Notes (Default)
- Marked "Team (Hiring Team)"
- Visible to hiring manager and team members
- Best for collaborative decision-making

## 📊 Workflow Example

1. **HR posts job**
   - Assigns hiring manager: John (Engineering Lead)
   - Assigns team: Jane (Sr Engineer), Mike (Tech Lead)

2. **Candidate applies**
   - Application appears in system
   - Status: "New"

3. **John reviews application**
   - Changes status to "Under Review"
   - Approves for interview
   - Assigns next interviewer: jane@cfafs.com

4. **Jane conducts phone screen**
   - Adds interview note:
     - Type: "Phone Screen"
     - Recommendation: "Yes - Move Forward"
     - Notes: "Strong communication skills, good technical background"
     - Visibility: "Team"

5. **Mike conducts technical interview**
   - Adds interview note:
     - Type: "Technical Interview"
     - Recommendation: "Strong Yes - Hire"
     - Notes: "Excellent problem-solving, great culture fit"
     - Visibility: "Team"

6. **John reviews feedback**
   - Sees both Jane's and Mike's positive recommendations
   - Schedules final interview with himself
   - Adds own feedback
   - Updates status to "Accepted"

## 🚀 Next Steps for Complete System

1. **✅ Backend Ready**: Hiring manager features implemented
2. **⏳ Next.js Integration**: Connect careers page to Django API (next phase)
3. **🔮 Future**: Entra ID integration for email lookup

## 🌐 URLs

- **Django Admin**: http://localhost:8001/admin/
- **Root URL**: http://localhost:8001/ → Redirects to admin
- **Job Postings**: Admin → Job Postings
- **Applications**: Admin → Job Applications
- **API (for Next.js)**: http://localhost:8001/api/jobs/

---

**Full hiring manager collaboration features are now live! 🎉**

The admin panel now supports:
- Team assignment
- Interview coordination
- Collaborative feedback
- Secure visibility controls
- Complete hiring pipeline management
