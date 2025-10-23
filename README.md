# E-Commerce (local development, no Docker)

This workspace contains a full-stack example: backend (Express + Prisma/Postgres + Mongo) and a frontend (Next.js + TypeScript + Tailwind). The project is intentionally configured for local development without Docker.

Quick start (Windows / PowerShell):

1) Prerequisites
- Node.js 18+ installed
- npm (comes with Node)
- Local PostgreSQL server (e.g., Postgres app, or installed via package manager)
- Local MongoDB server (e.g., install MongoDB Community Server or use a cloud instance)

2) Backend setup
 - cd backend
 - npm install
 - Copy `.env.example` to `.env` and update values. Example values for local Postgres and Mongo:
	 - DATABASE_URL=postgresql://postgres:password@localhost:5432/ecommerce_dev
	 - MONGO_URL=mongodb://localhost:27017/ecommerce
	 - JWT_SECRET=your-secret-here
 - Start backend in dev mode:
	 - npm run dev

3) Frontend setup
 - cd fronted
 - npm install
 - Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_API_URL` to `http://localhost:4000`
 - Start frontend dev server:
	 - npm run dev

4) Open app
- Frontend: http://localhost:3000
- Backend API health: http://localhost:4000/


