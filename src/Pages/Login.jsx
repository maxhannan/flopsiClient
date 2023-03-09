import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { MdLock } from "react-icons/md";
import { LoadingButton } from "@mui/lab";

import { useContext } from "react";
import AuthContext from "../Context/AuthContext";

import { LoginMutation } from "../Utilities/AuthMutations";
import { useMutation } from "@apollo/client";

export default function Login() {
  const { authLogin } = useContext(AuthContext);

  const [login, { loading, error, data }] = useMutation(LoginMutation, {
    errorPolicy: "all",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const formInfo = new FormData(event.currentTarget);
    const variables = {
      username: formData.get("username"),
      password: formData.get("password"),
    };
    handleLogin(variables);
  };

  const handleLogin = async (variables) => {
    const result = await login({ variables });
    if (result.data) {
      const authInfo = result.data.logIn;
      authLogin(authInfo.user, authInfo.token);
    }
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
            error={error}
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
            error={error}
            helperText={error && error.message}
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
