import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

/// MATERIAL UI
import { Container, Grid, Box, makeStyles, Typography, CircularProgress } from "@material-ui/core";

// REDUX
import { useSelector } from "react-redux";
// import { loadUser } from "../store/actions/AuthActions";

// COMPONENT
import Form from "../components/Form";

const Auth = () => {
  // STATES
  const [loader, setloader] = useState(true);

  // REDUX STATE
  const { user } = useSelector((state) => state.AuthReducer);

  const classes = useStyles();
  const history = useHistory();

  // REDUX DISPATCH ACTION
  // const dispatch = useDispatch();

  // LIFECYCLES

  useEffect(() => {
    if (user) {
      history.push("/home");
    }
    setloader(false);
  }, [user]);

  return (
    <>
      {!loader ? (
        <Container disableGutters={true} className={classes.container}>
          <Grid container className={classes.subContainer}>
            <Grid item xs={12} sm={5} md={5} lg={4} className={classes.gridItem1}>
              <Form />
            </Grid>

            <Grid component={Box} className={classes.gridItem2} item sm={7} md={7} lg={8}>
              <Typography className={classes.heading1} variant='h1' >
                Todo App
              </Typography>
            </Grid>
          </Grid>
        </Container>
      ) : (
        <Container className={classes.subContainer}>
          <Grid container style={{ minHeight: "100vh" }} alignItems='center' justify='center'>
            <CircularProgress />
          </Grid>
        </Container>
      )}
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {},
  container: {
    minHeight: "100vh",
    minWidth: "100vw",
    // background: "linear-gradient(to right, rgba(0,212,255,1) 0%, rgba(145,1,228,1) 100%)",
    // background: "linear-gradient(to right, #00f260, #0575e6)",
    background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
  },
  subContainer: {
    minHeight: "100vh",
  },
  gridItem1: {
    minHeight: "100vh",
    borderRadius: "0px 30px 30px 0px",
    backgroundColor: "#fff",
    display: "flex",

    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      backgroundColor: "#fff",
      borderRadius: "0px",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "0px 30px 0px 30px",
    },
  },
  gridItem2: {
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    // background: "linear-gradient(180deg, rgba(0,212,255,1) 0%, rgba(145,1,228,1) 100%)",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  heading1: {
    color:"#fff",
    [theme.breakpoints.down("sm")]: {
      fontSize: "80px",
    },
  },
}));

export default Auth;
