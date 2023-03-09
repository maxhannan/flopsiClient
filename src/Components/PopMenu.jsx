import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

const PopMenu = ({ anchorEl, handleClose, items }) => {
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
      {items.map((i) => (
        <MenuItem key={i.name} onClick={i.cb}>
          {i.name}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default PopMenu;
