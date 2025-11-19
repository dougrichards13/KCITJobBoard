# Quick Start Guide

Get KCIT Job Board running locally in under 10 minutes!

## Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop) (recommended)
- OR Python 3.10+ and Node.js 18+ (manual installation)

## Option 1: Docker (Recommended)

**One command to rule them all:**

```bash
git clone https://github.com/dougrichards13/KCITJobBoard.git
cd KCITJobBoard
docker-compose up -d
```

Wait for containers to start, then:

1. **Access the careers page**: http://localhost:3000/careers
2. **Access the admin**: http://localhost:8001/admin
   - Username: `admin`
   - Password: `admin123`

⚠️ **Important**: Change the admin password immediately!

```bash
docker exec -it kcit-backend python manage.py changepassword admin
```

## Option 2: Manual Installation

### Backend Setup (Django)

```bash
# Clone and navigate
git clone https://github.com/dougrichards13/KCITJobBoard.git
cd KCITJobBoard/backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Create superuser
python manage.py createsuperuser

# Start server
python manage.py runserver 8001
```

### Frontend Setup (Next.js)

**In a new terminal:**

```bash
cd KCITJobBoard/frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

Your job board is now running:
- **Careers Page**: http://localhost:3000/careers
- **Admin Portal**: http://localhost:8001/admin

## First Steps

### 1. Log into Admin
Visit http://localhost:8001/admin and log in.

### 2. Create a Department
Navigate to **Departments** → **Add Department**
- Name: "Engineering" (or your department name)
- Save

### 3. Post Your First Job
Navigate to **Job Postings** → **Add Job Posting**
- Fill in job details
- Set Department to the one you just created
- Set Status to "Active"
- Save

### 4. View on Careers Page
Visit http://localhost:3000/careers to see your job listing!

### 5. Test Application Submission
- Click "Apply Now" on a job
- Fill out the application form
- Upload a resume
- Submit

### 6. Review Application
Back in admin, go to **Job Applications** to see the submission!

## Next Steps

- [ ] Read the [Configuration Guide](docs/CONFIG.md) (coming soon)
- [ ] Customize your branding
- [ ] Set up email notifications
- [ ] Add more departments and team members
- [ ] Explore the [REST API](docs/API.md) (coming soon)

## Troubleshooting

### Port Already in Use
If ports 3000 or 8001 are in use:

**Docker:**
Edit `docker-compose.yml` and change port mappings:
```yaml
ports:
  - "3001:3000"  # Change left number
  - "8002:8001"  # Change left number
```

**Manual:**
Run servers on different ports:
```bash
python manage.py runserver 8002
npm run dev -- -p 3001
```

### Database Issues
Reset the database:

**Docker:**
```bash
docker-compose down -v
docker-compose up -d
docker exec -it kcit-backend python manage.py migrate
docker exec -it kcit-backend python manage.py createsuperuser
```

**Manual:**
```bash
rm backend/db.sqlite3
python manage.py migrate
python manage.py createsuperuser
```

### Can't Access Careers Page
Make sure both backend (8001) and frontend (3000) are running.

Check frontend logs for API connection errors:
```bash
# Docker
docker logs kcit-frontend

# Manual
# Check terminal where you ran `npm run dev`
```

## Getting Help

- **Issues**: [GitHub Issues](https://github.com/dougrichards13/KCITJobBoard/issues)
- **Discussions**: [GitHub Discussions](https://github.com/dougrichards13/KCITJobBoard/discussions)
- **Documentation**: [Full Docs](README.md)

## What's Next?

Check out the [ROADMAP](ROADMAP.md) to see upcoming features like:
- Setup Wizard for easy configuration
- SSO integration (Azure AD, Google, Okta)
- Compliance frameworks (SOC 2, GDPR, EEOC)
- Package installer for non-technical users

Want to contribute? See [CONTRIBUTING](CONTRIBUTING.md)!
