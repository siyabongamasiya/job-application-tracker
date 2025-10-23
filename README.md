# Job Application Tracker

A **React + TypeScript** web application for tracking job applications, built with modern tools and features.  

---

## Features

- **User Authentication**
  - Login and Register pages
  - Protected routes for job management
- **Job Management**
  - Add, view, and track jobs
  - Job details page with status and notes
- **Search & Filters**
  - Category filters
  - Date filters for sorting
- **Responsive Design**
  - Optimized for mobile and desktop
  - Fully responsive job cards and forms
- **Interactive UI**
  - Toast notifications via [Sonner](https://github.com/sonner-toast/sonner)
  - Clean, modern layout using CSS variables and flex/grid

---

## Tech Stack

- **Front-end:** React 19, TypeScript, Vite
- **Routing:** React Router DOM v7
- **Styling:** CSS (flexbox & grid)
- **State & Utilities:** useState, custom hooks
- **Notifications:** Sonner
- **Icons:** React Icons
- **Data:** Local JS/JSON (Data Access Object)

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/siyabongamasiya/job-application-tracker.git
cd job-application-tracker

2. Install dependencies:

npm install

3. Start the development server:

npm run dev

4. Open your browser and go to:

http://localhost:5173

5. Build

To build the project for production:

npm run build

6. Deployment

This project's backend is deployed on Render using the Basic Plan.

⚠️ Note: Because of the Render Basic Plan, you may experience some delays in server wake-up when accessing the site after inactivity.

7. Folder Structure
src/
├─ components/   # Reusable UI components (Button, InputField, NavBar)
├─ data/         # Data Access Objects
├─ pages/        # React pages (HomePage, LoginPage, RegisterPage, JobDetailsPage)
├─ utils/        # Helper functions and authenticator
├─ App.css       # Global styles
└─ App.tsx       # Main entry point

8. Notes

The app uses CSS variables for consistent theming.

Forms (Login/Register) have a fixed width to maintain layout integrity.

The homepage and job listings are fully responsive.

Toast notifications are used for user feedback.