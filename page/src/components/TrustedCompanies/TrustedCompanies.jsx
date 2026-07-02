import { Box, Container, Typography, Grid, Paper } from "@mui/material";

import "./TrustedCompanies.scss";

const companies = [
  "Apollo Hospitals",
  "Fortis",
  "Manipal",
  "Max Healthcare",
  "AIIMS",
  "Narayana Health",
];

function TrustedCompanies() {
  return (
    <section className="trusted-companies">
      <Container maxWidth="xl">

        <Typography className="trusted-title">
          Trusted by Leading Healthcare Organizations
        </Typography>

        <Grid container spacing={3} className="company-grid">

          {companies.map((company, index) => (
            <Grid item xs={6} sm={4} md={2} key={index}>

              <Paper elevation={0} className="company-card">

                <Typography className="company-name">
                  {company}
                </Typography>

              </Paper>

            </Grid>
          ))}

        </Grid>

      </Container>
    </section>
  );
}

export default TrustedCompanies;