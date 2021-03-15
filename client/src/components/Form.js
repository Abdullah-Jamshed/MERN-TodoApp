import React, { useState } from "react";
import { Grid, makeStyles, Typography, Avatar } from "@material-ui/core";
import { LockOutlined, Height } from "@material-ui/icons";
import clsx from "clsx";

import Input from "./Input";

const Form = () => {
  const classes = useStyles();

  const isSignUp = null;

  const showPassword = null;

  return (
    <div className={classes.root}>
      <form className={classes.formContainer} noValidate autoComplete='off'>
        <Grid container justify='center'>
          <Avatar className={classes.avatar}>
            <LockOutlined />
          </Avatar>
          {isSignUp ? (
            <>
              <Input required fullWidth label='email' name='email' type='email' />
              <Input required fullWidth label='Password' name='password' type={!showPassword ? "text" : "password"} />
            </>
          ) : (
            <>
              <Input required fullWidth label='Full Name' name='fullname' type='text' />
              <Input required fullWidth label='Email Address' name='email' type='email' />
              <Input required fullWidth label='Password' name='password' type={showPassword ? "text" : "password"} />
              <Input required fullWidth label='Confirm Password' name='confirmPassword' type={showPassword ? "text" : "password"} />
            </>
          )}
        </Grid>
      </form>
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
}));

export default Form;
