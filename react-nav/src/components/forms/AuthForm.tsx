import React, { FormEvent, useState } from "react";
import { iAuth } from "../../interfaces/auth.interface";
import { Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface AuthFormProps {
  type: string;
  onSubmit: (formData: iAuth) => void;
}
const AuthForm: React.FC<AuthFormProps> = ({ type, onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ email, password });
    navigate("/");
    setEmail("");
    setPassword("");
  };
  const handleBack = () => {
    navigate("/"); 
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        width: "500px",
        margin: "50px auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography>{type === "login" ? "Login" : "Register"}</Typography>

      <TextField
        style={{ marginBottom: "5px" }}
        label="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        fullWidth
        required
      />
      <TextField
        label="Password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        fullWidth
        required
      />

      <Button type="submit">
        <Typography>{type === "login" ? "Login" : "Register"}</Typography>
      </Button>
      <Button onClick={handleBack} style={{ marginTop: "10px" }}>
        <Typography>Back to Homepage</Typography>
      </Button>
    </form>
  );
};

export default AuthForm;
