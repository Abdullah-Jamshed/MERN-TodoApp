import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import history from "../config/history";

/// MATERIAL UI
import { Container, Grid, CircularProgress, CssBaseline, makeStyles } from "@material-ui/core";

// COMPONENT
import Home from "../Routes/Home";
import Auth from "../Routes/Auth";
import NotFound from "../Routes/NotFound";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../store/actions/AuthActions";

const App = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  // const history = useHistory();

  // REDUX STATE
  const { isLoading } = useSelector((state) => state.AuthReducer);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <React.Fragment>
      <CssBaseline />

      <div className='App'>
        {isLoading ? (
          <Container className={classes.subContainer}>
            <Grid container style={{ minHeight: "100vh" }} alignItems='center' justify='center'>
              <CircularProgress />
            </Grid>
          </Container>
        ) : (
          <>
            <BrowserRouter>
              <Switch>
                <Route exact path='/' component={Auth} />
                <Route exact path='/home' component={Home} />
                <Route exact path='*' component={NotFound} />
              </Switch>
            </BrowserRouter>
          </>
        )}
      </div>
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme) => ({
  subContainer: {
    minHeight: "100vh",
  },
}));

export default App;
