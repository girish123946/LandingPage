// src/components/Ecosystem/Ecosystem.jsx

import { Container, Typography, Grid, Button, Card, CardContent } from "@mui/material";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import MedicationOutlinedIcon from "@mui/icons-material/MedicationOutlined";
import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

import "./Ecosystem.scss";

function Ecosystem() {
  const ecosystemData = [
    {
      id: 1,
      title: "Patients",
      description: "Manage your health and access care.",
      icon: <PersonOutlineOutlinedIcon />,
    },
    {
      id: 2,
      title: "Doctors",
      description: "Doctor care and consultations.",
      icon: <MedicalServicesOutlinedIcon />,
    },
    {
      id: 3,
      title: "Hospitals",
      description: "Streamline optierations and patient care.",
      icon: <LocalHospitalOutlinedIcon />,
    },
    {
      id: 4,
      title: "Laboratories",
      description: "Accurate tests and timely reports.",
      icon: <ScienceOutlinedIcon />,
    },
    {
      id: 5,
      title: "Pharmacies",
      description: "Dispense and deliver medicine with ease.",
      icon: <MedicationOutlinedIcon />,
    },
    {
      id: 6,
      title: "Insurance",
      description: "Simplify policies and claims.",
      icon: <HealthAndSafetyOutlinedIcon />,
    },
  ];

  return (
    <section className="ecosystem">
      <Container maxWidth="xl">

        <div className="ecosystem__header">

          <Typography
            variant="subtitle1"
            className="ecosystem__subtitle"
          >
            ONE CONNECTED HEALTHCARE NETWORK
          </Typography>

          <Typography
            variant="h3"
            className="ecosystem__title"
          >
            Built to Connect every participant in the healthcare journey
          </Typography>

          <Typography
            variant="body1"
            className="ecosystem__description"
          >
            From booking to recovery,we make healthcare simple, accessible and personalized for you
        
    
        </Typography>

        </div>

        <Grid container spacing={3}>

          {ecosystemData.map((item) => (

            <Grid
              key={item.id}
              size={{ xs: 12, sm: 6, md: 4, lg: 2 }}
            >

              <Card className="ecosystem-card">

                <CardContent>

                  <div className="ecosystem-card__icon">
                    {item.icon}
                  </div>

                  <Typography
                    variant="h6"
                    className="ecosystem-card__title"
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    className="ecosystem-card__description"
                  >
                    {item.description}
                  </Typography>

                  <div className="ecosystem-card__footer">
                    <ArrowForwardOutlinedIcon />
                  </div>

                </CardContent>

              </Card>

            </Grid>

          ))}

        </Grid>

        <div className="ecosystem__button">
          <Button
            variant="contained"
            className="explore-btn"
          >
            Explore Ecosystem
          </Button>
        </div>

      </Container>
    </section>
  );
}

export default Ecosystem;