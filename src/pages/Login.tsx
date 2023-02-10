import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import DataUserCredentialsMock from "../database/user.json";
import {
  Box,
  Grid,
  Link,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../ultis/helperCookie";

interface UserCredentialLogin {
  username: string;
  password: string;
}

interface Props {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: React.FC<Props> = ({ isLogin, setIsLogin }) => {
  const navigate: (path: string) => void = useNavigate();

  useEffect(() => {
    if (isLogin === true) {
      navigate("/");
    }
  });

  const initalUser: UserCredentialLogin = {
    username: "",
    password: "",
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    for (let i in DataUserCredentialsMock) {
      if (DataUserCredentialsMock[i].username === existingUser.username) {
        if (DataUserCredentialsMock[i].password !== existingUser.password) {
          return setErrorMsg("You have entered the wrong password");
        }
        setCookie(existingUser.username);
        setIsLogin(true);
        return;
      }
    }
    return setErrorMsg(`Username does not exist`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExistingUser({
      ...existingUser,
      [e.target.name]: e.target.value,
    });
  };

  const [existingUser, setExistingUser] =
    useState<UserCredentialLogin>(initalUser);
  const [errorMsg, setErrorMsg] = useState<string>("");

  return (
    <>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          welcome to foodpanda!
        </Typography>
        <Box
          component="form"
          noValidate
          sx={{ mt: 10, mr: 3, ml: 3 }}
          onSubmit={(e) => handleLogin(e)}
        >
          {errorMsg && <Alert severity="error">{errorMsg}</Alert>}
          <TextField
            margin="normal"
            required
            fullWidth
            label="Username"
            name="username"
            value={existingUser.username}
            autoComplete="email"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            value={existingUser.password}
            onChange={handleChange}
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
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
            Sign In
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/register" variant="body2">
                No account yet? Register here
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Login;
