import React from 'react';
// import { Button } from 'antd-mobile';
import {ConfigRouter} from "router/yzrouter"
import routeEach from "utils/routerEatch"
import {HashRouter,Redirect,Switch} from "react-router-dom"

class App extends React.Component {
  render() {
    return (

      <div className="kly">
        <HashRouter>
        <Switch>
            <Redirect from="/" to="/homepage" exact />
            {routeEach(ConfigRouter)} 
        </Switch>
      </HashRouter>
    </div>

    )
  }
}

export default App;
