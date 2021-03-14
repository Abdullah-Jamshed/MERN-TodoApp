import React from "react";
import { Container, Grid, Box, makeStyles, Typography } from "@material-ui/core";

const Auth = () => {
  const classes = useStyles();
  return (
    <>
      <Container disableGutters={true} className={classes.container}>
        <Grid container className={classes.subContainer}>
          <Grid item xs={12} sm={5} md={4} lg={3} className={classes.gridItem1}>
            <Typography>Form</Typography>
          </Grid>

          <Grid component={Box} className={classes.gridItem2} item sm={7} md={8} lg={9}>
            <Typography className={classes.heading1} variant='h1' color='textSecondary'>
              Todo App
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {},
  container: {
    minHeight: "100vh",
    minWidth: "100vw",
    background: "linear-gradient(180deg, rgba(0,212,255,1) 0%, rgba(145,1,228,1) 100%)",
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
  },
  gridItem2: {
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(180deg, rgba(0,212,255,1) 0%, rgba(145,1,228,1) 100%)",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  heading1: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "80px",
    },
  },
}));

export default Auth;
