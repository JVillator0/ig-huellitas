import React from "react";
import PropTypes from "prop-types";
import LoginImg from "../../images/LoginImage.jpg";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  Button
} from "shards-react";
import axios from "axios";
import Config from "../../utils/Config";
import AuthService from "../../services/AuthService";
import { withRouter  } from "react-router-dom";
import swal from "sweetalert";

const LoginForm = (props) => {
  const [login, setLogin] = React.useState({
    username: "",
    password: "",
  });
  const onChange = (e) =>
    setLogin({ ...login, [e.target.name]: e.target.value });
  const sendData = (e) => {
    e.preventDefault();
    const baseURL = Config.baseUrl;
    axios
      .post(`${baseURL}/auth/login`, login)
      .then((response) => {
        AuthService.saveToken(response.data.token);
       // props.history.push('/')
        window.location.href = "/"
      }).catch(error => swal("Algo salio mal", "Intentalo de nuevo", "error"));

  }
  return (

    <Card small className="mb-4">
      <ListGroup flush>
        <ListGroupItem className="p-3">
          <Row>
            <Col>
              <Form onSubmit={sendData}>
                <div className="d-flex">
                  <div style={{width:"60%"}}>
                    <Col>
                      <div small className="mb-4 pt-3">
                        <img
                          src= {LoginImg}
                          style={{ width: "100%"}}
                        />
                        <div style={{ width: "96%",
                          margin: "auto"}}>
                        </div>
                      </div>
                    </Col>
                  </div>

                  <div style={{width:"40%"}} className="px-4">
                    <Col>
                      <Row className="justify-content-center mb-4 mt-2">
                        <h1>Bienvenido</h1>
                        <h4>Nos alegra tenerte de regreso</h4>
                      </Row>

                      <Row className="mb-4">
                        <FormInput className="form-control form-control-lg"
                                   id="feFirstName"
                                   name="username"
                                   placeholder="Correo"
                                   onChange={onChange}
                        />
                      </Row>

                      <Row className="mb-4">
                        <FormInput className="form-control form-control-lg"
                                   id="feFirstName"
                                   placeholder="Contraseña"
                                   name="password"
                                   type="password"
                                   onChange={onChange}
                        />
                      </Row>
                      <div className="justify-content-flex-end">
                        <Row><a href="">Olvide mi contraseña</a></Row>
                        <Row><a href="/Registry">Crear una cuenta</a></Row>
                      </div>
                      <div style={{display: "flex",
                        justifyContent: "center",
                        paddingTop: "50px"}}>
                        <Button theme="primary" className="btn btn-primary btn-lg">Iniciar sesión</Button>
                      </div>

                    </Col>
                  </div>
                </div>
              </Form>
            </Col>
          </Row>
        </ListGroupItem>
      </ListGroup>
    </Card>
  );
}

LoginForm.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

LoginForm.defaultProps = {
  title: "Login",
};

export default withRouter(LoginForm);
