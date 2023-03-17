import {
  Autocomplete,
  Button,
  Icon,
  IconButton,
  TextField,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useState } from "react";
import { MdClose, MdDelete } from "react-icons/md";
import { v4 } from "uuid";
import top100Films from "../Utilities/FAKELIST.JSX";
const IngredientAdder = ({
  id,
  handleDelete,
  handleToggle,
  handleSave,
  ingredient,
}) => {
  const [updatedIngredient, setUpdatedIngredient] = useState(ingredient);

  return (
    <Stack spacing={2}>
      <Box sx={{ display: "flex" }}>
        <TextField
          multiline
          sx={{ flex: "3", mr: ".5em" }}
          label="Ingredient Name"
          value={updatedIngredient.name}
          onChange={(e) =>
            setUpdatedIngredient({
              ...updatedIngredient,
              name: e.target.value,
            })
          }
        />

        <IconButton
          onClick={() => handleDelete(id)}
          sx={{ width: "50px" }}
          variant="outlined"
          disableElevation
          color="secondary"
        >
          <MdDelete />
        </IconButton>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          sx={{ flex: "3", mr: ".5em" }}
          options={top100Films}
          renderInput={(params) => (
            <TextField {...params} label="Link to recipe..." />
          )}
        />
        <TextField
          sx={{ flex: "1", mr: ".5em" }}
          label="Qty"
          value={updatedIngredient.qty}
          onChange={(e) =>
            setUpdatedIngredient({ ...updatedIngredient, qty: e.target.value })
          }
        />
        <TextField
          sx={{ flex: "1" }}
          label="Unit"
          value={updatedIngredient.unit}
          onChange={(e) =>
            setUpdatedIngredient({ ...updatedIngredient, unit: e.target.value })
          }
        />
      </Box>
      <Button
        color="secondary"
        variant="outlined"
        onClick={() => {
          handleSave(updatedIngredient);
        }}
      >
        Save
      </Button>
    </Stack>
  );
};

export default IngredientAdder;
