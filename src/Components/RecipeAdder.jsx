import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
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
import IngredientsSection from "./IngredientsSection";
import IngredientSummary from "./IngredientSummary";
import RecipeStep from "./RecipeStep";

const RecipeAdder = () => {
  return (
    <Container sx={{ my: "2rem" }} disableGutters>
      <Stack spacing={2}>
        <FormControlLabel
          control={<Switch color="secondary" defaultChecked />}
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
        <IngredientsSection />
        <RecipeStep />
        <RecipeStep />
        <RecipeStep />
        <RecipeStep />
        <Button variant="outlined" color="secondary">
          Add Step
        </Button>
      </Stack>
    </Container>
  );
};

export default RecipeAdder;
