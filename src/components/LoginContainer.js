import React, { useState, useEffect } from "react";
import Textfield from "./Textfield";
import SubmitButton from "./SubmitButton";
import { Button } from "@mui/material";

const LoginContainer = () => {
  const rightEmail = "test@test.com";
  const rightPassword = "Password";
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordlIsValid, setPasswordIsValid] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    if (emailIsValid && passwordlIsValid) {
      setIsButtonDisabled(false);
    } else setIsButtonDisabled(true);
  }, [emailIsValid, passwordlIsValid]);

  const handleClick = () => {
    if (email === rightEmail && password === rightPassword) {
      localStorage.setItem("isLoggedIn", "yes");
    } 
    //else {}
  };

  const validateEmail = (text) => {
    if (text.includes("@")) {
      //console.log("this is a valid email");
      setEmailIsValid(true);
    } else {
      setEmailIsValid(false);
      //console.log("this is not a valid email");
    }
  };

  const validatPassword = (text) => {
    if (text.length >= 8) {
      //console.log("right password");
      setPasswordIsValid(true);
    } else {
      setPasswordIsValid(false);
      //console.log("wrong passwoed");
    }
  };

  return (
    <div className="login-box">
      <div className="login-title">Login</div>
      <Textfield
        label="Email"
        type="text"
        setValue={setEmail}
        validate={validateEmail}
        isValid={emailIsValid}
      />
      <Textfield
        label="Password"
        type="password"
        setValue={setPassword}
        validate={validatPassword}
        isValid={passwordlIsValid}
      />
     <Button href="/" disabled={isButtonDisabled} onClick={handleClick} className="submit-button">Login</Button>
    </div>
  );
};

export default LoginContainer;
// <SubmitButton handleClick={handleClick} isDisabled={isButtonDisabled} />