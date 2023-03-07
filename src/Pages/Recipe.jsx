import {
  Container,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { MdClose, MdOutlineEditNote } from "react-icons/md";
import { TbScaleOutline } from "react-icons/tb";
import { useLoaderData, useNavigate } from "react-router-dom";
import FullScreenDialog from "../Components/FullScreenDialog";
import IngredientTable from "../Components/IngredientTable";

export async function recipeLoader({ params }) {
  const recipe = params.recipeId;
  return recipe;
}

const Recipe = ({ params }) => {
  const navigate = useNavigate();
  const recipe = useLoaderData();
  console.log(recipe);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  console.log(useLoaderData());
  return (
    <Container>
      <Box sx={{ display: "flex", mb: ".25rem" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h4">Saffron Mayo</Typography>
          <Typography sx={{ mr: "auto" }} variant="overline">
            Ricky Flor
          </Typography>
          <Typography
            color="secondary"
            sx={{ padding: "1em" }}
            variant="overline"
          >
            Sauces
          </Typography>
        </Box>

        <Box>
          <IconButton>
            <TbScaleOutline />
          </IconButton>
        </Box>
        <Box>
          <IconButton onClick={() => setOpen(true)}>
            <MdOutlineEditNote />
          </IconButton>
        </Box>
        <Box>
          <IconButton onClick={() => navigate("/recipes")}>
            <MdClose />
          </IconButton>
        </Box>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6}>
          <IngredientTable />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Box sx={{ height: "65vh", width: "100%", overflow: "scroll" }}>
            <Typography variant="h4">Process</Typography>
            <Divider sx={{ marginY: ".5rem" }} />
            <Typography variant="overline" color="secondary">
              Step 1
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio nam
              ex exp autem neque velit at doloremque maiores ea, quae explicabo
              reiciendis illum quasi sint iure libero, enim reprehenderit.
            </Typography>
            <Typography variant="overline" color="secondary">
              Step 2
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio nam
              ex impedit expedita autem neque velit at doloremque maiores ea,
              quae explicabo reiciendis illum quasi sint iure libero, enim
              reprehenderit.
            </Typography>
            <Typography variant="overline" color="secondary">
              Step 3
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio nam
              ex impedit expedita autem neque velit at doloremque maiores ea,
              quae explicabo reiciendis illum quasi sint iure libero, enim
              reprehenderit.
            </Typography>
            <Typography variant="overline" color="secondary">
              Step 4
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio nam
              ex impedit expedita autem neque velit at doloremque maiores ea,
              quae explicabo reiciendis illum quasi sint iure libero, enim
              reprehenderit.
            </Typography>
            <Typography variant="overline" color="secondary">
              Step 5
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio nam
              ex impedit expedita autem neque velit at doloremque maiores ea,
              quae explicabo reiciendis illum quasi sint iure libero, enim
              reprehenderit.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <FullScreenDialog
        open={open}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
      />
    </Container>
  );
};

export default Recipe;
