# AI Copilot Instructions - Job Application Tracker

## Project Overview
React 19 + TypeScript + Vite SPA for tracking job applications. Backend is a JSON server deployed on Render (Basic Plan) at `https://apex-track-json-server.onrender.com`. Client-only repo with no backend code.

## Architecture & Data Flow

### State Management Pattern
- **No global state library** - uses local component state (`useState`) and localStorage
- **Current user session**: Stored in localStorage via `DataAccesObject.saveCurrentUserToLocalStorage()` and retrieved with `getCurrentUserFromLocalStorage()`
- Always check `dao.getCurrentUserFromLocalStorage()` for authentication state - if null, redirect to `/register`

### Data Access Layer
All backend communication goes through [src/data/dao.ts](src/data/dao.ts) (`DataAccesObject` class):
- **Single DAO instance pattern**: Components instantiate `const dao = new DataAccesObject()`
- **User-jobs relationship**: Users have embedded `jobs[]` array. To modify jobs, fetch user, update jobs array, PUT entire user object
- **Toast-driven UX**: Every async operation shows toast feedback via `sonner` - use `toast.message()` for loading, `toast.success()`/`toast.error()` for results

### Model Classes
- [src/models/User.ts](src/models/User.ts): `{ id: string, username: string, password: string, jobs: Job[] }`
- [src/models/Job.ts](src/models/Job.ts): `{ id: string, company: string, role: string, dateApplied: string, status: string }`

Status values in use: `"Applied"`, `"Interviewed"`, `"Rejected"` (see [FilterBar.tsx](src/components/FilterBar.tsx)). Filter categories include `"All jobs"` plus the status values.

## Key Development Patterns

### Component Structure
- **Page components** in [src/pages/](src/pages/) use internal section components (e.g., `TopSection`, `MidSection` in [HomePage.tsx](src/pages/HomePage.tsx#L27-L34))
- **Reusable components** in [src/components/](src/components/) are generic with props interfaces
- **Styling**: All in [src/App.css](src/App.css) with CSS custom properties (`--primary`, `--background`, etc.) - NO component-specific CSS files

### Forms & Validation
- Form components use controlled inputs via `useState` hooks
- Validation happens in DAO methods (e.g., username uniqueness, password matching in `createUser()`)
- Error display through toast notifications, not inline validation messages

### Routing & Navigation
- [src/App.tsx](src/App.tsx): React Router v7 with routes: `/` (landing), `/home`, `/login`, `/register`, `/jobdetails/:jobId`, `*` (404)
- Use `useNavigate()` hook for programmatic navigation
- Job details use route params: `const { jobId } = useParams<URLParams>()`

### ID Generation
[src/utils/IdGenerator.ts](src/utils/IdGenerator.ts) uses hash functions:
- `generateUserId(username, password)` - for user IDs
- `generateJobId(company, role)` - for job IDs
**Critical**: IDs are deterministic hashes, NOT UUIDs

### Toast Notifications
Using `sonner` library (imported as `toast`):
```tsx
// Pattern for async operations
toast.message("fetching details...please wait!!");
// ... await operation
toast.dismiss();
toast.success("Operation successful!") // or toast.error()
```
Global `<Toaster richColors />` in [App.tsx](src/App.tsx#L27)

## Build & Development

### Commands
- **Dev**: `npm run dev` (Vite on port 5173)
- **Build**: `npm run build` (TypeScript compile + Vite build)
- **Lint**: `npm run lint` (ESLint flat config in [eslint.config.js](eslint.config.js))
- **Preview**: `npm run preview` (preview production build)

### TypeScript Configuration
- Root [tsconfig.json](tsconfig.json) references [tsconfig.app.json](tsconfig.app.json) and [tsconfig.node.json](tsconfig.node.json)
- Uses TypeScript 5.8.3 with strict type checking

## Conventions

### Import Patterns
```tsx
import DataAccesObject from "../data/dao";
import type User from "../models/User";  // Type-only imports for models
import { toast } from "sonner";
```

### Component Props
Define interfaces with descriptive names:
```tsx
interface JobModalProps {
  isOpen: boolean;
  editedJobId?: string;
  isEditMode?: boolean;
  onClose: () => void;
}
```

### Async Operations
Always wrap in try-catch with toast error handling:
```tsx
try {
  toast.message("Loading...");
  const response = await axios.get(...);
  toast.dismiss();
  // handle success
} catch (error) {
  toast.error("oops something went wrong!!");
  throw error;
}
```

## Backend Integration Notes
- **Render cold starts**: Backend may take 30-60s to wake up on first request after inactivity
- **API base URL**: `https://apex-track-json-server.onrender.com`
- **Endpoints pattern**: `/users` (GET all, POST create), `/users/:id` (GET, PUT, PATCH)
- **Job operations**: Always modify user.jobs array and PUT entire user object (no dedicated job endpoints)

## Common Tasks

### Adding a New Page
1. Create in [src/pages/](src/pages/) with default export
2. Add route in [src/App.tsx](src/App.tsx) `<Routes>` block
3. Add navigation calls in relevant components using `useNavigate()`
4. Style in [src/App.css](src/App.css) using page-specific IDs

### Modifying Job Data Structure
1. Update [src/models/Job.ts](src/models/Job.ts) class
2. Update DAO methods in [src/data/dao.ts](src/data/dao.ts) (addJob, editJob, etc.)
3. Update form in [src/components/JobFormModal.tsx](src/components/JobFormModal.tsx)
4. Update display in [src/components/JobItem.tsx](src/components/JobItem.tsx) and [JobInfoCard.tsx](src/components/JobInfoCard.tsx)

### Authentication Flow
Login/Register → `Authenticator.authenticate()` or `dao.createUser()` → saves to localStorage → redirect to `/home`. HomePage checks localStorage, redirects to `/register` if not found.
