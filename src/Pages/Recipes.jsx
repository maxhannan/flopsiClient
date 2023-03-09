import { Container } from "@mui/system";

import SearchAndFilter from "../Components/SearchAndFilter";
import RecipeFeed from "../Components/RecipeFeed";
import FullScreenDialog from "../Components/FullScreenDialog";
import { useContext } from "react";
import AddRecipeContext from "../Context/AddRecipeContext";
import RecipeAdder from "../Components/RecipeAdder";

const Recipes = () => {
  const { open, handleClickOpen, handleCloseDialog } =
    useContext(AddRecipeContext);
  return (
    <Container>
      <SearchAndFilter />
      <RecipeFeed itemNum={5} />
      <FullScreenDialog
        title={"Add Recipe"}
        open={open}
        handleClickOpen={handleClickOpen}
        handleClose={handleCloseDialog}
      >
        <RecipeAdder />
      </FullScreenDialog>
    </Container>
  );
};

export default Recipes;
