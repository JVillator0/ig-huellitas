import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  Button,
  ListGroup,
  ListGroupItem,
  Progress,
  Row,
  Col
} from "shards-react";
import { withRouter } from "react-router-dom";

const UserDetails = ({ userDetails }) => (
  <Card small className="mb-4 pt-3">
    <CardHeader className="border-bottom text-center">
      <div className="mb-3 mx-auto">
        <img
          className="rounded-circle"
          src={userDetails.picture}
          alt={userDetails.nameUser}
          width="170"
          height="170"
        />
      </div>
      <h4 className="mb-0">{userDetails.nameUser}</h4>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="p-4">

        <Row>
          <Col>
            <Row className="my-2">
              <Col >
                <strong className="text-muted d-block mb-2">
                  Sobre mi
                </strong>
                <span>{userDetails.description}</span>

              </Col>
            </Row>
            <Row className="my-2">

              <Col md="6" >
                <strong className="text-muted  mb-2">
                  Nombre
                </strong>
                <span> {userDetails.nameUser}</span>

              </Col>
              <Col md="6">
                <strong className="text-muted  mb-2">
                  Telefono:
                </strong>
                <span> {userDetails.phone}</span>
              </Col>
            </Row>
            <Row className="my-2">
              <Col md="6">
                <strong className="text-muted  mb-2">
                  Edad:
                </strong>
                <span> {userDetails.age}</span>
              </Col>
              <Col md="6" >
                <strong className="text-muted  mb-2">
                  Correo:
                </strong>
                <span> {userDetails.email}</span>
              </Col>

            </Row>
            <Row className="my-2" >
              <Col md="6" >
                <strong className="text-muted  mb-2">
                  Direccion:
                </strong>
                <span> {userDetails.address}</span>

              </Col>
              <Col md="6" >
                <strong className="text-muted  mb-2">
                  Departamento:
                </strong>
                <span> {userDetails.department}</span>
              </Col>
            </Row>
          </Col>
        </Row>
        <div className={" text-center center-block my-3"}>
          <Button theme="accent" href="/editProfile">Editar Informacion</Button>
        </div>
      </ListGroupItem>
    </ListGroup>
  </Card>
);

UserDetails.propTypes = {
  /**
   * The user details object.
   */
  userDetails: PropTypes.object
};

/*UserDetails.defaultProps = {
  userDetails: {
    name: "Sierra Brooks",
    avatar: require("./../../images/avatars/0.jpg"),
    metaTitle: "Sobre mi",
    metaValue:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?"
  }
};*/

export default UserDetails;
