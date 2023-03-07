import { Stack } from "@mui/system";

import { v4 as uuidv4 } from "uuid";
import RecipeSummary from "../Components/RecipeSummary";

const RecipeFeed = ({ itemNum }) => {
  return (
    <Stack sx={{ mt: 2 }} spacing={1}>
      {Array.from(Array(itemNum)).map((a) => (
        <RecipeSummary key={uuidv4()} />
      ))}
    </Stack>
  );
};

export default RecipeFeed;
