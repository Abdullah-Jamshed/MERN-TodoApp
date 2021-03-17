import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

/// MATERIAL UI
import { Grid, makeStyles, Paper, Typography, Button, Avatar } from "@material-ui/core";
import { LockOutlined, Height, Language } from "@material-ui/icons";
import GoogleLogin from "react-google-login";

// REDUX
import { auth } from "../store/actions/AuthActions";
import { useSelector, useDispatch } from "react-redux";

// COMPONENT
import Input from "./Input";

// AXIOS
import authAPI from "../config/api/auth";

const Form = () => {
  // STATES
  const [isSignIn, setIsSignIn] = useState(true);

  // REDUX STATES
  const { showPassword, signUpFormValues, signInFormValues } = useSelector((state) => state.AuthReducer);

  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  // FUNCTIONS

  const switchMode = () => {
    setIsSignIn(!isSignIn);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignIn) {
      authAPI.post("/auth/signIn", signInFormValues);
      console.log("Try To Signin");
    } else {
      authAPI.post("/auth/signUp", signUpFormValues);
      console.log("Try To Signup");
    }
  };

  const onGoogleLoginSuccess = async (res) => {
    const { tokenId, profileObj } = await res;
    dispatch(auth({ tokenId, profileObj }));
    console.log("Google Login Success");
    history.push("/home");
  };

  const onGoogleLoginFailure = () => {
    console.log("Google Login Failed");
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={1}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography className={classes.heading} component='h1' variant='h5'>
          {isSignIn ? "Sign In" : "Sign Up"}
        </Typography>
        <form onSubmit={handleSubmit} className={classes.formContainer} noValidate autoComplete='off'>
          <Grid container>
            {isSignIn ? (
              <>
                <Input required isSignIn={isSignIn} fullWidth label='email' name='email' type='email' />
                <Input required isSignIn={isSignIn} fullWidth label='Password' name='password' type={showPassword ? "text" : "password"} />
                <GoogleLogin
                  clientId='325270459770-nt27eeql2bin42l3n6siqbsljun3ql0o.apps.googleusercontent.com'
                  render={(renderProps) => (
                    <Button
                      className={classes.googleButton}
                      variant={"contained"}
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                      color='primary'
                      fullWidth
                      startIcon={<Language />}>
                      Google SignIn
                    </Button>
                  )}
                  onSuccess={onGoogleLoginSuccess}
                  onFailure={onGoogleLoginFailure}
                />
              </>
            ) : (
              <>
                <Input required isSignIn={isSignIn} fullWidth label='Full Name' name='fullname' type='text' />
                <Input required isSignIn={isSignIn} fullWidth label='Email Address' name='email' type='email' />
                <Input required isSignIn={isSignIn} fullWidth label='Password' name='password' type={showPassword ? "text" : "password"} />
                <Input
                  required
                  isSignIn={isSignIn}
                  fullWidth
                  label='Confirm Password'
                  name='confirmPassword'
                  type={showPassword ? "text" : "password"}
                />
              </>
            )}
          </Grid>
          <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
            {isSignIn ? "Sign In" : "Sign Up"}
          </Button>
          <Grid container justify='flex-end'>
            <Grid item>
              <Button className={classes.button2} onClick={switchMode}>
                {isSignIn ? "Don't have an account? Sign Up" : "Already have an account? Sign in"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {},
    margin: theme.spacing(3),
    textAlign: "center",
    width: "100%",
  },
  formContainer: {
    "& > *": {},
  },
  avatar: {
    margin: theme.spacing(3),
    backgroundColor: theme.palette.secondary.main,
    width: "60px",
    height: "60px",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
  },
  heading: {
    margin: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  button2: {
    fontSize: "12px",
    color: theme.palette.primary.main,
  },
}));

export default Form;
