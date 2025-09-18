import React from "react";
import NavBar from "../components/NavBar";
import hero from "../assets/hero.png";
import Button from "../components/Button";

export default function LandingPage() {
  return (
    <div>
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
  return (
    <div>
      <div id="hero-section">
        <img src={hero} alt="hero" />
        <p>
          <span>"Track your Job applications"</span> <br/>
          <span>A simple tool to keep record</span> <br/>
          <span>of Applied jobs,check progress,</span> <br/>
          <span>and stay organised.</span>
        </p>
      </div>
      <Button text="Get Started" onClick={() => {}} style={{}} />
    </div>
  );
};
