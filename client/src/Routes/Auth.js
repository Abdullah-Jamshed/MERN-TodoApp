import React from "react";
import { Container, Grid, Box, makeStyles, Typography } from "@material-ui/core";

const Auth = () => {
  const classes = useStyles();
  return (
    <Container disableGutters={true} className={classes.container}>
      <Grid container className={classes.subContainer}>
        <Grid item xs={12} sm={4} lg={3} className={classes.gridItem1}>
          <Typography>Todo</Typography>
        </Grid>

        {/* <Box component={Grid} className={classes.gridItem2} item sm={6} display={{ xs: "none", sm: "block" }}>
          <h1>Auth</h1>
        </Box> */}

        <Grid component={Box} className={classes.gridItem2} item sm={8} lg={9} display={{ xs: "none", sm: "block" }}>
          <Typography variant='h1'>Todo App</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  //   root: {
  //       padding:"0px",
  //   },
  container: {
    minHeight: "100vh",
    minWidth: "100vw",
  },
  subContainer: {
    minHeight: "100vh",
  },
  gridItem1: {
    height: "100%",
    borderRadius: "0px 30px 30px 0px",
    background: "linear-gradient(180deg, rgba(0,212,255,1) 0%, rgba(145,1,228,1) 100%)",
    [theme.breakpoints.down("xs")]: {
      backgroundColor: "#fff",
      background:"#fff",
      borderRadius: "0px",
    },
  },
  gridItem2: {
    height: "100%",
    // background: "linear-gradient(180deg, rgba(0,212,255,1) 0%, rgba(145,1,228,1) 100%)",
    // textAlign: "center",
  },
}));

export default Auth;
