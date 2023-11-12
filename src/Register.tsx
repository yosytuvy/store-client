import React, { useState } from "react";
import { TextField, Button, Modal } from "@mui/material";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [passwordMatch, setPasswordMatch] = useState(true);

  const validateEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const validatePassword = (input) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return passwordRegex.test(input);
  };

  const handleRegister = () => {
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (isEmailValid && isPasswordValid && password === confirmPassword) {
      setOpen(true);
    } else {
      setIsValidEmail(isEmailValid);
      setIsValidPassword(isPasswordValid);
      setPasswordMatch(password === confirmPassword);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setIsValidEmail(true);
    setIsValidPassword(true);
    setPasswordMatch(true);
  };

  return (
    <div>
      <TextField
        label="email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={!isValidEmail}
        helperText={!isValidEmail ? "Please enter a valid email address" : ""}
      />
      <TextField
        label="password"
        type="password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={!isValidPassword}
        helperText={
          !isValidPassword
            ? "The password must contain 8 characters, at least an uppercase letter and a lowercase letter"
            : ""
        }
      />
      <TextField
        label="Password Confirmation"
        type="password"
        variant="outlined"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        error={!passwordMatch}
        helperText={!passwordMatch ? "passwords do not match" : ""}
      />
      <Button onClick={handleRegister} variant="contained">
        הרשמה
      </Button>

      <Modal open={open} onClose={handleClose}>
        <div>
          <p>registration succeeded!</p>
        </div>
      </Modal>

      <Button onClick={() => console.log("Go to login page")}>
        Go to login page
      </Button>
    </div>
  );
};

export default Register;
