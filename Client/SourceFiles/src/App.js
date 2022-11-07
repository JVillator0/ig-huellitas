import React, {useEffect} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import routes from "./routes";
import withTracker from "./withTracker";

import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";
import "./assets/cardStyle.css";
import AuthService from "./services/AuthService";
export default () => {
  require('dotenv').config()
  let routesAuth = AuthService.getAuth() ? routes.filter(e=>e.path!=='Login' && e.path!=="registry") : routes.filter(e=> (e.path !== '/Requests' && e.path !== '/perfil' && e.path !== '/nueva-publicacion' )) ;
  return (
    <Router basename={process.env.REACT_APP_BASENAME || ""}>
      <div>
        {routesAuth.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={withTracker(props => {
                return (
                  <route.layout {...props}>
                    <route.component {...props} />
                  </route.layout>
                );
              })}
            />
          );
        })}
      </div>
    </Router>
  )
};
