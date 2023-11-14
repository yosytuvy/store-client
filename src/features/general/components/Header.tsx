import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalMallIcon from "@mui/icons-material/LocalMall";

const AppHeader = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
        ></IconButton>
        <Button color="inherit">login</Button>
        <Button color="inherit">signup</Button>
        <div style={{ marginLeft: "auto" }}>
          <IconButton color="inherit" aria-label="shopping cart">
            <ShoppingCartIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="home">
            <LocalMallIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="home">
            <HomeIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;