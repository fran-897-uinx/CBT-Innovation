# Backend Documentation

Django-powered REST API for CBT-Innovation learning platform.

---

## Overview

The backend provides authentication, user management, payment processing, real-time messaging, video sessions, and content library for the TestprepAcademy platform.

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Django 6.0 | Web framework |
| Django REST Framework | API development |
| SQLite3 | Database (development) |
| JWT | Authentication |

---

## Project Structure

```
backend/django/
├── config/                  # Django project settings
│   ├── settings.py       # Main configuration
│   ├── urls.py         # URL routing
│   ├── wsgi.py        # WSGI entry point
│   └── asgi.py       # ASGI entry point
├── manage.py              # Django CLI
├── account/             # User authentication & profiles
├── Wallet/              # Earnings & payments
├── Chat/                # Real-time messaging
├── Groups/              # Study groups
├── Library/             # Learning materials
├── VideoSession/        # Video sessions
└── News/               # Platform news
```

---

## Prerequisites

- Python 3.10+
- pip or poetry

```bash
# Create virtual environment
python -m venv venv

# Activate
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate     # Windows

# Install dependencies
pip install django djangorestframework django-cors-headers
```

---

## Setup

### 1. Install Dependencies

```bash
cd backend/django
pip install -r requirements.txt
```

> Note: Create `requirements.txt` if it doesn't exist.

### 2. Run Migrations

```bash
python manage.py migrate
```

### 3. Create Superuser

```bash
python manage.py createsuperuser
```

### 4. Run Server

```bash
python manage.py runserver
```

The API will be available at `http://127.0.0.1:8000/`

---

## Django Apps

### account/

**Purpose**: User authentication and profiles.

**Models**:
- `SubscriptionPlan` - Free, Pro, Premium plans
- `User` - Extended AbstractUser with roles (Student, Tutor, Director)

**Fields**:
| Field | Type | Description |
|-------|------|-------------|
| role | CharField | student, tutor, or director |
| plan | ForeignKey | Subscription plan |

### Wallet/

**Purpose**: Tutor earnings and payment processing.

**Features**:
- Track tutor earnings
- Withdrawals
- Payment history

### Chat/

**Purpose**: Real-time messaging between users.

**Features**:
- Direct messages
- Message history

### Groups/

**Purpose**: Study groups and collaborations.

**Features**:
- Create groups
- Join/leave groups
- Group messaging

### Library/

**Purpose**: Learning materials and resources.

**Features**:
- Upload content
- Categorize materials
- Search functionality

### VideoSession/

**Purpose**: Video session management.

**Features**:
- Schedule sessions
- Session data

### News/

**Purpose**: Platform news and announcements.

---

## URL Patterns

| Endpoint | Description |
|----------|-------------|
| `/admin/` | Django admin panel |
| `/api/account/` | User endpoints |
| `/api/wallet/` | Payment endpoints |
| `/api/chat/` | Messaging endpoints |
| `/api/groups/` | Group endpoints |
| `/api/library/` | Content endpoints |
| `/api/videos/` | Video session endpoints |
| `/api/news/` | News endpoints |

---

## Configuration

### Database

Edit `config/settings.py`:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}
```

For PostgreSQL:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'cbtinnovation',
        'USER': 'youruser',
        'PASSWORD': 'yourpassword',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
```

### Environment Variables

Create `.env` in `backend/django/`:

```bash
SECRET_KEY=your-secret-key
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1
DATABASE_URL=postgres://user:password@localhost:5432/cbtinnovation
```

---

## API Development

### Creating New Endpoints

1. Create or update views in app `views.py`:

```python
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def my_endpoint(request):
    return Response({'message': 'Success'})
```

2. Add URL in app `urls.py`:

```python
from django.urls import path
from . import views

urlpatterns = [
    path('my-endpoint/', views.my_endpoint, name='my_endpoint'),
]
```

3. Include in `config/urls.py`:

```python
from django.urls import path, include

urlpatterns = [
    path('api/myapp/', include('myapp.urls')),
]
```

---

## Running Tests

```bash
python manage.py test
```

---

## Deployment

### Gunicorn

```bash
pip install gunicorn
gunicorn config.wsgi:application --bind 0.0.0.0:8000
```

### Docker

```dockerfile
FROM python:3.10-slim

WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .

RUN python manage.py migrate
RUN python collectstatic --noinput

EXPOSE 8000
CMD ["gunicorn", "config.wsgi:application", "--bind", ":8000"]
```

---

## Contributing

### Workflow

1. Create a branch for your feature
2. Make changes following Django best practices
3. Test locally
4. Submit a pull request

### Code Style

- Follow [Django coding style](https://docs.djangoproject.com/en/6.0/internals/contributing/writing-code/coding-style/)
- Use meaningful variable names
- Add docstrings to views and models
- Write tests for new features

### Commit Messages

```
type: description

-的具体 изменения
- Another change
```

Types: `feat`, `fix`, `docs`, `refactor`, `test`, `chore`

---

## Troubleshooting

### Migrations Not Applied

```bash
python manage.py makemigrations
python manage.py migrate
```

### Static Files Not Loading

```bash
python manage.py collectstatic
```

### 403 CSRF Error

Add `@csrf_exempt` to view or configure CSRF in settings.

---

## Resources

- [Django Documentation](https://docs.djangoproject.com/en/6.0/)
- [Django REST Framework](https://www.django-rest-framework.org/)
- [TestprepAcademy ERD](./ERD.svg)