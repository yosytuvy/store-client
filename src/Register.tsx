import React, { useState } from "react";
import { TextField, Button, Modal } from "@mui/material";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [open, setOpen] = useState(false);

  const handleRegister = () => {
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
      <TextField
        label="אישור סיסמה"
        type="password"
        variant="outlined"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Button onClick={handleRegister} variant="contained">
        הרשמה
      </Button>

      <Modal open={open} onClose={handleClose}>
        <div>
          <p>הרישום בוצע בהצלחה!</p>
        </div>
      </Modal>

      <Button onClick={() => console.log("מעבר לדף התחברות")}>
        מעבר לדף התחברות
      </Button>
    </div>
  );
};

export default Register;
