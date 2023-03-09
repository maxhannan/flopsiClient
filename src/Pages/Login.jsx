import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Await, Link, Navigate, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { MdLock } from "react-icons/md";

import { LoginMutation } from "../Utilities/AuthMutations";
import { LoadingButton } from "@mui/lab";

import { useContext } from "react";
import AuthContext, { AuthContextProvider } from "../Context/AuthContext";
import { useMutation } from "@apollo/client";

export default function Login() {
  const { authLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const [login, { data, loading, error }] = useMutation(LoginMutation);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formInfo = new FormData(event.currentTarget);
    handleLogin(formInfo);
  };

  const handleLogin = async (formData) => {
    const variables = {
      username: formData.get("username"),
      password: formData.get("password"),
    };
    const result = await login({ variables });
    const authInfo = result.data.logIn;
    authLogin(authInfo.user, authInfo.token);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <MdLock />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            color="secondary"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            color="secondary"
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <LoadingButton
            type="submit"
            color="secondary"
            loading={loading}
            fullWidth
            disableElevation
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </LoadingButton>
          <Grid container>
            <Grid item xs>
              <Link to="/auth/register">
                <Typography color="primary" variant="body2">
                  Forgot password?
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link to="/auth/register">
                <Typography color="primary" variant="body2">
                  Don't have an account? Sign Up
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
