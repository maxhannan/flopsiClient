import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { useContext, useState } from "react";
import { Container } from "@mui/system";
import BottomNav from "../Components/BottomNav";
import NavBar from "../Components/NavBar";
import { AddRecipeContextProvider } from "../Context/AddRecipeContext";

const MainLayout = () => {
  return (
    <AddRecipeContextProvider>
      <Box>
        <NavBar />
        <Container
          maxWidth="xl"
          sx={{ paddingTop: "5em", paddingBottom: "7em", paddingX: "0" }}
        >
          {" "}
          <Outlet />
        </Container>
        <BottomNav />
      </Box>
    </AddRecipeContextProvider>
  );
};

export default MainLayout;
