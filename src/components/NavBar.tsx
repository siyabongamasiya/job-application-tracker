import React from "react";
import logo from "../assets/logo.png";

interface NavProps {
  title: string;
  hasBackButton: boolean;
  onLogout?: () => void;
}

export default function NavBar({ title, hasBackButton, onLogout }: NavProps) {
  return (
    <div id="nav">
      <div id="nav-title-container">
        <p id="nav-title">{title}</p>
        {onLogout && (
          <button
            onClick={onLogout}
            style={{
              padding: "0.5rem 1.5rem",
              borderRadius: "var(--radius-md)",
              border: "none",
              backgroundColor: "var(--error)",
              color: "var(--background)",
              fontFamily: "var(--buttons-navLinks-font)",
              fontWeight: "var(--buttons-navLinks-weight)",
              cursor: "pointer",
              fontSize: "0.875rem",
              transition: "all 0.2s ease",
              marginTop: "0.5rem",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#dc2626";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "var(--error)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Logout
          </button>
        )}
      </div>
      <div id="nav-log-container">
        <img id="nav-logo" src={logo} alt="logo" />
      </div>
    </div>
  );
}

// /*/* LOGIN / REGISTER SPECIFIC - OLD STYLES (KEEP CENTERED) */
// .login-form,
// .register-form {
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
//   width: 300px; /* centered width */
//   margin: 2rem auto;
//   padding: 2rem;
//   border-radius: 12px;
//   background-color: var(--background);
//   box-shadow: 3px 4px 4px 0px rgba(0, 0, 0, 0.1);
// }*/
