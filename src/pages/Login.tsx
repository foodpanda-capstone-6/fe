import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Box, Grid, Link, TextField, Typography, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { setAuthCookie } from "../ultis/helperCookie";

interface UserCredentialLoginFields {
    username: string;
    password: string;
}

interface Props {
    isAuthenticated: boolean;
    setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const tryLogin = () => {
    return [];
};

const initialUserFields = (): UserCredentialLoginFields => {
    return {
        username: "",
        password: "",
    };
};

const Login: React.FC<Props> = ({
    isAuthenticated,
    setAuthenticated: SetAuthenticated,
}) => {
    const navigate: (path: string) => void = useNavigate();

    useEffect(() => {
        if (isAuthenticated === true) {
            navigate("/");
        }
    });

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetch("http://localhost:8081/auth", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: userFields.username,
                password: userFields.password,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                console.log(data.message);

                if (data.message !== "") {
                    return setErrorMsg(data.message);
                }

                setAuthCookie("username", data.data.username);
                setAuthCookie("token", data.data.token);
                SetAuthenticated(true);
            });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserFields({
            ...userFields,
            [e.target.name]: e.target.value,
        });
    };

    const [userFields, setUserFields] = useState<UserCredentialLoginFields>(
        initialUserFields()
    );
    const [errorMsg, setErrorMsg] = useState<string>("");

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Box
                    component="img"
                    sx={{
                        width: "100%",
                    }}
                    alt="Login Banner"
                    src="../src/assets/images/LoginBanner.png"
                />
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
                        value={userFields.username}
                        autoComplete="email"
                        autoFocus
                        onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        value={userFields.password}
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
