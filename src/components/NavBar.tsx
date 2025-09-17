import React from "react";
import logo from "../assets/logo.png";

interface NavProps {
  title: string;
  hasBackButton: boolean;
}

export default function NavBar({ title, hasBackButton }: NavProps) {
  return (
    <div id="nav">
      <div>
        
        <p id="nav-title">{title}</p>
      </div>
      <div id="nav-log-container">
        <img id="nav-logo" src={logo} alt="logo" />
      </div>
    </div>
  );
}
