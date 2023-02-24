import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container, TextField} from '@material-ui/core';
import LockoutLineIcon from '@material-ui/icons/LockOutlined';
import {GoogleLogin, GoogleOAuthProvider} from '@react-oauth/google'
import useStyles from './styles';
import Input from './Input';

import jwt_decode from 'jwt-decode';

const Auth = () => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false)

    const handleShowPassword = () =>setShowPassword((prevShowPassword)=> !prevShowPassword);

    const handleSubmit = () => {

    }

    const handleChange = () => {}

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        handleShowPassword(false);
    }

    const googleSuccess = async (res) => {
        const result = jwt_decode(res?.credential);
        console.log(result)
    }
    
    const googleFailure = (error) => {
        console.log(error)
        console.log("Google Sign In was unsuccessful, Try Again Later")
    }

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockoutLineIcon />
                </Avatar>
                <Typography variant="h5">{isSignup ? 'Sign Up' : 'sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                    <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                                </>
                            )}
                            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                            { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password"/>}
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {isSignup ? 'Sign Up' :' Sign In'}
                    </Button>

                    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
                        <GoogleLogin 
                            onSuccess={googleSuccess}
                            onFailure={googleFailure}
                            cookiePolicy="single_host_origin"
                            />
                    </GoogleOAuthProvider>

                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                { isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
                            </Button>
                        </Grid>

                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth