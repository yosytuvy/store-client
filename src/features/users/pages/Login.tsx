import { useState } from "react";
import { TextField, Button, Modal, Box, Typography, Stack } from "@mui/material";
import { isValidEmail } from "../../../helpers/validations";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [isValidEmailInput, setIsValidEmailInput] = useState(true);

  const handleLogin = () => {
    if (isValidEmail(email)) {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack
      sx={{
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
        onChange={(e) => {
          setEmail(e.target.value);
          setIsValidEmailInput(isValidEmail(e.target.value));
        }}
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
        style={{ marginBottom: "15px" }}
      />
      <Button
        onClick={handleLogin}
        variant="contained"
        style={{ marginBottom: "15px" }}
      >
        Login
      </Button>

      <Modal open={open} onClose={handleClose}>
        <Box
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography component="p" variant="body1">Login successfully!</Typography>
        </Box>
      </Modal>

      <Button onClick={() => console.log("Go to the registration page")}>
        Go to the registration page
      </Button>
    </Stack>
  );
};

export default Login;