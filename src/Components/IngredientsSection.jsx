import { Button, Divider, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useState } from "react";
import { MdAdd } from "react-icons/md";
import IngredientAdder from "./IngredientAdder";
import IngredientSummary from "./IngredientSummary";
import { v4 } from "uuid";
import BasicTable from "./TestTable";
const IngredientsSection = () => {
  const [ingredients, setIngredients] = useState([]);
  const addIngredient = () => {
    const newIngredient = {
      name: "",
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
    <>
      <Stack spacing={1}>
        <Box sx={{ display: "flex" }}>
          <Typography sx={{ flex: "1" }} variant="h5">
            Ingredients
          </Typography>
          <Box>
            <Button
              variant="outlined"
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
      <Stack spacing={2}>
        {console.log(ingredients)}

        {ingredients.map((i) => {
          if (!i.saved) {
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
          }
        })}
        {ingredients.length > 0 && (
          <BasicTable rows={ingredients} handleToggle={handleToggle} />
        )}
      </Stack>
    </>
  );
};

export default IngredientsSection;
