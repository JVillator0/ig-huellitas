import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Form,
  Alert
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import Colors from "../components/components-overview/Colors";
import Checkboxes from "../components/components-overview/Checkboxes";
import RadioButtons from "../components/components-overview/RadioButtons";
import ToggleButtons from "../components/components-overview/ToggleButtons";
import SmallButtons from "../components/components-overview/SmallButtons";
import SmallOutlineButtons from "../components/components-overview/SmallOutlineButtons";
import NormalButtons from "../components/components-overview/NormalButtons";
import NormalOutlineButtons from "../components/components-overview/NormalOutlineButtons";
import Forms from "../components/components-overview/Forms";
import FormValidation from "../components/components-overview/FormValidation";
import CompleteFormExample from "../components/components-overview/CompleteFormExample";

const ComponentsOverview = () => (
  <div>
    <Container fluid className="px-0">
      <Alert className="mb-0">
        <i className="fa fa-info mx-2"></i> How you doin'? I'm just a friendly, good-looking notification message and I come in all the colors you can see below. Pretty cool, huh?
      </Alert>
    </Container>
    <Container fluid className="main-content-container px-4">
      <Row noGutters className="page-header py-4">
        <PageTitle
          sm="4"
          title="Forms & Components"
          subtitle="Overview"
          className="text-sm-left"
        />
      </Row>

      <Colors />

      <Row>
        <Col lg="8" className="mb-4">
          <Card small className="mb-4">
            <CardHeader className="border-bottom">
              <h6 className="m-0">Form Inputs</h6>
            </CardHeader>

            <ListGroup flush>
              <ListGroupItem className="p-0 px-3 pt-3">
                <Row>
                  <Checkboxes />
                  <RadioButtons />
                  <ToggleButtons />
                </Row>
              </ListGroupItem>

              <ListGroupItem className="p-3">
                <strong className="text-muted d-block my-2">
                  Small Buttons
                </strong>
                <SmallButtons />

                <strong className="text-muted d-block my-2">
                  Small Outline Button
                </strong>
                <SmallOutlineButtons />
              </ListGroupItem>

              <ListGroupItem className="p-3">
                {/* Normal Buttons */}
                <strong className="text-muted d-block my-2">
                  Normal Buttons
                </strong>
                <NormalButtons />

                {/* Normal Outline Buttons */}
                <strong className="text-muted d-block my-2">
                  Normal Outline Buttons
                </strong>
                <NormalOutlineButtons />
              </ListGroupItem>

              {/* Forms & Form Validation */}
              <ListGroupItem className="p-3">
                <Row>
                  <Forms />
                  <FormValidation />
                </Row>
              </ListGroupItem>
            </ListGroup>
          </Card>

          {/* Complete Form Example */}
          <Card small>
            <CardHeader className="border-bottom">
              <h6 className="m-0">Form Example</h6>
            </CardHeader>
            <CompleteFormExample />
          </Card>
        </Col>

      </Row>
    </Container>
  </div>
);

export default ComponentsOverview;
