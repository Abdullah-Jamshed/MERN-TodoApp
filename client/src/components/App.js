import React from "react";

import { Router, Route, Switch } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";

// import Home from "../Routes/Home";
import Auth from "../Routes/Auth";
import NotFound from "../Routes/NotFound";
import history from "../config/history";

const App = () => {
  return (
    <div className='App'>
      <CssBaseline />
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={Auth} />
          {/* <Route exact path='/' component={Home} /> */}
          <Route exact path='*' component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
