import {
  AppBar,
  Toolbar,
  Container,
  Button,
  Box,
  Typography,
} from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import logo from "../../assets/images/logo.svg";

import "./Navbar.scss";

function Navbar() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      color="transparent"
      className="navbar"
    >
      <Container maxWidth="xl">
        <Toolbar className="navbar__wrapper">
          {/* Logo */}

          <Box className="navbar__logo">
            <img
              src={logo}
              alt="MediConnect"
              className="navbar__logo-img"
            />

            <Box className="navbar__logo-content">
              <Typography className="navbar__brand">
                MediConnect
              </Typography>

              <Typography className="navbar__subtitle">
                Healthcare Ecosystem
              </Typography>
            </Box>
          </Box>

          {/* Menu */}

          <Box
            component="ul"
            className="navbar__menu"
          >
            <li>Home</li>

            <li>
              Solutions
              <KeyboardArrowDownIcon fontSize="small" />
            </li>

            <li>
              For Patients
              <KeyboardArrowDownIcon fontSize="small" />
            </li>

            <li>
              For Providers
              <KeyboardArrowDownIcon fontSize="small" />
            </li>

            <li>Pricing</li>

            <li>Resources</li>
          </Box>

          {/* Buttons */}

          <Box className="navbar__buttons">
            <Button
              variant="outlined"
              className="signup-btn"
              startIcon={<PersonOutlineOutlinedIcon />}
            >
              Sign Up
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