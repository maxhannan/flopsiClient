import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import { MdEdit } from "react-icons/md";

const IngredientSummary = ({ ingredient, id, handleToggle, ingredients }) => {
  return (
    <Stack>
      <Box sx={{ display: "flex" }}>
        <Typography color="secondary" sx={{ flex: 2 }} variant="body1">
          {ingredient.ingredientName}
        </Typography>
        <Typography sx={{ flex: 1 }} variant="body1">
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
