import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import Navbar from "../components/Navbar/Navbar";

import "./MainLayout.scss";

function MainLayout() {
  return (
    <Box className="main-layout">
      <Navbar />

      <main className="main-content">
        <Outlet />
      </main>
    </Box>
  );
}

export default MainLayout;