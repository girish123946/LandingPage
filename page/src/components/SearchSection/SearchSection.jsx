import {
  Container,
  Paper,
  Button,
  TextField,
  MenuItem,
  Chip,
  InputAdornment,
  Box,
} from "@mui/material";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

import { useState } from "react";

import "./SearchSection.scss";

function SearchSection() {
  const [location, setLocation] = useState("Coimbatore");
  const [search, setSearch] = useState("");

  const popularSearches = [
    "Dermatologist",
    "Gynecologist",
    "Paediatrician",
    "Orthopaedic",
    "Dentist",
  ];

  const locations = [
    "Coimbatore",
    "Chennai",
    "Bangalore",
    "Hyderabad",
    "Mumbai",
    "Delhi",
  ];

  return (
    <section className="search-section">
      <Container maxWidth="xl">
        <Paper
          elevation={0}
          className="search-section__box"
        >
          <Box className="search-section__location">
            <TextField
              select
              fullWidth
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="location-field"
              slotProps={{
                select: {
                  IconComponent: KeyboardArrowDownOutlinedIcon,
                },
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationOnOutlinedIcon />
                    </InputAdornment>
                  ),
                },
              }}
            >
              {locations.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </TextField>
          </Box>

          <Box className="search-section__input">
            <TextField
              fullWidth
              placeholder="Search Doctors, Specialities, Clinics and Hospitals..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-field"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchOutlinedIcon />
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Box>

          <Box className="search-section__button">
            <Button
              variant="contained"
              className="search-btn"
            >
              Search
            </Button>
          </Box>
        </Paper>

        <Box className="popular-search">
          <h3 className="popular-search__title">
            Popular Searches:
          </h3>

          <Box className="popular-search__chips">
            {popularSearches.map((item) => (
              <Chip
                key={item}
                label={item}
                className="popular-chip"
                variant="outlined"
              />
            ))}
          </Box>
        </Box>
      </Container>
    </section>
  );
}

export default SearchSection;