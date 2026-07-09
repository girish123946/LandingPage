import {
  Container,
  Card,
  Typography,
  Box,
} from "@mui/material";

import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";

import "./StatsSection.scss";

const statsData = [
  {
    value: "1M+",
    title: "Patients Supported",
    icon: <PsychologyOutlinedIcon />,
    color: "purple",
  },
  {
    value: "50K+",
    title: "Appointments Completed",
    icon: <EventAvailableOutlinedIcon />,
    color: "blue",
  },
  {
    value: "500+",
    title: "Healthcare Providers",
    icon: <LocalHospitalOutlinedIcon />,
    color: "violet",
  },
  {
    value: "99.9%",
    title: "Platform Availability",
    icon: <VerifiedOutlinedIcon />,
    color: "orange",
  },
];

function StatsSection() {
  return (
    <section className="stats-section">
      <Container maxWidth={false}>

        <Typography className="stats-subtitle">
          Our Impact in Numbers
        </Typography>

        <Typography className="stats-title">
          Healthcare you can trust,
          <br />
          backed by <span>real results</span>
        </Typography>

        <div className="stats-grid">

          {statsData.map((item, index) => (
            <Card
              key={index}
              className="stats-card"
            >
              <Box className={`icon-wrapper ${item.color}`}>
                {item.icon}
              </Box>

              <Typography className="stats-value">
                {item.value}
              </Typography>

              <Typography className="stats-label">
                {item.title}
              </Typography>
            </Card>
          ))}

        </div>

      </Container>
    </section>
  );
}

export default StatsSection;