import React from "react";
import { makeStyles, AppBar, Toolbar, Typography, Button, IconButton, Avatar, Hidden } from "@material-ui/core";
import { Menu } from "@material-ui/icons";

import { useHistory } from "react-router-dom";

// REDUX
import { logout } from "../store/actions/AuthActions";
import { useSelector, useDispatch } from "react-redux";

// COMPONENT

const Navbar = () => {
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
    <div className={classes.root}>
      {user && (
        <AppBar position='static'>
          <Toolbar>
            <Hidden smUp>
              <IconButton edge='end' className={classes.menuButton} color='inherit' aria-label='menu'>
                <Menu />
              </IconButton>
            </Hidden>
            <Typography variant='h6' className={classes.title}>
              Todo App
            </Typography>

            <Hidden xsDown>
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
            </Hidden>
          </Toolbar>
        </AppBar>
      )}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  profile: {
    display: "flex",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1.5),
    },
  },
}));

export default Navbar;
