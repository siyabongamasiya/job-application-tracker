import React, { useState } from "react";
import NavBar from "../components/NavBar";
import InputField from "../components/InputField";
import Button from "../components/Button";
import LoadingSpinner from "../components/LoadingSpinner";
import CopyrightFooter from "../components/CopyrightFooter";
import DataAccesObject from "../data/dao";
import generateUserId from "../utils/IdGenerator";
import Authenticator from "../utils/authenticator";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import type User from "../models/User";

const dao = new DataAccesObject();
const auth = new Authenticator();

export default function LoginPage() {
  return (
    <div>
      <TopSection />
      <MidSection />
      <CopyrightFooter />
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
  const [isLoading, setIsLoading] = useState(false);
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
          text={isLoading ? "" : "Login"}
          onClick={() => {
            if (isLoading) return;
            setIsLoading(true);
            auth
              .authenticate(username, password)
              .then((authenticated) => {
                setIsLoading(false);
                if (authenticated) {
                  toast.message("Authenticated!!");
                  goToNextPage("/home");
                  clearFields();
                }
              })
              .catch(() => {
                setIsLoading(false);
              });
          }}
          style={{
            width: "70%",
            marginLeft: "10%",
            padding: "0.75rem",
            borderRadius: "8px",
            border: "none",
            backgroundColor: isLoading ? "var(--neutral)" : "var(--primary)",
            color: "var(--background)",
            fontFamily: "var(--buttons-navLinks-font)",
            fontWeight: "var(--buttons-navLinks-weight)",
            cursor: isLoading ? "not-allowed" : "pointer",
            fontSize: "1rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "44px",
          }}
        />
        {isLoading && (
          <div style={{ position: "absolute", marginTop: "0.75rem" }}>
            <LoadingSpinner size="small" color="var(--background)" />
          </div>
        )}
      </div>

      <p>
        Dont have an account?{" "}
        <a className="login-Register-Text" href="/register">
          Register
        </a>
      </p>
    </div>
  );
};
