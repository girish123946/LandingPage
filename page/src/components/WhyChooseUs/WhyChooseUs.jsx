import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import FolderSharedOutlinedIcon from "@mui/icons-material/FolderSharedOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import aiHealthImg from "../../assets/images/ai-health-insights.png";
import recordsImg from "../../assets/images/connected-records.png";
import securityImg from "../../assets/images/secure-network.png";
import careImg from "../../assets/images/continuous-care.png";

import "./WhyChooseUs.scss";

function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <Container maxWidth={false}>

        <Typography className="section-tag">
          WHY CHOOSE US?
        </Typography>

        <Typography className="section-title">
          Healthcare Powered by Intelligence
        </Typography>

        <div className="cards-row">

          {/* Card 1 */}
          <Card className="feature-card">
            <img src={aiHealthImg} alt="AI Health Insights" className="feature-image" />

            <CardContent>
              <Box className="icon-box">
                <PsychologyOutlinedIcon />
              </Box>

              <Typography className="card-title">
                AI Health Insights
              </Typography>

              <Typography className="card-description">
                Receive personalized health recommendations and risk assessments.
              </Typography>

              <div className="points">
                <div className="point-item">
                  <CheckCircleIcon />
                  <span>Instant symptom analysis</span>
                </div>

                <div className="point-item">
                  <CheckCircleIcon />
                  <span>Health risk assessment</span>
                </div>

                <div className="point-item">
                  <CheckCircleIcon />
                  <span>Personalized recommendations</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="feature-card">
            <img src={recordsImg} alt="Connected Medical Records" className="feature-image" />

            <CardContent>
              <Box className="icon-box">
                <FolderSharedOutlinedIcon />
              </Box>

              <Typography className="card-title">
                Connected Medical Records
              </Typography>

              <Typography className="card-description">
                Access prescriptions, reports and consultations from one place.
              </Typography>

              <div className="points">
                <div className="point-item">
                  <CheckCircleIcon />
                  <span>All records in one place</span>
                </div>

                <div className="point-item">
                  <CheckCircleIcon />
                  <span>Easy access anytime</span>
                </div>

                <div className="point-item">
                  <CheckCircleIcon />
                  <span>100% secure & private</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card className="feature-card">
            <img src={securityImg} alt="Secure Healthcare Network" className="feature-image" />

            <CardContent>
              <Box className="icon-box">
                <SecurityOutlinedIcon />
              </Box>

              <Typography className="card-title">
                Secure Healthcare Network
              </Typography>

              <Typography className="card-description">
                Enterprise-grade security and privacy protection.
              </Typography>

              <div className="points">
                <div className="point-item">
                  <CheckCircleIcon />
                  <span>Instant symptom analysis</span>
                </div>

                <div className="point-item">
                  <CheckCircleIcon />
                  <span>Health risk assessment</span>
                </div>

                <div className="point-item">
                  <CheckCircleIcon />
                  <span>Personalized recommendations</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card 4 */}
          <Card className="feature-card">
            <img src={careImg} alt="Continuous Care" className="feature-image" />

            <CardContent>
              <Box className="icon-box">
                <FavoriteBorderOutlinedIcon />
              </Box>

              <Typography className="card-title">
                Continuous Care
              </Typography>

              <Typography className="card-description">
                From appointments to follow-ups and monitoring.
              </Typography>

              <div className="points">
                <div className="point-item">
                  <CheckCircleIcon />
                  <span>Health tips & articles</span>
                </div>

                <div className="point-item">
                  <CheckCircleIcon />
                  <span>Lifestyle recommendations</span>
                </div>

                <div className="point-item">
                  <CheckCircleIcon />
                  <span>Connect with experts</span>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>

      </Container>
    </section>
  );
}

export default WhyChooseUs;