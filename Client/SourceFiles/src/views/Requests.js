import React from "react";
import { Container, Row, Col } from "shards-react";
import PageTitle from "../components/common/PageTitle";
import RequestCompContainer from "../components/user-profile-lite/RequestCompFetch.jsx";
import { Tabs, Tab } from "react-bootstrap";
import RequestComp from "../fetch-prueba/components/RequestComp";
import Fetch from "../fetch-prueba/components/fetch";


{/*
//RequestCompContainer type={"true"}
  <Container fluid className="main-content-container px-4">
    <Row noGutters className="page-header py-4">
      <PageTitle title="Solicitudes de adopción"  md="12" className="ml-sm-auto mr-sm-auto" />
    </Row>
    <Fetch/>
    </Container>  */}

const Requests = () => (

  <Container fluid className="main-content-container px-4">
    <Row noGutters className="page-header py-4">
      <PageTitle title="Solicitudes de adopción" md="12" className="ml-sm-auto mr-sm-auto" />
    </Row>
    <Tabs defaultActiveKey="MisSolicitudes" id="uncontrolled-tab-example" className="mb-3" >
      <Tab eventKey="Peticiones" title="Solicitudes Recibidas">
        <RequestCompContainer type={"true"} recd={true}/>
      </Tab>
      <Tab eventKey="MisSolicitudes" title="Solicitudes Enviadas">
        <RequestCompContainer recd={false}/>
      </Tab>
    </Tabs>


  </Container>
);

export default Requests;
