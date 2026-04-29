# Frontend Documentation

React-based frontend for CBT-Innovation (TestprepAcademy) learning platform.

---

## Overview

TestprepAcademy is a digital learning platform connecting students, tutors, and directors. The frontend provides a modern, responsive user interface with:

- Public landing page with features, pricing, testimonials
- User authentication (login/register)
- Dashboard with courses, exams, groups
- Real-time chat and messaging
- Video session management
- User settings and profile management

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React 19 | UI framework |
| Vite 7 | Build tool |
| React Router DOM 7 | Routing |
| Tailwind CSS 4 | Styling |
| Lucide React | Icons |
| React Helmet Async | SEO |

---

## Project Structure

```
frontend/
├── public/                # Static assets
│   ├── config/         # API configuration
│   └── *.mp4, *.svg   # Media files
├── src/
│   ├── App.jsx        # Main app router
│   ├── main.jsx       # Entry point
│   ├── App.css        # Global styles
│   ├── index.css      # Tailwind imports
│   ├── LandPage/     # Public landing page
│   │   ├── Hero/
│   │   ├── Features/
│   │   ├── Pricing/
│   │   ├── Testimonials/
│   │   ├── CTA/
│   │   ├── Footer/
│   │   └── Navigation/
│   ├── Private/      # Authenticated pages
│   │   ├── components/   # Shared components
│   │   ├── pages/       # Page views
│   │   │   ├── Dashboard.jsx
│   │   │   ├── ProfilePage.jsx
│   │   │   ├── CoursesPage.jsx
│   │   │   ├── Chatting/
│   │   │   ├── group/
│   │   │   ├── videosession/
│   │   │   └── Practice/
│   │   ├── Settings/     # User settings
│   │   └── Blog/
│   ├── App/           # Auth pages
│   └── theme/         # Theme provider
├── package.json
├── vite.config.js
└── tailwind.config.js
```

---

## Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

```bash
# Install pnpm
npm install -g pnpm
```

---

## Setup

### 1. Install Dependencies

```bash
cd frontend
pnpm install
```

### 2. Configure API

Edit `frontend/public/config/api.json`:

```json
{
  "courses": [
    {
      "name": "YourAPI",
      "baseUrl": "https://api.example.com",
      "authRequired": true
    }
  ],
  "books": []
}
```

### 3. Start Development Server

```bash
pnpm dev
```

Frontend available at `http://localhost:5173/`

### 4. Build for Production

```bash
pnpm build
```

Output in `frontend/dist/`

---

## Pages

### Public Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Landing | Public landing page |
| `/login` | Auth | Login/Register |

### Private Pages (Authenticated)

| Route | Page | Description |
|-------|------|-------------|
| `/dashboard` | Dashboard | User home |
| `/profile` | Profile | User profile |
| `/courses` | Courses | Course catalog |
| `/exams` | Exams | Practice exams |
| `/messages` | Messages | Chat |
| `/groups` | Groups | Study groups |
| `/video` | Video | Video sessions |
| `/settings` | Settings | User settings |

---

## Components

### Shared Components

| Component | Description |
|-----------|-------------|
| `Navigation.jsx` | Top navigation bar |
| `Bottomnav.jsx` | Mobile bottom nav |
| `Private.jsx` | Auth guard |
| `Inner.jsx` | Page wrapper |
| `Search.jsx` | Search input |
| `Progressbar.jsx` | Progress indicator |
| `Toggle.jsx` | On/Off toggle |

### Landing Page Components

- `Hero.jsx` - Hero section with CTA
- `Features.jsx` - Platform features
- `Pricing.jsx` - Subscription plans
- `Testimonials.jsx` - User testimonials
- `Footer.jsx` - Footer links

---

## State Management

### Theme

Light/Dark mode in `src/theme/`:

```jsx
import { useTheme } from './theme/ThemeProvider';

function MyComponent() {
  const { theme, setTheme } = useTheme();
  
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Toggle Theme
    </button>
  );
}
```

### API Service

Marketplace service aggregates from external APIs in `src/Private/service/marketplace.js`:

```javascript
import { loadMarketplace } from './service/marketplace';

const { courses, books } = await loadMarketplace();
```

---

## Styling

### Tailwind CSS

Classes are applied directly in JSX:

```jsx
<div className="container mx-auto px-4 py-8">
  <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
    Hello
  </h1>
</div>
```

### Dark Mode

Add `dark:` prefix for dark theme:

```jsx
<div className="bg-white dark:bg-gray-900">
  <p className="text-gray-600 dark:text-gray-300">Text</p>
</div>
```

---

## Routing

### Adding Routes

Edit `src/App.jsx`:

```jsx
import { Routes, Route } from 'react-router-dom';
import MyPage from './MyPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/my-page" element={<MyPage />} />
    </Routes>
  );
}
```

### Route Protection

Wrap protected routes with `Private.jsx`:

```jsx
<Route 
  path="/dashboard" 
  element={
    <Private>
      <Dashboard />
    </Private>
  } 
/>
```

---

## API Integration

### External APIs (Marketplace)

The frontend aggregates courses and books from external APIs:

- **Courses**: Udemy, Coursera, edX, OpenLearning
- **Books**: Google Books, Open Library, Gutendex, NYT

Configuration in `public/config/api.json`.

### Connecting to Django Backend

Update components to fetch from Django:

```jsx
useEffect(() => {
  fetch('http://localhost:8000/api/account/')
    .then(res => res.json())
    .then(data => setData(data));
}, []);
```

---

## Environment Variables

Create `.env` in `frontend/`:

```bash
VITE_API_URL=http://localhost:8000
VITE_WS_URL=ws://localhost:8000
```

---

## Deployment

### Vercel

Deploys automatically on push to `main` branch.

Manual deploy:

```bash
pnpm build
vercel deploy --prod
```

### Build Output

```bash
pnpm build
```

Output in `dist/` - ready to deploy to any static host.

---

## NPM Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start dev server |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview build |
| `pnpm lint` | Run ESLint |
| `pnpm sitemap` | Generate sitemap |

---

## Contributing

### Workflow

1. Create branch from main
2. Make changes
3. Test locally
4. Submit pull request

### Code Style

- Use functional components
- Follow React hooks rules
- Add meaningful names
- Use Tailwind classes

### Commit Messages

```
type: description

- Change 1
- Change 2
```

Types: `feat`, `fix`, `docs`, `refactor`, `test`, `chore`

---

## Troubleshooting

### Port Already in Use

```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9
```

### Build Errors

Clear cache and reinstall:

```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### ESLint Errors

```bash
pnpm lint --fix
```

---

## Resources

- [React Docs](https://react.dev/)
- [Vite Docs](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [TestprepAcademy Backend](../backend/README.md)