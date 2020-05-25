import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {routes} from  "./routes"

class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter routes={routes}>
        <Switch>
          {routes.map((route) => {
            return (
              <Route
                path={route.path}
                component={route.component}
                exact={route.exact}
                key={route.path}
              />
            );
          })}
          <Route 
              component={()=>{
                  return <div>Here will be an error</div>
              }}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default AppRouter;
