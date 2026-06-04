# Allied Axis — AI-Powered Digital Growth Agency

Full-stack MERN application for Allied Axis, an AI-powered digital growth firm operating across UAE, UK, and Pakistan.

## Tech Stack

**Frontend:** React 18, React Router 6, React Helmet (SEO), Framer Motion, Axios
**Backend:** Node.js, Express 4, MongoDB/Mongoose
**Security:** Helmet, CORS, Rate Limiting, JWT Auth, Bcrypt, Mongo Sanitize, HPP
**Logging:** Winston + Morgan
**Validation:** Joi

## Project Structure

```
allied-axis/
├── client/                 # React frontend
│   ├── public/            # Static assets, images
│   └── src/
│       ├── components/    # Reusable components
│       │   ├── common/    # SEO, buttons, utilities
│       │   └── layout/    # Navbar, Footer, WhatsApp
│       ├── data/          # Static data (blogs, services, etc.)
│       ├── hooks/         # Custom hooks (useInView)
│       ├── pages/         # Route pages
│       ├── services/      # API layer
│       └── utils/         # Helper functions
├── server/                # Express backend
│   ├── config/           # Database config
│   ├── controllers/      # Route handlers
│   ├── middleware/        # Auth, validation, error handling
│   ├── models/           # Mongoose schemas
│   ├── routes/           # API routes
│   ├── seeds/            # Database seeding
│   └── utils/            # Logger, error classes, helpers
└── logs/                 # Application logs
```

## Getting Started

### Prerequisites
- Node.js >= 18
- MongoDB (local or Atlas)

### Installation

```bash
# Clone and install
git clone <repo-url>
cd allied-axis

# Install root dependencies
npm install

# Install server dependencies
cd server && npm install

# Install client dependencies
cd ../client && npm install
```

### Environment Variables

Create `server/.env`:

```env
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb://localhost:27017/allied-axis
JWT_SECRET=your-secret-key
JWT_EXPIRE=7d
JWT_REFRESH_SECRET=your-refresh-secret
JWT_REFRESH_EXPIRE=30d
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-gmail@gmail.com
SMTP_PASS=your-gmail-app-password
FROM_EMAIL=info@alliedaxis.digital
FROM_NAME=Allied Axis
CONTACT_NOTIFY_EMAIL=info@alliedaxis.digital
CLIENT_URL=http://localhost:3000
```

**Contact form flow:** Website form → `POST /api/v1/contact` → MongoDB (`contacts`) → email to `CONTACT_NOTIFY_EMAIL` via Nodemailer. If SMTP is not configured, the lead is still saved.

