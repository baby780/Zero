import React from 'react';
import { RouterConfig } from "router/index_szd";
import routeEachd from "./utils/szd_routeEach";

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
            <Redirect from="/" to="/home" exact />
            {routeEachd(RouterConfig)}
          </Switch>
        </HashRouter>
      </div>

    )
  }
}



export default App;
