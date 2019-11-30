import React from 'react';
import {RouteConfig} from "router";
import routeEach from "utils/routeEach";
import routeEachs from "utils/routerEatch"
import {ConfigRouter} from "router/yzrouter"
import {HashRouter as Route,Switch,Redirect} from "react-router-dom";
class App extends React.Component{
  render(){
    return(
     <Route>
       <Switch>
         <Redirect from="/" to="/Bohai" exact/>
         {routeEach(RouteConfig)}
         <Redirect from="/" to="/homepage" exact />
          {routeEachs(ConfigRouter)} 
       </Switch>
     </Route>
    )
    
  }
  
}

export default App;

