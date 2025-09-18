import React, { useState } from "react";
import NavBar from "../components/NavBar";
import InputField from "../components/InputField";
import Button from "../components/Button";
import DataAccesObject from "../data/dao";
import generateUserId from "../utils/IdGenerator";
import Authenticator from "../utils/authenticator";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const auth = new Authenticator();
const dao = new DataAccesObject();

export default function RegisterPage() {
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
      <NavBar title="Register" hasBackButton={false} />
    </div>
  );
};

const MidSection = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const clearFields = () => {
    setUsername("");
    setPassword("");
    setConfirmPassword("");
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
        <InputField
          label="Password"
          value={confirmPassword}
          placeholder="confirm password"
          type="password"
          onChange={(newValue) => {
            setConfirmPassword(newValue);
          }}
        />
        <Button
          text="Register"
          onClick={() => {
            dao
              .createUser(
                generateUserId(username, password),
                username,
                password,
                confirmPassword
              )
              .then((users) => {
                if (users.length != 0) {
                  toast.message("Account Created successfully!");
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
        Already have an account?{" "}
        <a className="login-Register-Text" href="/login">Login</a>
      </p>
    </div>
  );
};
