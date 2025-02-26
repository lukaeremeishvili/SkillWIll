import React from "react";
import { iAuth } from "../interfaces/auth.interface";
import AuthForm from "../components/forms/AuthForm";
import $axios from "../http";
import { useAuth } from "../context/useAuth";

const Login: React.FC = () => {
    const {setToken} = useAuth();

  const OnSubmit = (formData: iAuth) => {
    $axios.post("/login", { ...formData })
    .then((res) => {
        const token = res.data.accessToken; 
        localStorage.setItem("authToken", token); 
        setToken(token); 
    })
    .catch((err) => console.log(err));
  };

  return <AuthForm type="login" onSubmit={OnSubmit} />;
};

export default Login;
