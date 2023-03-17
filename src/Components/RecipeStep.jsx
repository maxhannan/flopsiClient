import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

const RecipeStep = ({ step }) => {
  const saved = true;
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography gutterBottom variant="h5" color="secondary" component="div">
          Step 1
        </Typography>
        {saved ? (
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem sint
            maxime inventore ex reiciendis esse ad modi veritatis, unde fugit
            cum delectus in mollitia dolorem? Amet accusamus dolorum officia
            eveniet!, Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolorum veniam ut non voluptatem porro rerum doloremque sint cum?
            Natus velit aliquid quis repellat fugiat suscipit rem dolore ad
            labore unde!
          </Typography>
        ) : (
          <TextField
            sx={{ mt: "1rem" }}
            variant="outlined"
            label="Edit Method"
            fullWidth
            multiline
            value="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem sint
maxime inventore ex reiciendis esse ad modi veritatis, unde fugit
cum delectus in mollitia dolorem? Amet accusamus dolorum officia
eveniet!, Lorem ipsum dolor sit amet consectetur adipisicing elit.
Dolorum veniam ut non voluptatem porro rerum doloremque sint cum?
Natus velit aliquid quis repellat fugiat suscipit rem dolore ad
labore unde!"
          />
        )}
      </CardContent>
      <CardActions>
        <Button variant="outlined" size="medium" color="secondary">
          {saved ? "edit" : "save"}
        </Button>
      </CardActions>
    </Card>
  );
};

export default RecipeStep;
