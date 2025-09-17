import React, { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";
interface LoginFormProps {
  onSubmit: (data: { username: string; password: string }) => void;
}

const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    onSubmit({ username, password });
    setUsername("");
    setPassword("");
  };

  return (
    <div className="login-form">
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
      <Button
        text="Submit"
        onClick={() => {}}
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

export default LoginForm;
