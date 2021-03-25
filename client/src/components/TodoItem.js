import React, { useState } from "react";
import { useHistory } from "react-router-dom";

/// MATERIAL UI
import {
  Button,
  Typography,
  Avatar,
  makeStyles,
  colors,
  Grid,
  Paper,
  Container,
  Box,
  CardActions,
  Card,
  CardMedia,
  CardContent,
  TextField,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

// REDUX
import { logout } from "../store/actions/AuthActions";
import { deleteTodo, selectItemObj } from "../store/actions/ItemAction";
import { useSelector, useDispatch } from "react-redux";

// COMPONENT
import Navbar from "../components/Navbar";
import TodoItemField from "../components/TodoItemField";

const TodoItem = ({ item }) => {
  // STATES
  const [form, setForm] = useState({
    tile: "",
    discription: "",
  });

  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  // REDUX STATE
  const { user } = useSelector((state) => state.AuthReducer);

  // FUNCTIONS

  return (
    <Grid item zeroMinWidth>
      <Paper className={classes.BoxContainer} elevation={3}>
        <Typography variant='h6' noWrap>
          {item.title}
        </Typography>
        <Typography variant='subtitle2' color={"textSecondary"}>
          {item.discription}
        </Typography>
        <div align='end'>
          <Button size='small' onClick={() => dispatch(selectItemObj(item))}>
            <EditIcon fontSize='small' />
          </Button>
          <Button size='small' onClick={() => dispatch(deleteTodo(user.id, item._id))}>
            <DeleteIcon fontSize='small' />
          </Button>
        </div>
      </Paper>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  BoxContainer: {
    "& > *": {
      margin: theme.spacing(0.5),
    },
    padding: theme.spacing(3),
    width: "250px",
    overflow: "hidden",
  },
}));

export default TodoItem;
