import { createContext, useState } from "react";

const AddRecipeContext = createContext();

export const AddRecipeContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    console.log("working");
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };
  return (
    <AddRecipeContext.Provider
      value={{ open, handleClickOpen, handleCloseDialog }}
    >
      {children}
    </AddRecipeContext.Provider>
  );
};

export default AddRecipeContext;
