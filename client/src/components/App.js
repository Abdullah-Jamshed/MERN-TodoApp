import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import history from "../config/history";

/// MATERIAL UI
import { CssBaseline } from "@material-ui/core";

// COMPONENT
import Home from "../Routes/Home";
import Auth from "../Routes/Auth";
import NotFound from "../Routes/NotFound";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../store/actions/AuthActions";

const App = () => {
  const dispatch = useDispatch();
  // const history = useHistory();

  // REDUX STATE
  const { isAuthenticated, isLoading } = useSelector((state) => state.AuthReducer);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <>
      <CssBaseline />
      <div className='App'>
        {isLoading ? (
          <div style={{ backgroundColor: "red" }}>
            <h1>Loading....</h1>
          </div>
        ) : (
          <>
            <BrowserRouter>
              <Switch>
                <Route exact path='/' component={Auth} />
                {isAuthenticated && <Route exact path='/home' component={Home} />}
                <Route exact path='*' component={NotFound} />
              </Switch>
            </BrowserRouter>
          </>
        )}
      </div>
    </>
  );
};

export default App;
