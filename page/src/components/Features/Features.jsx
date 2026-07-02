import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

import PsychologyAltOutlinedIcon from "@mui/icons-material/PsychologyAltOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

import "./Features.scss";

const features = [
  {
    id: 1,
    icon: <PsychologyAltOutlinedIcon />,
    title: "AI Health Assistant",
    description:
      "Smart AI assistant helps patients book appointments and receive healthcare guidance instantly.",
  },
  {
    id: 2,
    icon: <LocalHospitalOutlinedIcon />,
    title: "Smart Hospital",
    description:
      "Connect hospitals, doctors, laboratories and pharmacies through one healthcare platform.",
  },
  {
    id: 3,
    icon: <MonitorHeartOutlinedIcon />,
    title: "Health Monitoring",
    description:
      "Monitor health records, appointments and reports with real-time healthcare insights.",
  },
  {
    id: 4,
    icon: <SecurityOutlinedIcon />,
    title: "Secure Healthcare",
    description:
      "Advanced encryption keeps patient medical records secure and protected at all times.",
  },
];

function Features() {
  return (
    <section className="features-section">
      <Container maxWidth="xl">

        <Typography className="section-heading">
          Why Choose Our AI Healthcare Platform?
        </Typography>

        <Typography className="section-description">
          Everything you need to manage healthcare efficiently with Artificial
          Intelligence.
        </Typography>

        <Grid container spacing={4}>

          {features.map((feature) => (
            <Grid item xs={12} sm={6} md={3} key={feature.id}>

              <Card className="feature-card">

                <CardContent>

                  <Box className="feature-icon">
                    {feature.icon}
                  </Box>

                  <Typography className="feature-title">
                    {feature.title}
                  </Typography>

                  <Typography className="feature-text">
                    {feature.description}
                  </Typography>

                </CardContent>

              </Card>

            </Grid>
          ))}

        </Grid>

      </Container>
    </section>
  );
}

export default Features;