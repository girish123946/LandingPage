

import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";

import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import MedicationOutlinedIcon from "@mui/icons-material/MedicationOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

import "./ServiceCards.scss";

function ServiceCards() {
  const services = [
    {
      id: 1,
      title: "Doctor Consultation",
      description:
        "Book appointments with verified doctors across multiple specialities.",
      icon: <MedicalServicesOutlinedIcon />,
    },
    {
      id: 2,
      title: "Lab Tests",
      description:
        "Book lab tests at home with certified laboratories.",
      icon: <ScienceOutlinedIcon />,
    },
    {
      id: 3,
      title: "Online Pharmacy",
      description:
        "Order medicines online and get them delivered to your doorstep.",
      icon: <MedicationOutlinedIcon />,
    },
    {
      id: 4,
      title: "Health Records",
      description:
        "Access prescriptions, reports and medical history securely.",
      icon: <DescriptionOutlinedIcon />,
    },
    {
      id: 5,
      title: "Insurance Claims",
      description:
        "Verify coverage, file claims and track approvals easily.",
      icon: <VerifiedUserOutlinedIcon />,
    },
    {
      id: 6,
      title: "Remote Monitoring",
      description:
        "Track your vitals and stay connected with your healthcare team.",
      icon: <MonitorHeartOutlinedIcon />,
    },
  ];

  return (
    <section className="services">
      <Container maxWidth="xl">

        <div className="services__heading">

          <Typography
            variant="subtitle1"
            className="services__subtitle"
          >
            EVERYTHING YOU NEED FOR BETTER HEALTHCARE
          </Typography>

          <Typography
            variant="h2"
            className="services__title"
          >
            Access care, diagnostics, medicines,
            records, insurance and AI-powered
            health services from a
            <span> single platform.</span>
          </Typography>

        </div>

        <Grid container spacing={3}>

          {services.map((service) => (

            <Grid
              key={service.id}
              size={{ xs: 12, sm: 6, md: 4, lg: 2 }}
            >

              <Card className="service-card">

                <CardContent>

                  <div className="service-card__icon">
                    {service.icon}
                  </div>

                  <Typography
                    variant="h6"
                    className="service-card__title"
                  >
                    {service.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    className="service-card__description"
                  >
                    {service.description}
                  </Typography>

                  <div className="service-card__footer">

                    <IconButton
                      className="service-card__button"
                    >
                      <ArrowForwardIosOutlinedIcon />
                    </IconButton>

                  </div>

                </CardContent>

              </Card>

            </Grid>

          ))}

        </Grid>

      </Container>
    </section>
  );
}

export default ServiceCards;