import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { RouterProvider } from "react-router-dom";
import { mainrouter } from "./Router";
const theme = createTheme();
import { createClient, Provider } from "urql";
const client = createClient({
  url: "http://localhost:4000/graphql",
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider value={client}>
      <CssBaseline>
        <ThemeProvider theme={theme}>
          <RouterProvider router={mainrouter} />
        </ThemeProvider>
      </CssBaseline>
    </Provider>
  </React.StrictMode>
);
