import React, { useState, useEffect } from "react";
import { Grid, makeStyles, Paper, Typography, Button, Avatar } from "@material-ui/core";
import { LockOutlined, Height } from "@material-ui/icons";

import { useSelector, useDispatch } from "react-redux";

import Input from "./Input";

const Form = () => {
  const { showPassword } = useSelector((state) => state.AuthReducer);
  const classes = useStyles();
  // const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(false);

  const switchMode = () => {
    setIsSignIn(!isSignIn);
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
        <form className={classes.formContainer} noValidate autoComplete='off'>
          <Grid container>
            {isSignIn ? (
              <>
                <Input required isSignIn={isSignIn} fullWidth label='email' name='email' type='email' />
                <Input required isSignIn={isSignIn} fullWidth label='Password' name='password' type={showPassword ? "text" : "password"} />
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
