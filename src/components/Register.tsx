import React, { useState } from "react";
import { TextField, Button, Modal } from "@mui/material";
import {
  isValidEmail,
  isValidPassword,
  isValidPasswordConfirmation,
} from "../helpers/validations";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [isValidEmailInput, setIsValidEmailInput] = useState(true);
  const [isValidPasswordInput, setIsValidPasswordInput] = useState(true);
  const [isValidPasswordMatch, setIsValidPasswordMatch] = useState(true);

  const handleRegister = () => {
    const isEmailValid = isValidEmail(email);
    const isPasswordValid = isValidPassword(password);
    const isPasswordConfirmationValid = isValidPasswordConfirmation(
      password,
      confirmPassword
    );

    setIsValidEmailInput(isEmailValid);
    setIsValidPasswordInput(isPasswordValid);
    setIsValidPasswordMatch(isPasswordConfirmationValid);

    if (isEmailValid && isPasswordValid && isPasswordConfirmationValid) {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setIsValidEmailInput(true);
    setIsValidPasswordInput(true);
    setIsValidPasswordMatch(true);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <TextField
        label="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={!isValidEmailInput}
        helperText={
          !isValidEmailInput ? "Please enter a valid email address" : ""
        }
        style={{ marginBottom: "15px" }}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={!isValidPasswordInput}
        helperText={
          !isValidPasswordInput
            ? "The password must contain 8 characters, at least an uppercase letter and a lowercase letter"
            : ""
        }
        style={{ marginBottom: "15px" }}
      />
      <TextField
        label="Password Confirmation"
        type="password"
        variant="outlined"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        error={!isValidPasswordMatch}
        helperText={!isValidPasswordMatch ? "Passwords do not match" : ""}
        style={{ marginBottom: "15px" }}
      />
      <Button
        onClick={handleRegister}
        variant="contained"
        style={{ marginBottom: "15px" }}
      >
        Register
      </Button>

      <Modal open={open} onClose={handleClose}>
        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <p>Registration succeeded!</p>
        </div>
      </Modal>

      <Button onClick={() => console.log("Go to login page")}>
        Go to login page
      </Button>
    </div>
  );
};

export default Register;
