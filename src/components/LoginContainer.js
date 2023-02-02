import React, { useState, useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { FcGoogle } from "react-icons/fc";

const LoginContainer = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (user != null) {
      //user?.email != null
      navigate("/");
    }
  }, [user]); //user

  return (
    <>
      <div className="login-box" sx={{ width: 100 }}>
        <h4>Welcome to Task Manager!</h4>

        <Button onClick={handleGoogleSignIn} className="google-button">
          <FcGoogle/>Login with Goggle
        </Button>
      </div>
    </>
  );
};

export default LoginContainer;