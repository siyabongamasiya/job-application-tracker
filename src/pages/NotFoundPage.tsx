import React from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div id="notfoundpage">
      <MidSection />
      <BottomSection />
    </div>
  );
}

const MidSection = () => {
  return (
    <div id="mid-section">
      <p id="notfoundcode">404</p>
      <p className="notfoundtext">Oops! The page you</p>
      <p className="notfoundtext">are Looking for does</p>
      <p className="notfoundtext">not exist!</p>
      <br />
    </div>
  );
};

const BottomSection = () => {
  const navigate = useNavigate();
  return (
    <div id="bottom-section">
      <Button
        text="Go back Home"
        onClick={() => {navigate("/")}}
        style={{
          padding: "0.75rem",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "var(--primary)",
          color: "var(--background)",
          fontFamily: "var(--buttons-navLinks-font)",
          fontWeight: "var(--buttons-navLinks-weight)",
          cursor: "pointer",
          fontSize: "1rem",
        }}
      />
    </div>
  );
};
