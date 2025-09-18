import React, { useState } from "react";
import NavBar from "../components/NavBar";
import InputField from "../components/InputField";
import Button from "../components/Button";
import DataAccesObject from "../data/dao";
import generateUserId from "../utils/IdGenerator";
import Authenticator from "../utils/authenticator";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const dao = new DataAccesObject();
const auth = new Authenticator();

export default function LoginPage() {
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
      <NavBar title="Login" hasBackButton={false} />
    </div>
  );
};

const MidSection = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const clearFields = () => {
    setUsername("");
    setPassword("");
  };

  const goToNextPage = (page: string) => {
    navigate(page);
  };

  return (
    <div id="midsection-main-container">
      <div id="midsection-sub-container">
        <InputField
          label="Username"
          value={username}
          type="text"
          placeholder="username"
          onChange={(newValue) => {
            setUsername(newValue);
          }}
        />
        <InputField
          label="Password"
          value={password}
          placeholder="password"
          type="password"
          onChange={(newValue) => {
            setPassword(newValue);
          }}
        />
        <Button
          text="Login"
          onClick={() => {
            auth.authenticate(username, password).then((authenticated) => {
              if (authenticated) {
                toast.message("Authenticated!!");
                goToNextPage("/");
                clearFields();
              }
            });
          }}
          style={{
            width: "70%",
            marginLeft: "10%",
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

      <p>
        Dont have an account?{" "}
        <span className="login-Register-Text">Register</span>
      </p>
    </div>
  );
};
