import React from "react";
import logo from "../assets/logo.png";

interface NavProps {
  title: string;
  hasBackButton: boolean;
}

export default function NavBar({ title, hasBackButton }: NavProps) {
  return (
    <div id="nav">
      <div id="nav-title-container" >
        <p id="nav-title" >{title}</p>
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
