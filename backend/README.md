# Backend Documentation

REST API backend for CBT-Innovation learning platform.

---

## Overview

The backend provides authentication, user management, payment processing, real-time messaging, video sessions, and content library. It consists of two server implementations:

1. **Django** - Primary API server
2. **NestJS** - Live streaming server (placeholder)

---

## Architecture

```
backend/
├── django/              # Django API (Python)
│   ├── config/        # Django settings
│   ├── account/      # User auth & profiles
│   ├── Wallet/      # Earnings & payments
│   ├── Chat/        # Messaging
│   ├── Groups/      # Study groups
│   ├── Library/     # Learning materials
│   ├── VideoSession/# Video sessions
│   └── News/        # Platform news
│
└── live-streaming/     # NestJS server (Node.js)
    └── (placeholder for live streaming)
```

---

## Tech Stack

| Server | Technology | Purpose |
|--------|-----------|---------|
| Django API | Python 3.10+ | Main REST API |
| NestJS | Node.js | Live streaming |

---

## Prerequisites

### Python (Django)

```bash
# Python 3.10+
python --version
```

### Node.js (NestJS)

```bash
# Node.js 18+
node --version
npm --version
```

---

## Setup

### Django Backend

```bash
cd backend/django

# Create virtual environment
python -m venv venv
source venv/bin/activate  # Linux/Mac
# venv\Scripts\activate  # Windows

# Install dependencies
pip install django djangorestframework django-cors-headers

# Run migrations
python manage.py migrate

# Start server
python manage.py runserver
```

API available at `http://127.0.0.1:8000/`

### NestJS Live Streaming

```bash
cd backend/live-streaming

# Initialize NestJS project
npm i -g @nestjs/cli
nest new .

# Start server
npm run start:dev
```

Server available at `http://127.0.0.1:3000/`

---

## Django Apps

| App | Purpose |
|-----|---------|
| `account/` | Authentication, profiles, roles |
| `Wallet/` | Earnings, payments, withdrawals |
| `Chat/` | Real-time messaging |
| `Groups/` | Study groups |
| `Library/` | Learning materials |
| `VideoSession/` | Video sessions |
| `News/` | Platform news |

---

## API Endpoints

| Path | Description |
|------|-------------|
| `/admin/` | Django admin |
| `/api/account/` | User management |
| `/api/wallet/` | Payments |
| `/api/chat/` | Messaging |
| `/api/groups/` | Groups |
| `/api/library/` | Content |
| `/api/videos/` | Sessions |
| `/api/news/` | News |

---

## Configuration

### Database

Edit `backend/django/config/settings.py`:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'cbtinnovation',
        'USER': 'youruser',
        'PASSWORD': 'yourpassword',
    }
}
```

### Environment Variables

Create `.env` in `backend/django/`:

```bash
SECRET_KEY=your-secret-key
DEBUG=True
ALLOWED_HOSTS=localhost
DATABASE_URL=postgres://user:pass@localhost:5432/dbname
```

---

## Deployment

### Django (Gunicorn)

```bash
pip install gunicorn
gunicorn config.wsgi:application --bind 0.0.0.0:8000
```

### NestJS (PM2)

```bash
npm install -g pm2
pm2 start src/main.ts --name live-streaming
```

### Docker

```dockerfile
# Dockerfile for Django
FROM python:3.10-slim

WORKDIR /app
COPY backend/django/requirements.txt .
RUN pip install -r requirements.txt
COPY backend/django/ .

EXPOSE 8000
CMD ["gunicorn", "config.wsgi:application", "--bind", ":8000"]
```

---

## Contributing

### Branches

- `main` - Production code
- `refactor/*` - Refactoring branches
- `feature/*` - New features

### Workflow

1. Create branch from main
2. Make changes
3. Test locally
4. Submit pull request

### Code Style

- Follow PEP 8 (Python)
- Follow NestJS style guide
- Add docstrings and comments
- Write tests for new features

### Commit Messages

```
type: description

- Change 1
- Change 2
```

Types: `feat`, `fix`, `docs`, `refactor`, `test`, `chore`

---

## Troubleshooting

### Django

**Migrations not applied:**
```bash
python manage.py makemigrations
python manage.py migrate
```

**Static files not loading:**
```bash
python manage.py collectstatic
```

### NestJS

**Module not found:**
```bash
npm install
```

**Port already in use:**
```bash
# Kill process on port
lsof -ti:3000 | xargs kill -9
```

---

## Resources

- [Django Docs](https://docs.djangoproject.com/en/6.0/)
- [Django REST Framework](https://www.django-rest-framework.org/)
- [NestJS Docs](https://docs.nestjs.com/)
- [Database ERD](../docs/ERD.svg)