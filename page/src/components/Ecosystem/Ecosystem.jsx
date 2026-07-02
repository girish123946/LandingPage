import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import MedicationOutlinedIcon from "@mui/icons-material/MedicationOutlined";
import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

import "./Ecosystem.scss";

const ecosystemData = [
  {
    id: 1,
    title: "Patients",
    icon: <PersonOutlineOutlinedIcon />,
    description:
      "Book appointments, consult doctors and access medical records securely.",
  },
  {
    id: 2,
    title: "Hospitals",
    icon: <LocalHospitalOutlinedIcon />,
    description:
      "Manage appointments, patient records and healthcare operations.",
  },
  {
    id: 3,
    title: "Laboratories",
    icon: <ScienceOutlinedIcon />,
    description:
      "Upload reports digitally and integrate diagnostics seamlessly.",
  },
  {
    id: 4,
    title: "Pharmacies",
    icon: <MedicationOutlinedIcon />,
    description:
      "Deliver medicines and manage prescriptions efficiently.",
  },
  {
    id: 5,
    title: "Insurance",
    icon: <HealthAndSafetyOutlinedIcon />,
    description:
      "Simplify insurance claims and healthcare policy management.",
  },
];

function Ecosystem() {
  return (
    <section className="ecosystem-section">
      <Container maxWidth="xl">

        <Typography className="ecosystem-heading">
          Explore Our Healthcare Ecosystem
        </Typography>

        <Typography className="ecosystem-subtitle">
          One connected platform bringing together every healthcare stakeholder.
        </Typography>

        <Grid container spacing={4}>

          {ecosystemData.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>

              <Card className="ecosystem-card">

                <CardContent>

                  <Box className="ecosystem-icon">
                    {item.icon}
                  </Box>

                  <Typography className="ecosystem-title">
                    {item.title}
                  </Typography>

                  <Typography className="ecosystem-description">
                    {item.description}
                  </Typography>

                </CardContent>

              </Card>

            </Grid>
          ))}

        </Grid>

        <Box className="ecosystem-button">

          <Button
            variant="contained"
            endIcon={<ArrowForwardOutlinedIcon />}
          >
            Explore Ecosystem
          </Button>

        </Box>

      </Container>
    </section>
  );
}

export default Ecosystem;