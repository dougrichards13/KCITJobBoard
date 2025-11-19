# How to Access the CFA Careers Admin

## ✅ Correct URLs

### Admin Panel
```
http://localhost:8001/admin/
```
**Important:** Note the trailing slash `/` at the end!

### API Endpoints
```
http://localhost:8001/api/jobs/
http://localhost:8001/api/health/
http://localhost:8001/api/applications/
```

### Login Credentials
```
Username: admin
Password: admin123
```

## ❌ Common Mistakes

**Wrong:** `http://localhost:8001/admin**` ← Two asterisks
**Wrong:** `http://localhost:8001/admin` ← No trailing slash
**Right:** `http://localhost:8001/admin/` ← With trailing slash

## Quick Access

Just click or copy this URL:
**http://localhost:8001/admin/**

The server will automatically redirect you to the login page.

## What You'll See

1. **Login Page:** "CFA Careers Administration" 
2. **After Login:** Green header with CFA branding
3. **Dashboard:** Job Postings and Job Applications sections

## Server Status

✅ Server is running on port 8001
✅ Admin panel is accessible
✅ CFAFS branding applied
✅ All API endpoints working

## If You Get a 404 Error

Check that you're using:
- The correct port: `8001` (not 8000 or 3000)
- The trailing slash: `/admin/` (not `/admin`)
- The Django server is running (see console)

## Verify Server is Running

Open PowerShell and run:
```powershell
Invoke-WebRequest -Uri "http://localhost:8001/api/health/" -UseBasicParsing
```

Should return: `{"status":"healthy","service":"jobboard"}`

---

**Ready to use! Just access: http://localhost:8001/admin/**
