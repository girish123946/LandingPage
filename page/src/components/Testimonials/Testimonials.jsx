import {
  Container,
  Typography,
  Card,
  Avatar,
  Box,
} from "@mui/material";

import StarIcon from "@mui/icons-material/Star";

import user1 from "../../assets/images/user1.png";
import user2 from "../../assets/images/user2.png";
import user3 from "../../assets/images/user3.png";
import user4 from "../../assets/images/user4.png";

import "./Testimonials.scss";

const testimonials = [
  {
    title: "Fast & Reliable Lab Tests",
    review:
      "I scheduled my lab test online and received reports quickly.",
    name: "John Smith",
    role: "Business Analyst",
    image: user1,
  },
  {
    title: "Consult Online",
    review:
      "Convenient online consultations from home.",
    name: "Vikram Rao",
    role: "Accountant",
    image: user2,
  },
  {
    title: "Insurance Support",
    review:
      "Smooth and hassle-free insurance support.",
    name: "Kavya",
    role: "Teacher",
    image: user3,
  },
  {
    title: "Hospital Care",
    review:
      "Quick booking and quality care.",
    name: "Rahul Sharma",
    role: "Software Engineer",
    image: user4,
  },
];

function Testimonials() {
  return (
    <section className="testimonials">
      <Container maxWidth="xl">
        <div className="testimonials-wrapper">

          {/* Left Side */}

          <div className="testimonials-left">

            <Typography className="subtitle">
              WHAT OUR PATIENTS SAY
            </Typography>

            <Typography className="title">
              Trusted by Millions
            </Typography>

            <Typography className="description">
              From booking to recovery, we make healthcare
              simple, accessible and personalized for you.
            </Typography>

          </div>

          {/* Right Side */}

          <div className="testimonials-right">

            {testimonials.map((item, index) => (
              <Card
                className="review-card"
                key={index}
              >
                <Box className="rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon key={star} />
                  ))}

                  <span>5/5</span>
                </Box>

                <Typography className="review-title">
                  {item.title}
                </Typography>

                <Typography className="review-text">
                  "{item.review}"
                </Typography>

                <Box className="user-info">
                  <Avatar
                    src={item.image}
                    alt={item.name}
                  />

                  <Box>
                    <Typography className="user-name">
                      {item.name}
                    </Typography>

                    <Typography className="user-role">
                      {item.role}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            ))}

          </div>

        </div>
      </Container>
    </section>
  );
}

export default Testimonials;