import React, { useState } from "react";
import { useHistory } from "react-router-dom";

/// MATERIAL UI
import { Grid, makeStyles, Paper, Typography, Button, Avatar } from "@material-ui/core";
import { LockOutlined, Language } from "@material-ui/icons";
import GoogleLogin from "react-google-login";

// REDUX
import { useSelector, useDispatch } from "react-redux";
import { successLogin, successSignup } from "../store/actions/AuthActions";

// COMPONENT
import Input from "./Input";

// AXIOS
import authAPI from "../config/api/auth";

const Form = () => {
  // STATES
  const [isSignIn, setIsSignIn] = useState(true);
  const [helperText, setHelperText] = useState("");

  // REDUX STATES
  const { showPassword, signUpFormValues, signInFormValues } = useSelector((state) => state.FormReducer);

  const classes = useStyles();
  const history = useHistory();

  // REDUX DISPATCH ACTION
  const dispatch = useDispatch();

  // FUNCTIONS

  const switchMode = () => {
    setHelperText("");
    setIsSignIn(!isSignIn);
  };

  const handleSubmit = (e) => {
    setHelperText("");
    e.preventDefault();
    if (isSignIn) {
      authAPI
        .post("/auth/signIn", signInFormValues)
        .then((res) => {
          dispatch(successLogin(res.data));
        })
        .catch((error) => {
          // if (error.response.status == 409) alert(error.response.data.toUpperCase());
          setHelperText(error.response.data.toUpperCase());
        });
    } else {
      authAPI
        .post("/auth/signUp", signUpFormValues)
        .then((res) => {
          dispatch(successSignup(res.data));
        })
        .catch((error) => {
          // if (error.response.status == 409) alert(error.response.data.toUpperCase());
          setHelperText(error.response.data.toUpperCase());
        });
    }
  };

  const onGoogleLoginSuccess = async (res) => {
    const { tokenId, profileObj } = await res;
    dispatch(successLogin({ token: tokenId, user: profileObj }));
    history.push("/home");
  };

  const onGoogleLoginFailure = () => {};

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
                <Input helperText={helperText} required isSignIn={isSignIn} fullWidth label='email' name='email' type='email' />
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
                <Input helperText={helperText} required isSignIn={isSignIn} fullWidth label='Email Address' name='email' type='email' />
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
          <Button
            disabled={
              isSignIn
                ? signInFormValues.email && signInFormValues.password
                  ? false
                  : true
                : signUpFormValues.email &&
                  signUpFormValues.password === signUpFormValues.confirmPassword &&
                  signUpFormValues.password &&
                  signUpFormValues.confirmPassword
                ? false
                : true
            }
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}>
            {isSignIn ? "Sign In" : "Sign Up"}
          </Button>
          <Grid container justify='flex-end'>
            <Grid item>
              <Button
                // disabled={
                //   isSignIn
                //     ? signInFormValues.email && signInFormValues.password
                //       ? false
                //       : true
                //     : signUpFormValues.email &&
                //       signUpFormValues.password == signUpFormValues.confirmPassword &&
                //       signUpFormValues.password &&
                //       signUpFormValues.confirmPassword
                //     ? false
                //     : true
                // }
                className={classes.button2}
                onClick={switchMode}>
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
