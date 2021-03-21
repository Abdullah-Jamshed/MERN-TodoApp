import React from "react";
import { useHistory } from "react-router-dom";

/// MATERIAL UI
import { Button, Typography, Avatar, makeStyles, colors, Grid, Paper, Container, Box, CardActions } from "@material-ui/core";

// REDUX
import { logout } from "../store/actions/AuthActions";
import { useSelector, useDispatch } from "react-redux";

// COMPONENT
import Navbar from "../components/Navbar";

const Home = () => {
  // STATES
  // const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  // REDUX STATE
  const { user } = useSelector((state) => state.AuthReducer);

  const items = [];

  // FUNCTIONS

  return (
    <>
      <Navbar />
      <Container>
        <Typography variant='h3' color='textPrimary' align='center' className={classes.appHeading}>
          Todo App
        </Typography>

        <Grid container className={classes.mainContainer}>
          <Grid item container xs={12} sm={6} md={8} justify='center' className={classes.itemsContainer}>
            {!items.length ? (
              <>
                <Grid item zeroMinWidth>
                  <Paper className={classes.BoxContainer} elevation={3}>
                    <Typography variant='h6' noWrap>
                      Heading Heading Heading
                    </Typography>
                    <Typography variant='subtitle2' color={"textSecondary"}>
                      Discription of todo List item Discription of todo List item Discription
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item zeroMinWidth>
                  <Paper className={classes.BoxContainer} elevation={3}>
                    <Typography variant='h6' noWrap>
                      Heading Heading Heading
                    </Typography>
                    <Typography variant='subtitle2' color={"textSecondary"}>
                      Discription of todo List item Discription of todo List item Discription
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item zeroMinWidth>
                  <Paper className={classes.BoxContainer} elevation={3}>
                    <Typography variant='h6' noWrap>
                      Heading Heading Heading
                    </Typography>
                    <Typography variant='subtitle2' color={"textSecondary"}>
                      Discription of todo List item Discription of todo List item Discription
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item zeroMinWidth>
                  <Paper className={classes.BoxContainer} elevation={3}>
                    <Typography variant='h6' noWrap>
                      Heading Heading Heading
                    </Typography>
                    <Typography variant='subtitle2' color={"textSecondary"}>
                      Discription of todo List item Discription of todo List item Discription
                    </Typography>
                    <CardActions>
                      <Button size='small'>Learn More</Button>
                    </CardActions>
                  </Paper>
                </Grid>
              </>
            ) : (
              <></>
            )}
          </Grid>
          <Grid item container xs={12} sm={6} md={4} className={classes.itemsContainer2}>
            <Grid item xs={12}>
              <Paper>
                <Typography variant='body1'>Form</Typography>
              </Paper>
            </Grid>
          </Grid>
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
  purple: {
    color: theme.palette.getContrastText(colors.deepPurple[500]),
    backgroundColor: colors.deepPurple[500],
  },
  appHeading: {
    padding: theme.spacing(3),
  },
  mainContainer: {
    "& > *": {},
    // backgroundColor: "red",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
    },
  },
  itemsContainer: {
    "& > *": {
      margin: theme.spacing(1.5),
    },
    // backgroundColor: "green",
  },
  itemsContainer2: {
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
  BoxContainer: {
    "& > *": {
      margin: theme.spacing(0.5),
    },
    padding: theme.spacing(3),
    // height: "150px",
    width: "220px",
    overflow: "hidden",
  },
}));

export default Home;
