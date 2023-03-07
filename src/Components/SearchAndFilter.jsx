import { Box, FormControl, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";
const SearchAndFilter = () => {
  const [menu, setMenu] = useState(10);

  const handleChange = (event) => {
    setMenu(event.target.value);
  };

  return (
    <Box display="flex">
      <TextField
        fullWidth
        color="secondary"
        label="Search Recipes"
        sx={{ width: "65%" }}
      />
      <FormControl sx={{ width: "34%", marginLeft: "auto" }}>
        <Select
          color="secondary"
          labelId="select"
          id="select"
          value={menu}
          displayEmpty
          onChange={handleChange}
        >
          <MenuItem value={10}>All Recipes</MenuItem>
          <MenuItem value={20}>Breads/Crackers/Wraps</MenuItem>
          <MenuItem value={30}>Spreads</MenuItem>
          <MenuItem value={40}>Raw & Cured</MenuItem>
          <MenuItem value={50}>Land & Sea</MenuItem>
          <MenuItem value={60}>Vegetables</MenuItem>
          <MenuItem value={70}>Spice Mix</MenuItem>
          <MenuItem value={80}>Dairy</MenuItem>
          <MenuItem value={90}>Pasta Dough</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SearchAndFilter;
