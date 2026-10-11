# Mini Expense Tracker — React Learning Project

## Goal
Learn React core concepts by implementing them in code, plus a small Express backend to understand how frontend and backend talk to each other.

**Total time:** ~3 hours (2h React + 1h backend/auth)

## What the app does
- Users register and log in (Express + SQLite + JWT)
- Logged-in users add expenses (title, amount, category), see a list, filter, delete
- Show totals and category breakdown on a stats page
- Convert totals to another currency using the free Frankfurter API (no key)

## Tech Stack
- **Frontend:** React (Vite), react-router-dom, @tanstack/react-query, zustand
- **Backend:** Express, better-sqlite3, bcrypt, jsonwebtoken, cors
- **External API:** Frankfurter (`https://api.frankfurter.app`)

## Folder Structure
```
expense-tracker/
├── client/   # React app (Vite)
└── server/   # Express API
```

## Topics to Cover → Where They Appear

| Topic | Implemented in |
|---|---|
| Virtual DOM, reconciliation, keys, JSX | Expense list — do the `key={index}` bug on purpose, then fix with `key={id}` |
| Functional vs class components | Class `ErrorBoundary`; everything else functional |
| Props vs state, lifting state up | Expenses state in parent, shared by `ExpenseForm` and `ExpenseList` |
| useState, useEffect (deps + cleanup) | Form inputs; `useFetch` hook with AbortController cleanup |
| Rules of hooks | Put a hook inside an `if` once on purpose, read the error, revert |
| useRef | Uncontrolled category field; autofocus on search box |
| useReducer | Expenses state (add / delete) |
| useMemo | Total + category breakdown |
| useCallback + React.memo | `ExpenseRow` memoized, delete handler wrapped in `useCallback` |
| Re-render causes | `console.log("render")` in `ExpenseRow` — observe before/after memo |
| Controlled vs uncontrolled forms | Title/amount controlled, category uncontrolled |
| Prop drilling → Context | Currency setting passed 3 levels deep, then refactored to `useContext` |
| Context vs Zustand | Expenses moved from `useReducer` to a Zustand store |
| Custom hooks | `useFetch`, later `useAuth` |
| Data fetching (React Query) | Replace `useFetch` with `useQuery`; auth via `useMutation` |
| Error boundaries | Class `ErrorBoundary` around `/stats` with a "crash" button |
| Portals | "Delete all?" confirm modal via `createPortal` |
| Fragments | Layout and list components return `<>...</>` |
| SPA vs MPA, React Router | Routes `/`, `/stats`, `/settings`, `/login`, `/register`, `/profile` |
| Strict Mode | Observe effects double-running in dev and cleanup firing |
| React 18 | `useTransition` on the search filter |
| React 19 | `useActionState` + `useOptimistic` on the add-expense form |
| Frontend ↔ Backend | Register, login, `/api/me` profile fetched from DB |

## Phases

### Phase 1 — Setup + Routing (15 min)
Vite app, install libraries, routes with nav layout.

### Phase 2 — Form + List (30 min)
`useReducer` in parent, controlled/uncontrolled form, list with keys (bug then fix).

### Phase 3 — Performance (20 min)
`React.memo`, `useCallback`, `useMemo`, `useTransition` search, `useRef` autofocus.

### Phase 4 — Currency + Fetching (20 min)
Prop drilling → Context, `useFetch` custom hook with cleanup, then React Query.

### Phase 5 — Extras (20 min)
Zustand store, portal modal, class ErrorBoundary.

### Phase 6 — React 19 (15 min)
`useActionState` + `useOptimistic` on the form.

### Phase 7 — Backend (25 min)
Express server, SQLite users table, register / login / me endpoints, test with Postman/Thunder Client.

### Phase 8 — Connect Frontend to Backend (30 min)
Register/login pages, `AuthContext`, profile page from `/api/me`, `ProtectedRoute`.

### Phase 9 — Observe (5 min)
DevTools Network tab: requests, headers, status codes, JSON responses.

## API Endpoints

| Method | Route | Body / Header | Returns |
|---|---|---|---|
| POST | `/api/register` | `{ name, email, password }` | 201, or 409 if email exists |
| POST | `/api/login` | `{ email, password }` | `{ token }`, or 401 |
| GET | `/api/me` | `Authorization: Bearer <token>` | `{ id, name, email }` |

## Notes
- Token stored in localStorage for learning. In production, an httpOnly cookie is safer (protects against XSS).
- Server on port 3000, Vite on 5173 — CORS must be enabled on the server.
