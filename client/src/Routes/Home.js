import React from "react";
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

  // REDUX STATE
  const { user } = useSelector((state) => state.AuthReducer);

  // FUNCTIONS

  const logoutHandler = () => {
    dispatch(logout());
    history.push("/");
  };

  return (
    <>
      <div style={{ backgroundColor: "red" }}>
        <h1>Home</h1>
        {user && (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user?.name} src={user?.imageUrl || user?.picture}>
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
  purple: {
    color: theme.palette.getContrastText(colors.deepPurple[500]),
    backgroundColor: colors.deepPurple[500],
  },
}));

export default Home;
