import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";

import heroImage from "../../assets/images/hero-image.svg";

import "./Hero.scss";

function Hero() {
  return (
    <section className="hero-section">
      <Container maxWidth="xl">
        <Grid container spacing={6} alignItems="center">

          {/* Left Content */}

          <Grid item xs={12} md={6}>
            <Box className="hero-content">

              <Box className="hero-badge">
                <VerifiedOutlinedIcon />
                <Typography>
                  AI-Powered Healthcare Ecosystem
                </Typography>
              </Box>

              <Typography variant="h2" className="hero-title">
                Revolutionizing Healthcare Through
                <span> AI Innovation</span>
              </Typography>

              <Typography className="hero-description">
                Connecting patients, doctors, hospitals, pharmacies,
                laboratories and insurers in one intelligent healthcare
                ecosystem designed for better care.
              </Typography>

              <Box className="hero-buttons">
                <Button
                  variant="contained"
                  className="primary-btn"
                  startIcon={<CalendarMonthOutlinedIcon />}
                >
                  Book Appointment
                </Button>

                <Button
                  variant="outlined"
                  className="secondary-btn"
                  startIcon={<VideoCallOutlinedIcon />}
                >
                  Consult Online
                </Button>
              </Box>

              <Box className="hero-features">

                <Box className="feature-item">
                  <VerifiedOutlinedIcon />
                  <Typography>100% Secure</Typography>
                </Box>

                <Box className="feature-item">
                  <VerifiedOutlinedIcon />
                  <Typography>AI Powered</Typography>
                </Box>

                <Box className="feature-item">
                  <VerifiedOutlinedIcon />
                  <Typography>24/7 Support</Typography>
                </Box>

                <Box className="feature-item">
                  <VerifiedOutlinedIcon />
                  <Typography>Trusted Doctors</Typography>
                </Box>

              </Box>

            </Box>
          </Grid>

          {/* Right Image */}

          <Grid item xs={12} md={6}>

            <Box className="hero-image">

              <img
                src={heroImage}
                alt="Healthcare"
              />

              {/* Floating Card 1 */}

              <Card className="floating-card doctor-card">

                <CardContent>

                  <LocalHospitalOutlinedIcon />

                  <Typography variant="h6">
                    Find Doctors
                  </Typography>

                  <Typography>
                    10,000+ Specialists
                  </Typography>

                </CardContent>

              </Card>

              {/* Floating Card 2 */}

              <Card className="floating-card consult-card">

                <CardContent>

                  <VideoCallOutlinedIcon />

                  <Typography variant="h6">
                    Consult Online
                  </Typography>

                  <Typography>
                    Instant Video Consultation
                  </Typography>

                </CardContent>

              </Card>

              {/* Floating Card 3 */}

              <Card className="floating-card lab-card">

                <CardContent>

                  <ScienceOutlinedIcon />

                  <Typography variant="h6">
                    Lab Tests
                  </Typography>

                  <Typography>
                    Book Tests Near You
                  </Typography>

                </CardContent>

              </Card>

            </Box>

          </Grid>

        </Grid>
      </Container>
    </section>
  );
}

export default Hero;