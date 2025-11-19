# CFAFS Job Board - Start Script
# Run this script to start the Django development server

Write-Host "Starting CFAFS Job Board..." -ForegroundColor Green
Write-Host ""

# Activate virtual environment and start server
& "F:\cfafs\jobboard\venv\Scripts\python.exe" "F:\cfafs\jobboard\manage.py" runserver 8001

Write-Host ""
Write-Host "Server stopped." -ForegroundColor Yellow
