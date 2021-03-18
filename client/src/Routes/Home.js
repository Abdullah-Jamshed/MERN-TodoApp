import React, { useState } from "react";
import { useHistory } from "react-router-dom";

/// MATERIAL UI
import { Button, Typography, Avatar, makeStyles, colors } from "@material-ui/core";

// REDUX
import { logout } from "../store/actions/AuthActions";
import { useSelector, useDispatch } from "react-redux";

// COMPONENT

const Home = () => {
  // STATES
  // const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const { user } = useSelector((state) => state.AuthReducer);

  // FUNCTIONS

  const logoutHandler = () => {
    dispatch(logout());
    history.push("/");
  };

  return (
    <div>
      <h1>Home</h1>

      {user && (
        <div className={classes.profile}>
          <Avatar className={classes.purple} alt={user?.name} src={user?.imageUrl}>
            {user?.name.charAt(0)}
          </Avatar>
          <Typography className={classes.userName} variant='h6'>
            {user?.name}
          </Typography>
          <Button variant='contained' className={classes.logout} color='secondary' onClick={logoutHandler}>
            Logout
          </Button>
        </div>
      )}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 50px",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
    textDecoration: "none",
  },
  image: {
    marginLeft: "15px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "400px",
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
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  purple: {
    color: theme.palette.getContrastText(colors.deepPurple[500]),
    backgroundColor: colors.deepPurple[500],
  },
}));

export default Home;
