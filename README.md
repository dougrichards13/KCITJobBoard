# KCIT Job Board

**A modern, collaborative hiring platform for organizations of all sizes**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Powered by KCIT Consulting](https://img.shields.io/badge/Powered%20by-KCIT%20Consulting-blue)](https://kcitconsulting.com)
[![Python 3.10+](https://img.shields.io/badge/python-3.10+-blue.svg)](https://www.python.org/downloads/)
[![Django 5.0](https://img.shields.io/badge/django-5.0-green.svg)](https://www.djangoproject.com/)
[![React 18](https://img.shields.io/badge/react-18-blue.svg)](https://reactjs.org/)

> **Status**: Pre-Beta - Active Development

## Overview

KCIT Job Board is an open-source, self-hosted job board and applicant tracking system designed for organizations that need a professional hiring platform integrated directly into their website. Built with Django REST Framework and React, it offers enterprise-grade features with the flexibility of open source.

### Key Features

✅ **Public Careers Page** - Beautiful, responsive job listings that integrate seamlessly with your website  
✅ **Collaborative Hiring** - Team-based interview feedback with visibility controls  
✅ **Department Management** - Organize positions by department with role-based access  
✅ **Application Tracking** - Complete applicant lifecycle management from submission to hire  
✅ **Interview Notes** - Secure feedback system with private, team, and all-reviewer visibility options  
✅ **Resume Management** - Secure file uploads with validation and organization  
✅ **Email Notifications** - Automated alerts for new applications  
✅ **Mobile Responsive** - Works perfectly on all devices  

## Quick Start

**Get up and running in 5 minutes!**

With Docker:
```bash
git clone https://github.com/dougrichards13/KCITJobBoard.git
cd KCITJobBoard
docker-compose up -d
```

Your job board will be available at:
- **Careers Page**: http://localhost:3000/careers
- **Admin Portal**: http://localhost:8001/admin (admin / admin123)

📚 **See [QUICKSTART.md](QUICKSTART.md) for detailed installation options, first steps, and troubleshooting.**

## Documentation

- **[Quick Start Guide](QUICKSTART.md)** ⚡ - Get running in 5 minutes
- [Configuration Guide](docs/CONFIG.md) - Customize branding, emails, and settings (coming soon)
- [Deployment Guide](docs/DEPLOY.md) - Production deployment strategies (coming soon)
- [HR User Guide](docs/HR_GUIDE.md) - Non-technical guide for HR teams (coming soon)
- [API Documentation](docs/API.md) - REST API reference (coming soon)

## Customization

KCIT Job Board is designed to match your organization's branding:

- **Colors & Fonts** - Easily customize via configuration file
- **Logo Integration** - Add your company logo to the careers page and admin
- **Email Templates** - Personalize all email communications
- **Form Fields** - Add custom application fields
- **Compliance Text** - Configure EEO and privacy statements

See [Configuration Guide](docs/CONFIG.md) for details.

## Use Cases

### For HR Teams
- Post job openings without technical assistance
- Review applications in a clean, organized interface
- Collaborate with hiring managers on candidate feedback
- Track candidates through the interview pipeline

### For Hiring Managers
- Review applications assigned to your department
- Add interview feedback with controlled visibility
- Coordinate with team members on hiring decisions
- Track hiring pipeline metrics

### For Organizations
- Self-hosted solution - your data stays on your infrastructure
- Open source - no vendor lock-in
- Customizable - adapt to your specific hiring workflow
- Cost-effective - no per-user or per-job fees

## Roadmap

See [ROADMAP.md](ROADMAP.md) for our development plans, including:

- **Setup Wizard** - HR-friendly guided configuration
- **SSO Integration** - SAML, OAuth, Azure AD, Okta support
- **Compliance Frameworks** - SOC 2, GDPR, EEOC tracking
- **Custom Branding UI** - Web-based branding customization
- **Advanced Permissions** - Granular role-based access control
- **Analytics Dashboard** - Hiring metrics and insights
- **Package Installer** - One-click deployment for non-technical users

## Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

This project is licensed under the MIT License - see [LICENSE](LICENSE) file for details.

## 🏢 Professional Services

Need help implementing KCIT Job Board for your organization?

**KCIT Consulting** provides:
- Custom implementation and integration
- Compliance configuration (SOC 2, GDPR, EEOC)
- SSO setup and testing (Azure AD, Google, Okta)
- Custom feature development
- Training and support

📧 Contact: consulting@kcitconsulting.com  
🌐 Website: https://kcitconsulting.com

---

### ✨ Smart Factory Forms™

**Coming Soon**: Advanced conversational setup wizard

Imagine setting up your job board through a simple conversation:
- 10-minute guided setup (vs. 4 hours manual)
- SSO configuration wizards for major providers
- Automated compliance framework setup
- Generates production-ready deployment package
- Available as premium add-on

🚀 Early access: https://smartfactoryforms.com  
📦 Enterprise licensing available

---

## Acknowledgments

Built for organizations that value:
- Ownership of their data
- Flexibility in their tools
- Transparency in their hiring process
- Community-driven development

## 📧 Support

- **Issues**: [GitHub Issues](https://github.com/dougrichards13/KCITJobBoard/issues)
- **Discussions**: [GitHub Discussions](https://github.com/dougrichards13/KCITJobBoard/discussions)
- **Documentation**: [Wiki](https://github.com/dougrichards13/KCITJobBoard/wiki)

---

**Developed by KCIT Consulting** | **Smart Factory Forms™ technology by Smart Factory**  
*Made with ❤️ for better hiring experiences*
