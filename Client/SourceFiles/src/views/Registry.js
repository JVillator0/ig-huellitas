import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import RegistryForm from "../components/registry/RegistryForm";

const Registry = () => (
  <Container fluid className="main-content-container px-5">

    <Row noGutters className="page-header py-4">
      <PageTitle  md="12" className="ml-sm-auto mr-sm-auto" />
    </Row>
    <Row>
      <Col lg="12">
        <RegistryForm />
      </Col>
    </Row>
  </Container>
);

export default Registry;
