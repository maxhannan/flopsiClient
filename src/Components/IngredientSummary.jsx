import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import { MdEdit } from "react-icons/md";

import { Avatar, Card, CardActionArea, CardHeader } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { purple } from "@mui/material/colors";
import { MdOutlineChevronRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const IngredientSummary = ({ ingredient, id, handleToggle, ingredients }) => {
  return (
    <Stack>
      <Box sx={{ display: "flex" }}>
        <Typography color="secondary" sx={{ flex: 2 }} variant="h6">
          {ingredient.ingredientName}
        </Typography>
        <Typography sx={{ flex: 1 }} variant="h6">
          {ingredient.qty + "   " + ingredient.unit}
        </Typography>
        <Box>
          <IconButton
            onClick={() => handleToggle(id, ingredients)}
            size="small"
          >
            <MdEdit />
          </IconButton>
        </Box>
      </Box>
      <Divider />
    </Stack>
  );
};

export default IngredientSummary;
