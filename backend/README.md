# IETE Backend (Express + MongoDB)

## Quick start
1. `cd backend`
2. `npm install`
3. Copy `.env.example` to `.env` and set values
4. `npm run dev`

## Auth endpoints
- `POST /api/auth/register` `{ name, email, password }`
- `POST /api/auth/login` `{ email, password }` → `{ token, user }`
- `GET /api/auth/me` with `Authorization: Bearer <token>`

## Stack
- Express, Mongoose
- JWT auth (`JWT_SECRET`), bcrypt hashing
- CORS (set `CLIENT_URL`)

## Notes
- Default DB name is `iete` (override with `MONGO_DB`).
- Roles: `visitor`, `member`, `admin` (set on user).
- Extend with project/event/blog routes later.
