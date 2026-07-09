import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
} from "@mui/material";

import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";

import ctaDoctor from "../../assets/images/cta-doctor.png";

import "./CTASection.scss";

function CTASection() {
  return (
    <section className="cta-section">
      <Container maxWidth="xl">
        <Grid
          container
          spacing={6}
          sx={{
            alignItems: "center",
          }}
        >
          {/* Left Image */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box className="cta-image">
              <img
                src={ctaDoctor}
                alt="Healthcare Team"
              />
            </Box>
          </Grid>

          {/* Right Content */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box className="cta-content">
              <Typography className="cta-title">
                Ready to take charge
                <br />
                of your health?
              </Typography>

              <Typography className="cta-description">
                Book an appointment or consult a doctor online
              </Typography>

              <Button
                variant="contained"
                className="appointment-btn"
                startIcon={<CalendarMonthOutlinedIcon />}
              >
                Book Appointment
              </Button>

              <Button
                variant="outlined"
                className="consult-btn"
                startIcon={<VideoCallOutlinedIcon />}
              >
                Consult Online
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default CTASection;