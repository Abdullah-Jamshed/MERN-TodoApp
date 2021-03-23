import React, { useState } from "react";
import { useHistory } from "react-router-dom";

/// MATERIAL UI
import { Button, Typography, makeStyles, Grid, Paper, TextField } from "@material-ui/core";

// REDUX
import { useSelector, useDispatch } from "react-redux";
import { createTodo } from "../store/actions/ItemAction";

// COMPONENT
import Navbar from "./Navbar";

const TodoItemField = () => {
  // STATES
  const [form, setForm] = useState({
    title: "",
    discription: "",
  });

  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  // REDUX STATE
  const { user } = useSelector((state) => state.AuthReducer);

  // FUNCTIONS

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTodo(user.id, form));
  };

  return (
    <Grid item container xs={12} sm={6} md={4} className={classes.itemsContainer2}>
      <Grid item xs={12}>
        <Paper className={classes.FormContainer}>
          <Typography variant='h5'>Create Todo</Typography>
          <form onSubmit={handleSubmit} className={classes.fields}>
            <TextField
              name={"title"}
              variant={"outlined"}
              value={form.title}
              onChange={handleChange}
              fullWidth
              placeholder='Title'
              inputProps={{ maxLength: 14 }}
            />
            <TextField
              name={"discription"}
              variant={"outlined"}
              value={form.discription}
              onChange={handleChange}
              fullWidth
              placeholder='Discription'
              inputProps={{ maxLength: 30 }}
            />
            <Button type='submit' fullWidth variant={"contained"} color='primary'>
              create
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  itemsContainer2: {
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
  FormContainer: {
    padding: theme.spacing(3),
  },
  fields: {
    "& > *": {
      margin: theme.spacing(1),
    },
    marginTop: "20px",
  },
}));

export default TodoItemField;
