import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";

import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import MedicationOutlinedIcon from "@mui/icons-material/MedicationOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyOutlined";
import EmergencyOutlinedIcon from "@mui/icons-material/EmergencyOutlined";

import "./Services.scss";

const services = [
  {
    id: 1,
    title: "Doctor Consultation",
    description:
      "Connect with experienced doctors through online and offline appointments.",
    icon: <MedicalServicesOutlinedIcon />,
  },
  {
    id: 2,
    title: "Online Pharmacy",
    description:
      "Order medicines from trusted pharmacies with fast doorstep delivery.",
    icon: <MedicationOutlinedIcon />,
  },
  {
    id: 3,
    title: "Lab Test Booking",
    description:
      "Book diagnostic tests and receive reports digitally from certified labs.",
    icon: <ScienceOutlinedIcon />,
  },
  {
    id: 4,
    title: "Hospital Network",
    description:
      "Access nearby hospitals and specialist healthcare centers effortlessly.",
    icon: <LocalHospitalOutlinedIcon />,
  },
  {
    id: 5,
    title: "Health Insurance",
    description:
      "Manage insurance claims and healthcare policies in one secure platform.",
    icon: <HealthAndSafetyOutlinedIcon />,
  },
  {
    id: 6,
    title: "Emergency Support",
    description:
      "Quick emergency response with ambulance booking and instant alerts.",
    icon: <EmergencyOutlinedIcon />,
  },
];

function Services() {
  return (
    <section className="services-section">
      <Container maxWidth="xl">

        <Typography className="services-heading">
          Our Healthcare Services
        </Typography>

        <Typography className="services-subtitle">
          Everything you need for better healthcare in one intelligent ecosystem.
        </Typography>

        <Grid container spacing={4}>

          {services.map((service) => (
            <Grid item xs={12} sm={6} md={4} key={service.id}>

              <Card className="service-card">

                <CardContent>

                  <Box className="service-icon">
                    {service.icon}
                  </Box>

                  <Typography className="service-title">
                    {service.title}
                  </Typography>

                  <Typography className="service-description">
                    {service.description}
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

export default Services;