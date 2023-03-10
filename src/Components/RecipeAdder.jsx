import {
  Autocomplete,
  Box,
  Button,
  Divider,
  FormControlLabel,
  IconButton,
  MenuItem,
  Select,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { Container, Stack } from "@mui/system";
import { useState } from "react";
import { MdAdd } from "react-icons/md";
import { v4 } from "uuid";

import IngredientAdder from "./IngredientAdder";
import IngredientSummary from "./IngredientSummary";

const RecipeAdder = () => {
  const [ingredients, setIngredients] = useState([]);
  const addIngredient = () => {
    const newIngredient = {
      ingredientName: "",
      linkedRecipe: null,
      qty: "",
      unit: "",
      orderNum: "",
      saved: false,
      id: v4(),
    };
    setIngredients([...ingredients, newIngredient]);
    console.log(ingredients);
  };
  const handleSave = (ingredient) => {
    const newIngredients = ingredients.map((i) => {
      if (i.id === ingredient.id) {
        return ingredient;
      }
      return i;
    });

    setIngredients(newIngredients);
    handleToggle(ingredient.id, newIngredients);
  };

  const handleDelete = (id) => {
    const newIngredients = ingredients.filter((i) => i.id !== id);
    setIngredients(newIngredients);
  };

  const handleToggle = (id, ingredientList) => {
    const newIngredients = ingredientList.map((i) => {
      if (i.id === id) {
        i.saved = !i.saved;
      }
      return i;
    });
    setIngredients(newIngredients);
  };

  return (
    <Container sx={{ my: "2rem" }}>
      <Stack spacing={2}>
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Is Component"
        />
        <TextField label="Recipe Name" fullWidth />
        <Select color="secondary" value={10} labelId="select" id="select">
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
        <Stack spacing={1}>
          <Box sx={{ display: "flex" }}>
            <Typography sx={{ flex: "1" }} variant="h5">
              Ingredients
            </Typography>
            <Box>
              <Button
                variant="contained"
                disableElevation
                startIcon={<MdAdd />}
                color="secondary"
                onClick={addIngredient}
              >
                Add
              </Button>
            </Box>
          </Box>
          <Divider />
        </Stack>
        {ingredients.map((i) => {
          if (i.saved) {
            return (
              <IngredientSummary
                key={i.id}
                ingredient={i}
                id={i.id}
                ingredients={ingredients}
                handleToggle={handleToggle}
              />
            );
          }
          return (
            <IngredientAdder
              key={i.id}
              id={i.id}
              ingredient={i}
              handleDelete={handleDelete}
              handleToggle={handleToggle}
              handleSave={handleSave}
            />
          );
        })}
      </Stack>
    </Container>
  );
};

export default RecipeAdder;
