import React from "react";

/// MATERIAL UI
import { Grid, TextField, makeStyles, InputAdornment, IconButton } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

// REDUX
import { showPasswordAction, handleSignUpField, handleSignInField } from "../store/actions/FormActions";
import { useSelector, useDispatch } from "react-redux";

// COMPONENT

const Input = ({ label, name, type, isSignIn, helperText }) => {
  const { showPassword, signUpFormValues, signInFormValues } = useSelector((state) => state.FormReducer);
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleShowPassword = () => {
    dispatch(showPasswordAction(!showPassword));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (isSignIn) {
      dispatch(handleSignInField({ ...signInFormValues, [name]: value }));
    } else {
      dispatch(handleSignUpField({ ...signUpFormValues, [name]: value }));
    }
  };

  return (
    <>
      <Grid item xs={12} className={classes.root}>
        <TextField
          fullWidth
          onChange={handleChange}
          variant='outlined'
          label={label}
          name={name}
          type={type}
          helperText={helperText}
          value={isSignIn ? signInFormValues[name] : signUpFormValues[name]}
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