**Gmail SMTP:** Use a [Google App Password](https://myaccount.google.com/apppasswords) (2FA required). Set `SMTP_USER` to your Gmail address and `SMTP_PASS` to the app password. `CONTACT_NOTIFY_EMAIL` is where new leads are delivered (can be the same as `FROM_EMAIL`).

Create `client/.env`:

```env
REACT_APP_API_URL=http://localhost:5000/api/v1
```

### Seed Database

```bash
cd server && npm run seed
```

### Run Development

```bash
# From root — runs both server and client
npm run dev

# Or separately:
cd server && npm run dev    # Backend on :5000
cd client && npm start      # Frontend on :3000
```

### Build for Production

```bash
npm run build
```

## API Endpoints

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | /api/v1/blogs | List all blogs | Public |
| GET | /api/v1/blogs/featured | Featured blogs | Public |
| GET | /api/v1/blogs/:slug | Single blog | Public |
| GET | /api/v1/case-studies | All case studies | Public |
| GET | /api/v1/case-studies/:slug | Single case study | Public |
| GET | /api/v1/services | All services | Public |
| GET | /api/v1/testimonials | All testimonials | Public |
| GET | /api/v1/team | Team members | Public |
| POST | /api/v1/contact | Submit contact form | Public (rate limited) |
| POST | /api/v1/contact/subscribe | Newsletter signup | Public (rate limited) |
| POST | /api/v1/auth/login | Admin login | Public |
| GET | /api/v1/auth/me | Current user | Protected |
| POST | /api/v1/blogs | Create blog | Admin |
| PUT | /api/v1/blogs/:id | Update blog | Admin |
| DELETE | /api/v1/blogs/:id | Soft delete blog | Admin |

## Features

### Frontend
- Fully responsive (mobile-first)
- SEO optimized (React Helmet, meta tags, structured data)
- Code splitting with lazy loading
- Intersection Observer animations
- Accessible (semantic HTML, ARIA labels)
- 12 service pages, 23 blog posts, 8 case studies
- Contact form with validation
- WhatsApp integration

### Backend
- RESTful API with versioning
- JWT authentication with refresh tokens
- Role-based access control (admin/editor)
- Input validation (Joi)
- Rate limiting (API, auth, contact)
- Soft delete pattern
- Text search indexing
- Pagination, filtering, sorting
- Winston logging with file rotation
- Centralized error handling
- Security hardening (Helmet, CORS, HPP, Mongo Sanitize)

### Pages
Home, About, Services, Portfolio (8 case studies), B2B Growth, Blog (23 articles), Team, Testimonials, Contact, Privacy, Terms, 404

## Deployment (Vercel + Render)

Split hosting: **React on Vercel**, **Express API on Render**, **MongoDB Atlas**.

### 1. MongoDB Atlas

- Create a cluster and database user.
- Network Access: allow `0.0.0.0/0` (or Render’s outbound IPs if you restrict).
- Copy the connection string into `MONGO_URI` on Render.

### 2. Render (backend)

**Option A — Blueprint (recommended)**

1. Push this repo to GitHub.
2. [Render Dashboard](https://dashboard.render.com) → **New** → **Blueprint** → connect the repo.
3. Render reads `render.yaml` and creates `allied-axis-api`.
4. In the service **Environment**, set secrets (marked `sync: false` in the blueprint):
   - `MONGO_URI` — Atlas connection string
   - `JWT_SECRET`, `JWT_REFRESH_SECRET` — long random strings
   - `SMTP_USER`, `SMTP_PASS`, `FROM_EMAIL`, `CONTACT_NOTIFY_EMAIL`
   - `CLIENT_URL` — your Vercel production URL, e.g. `https://allied-axis.vercel.app`
   - Optional: `ALLOWED_ORIGINS` — comma-separated list if you use extra domains
5. Deploy. Note the public URL, e.g. `https://allied-axis-api.onrender.com`.
6. Health check: `GET https://your-api.onrender.com/api/v1/health`
7. After first deploy, seed once (Render **Shell** or local with production `MONGO_URI`):
   ```bash
   cd server && npm run seed
   ```

**Option B — Manual web service**

| Setting | Value |
|--------|--------|
| Root Directory | `server` |
| Build Command | `npm install` |
| Start Command | `npm start` |
| Health Check Path | `/api/v1/health` |

Use the same env vars as `server/.env.example` (`NODE_ENV=production`, `SERVE_CLIENT=false`, etc.).

Free tier: the service sleeps after inactivity; the first request may take ~30s.

### 3. Vercel (frontend)

1. [Vercel](https://vercel.com) → **Add New Project** → import the GitHub repo.
2. **Root Directory**: `client`
3. Framework: Create React App (auto-detected).
4. **Environment Variables** (Production + Preview):

   | Name | Value |
   |------|--------|
   | `REACT_APP_API_URL` | `https://YOUR-RENDER-SERVICE.onrender.com/api/v1` |

5. Deploy. `client/vercel.json` rewrites all routes to `index.html` for React Router.

CLI:

```bash
cd client
npx vercel
# set REACT_APP_API_URL when prompted, or in the Vercel dashboard
```

### 4. Wire CORS

On Render, set:

- `CLIENT_URL` = your Vercel production URL (no trailing slash)
- `ALLOW_VERCEL_PREVIEWS=true` (already in `render.yaml`) so preview deployments work

Redeploy Render after changing `CLIENT_URL`.

### 5. Verify

- Open the Vercel site; browse pages (static routes).
- Submit the contact form; check Render logs and `CONTACT_NOTIFY_EMAIL`.
- API: `https://your-api.onrender.com/api/v1/blogs`

### Monolith (optional)

To serve the built client from the same Node server (single host), build the client, set `SERVE_CLIENT=true` (or omit it), and deploy with `client/build` present. Not used for Vercel + Render split.

### Docker

```bash
docker-compose up --build
```

## License

© 2026 Allied Axis. All rights reserved.
