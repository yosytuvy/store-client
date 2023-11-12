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
        label="דואר אלקטרוני"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="סיסמה"
        type="password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleLogin} variant="contained">
        התחברות
      </Button>

      <Modal open={open} onClose={handleClose}>
        <div>
          <p>התחברות בוצעה בהצלחה!</p>
        </div>
      </Modal>

      <Button onClick={() => console.log("מעבר לדף רישום")}>
        מעבר לדף רישום
      </Button>
    </div>
  );
};

export default Login;
