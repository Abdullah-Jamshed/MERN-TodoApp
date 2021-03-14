import { Router, Route, Switch } from "react-router-dom";

import Home from "../Routes/Home";
import Auth from "../Routes/Auth";
import NotFound from "../Routes/NotFound";
import history from "../config/history";

function App() {
  return (
    <div className='App'>
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={Auth} />
          {/* <Route exact path='/' component={Home} /> */}
          <Route exact path='*' component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
