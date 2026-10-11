# Task Tracker

Mark tasks `[x]` when done. Claude Code updates this after each approved step.

## Phase 1 — Setup + Routing
- [x] Create Vite React app in `client/`
- [x] Install react-router-dom, @tanstack/react-query, zustand
- [x] Set up QueryClientProvider + BrowserRouter in `main.jsx` (Strict Mode on)
- [x] Layout with nav bar + routes `/`, `/stats`, `/settings` (use Fragments)

## Phase 2 — Form + List
- [x] `useReducer` for expenses (add / delete) in parent
- [ ] `ExpenseForm`: title + amount controlled, category uncontrolled (`useRef`)
- [ ] `ExpenseList` + `ExpenseRow` — lift state up, pass props
- [ ] Key bug on purpose (`key={index}`), observe, fix with `key={id}`
- [ ] Rules of hooks: hook inside `if`, read error, revert

## Phase 3 — Performance
- [ ] `console.log("render")` in `ExpenseRow`, observe re-renders
- [ ] Wrap `ExpenseRow` in `React.memo`
- [ ] `useCallback` on delete handler, observe the difference
- [ ] `useMemo` for total + category breakdown
- [ ] Search filter with `useTransition`
- [ ] Autofocus search box with `useRef`

## Phase 4 — Currency + Fetching
- [ ] Currency setting passed 3 levels deep (prop drilling)
- [ ] Refactor to `CurrencyContext` + `useContext`
- [ ] `useFetch` custom hook with `useEffect` + AbortController cleanup (Frankfurter API)
- [ ] Observe Strict Mode double effect + cleanup in console
- [ ] Replace `useFetch` with React Query `useQuery`

## Phase 5 — Extras
- [ ] Move expenses from `useReducer` to Zustand store
- [ ] "Delete all?" modal with `createPortal`
- [ ] Class `ErrorBoundary` around `/stats` + "crash" button to test

## Phase 6 — React 19
- [ ] Convert form submit to `useActionState`
- [ ] Add `useOptimistic` with fake 1s save delay

## Phase 7 — Backend (Express)
- [ ] Create `server/`, `npm init`, install express, cors, better-sqlite3, bcrypt, jsonwebtoken
- [ ] Basic Express server with `cors()` + `express.json()` on port 3000
- [ ] SQLite `users` table (id, name, email unique, password_hash)
- [ ] `POST /api/register` (bcrypt hash, 409 on duplicate email)
- [ ] `POST /api/login` (bcrypt compare, return JWT)
- [ ] Auth middleware (verify Bearer token)
- [ ] `GET /api/me` (fetch user from DB)
- [ ] Test all endpoints with Postman / Thunder Client

## Phase 8 — Connect Frontend to Backend
- [ ] `/register` page — controlled form + `useMutation`, show backend errors
- [ ] `/login` page — `useMutation`, receive token
- [ ] `AuthContext` (token in state + localStorage, login / logout)
- [ ] `/profile` page — `useQuery` on `/api/me` with token header
- [ ] `ProtectedRoute` — redirect to `/login` if no token, wrap expense pages
- [ ] Logout button

## Phase 9 — Observe
- [ ] DevTools Network tab: inspect requests, headers, status codes, JSON
- [ ] Read up: Virtual DOM theory, SPA vs MPA (~15 min)
