import React, { useState, useEffect } from "react";
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
  CircularProgress,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

// REDUX
import { logout } from "../store/actions/AuthActions";
import { fetchTodos } from "../store/actions/ItemAction";
import { useSelector, useDispatch } from "react-redux";

// COMPONENT
import Navbar from "../components/Navbar";
import TodoItemField from "../components/TodoItemField";
import TodoItem from "../components/TodoItem";

const Home = () => {
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
  const { todos, isLoading } = useSelector((state) => state.ItemReducer);
  // console.log(todos);

  const items = [
    {
      title: "Title1",
      discription: "Discription OF something I dont know",
    },
    {
      title: "Title2",
      discription: "Discription OF something I dont know",
    },
    {
      title: "Title3",
      discription: "Discription OF something I dont know",
    },
  ];

  // FUNCTIONS

  // LIFECYCLES

  useEffect(() => {
    if (user) dispatch(fetchTodos(user.id));
  }, [user]);

  return (
    <>
      <Navbar />
      <Container>
        <Typography variant='h3' color='textPrimary' align='center' className={classes.appHeading}>
          Todo App
        </Typography>

        <Grid container className={classes.mainContainer}>
          <Grid item container xs={12} sm={6} md={8} justify='center' className={classes.itemsContainer}>
            {!isLoading ? (
              todos.length ? (
                <>
                  {todos.map((item) => (
                    <TodoItem item={item} />
                  ))}
                </>
              ) : (
                <Typography variant='h6' align='center'>
                  No Items
                </Typography>
              )
            ) : (
              <CircularProgress />
            )}
          </Grid>
          <TodoItemField />
        </Grid>
      </Container>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  image: {
    marginLeft: "15px",
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "400px",
  },
  userName: {
    display: "flex",
    alignItems: "center",
  },

  appHeading: {
    padding: theme.spacing(3),
  },
  mainContainer: {
    "& > *": {},
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
    },
  },
  itemsContainer: {
    "& > *": {
      margin: theme.spacing(1.5),
    },
  },
}));

export default Home;
