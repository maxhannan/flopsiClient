import { Box, Container } from "@mui/system";
import { useState } from "react";
import { Outlet } from "react-router-dom";

import NavBar from "../Components/NavBar";
import { AuthContextProvider } from "../Context/AuthContext";

const AuthLayout = () => {
  const [open, setOpen] = useState(false);

  const handleDialogOpen = () => {
    setOpen(true);
  };
  const handleDialogClose = () => {
    setOpen(false);
  };
  return (
    <Box>
      <NavBar />
      <Container maxWidth="xl" sx={{ paddingY: "5em", paddingX: "0" }}>
        <Outlet />
      </Container>
    </Box>
  );
};

export default AuthLayout;
