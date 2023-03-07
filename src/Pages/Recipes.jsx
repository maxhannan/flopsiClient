import { Container } from "@mui/system";

import SearchAndFilter from "../Components/SearchAndFilter";
import RecipeFeed from "../Components/RecipeFeed";

const Recipes = () => {
  return (
    <Container>
      <SearchAndFilter />
      <RecipeFeed itemNum={5} />
    </Container>
  );
};

export default Recipes;
