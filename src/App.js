import React from 'react';
import { RouterConfig } from "router/index_szd";
import routeEach from "./utils/routeEach";
import { HashRouter as Route, Switch, Redirect } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <Route>
        <Switch>
          <Redirect from="/" to="/home" exact />
          {routeEach(RouterConfig)}
        </Switch>
      </Route>

    )
  }
}



export default App;
