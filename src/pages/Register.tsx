import {
  Box,
  Container,
  CssBaseline,
  Typography,
  Grid,
  TextField,
  FormControlLabel,
  Button,
  Link,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface UserRegisterInputs {
  username: string;
  password: string;
  passwordConfirm: string;
  email: string;
}

interface Props {
  isLogin: boolean;
}

const initalUser: UserRegisterInputs = {
  username: "",
  password: "",
  passwordConfirm: "",
  email: "",
};

const Register: React.FC<Props> = ({ isLogin }) => {
  const navigate: (path: string) => void = useNavigate();

  useEffect(() => {
    if (isLogin === true) {
      navigate("/");
    }
  }, []);

  const [newUser, setNewUser] = useState<UserRegisterInputs>(initalUser);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (newUser.password !== newUser.passwordConfirm) {
      setErrorMsg(`password does not match`);
      return;
    }
    // sent newUser to database
    // implement dynamic password checking when the user types
    // implement an error message box that can display specific error msgs
    // if database result have username and email, if username exist, then throw error
    // if username and email is unique, success
    // once success, there will be page animation
    console.log(newUser);
  };
  return (
    <>
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
          <Typography component="h1" variant="h5">
            Register an Account
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 10, mr: 3, ml: 3 }}
          >
            <Grid container spacing={2}>
              {/* Do we need first name and last name? */}
              {/* <Grid item xs={12} sm={6}>
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
              </Grid> */}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  value={newUser.username}
                  onChange={handleChange}
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
                  value={newUser.email}
                  onChange={handleChange}
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
                  value={newUser.password}
                  autoComplete="new-password"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="passwordConfirm"
                  label="Confrim Password"
                  type="password"
                  id="passwordConfirm"
                  value={newUser.passwordConfirm}
                  autoComplete="confirm-password"
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                ":hover": {
                  backgroundColor: "#E21B70",
                },
                backgroundColor: "#FF2B85",
                mt: 3,
                mb: 2,
              }}
            >
              Register
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
    </>
  );
};

export default Register;
