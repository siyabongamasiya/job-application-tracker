import React, { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";

interface RegisterFormProps {
  onSubmit: (data: { username: string; password: string; confirmPassword: string }) => void;
}

const RegisterForm = ({ onSubmit }: RegisterFormProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = () => {
    onSubmit({ username, password, confirmPassword });
    setUsername("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="register-form">
      <InputField
        label="Username"
        type="text"
        value={username}
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <InputField
        label="Password"
        type="password"
        value={password}
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <InputField
        label="Confirm Password"
        type="password"
        value={confirmPassword}
        placeholder="confirm password"
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Button
        text="Register"
        onClick={handleSubmit}
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

export default RegisterForm;
