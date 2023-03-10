import {
  FormControlLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
} from "@mui/material";
import { Container, Stack } from "@mui/system";

const RecipeAdder = () => {
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
      </Stack>
    </Container>
  );
};

export default RecipeAdder;
