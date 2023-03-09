import { createBrowserRouter } from "react-router-dom";
import AuthProtector from "./Components/AuthProtector";
import { AuthContextProvider } from "./Context/AuthContext";

import AuthLayout from "./LayoutComponents/AuthLayout";
import MainLayout from "./LayoutComponents/MainLayout";
import ErrorPage from "./Pages/Error";
import Login from "./Pages/Login";
import Recipe, { recipeLoader } from "./Pages/Recipe";
import Recipes from "./Pages/Recipes";
import Register from "./Pages/Register";

export const mainrouter = createBrowserRouter([
  {
    element: <AuthContextProvider />,
    children: [
      {
        path: "/auth",
        element: <AuthLayout />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "Register",
            element: <Register />,
          },
        ],
      },
      {
        path: "/",

        element: (
          <AuthProtector>
            <MainLayout />
          </AuthProtector>
        ),
        errorElement: <ErrorPage />,

        children: [
          {
            path: "recipes",
            element: <Recipes />,
          },
          {
            path: "recipes/:recipeId",
            element: <Recipe />,
            loader: recipeLoader,
          },
          {
            path: "prep",
          },
          {
            path: "calendar",
          },
          {
            path: "Chat",
          },
          {
            path: "convert",
          },
        ],
      },
    ],
  },
]);
