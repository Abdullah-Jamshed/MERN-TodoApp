import React, { useState } from "react";
import { useHistory } from "react-router-dom";

/// MATERIAL UI
import { Button, Typography, Avatar, makeStyles } from "@material-ui/core";


// REDUX
import { logoutAction } from "../store/actions/AuthActions";
import { useSelector, useDispatch } from "react-redux";


// COMPONENT

const Home = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  console.log(user);
  const classes = useStyles();

  const dispatch = useDispatch();
  const history = useHistory();

  const logout = () => {
    dispatch(logoutAction());
    history.push("/");
    setUser(null);
  };

  return (
    <div>
      <h1>Home</h1>

      {user?.profileObj && (
        <div className={classes.profile}>
          <Avatar className={classes.purple} alt={user?.profileObj.name} src={user?.profileObj.imageUrl}>
            {user?.profileObj.name.charAt(0)}
          </Avatar>
          <Typography className={classes.userName} variant='h6'>
            {user?.profileObj.name}
          </Typography>
          <Button variant='contained' className={classes.logout} color='secondary' onClick={logout}>
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
    // color: theme.palette.getContrastText(deepPurple[500]),
    // backgroundColor: deepPurple[500],
  },
}));

export default Home;
