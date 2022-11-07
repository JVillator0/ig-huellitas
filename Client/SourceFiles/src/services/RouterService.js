import { withRouter } from 'react-router-dom';
import {Col, Container, Row} from "shards-react";
import MainSidebar from "../components/layout/MainSidebar/MainSidebar";
import MainNavbar from "../components/layout/MainNavbar/MainNavbar";
import MainFooter from "../components/layout/MainFooter";
import React, {useEffect} from "react";
import routes from "../routes";

const RouterHandler = ({ history, location }) => {
  const validateRoute = (routeCurrent) =>{
    var flag = false;
    routes.forEach(route =>{
      if (routeCurrent.toLowerCase() === route.path.toLowerCase()){
        flag = true;
      }
    })
    return flag
  }
  useEffect(() => {
    if (!validateRoute(location.pathname)){
      window.location.href = "/"
    }

  })
  history.listen((location, action) => {
    // location is an object like window.location
    if (!validateRoute(location.pathname)){
      //window.location.href = "/";
    }
  });
  return (
    <Container fluid>
      <Row>
      </Row>
    </Container>
  );
};

export default withRouter(RouterHandler);
