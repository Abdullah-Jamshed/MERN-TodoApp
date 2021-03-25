import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

/// MATERIAL UI
import { Button, Typography, makeStyles, Grid, Paper, TextField } from "@material-ui/core";

// REDUX
import { useSelector, useDispatch } from "react-redux";
import { createTodo, selectItemObj, updateTodo } from "../store/actions/ItemAction";

// COMPONENT
import Navbar from "./Navbar";

const TodoItemField = () => {
  // STATES
  const [form, setForm] = useState({
    title: "",
    discription: "",
  });

  // const [form, setForm] = useState({
  //   title: "",
  //   discription: "",
  // });

  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  // REDUX STATE
  const { user } = useSelector((state) => state.AuthReducer);
  const { selectedObj } = useSelector((state) => state.ItemReducer);

  // FUNCTIONS

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedObj) {
      dispatch(updateTodo(user.id, { ...form, _id: selectedObj._id }));
      dispatch(selectItemObj(null));
      clearForm();
      return;
    }
    dispatch(createTodo(user.id, form));
    clearForm();
  };
  const clearForm = () => {
    setForm({ title: "", discription: "" });
  };

  // LIFECYCLE
  useEffect(() => {
    if (selectedObj) {
      setForm({
        title: selectedObj.title,
        discription: selectedObj.discription,
      });
    }
  }, [selectedObj]);

  return (
    <Grid item container xs={12} sm={6} md={4} className={classes.itemsContainer2}>
      <Grid item xs={12}>
        <Paper className={classes.FormContainer}>
          <Typography variant='h5'>{selectedObj ? "Update Todo" : "Create Todo"}</Typography>
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
              {selectedObj ? "Update" : "Create"}
            </Button>
            {selectedObj && (
              <Button
                onClick={() => {
                  clearForm();
                  dispatch(selectItemObj(null));
                }}
                fullWidth
                variant={"contained"}
                color='primary'>
                cancel
              </Button>
            )}
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
