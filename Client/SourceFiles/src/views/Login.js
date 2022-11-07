import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import LoginForm from "../components/login/LoginForm";

const Login = () => (
  <Container fluid className="main-content-container px-5 ">
    <Row className="justify-content-center align-items-center vh-100">
      <Col lg="11" >
        <LoginForm />
      </Col>
    </Row>
  </Container>
);

export default Login;
