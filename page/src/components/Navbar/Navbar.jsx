import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Button,
  Typography,
} from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

import "./Navbar.scss";

function Navbar() {
  return (
    <AppBar position="static" className="navbar">
      <Container maxWidth="xl">
        <Toolbar className="navbar-toolbar">

          {/* Logo */}

          <Link to="/" className="navbar-logo">
            <img src={logo} alt="Logo" />

            <Box>
              <Typography className="logo-title">
                MediConnect
              </Typography>

              <Typography className="logo-subtitle">
                Healthcare Ecosystem
              </Typography>
            </Box>
          </Link>

          {/* Navigation */}

          <Box className="navbar-links">

            <Link to="/">Home</Link>

            <Link to="#">
              Solutions
              <KeyboardArrowDownIcon className="nav-icon" />
            </Link>

            <Link to="#">
              For Patients
              <KeyboardArrowDownIcon className="nav-icon" />
            </Link>

            <Link to="#">
              For Providers
              <KeyboardArrowDownIcon className="nav-icon" />
            </Link>

            <Link to="#">
              Pricing
            </Link>

            <Link to="#">
              Resources
            </Link>

          </Box>

          {/* Buttons */}

          <Box className="navbar-buttons">

            <Button
              variant="outlined"
              className="signup-btn"
              startIcon={<PersonOutlineOutlinedIcon />}
            >
              Sign up
            </Button>

            <Button
              variant="contained"
              className="login-btn"
              startIcon={<PersonOutlineOutlinedIcon />}
            >
              Login
            </Button>

          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;