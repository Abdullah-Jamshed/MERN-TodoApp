import React, { useEffect, useState, useCallback } from "react";
import { Grid, TextField, makeStyles, InputAdornment, IconButton } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { showPasswordAction, handleSignUpField, handleSignInField } from "../store/actions/AuthActions";
import { useSelector, useDispatch } from "react-redux";

const Input = ({ label, name, type, isSignIn }) => {
  const { showPassword, signUpFormValues, signInFormValues } = useSelector((state) => state.AuthReducer);
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleShowPassword = () => {
    dispatch(showPasswordAction(!showPassword));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(isSignIn);
    if (isSignIn) {
      dispatch(handleSignInField({ ...signInFormValues, [name]: value }));
      console.log(signInFormValues);
    } else {
      dispatch(handleSignUpField({ ...signUpFormValues, [name]: value }));
      console.log(signUpFormValues);
    }
  };

  return (
    <>
      <Grid item item xs={12} className={classes.root}>
        <TextField
          fullWidth
          onChange={handleChange}
          variant='outlined'
          label={label}
          name={name}
          type={type}
          InputProps={
            name === "password" || name === "confirmPassword"
              ? {
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton onClick={handleShowPassword}>{type === "password" ? <Visibility /> : <VisibilityOff />}</IconButton>
                    </InputAdornment>
                  ),
                }
              : null
          }
        />
      </Grid>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginBottom: theme.spacing(4),
    },
  },
}));

export default Input;
