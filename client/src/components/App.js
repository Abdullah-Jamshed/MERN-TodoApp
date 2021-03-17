import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import history from "../config/history";


/// MATERIAL UI
import { CssBaseline } from "@material-ui/core";

// COMPONENT
import Home from "../Routes/Home";
import Auth from "../Routes/Auth";
import NotFound from "../Routes/NotFound";


const App = () => {
  return (
    <div className='App'>
      <>
        <CssBaseline />
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Auth} />
            <Route exact path='/home' component={Home} />
            <Route exact path='*' component={NotFound} />
          </Switch>
        </BrowserRouter>
      </>
    </div>
  );
};

export default App;
