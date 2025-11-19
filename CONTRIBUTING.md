# Contributing to KCIT Job Board

Thank you for your interest in contributing to KCIT Job Board! We welcome contributions from developers, designers, technical writers, and users.

## 🌟 Ways to Contribute

### Code Contributions
- Fix bugs or implement new features
- Improve performance and optimize code
- Add tests to increase coverage
- Refactor code for better maintainability

### Documentation
- Improve installation and setup guides
- Write tutorials and how-tos
- Translate documentation to other languages
- Add code comments and docstrings

### Design
- Improve UI/UX of admin interface
- Design themes for the careers page
- Create icons and visual assets
- Conduct usability testing

### Community Support
- Answer questions in GitHub Discussions
- Help troubleshoot issues
- Share your use case and feedback
- Write blog posts or make videos about the project

## 🚀 Getting Started

### 1. Fork and Clone

```bash
# Fork the repository on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/KCITJobBoard.git
cd KCITJobBoard

# Add upstream remote
git remote add upstream https://github.com/dougrichards13/KCITJobBoard.git
```

### 2. Set Up Development Environment

```bash
# Backend (Django)
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
pip install -r requirements-dev.txt  # Development dependencies
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver 8001

# Frontend (React/Next.js) - in a new terminal
cd frontend
npm install
npm run dev
```

### 3. Create a Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

## 📝 Development Guidelines

### Code Style

**Python (Backend)**
- Follow [PEP 8](https://pep8.org/) style guide
- Use `black` for code formatting: `black .`
- Use `flake8` for linting: `flake8`
- Use `mypy` for type checking: `mypy .`
- Maximum line length: 100 characters
- Write docstrings for all functions and classes

**JavaScript/TypeScript (Frontend)**
- Follow [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- Use `prettier` for formatting: `npm run format`
- Use `eslint` for linting: `npm run lint`
- Use TypeScript for type safety
- Write JSDoc comments for complex functions

### Testing

All code contributions should include tests:

**Backend Tests**
```bash
# Run all tests
python manage.py test

# Run with coverage
coverage run --source='.' manage.py test
coverage report
```

**Frontend Tests**
```bash
# Run Jest tests
npm test

# Run with coverage
npm test -- --coverage
```

**Minimum Coverage Requirements**
- Backend: 70% coverage for new code
- Frontend: 60% coverage for new code

### Commit Messages

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add SSO support for Azure AD
fix: resolve resume upload issue on Windows
docs: update installation guide
style: format code with black
refactor: simplify authentication logic
test: add tests for job API endpoint
chore: update dependencies
```

### Pull Request Process

1. **Update Documentation**: Ensure README, ROADMAP, or docs are updated if needed
2. **Add Tests**: Include unit and integration tests for new features
3. **Run Linters**: Ensure code passes all linting checks
4. **Update CHANGELOG**: Add entry to `CHANGELOG.md` (if applicable)
5. **Describe Changes**: Write a clear PR description explaining:
   - What problem does this solve?
   - How does it solve it?
   - Any breaking changes?
   - Screenshots/GIFs for UI changes

### PR Review Process

- At least one maintainer must review and approve
- All CI checks must pass
- Discussions and requested changes must be addressed
- Once approved, a maintainer will merge your PR

## 🐛 Reporting Bugs

### Before Submitting

1. Check [existing issues](https://github.com/dougrichards13/KCITJobBoard/issues)
2. Try to reproduce on the latest version
3. Gather relevant information (OS, Python/Node version, logs)

### Bug Report Template

```markdown
**Describe the Bug**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. See error

**Expected Behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment:**
- OS: [e.g., Windows 11, macOS 14, Ubuntu 22.04]
- Python Version: [e.g., 3.10.5]
- Node Version: [e.g., 18.16.0]
- Browser: [e.g., Chrome 120, Firefox 121]

**Additional Context**
Any other relevant information.
```

## 💡 Feature Requests

We love hearing your ideas! Submit feature requests via [GitHub Discussions](https://github.com/dougrichards13/KCITJobBoard/discussions).

Include:
- **Use Case**: Describe the problem you're trying to solve
- **Proposed Solution**: How you envision the feature working
- **Alternatives**: Other approaches you considered
- **Priority**: How important is this for your use case?

## 🏗️ Architecture Overview

### Backend (Django)
```
backend/
├── config/          # Django settings
├── jobs/            # Main app
│   ├── models.py    # Job, Application, Department, InterviewNote
│   ├── views.py     # API endpoints
│   ├── serializers.py
│   ├── admin.py     # Admin interface customization
│   └── emails.py    # Email notifications
└── manage.py
```

### Frontend (Next.js)
```
frontend/
├── src/
│   ├── app/
│   │   └── careers/ # Public careers page
│   ├── components/  # Reusable React components
│   └── lib/         # Utilities and API clients
└── public/          # Static assets
```

## 🔒 Security

Found a security vulnerability? Please **do not** open a public issue. Instead, email security@kcitjobboard.com (or create a private security advisory on GitHub).

## 📜 Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inclusive experience for everyone. We expect:

- **Respect**: Treat all community members with respect
- **Constructive Feedback**: Focus on improvement, not criticism
- **Collaboration**: Work together towards common goals
- **Inclusivity**: Welcome people of all backgrounds and experience levels

### Unacceptable Behavior

- Harassment, discrimination, or offensive comments
- Trolling or insulting/derogatory comments
- Personal or political attacks
- Publishing others' private information
- Unwelcome sexual attention or advances

### Enforcement

Violations may result in temporary or permanent ban from the project. Report issues to conduct@kcitjobboard.com.

## 🎓 Learning Resources

New to contributing to open source? Check out:
- [First Contributions](https://github.com/firstcontributions/first-contributions)
- [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)
- [Django Documentation](https://docs.djangoproject.com/)
- [React Documentation](https://react.dev/)
- [Next.js Documentation](https://nextjs.org/docs)

## 🙏 Recognition

Contributors are recognized in:
- `CONTRIBUTORS.md` file
- Project README
- Release notes for significant contributions

## 📞 Questions?

- **GitHub Discussions**: For general questions and discussions
- **Discord**: [Join our community](https://discord.gg/kcitjobboard) (coming soon)
- **Email**: contribute@kcitjobboard.com

---

Thank you for making KCIT Job Board better! 🎉
