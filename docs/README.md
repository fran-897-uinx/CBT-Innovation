# Project Refactor Documentation

This document outlines the restructuring of the CBT-Innovation project for improved clarity and onboarding.

---

## Overview

The project has been reorganized from a flat, confusing structure into a clean, modular architecture with clear separation between frontend and backend components.

---

## Previous Structure

```
CBT-Innovation/
├── bac-innovation/      # Django backend (unclear naming)
├── cbt-innovation/     # React frontend (same as project name)
└── README.md
```

### Issues

1. **Naming confusion**: `bac-innovation` and `cbt-innovation` unclear to new collaborators
2. **No dedicated docs folder**: ERD diagrams buried in backend
3. **Unclear tech stack**: No indication of multiple backends
4. **No placeholder for new features**: Live streaming had no location

---

## Current Structure

```
CBT-Innovation/
├── backend/
│   ├── django/              # Django backend (Python)
│   │   ├── account/        # User authentication & profiles
│   │   ├── Wallet/        # Earnings & payments
│   │   ├── Chat/          # Real-time messaging
│   │   ├── Groups/        # Study groups
│   │   ├── Library/       # Learning materials
│   │   ├── VideoSession/  # Video sessions
│   │   ├── News/         # News & updates
│   │   ├── config/       # Django project settings
│   │   ├── manage.py    # Django CLI
│   │   └── ERD.svg      # Database diagram
│   │
│   └── live-streaming/    # NestJS backend (placeholder)
│
├── frontend/               # React frontend (Vite)
│   ├── public/            # Static assets & config
│   ├── src/
│   │   ├── App.jsx       # Main app router
│   │   ├── LandPage/     # Public landing page
│   │   ├── Private/      # Authenticated pages
│   │   └── theme/       # Light/Dark theming
│   └── package.json
│
├── docs/                  # Documentation (NEW)
├── README.md              # Project overview
└── LICENSE
```

---

## Tech Stack

| Component | Technology | Purpose |
|-----------|------------|---------|
| Frontend | React + Vite | User interface |
| Backend (Primary) | Django (Python) | API, Auth, Database |
| Backend (Live Streaming) | NestJS (Node.js) | Real-time video |

---

## Backend Apps

### Django Apps (`backend/django/`)

| App | Description |
|-----|-------------|
| `account/` | User registration, login, profiles, roles |
| `Wallet/` | Tutor earnings, payments, withdrawals |
| `Chat/` | Real-time messaging between users |
| `Groups/` | Study groups and collaborations |
| `Library/` | Learning materials and resources |
| `VideoSession/` | Video session management |
| `News/` | Platform news and announcements |

### NestJS Backend (`backend/live-streaming/`)

**Status**: Empty placeholder for future implementation.

**Planned use**: Real-time live streaming for video sessions.

---

## Frontend Structure (`frontend/src/`)

```
src/
├── App.jsx              # Main router
├── App.css              # Global styles
├── main.jsx            # Entry point
├── LandPage/           # Public landing page
│   ├── Hero/
│   ├── Features/
│   ├── Pricing/
│   ├── Testimonials/
│   └── Footer/
├── Private/            # Authenticated routes
│   ├── components/     # Shared components
│   ├── pages/         # Page components
│   │   ├── Dashboard.jsx
│   │   ├── ProfilePage.jsx
│   │   ├── Chatting/
│   │   ���── group/
│   │   └── videosession/
│   └── Settings/       # User settings
└── theme/             # Theme provider
```

---

## Running the Project

### Frontend

```bash
cd frontend
pnpm install
pnpm dev
```

### Django Backend

```bash
cd backend/django
python manage.py migrate
python manage.py runserver
```

---

## Key Files

| File | Description |
|------|-------------|
| `frontend/package.json` | Frontend dependencies |
| `frontend/vite.config.js` | Vite configuration |
| `backend/django/manage.py` | Django CLI |
| `backend/django/backend/settings.py` | Django settings |
| `frontend/public/config/api.json` | External API config |

---

## Future Considerations

1. **NestJS Implementation**: Build live streaming backend in `backend/live-streaming/`
2. **Database migrations**: Run `python manage.py migrate` in `backend/django/`
3. **API Integration**: Connect frontend to Django backend endpoints
4. **Authentication**: Integrate with Django auth system

---

## Questions?

For questions about the project structure or codebase, refer to:
- Main `README.md` for project overview
- Django `backend/django/backend/settings.py` for configuration
- Frontend `frontend/src/App.jsx` for routing