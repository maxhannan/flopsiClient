import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Button from "@mui/material/Button";
import PopMenu from "./PopMenu";
import { MdAdd } from "react-icons/md";
import { IconButton } from "@mui/material";
import { GiCook } from "react-icons/gi";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation().pathname;

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{ bgcolor: "#ffffff", borderBottom: 1, borderColor: "#c2c2c2" }}
    >
      <Toolbar>
        <Typography
          variant="h5"
          component="div"
          color="secondary"
          sx={{ flexGrow: 1 }}
        ></Typography>
        <div>
          <Button
            variant="outlined"
            elevation="0"
            startIcon={<MdAdd />}
            color="secondary"
            onClick={handleMenu}
          >
            Add
          </Button>
          <PopMenu anchorEl={anchorEl} handleClose={handleClose} />
          <IconButton
            variant="outlined"
            size="large"
            color="secondary"
            onClick={() => navigate("/auth/login")}
            sx={{ ml: "1rem" }}
          >
            <GiCook />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
