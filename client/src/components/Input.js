import React from "react";
import { Grid, TextField, makeStyles, InputAdornment, IconButton } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

const Input = ({ label, name, type }) => {
  const classes = useStyles();

  const handleShowPassword = () => {};

  return (
    <>
      <Grid item item xs={12} className={classes.root}>
        <TextField
          fullWidth
          variant='outlined'
          label={label}
          name={name}
          type={type}
          InputProps={
            name === "password" ||
            name === "confirmPassword"
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
