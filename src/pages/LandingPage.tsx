import React from "react";
import NavBar from "../components/NavBar";
import hero from "../assets/hero.png";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  return (
    <div id="landing-page">
      <TopSection />
      <MidSection />
    </div>
  );
}

const TopSection = () => {
  return (
    <div>
      <NavBar title="Apex Track" hasBackButton={false} />
    </div>
  );
};

const MidSection = () => {
  const navigate = useNavigate();

  return (
    <div id="midSection-landingPage">
      <div id="hero-section">
        <img src={hero} alt="hero" />
        <p>
          <span>"Track your Job applications"</span> <br />
          <span>A simple tool to keep record</span> <br />
          <span>of Applied jobs,check progress,</span> <br />
          <span>and stay organised.</span>
        </p>
      </div>
      <div id="button-container-landing">
        <Button
          text="Get Started"
          onClick={() => {
            navigate("/register");
          }}
          style={{
            width: "50%",
            alignSelf: "center",
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
    </div>
  );
};
