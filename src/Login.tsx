import React, { useState } from "react";
import { TextField, Button, Modal } from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);

  const handleLogin = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <TextField
        label="email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="password"
        type="password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleLogin} variant="contained">
        Login
      </Button>

      <Modal open={open} onClose={handleClose}>
        <div>
          <p>Login successfully!</p>
        </div>
      </Modal>

      <Button onClick={() => console.log("Go to the registration page")}>
        Go to the registration page
      </Button>
    </div>
  );
};

export default Login;
