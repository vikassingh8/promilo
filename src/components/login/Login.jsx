import React, { useState } from "react";

import sha256 from "crypto-js/sha256";

import { Alert, Button, Container, FormControl, Snackbar, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const login_url = "https://apiv2stg.promilo.com/user/oauth/token";
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [errorStatus, setErrorStatus] = useState(false);
    const navigate = useNavigate();

    // hashing password function
    const hashPassword = (plainPassword) => {
        return sha256(plainPassword);
    }

    // login handler function
    const submitHandler = async (e) => {
        e.preventDefault();

        // Check for the specific email and password combination
        if (username === "test45@yopmail.com" && password === "Test@123") {
            // Simulate a successful login
            const accessToken = "your_mocked_access_token";
            localStorage.setItem("token", accessToken);
            navigate('/products');
        } else {
            // Display an error for incorrect credentials
            setErrorStatus(true);
            setError("Invalid email or password");
        }
    };

    // handle error alert
    const closeErrorAlert = () => {
        setErrorStatus(false);
    }

    return (
        <div>
            <Container component="main" maxWidth="xs">
                <Typography variant="h4">
                    Login
                </Typography>
                <FormControl>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        label="Email"
                        name="username"
                        type="email"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        label="Password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <Button type="submit" variant="contained" color="primary" onClick={submitHandler}>
                        Login
                    </Button>
                </FormControl>
                <Snackbar open={errorStatus} autoHideDuration={3000} onClose={closeErrorAlert}>
                    <Alert severity="error">
                        {error}
                    </Alert>
                </Snackbar>
            </Container>
        </div>
    );
}

export default Login;
