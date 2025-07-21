import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = ({ children, hasHiddenAuthButtons }) => {
    const username = localStorage.getItem("username");

    const handleLogout = () => {
      // await new Promise(resolve => setTimeout(resolve, 1000));
      localStorage.clear();
      window.location.reload();
    };

    const LoggedOut = () => {
      return (
        <Box>
          <Link to="/login"><Button variant="text">LOGIN</Button></Link>
          <Link to="/register"><Button variant="contained">REGISTER</Button></Link>
        </Box>
      );
    }

    const LoggedIn = () => {
      return (
        <Box>
          <Stack className="avatarName" direction="row" spacing={2}>
          <Avatar alt={username} src="/avatar.png" />
          <p>{username}</p>
          <Link to=""><Button variant="text" onClick={handleLogout}>LOGOUT</Button></Link>
          </Stack>
        </Box>
      );
    }


    return (
      <Box className="header">
        <Box className="header-title">
          <Link to="/">
            <img src="logo_light.svg" alt="QKart-icon"></img>
          </Link>
        </Box>
        {children}
        { hasHiddenAuthButtons ?
        (
        <Link to="/">
        <Button
          className="explore-button"
          startIcon={<ArrowBackIcon />}
          variant="text"
        >
          Back to explore
        </Button>
        </Link>
        ): username === null ? <LoggedOut />:<LoggedIn />}
      </Box>
    );
};

export default Header;
