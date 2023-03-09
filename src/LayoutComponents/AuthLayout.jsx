import { Box, Container } from "@mui/system";
import { useState } from "react";
import { Outlet } from "react-router-dom";

import NavBar from "../Components/NavBar";
import { AuthContextProvider } from "../Context/AuthContext";

const AuthLayout = () => {
  return (
    <Box>
      <Container maxWidth="xl" sx={{ paddingY: "5em", paddingX: "0" }}>
        <Outlet />
      </Container>
    </Box>
  );
};

export default AuthLayout;
