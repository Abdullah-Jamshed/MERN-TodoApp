import React from "react";
import {
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Avatar,
  Hidden,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ExitToApp from "@material-ui/icons/ExitToApp";

import { useHistory } from "react-router-dom";

// REDUX
import { logout } from "../store/actions/AuthActions";
import { useSelector, useDispatch } from "react-redux";

// COMPONENT

const Navbar = () => {
  // STATES
  // const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  // REDUX STATE
  const { user } = useSelector((state) => state.AuthReducer);

  // FUNCTIONS

  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
              <IconButton edge='end' onClick={handleMenu} className={classes.menuButton} color='inherit' aria-label='menu'>
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Typography variant='h6' className={classes.title}>
              Todo App
            </Typography>

            <div className={classes.profile}>
              <Avatar className={classes.purple} alt={user?.name} src={user?.imageUrl || user?.picture}>
                {user?.name.charAt(0)}
              </Avatar>
              <Hidden xsDown>
                <Typography className={classes.userName} variant='h6'>
                  {user?.name}
                </Typography>
                <Button variant='contained' className={classes.logout} color='secondary' onClick={logoutHandler}>
                  Logout
                </Button>
              </Hidden>
            </div>

            <Menu
              id='menu-appbar'
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              open={open}
              onClose={handleClose}>
              {/* <MenuItem className={classes.detailDrop}> */}

              <div className={classes.detailDrop}>
                <Avatar className={classes.purple} alt={user?.name} src={user?.imageUrl || user?.picture}>
                  {user?.name.charAt(0)}
                </Avatar>
                <Typography className={classes.userName} variant='h6'>
                  {user?.name}
                </Typography>
              </div>
              {/* </MenuItem> */}
              <MenuItem onClick={logoutHandler}>
                <ListItemIcon>
                  <ExitToApp fontSize='small' />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
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
    "& > *": {
      margin: theme.spacing(1.5),
    },
    display: "flex",
    alignItems: "center",
  },
  detailDrop: {
    // cursor: "default",
    // "&:active": {
    //   backgroundColor: "#fff",
    // },
    "& > *": {
      margin: theme.spacing(1.5),
    },
    display: "flex",
    alignItems: "center",
    padding: "0px 10px 0px 10px",
    outline: "none",
  },
}));

export default Navbar;
