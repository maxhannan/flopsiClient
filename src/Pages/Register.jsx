import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { LoadingButton } from "@mui/lab";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { MdLock } from "react-icons/md";
import { RegisterMutation } from "../Utilities/AuthMutations";
import { useMutation } from "@apollo/client";
import { useContext } from "react";
import AuthContext from "../Context/AuthContext";

const theme = createTheme();

export default function Register() {
  const { authLogin } = useContext(AuthContext);

  const [RegisterAction, { loading, error, data }] = useMutation(
    RegisterMutation,
    {
      errorPolicy: "all",
    }
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    const formValues = new FormData(event.currentTarget);
    const variables = {
      displayName:
        formValues.get("firstName") + " " + formValues.get("lastName"),
      username: formValues.get("username"),
      email: formValues.get("email"),
      chef: true,
      password: formValues.get("password"),
    };
    handleRegister(variables);
  };
  const handleRegister = async (variables) => {
    const result = await RegisterAction({ variables });
    console.log(result);
    if (result.data) {
      const authInfo = result.data.register;
      authLogin(authInfo.user, authInfo.token);
    }
  };

  return (
    <ThemeProvider theme={theme}>
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
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="Username"
                  error={error && error.message.includes("User")}
                  helperText={
                    error && error.message.includes("User") ? error.message : ""
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  error={error && error.message.includes("Email")}
                  helperText={
                    error && error.message.includes("Email")
                      ? error.message
                      : ""
                  }
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <LoadingButton
              type="submit"
              color="secondary"
              loading={loading}
              fullWidth
              disableElevation
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign up
            </LoadingButton>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/auth/login">
                  <Typography color="secondary" variant="body2">
                    Already have an account? Sign in
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
