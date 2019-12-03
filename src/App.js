import React from 'react';
import { RouteConfig } from "router";
import routeEach from "utils/routeEach";
import routeEachs from "utils/routerEatch"
import { ConfigRouter } from "router/yzrouter"
import { HashRouter, Redirect, Switch } from "react-router-dom"

class App extends React.Component {
  render() {
    return (

      <div className="kly">
        <HashRouter>
          <Switch>
            <Redirect from="/" to="/Bohai" exact />
            {routeEach(RouteConfig)}
            <Redirect from="/" to="/homepage" exact />
            {routeEachs(ConfigRouter)}
          </Switch>
        </HashRouter>
      </div>

    )
  }
}


export default App;

