import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

const PopMenu = ({ anchorEl, handleClose }) => {
  return (
    <Menu
      id="menu-appbar"
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}>Add Recipe</MenuItem>
      <MenuItem>Add Category</MenuItem>
    </Menu>
  );
};

export default PopMenu;
