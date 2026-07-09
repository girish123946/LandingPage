import {
  Container,
  Grid,
  Typography,
  TextField,
  IconButton,
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import logo from "../../assets/images/logo.png";

import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <Container maxWidth="xl">
        <Grid container spacing={8}>
          {/* Logo Section */}
          <Grid size={{ xs: 12, md: 3 }}>
            <div className="footer-logo">
              <img src={logo} alt="MediConnect" />

              <Typography className="footer-description">
                One Integrated platform for all your healthcare needs.
                Empowering hospitals, doctors and patients with AI and
                technology.
              </Typography>
            </div>
          </Grid>

          {/* Platform */}
          <Grid size={{ xs: 12, md: 2 }}>
            <Typography className="footer-title">
              Platform
            </Typography>

            <ul className="footer-links">
              <li>Hospital Management</li>
              <li>Telemedicine</li>
              <li>Pharmacy System</li>
              <li>Lab Management</li>
              <li>Health Insurance</li>
              <li>Appointment & Scheduling</li>
              <li>Remote Monitoring</li>
              <li>AI & Analytics</li>
            </ul>
          </Grid>

          {/* Resources */}
          <Grid size={{ xs: 12, md: 2 }}>
            <Typography className="footer-title">
              Resources
            </Typography>

            <ul className="footer-links">
              <li>Documentation</li>
              <li>API Reference</li>
              <li>Integration</li>
              <li>Case Studies</li>
            </ul>
          </Grid>

          {/* Company */}
          <Grid size={{ xs: 12, md: 2 }}>
            <Typography className="footer-title">
              Company
            </Typography>

            <ul className="footer-links">
              <li>About Us</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Partners</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </Grid>

          {/* Newsletter */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography className="footer-title">
              Newsletter
            </Typography>

            <Typography className="newsletter-text">
              Subscribe to get latest updates!
            </Typography>

            <div className="newsletter-box">
              <TextField
                placeholder="Enter Your Email ID"
                variant="outlined"
                fullWidth
                size="small"
              />

              <IconButton className="send-btn">
                <ArrowForwardIcon />
              </IconButton>
            </div>

            <Typography className="social-title">
              Our Socials
            </Typography>

            <div className="social-icons">
              <XIcon />
              <YouTubeIcon />
              <FacebookIcon />
              <LinkedInIcon />
            </div>
          </Grid>
        </Grid>

        <div className="footer-bottom">
          © 2026 Healthcare. All Rights Reserved. Privacy Policy ·
          Terms of Service · HIPAA Notice · Cookie Settings ·
          Accessibility
        </div>
      </Container>
    </footer>
  );
}

export default Footer;