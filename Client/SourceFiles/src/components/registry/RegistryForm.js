import React from "react";
import PropTypes from "prop-types";
import FileBase64 from 'react-file-base64';
import { withRouter  } from "react-router-dom";

import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  FormSelect,
  FormTextarea,
  Button
} from "shards-react";
import Config from "../../utils/Config";
import swal from "sweetalert";
function getBase64(file) {
  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    console.log(reader.result);
  };
  reader.onerror = function (error) {
    console.log('Error: ', error);
  };
}
const RegistryForm = (props) => {
  const [newUser, setNewUser] = React.useState({
    nameUser: "",
    age: null,
    address: "",
    picture:"https://i.stack.imgur.com/l60Hf.png",
    password:"",
    phone:null,
    email:"",
    description:"",
    department:"",
    confirmPassword:""
  });
  const {
    nameUser,
    age,
    address,
    picture,
    password,
    confirmPassword,
    phone,
    email,
    department,
    description} = newUser;
  const onChange = (e) =>
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  const sendData = (e) => {
    e.preventDefault();
    if (newUser.password !== newUser.confirmPassword){
      //show Something
      return
    }
    //const completeAddress = newUser.address + ', ' + newUser.location
    setNewUser({ ...newUser, phone: Number(phone) });
    //setNewUser({ ...newUser, address: completeAddress });
    const url = `${Config.baseUrl}/auth/registry`
    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(newUser), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .catch(error => swal("Algo salio mal", "Intentalo de nuevo", "error"))
      .then(response => {
        if (response.message === "Successful registration"){
          swal("Operacion Exitosa", "Usuario registrado exitosamente", "success").then(value =>{
            if (value){
              props.history.push('/login')
            }
          })
        }
      });
  };

  function getFiles(files) {
    setNewUser({...newUser, picture: files[0].base64})
  }

  return (
    <Card small className="mb-4">
      <CardHeader className="border-bottom">
        <h6 className="m-0">{props.title}</h6>
      </CardHeader>
      <ListGroup flush>
        <ListGroupItem className="p-3">
          <Row>
            <Col>
              <Form onSubmit={sendData}>
                <div className="d-flex">
                  <div style={{width:"50%"}} className="px-4">
                    <Col>
                      <Row md="12" className="form-group">
                        <label htmlFor="feFirstName">Nombre</label>
                        <FormInput
                          id="feFirstName"
                          name="nameUser"
                          value={nameUser}
                          placeholder="Nombre"
                          onChange={onChange}
                          required
                        />
                      </Row>
                      <Row md="12" className="form-group">
                        <label htmlFor="email">Correo</label>
                        <FormInput
                          id="email"
                          placeholder="Correo"
                          name="email"
                          value={email}
                          onChange={onChange}
                          required
                        />
                      </Row>
                      <Row md="12" className="form-group">
                        <label htmlFor="phone">Telefono</label>
                        <FormInput
                          id="phone"
                          placeholder="Telefono"
                          name="phone"
                          type="number"
                          value={phone}
                          onChange={onChange}
                          required
                        />
                      </Row>
                      <Row md="12" className="form-group">
                        <label htmlFor="age">Edad</label>
                        <FormInput
                          id="age"
                          name="age"
                          placeholder="Edad"
                          value={age}
                          type="number"
                          onChange={onChange}
                          required
                        />
                      </Row>
                      <Row md="12" className="form-group">
                        <div style={{width:"100%", justifyContent:"space-between"}} className="d-flex justify-between">
                          <div  style={{width:"48%"}}>
                            <label htmlFor="feCity">Dirreccion</label>
                            <FormInput
                              id="feCity"
                              name="address"
                              value={address}
                              placeholder="Dirreccion"
                              required
                              onChange={onChange}
                            />
                          </div>
                          <div style={{width:"50%"}}>
                            <label htmlFor="location">Departamento</label>
                            <FormSelect id="location" name="department" value={department} onChange={onChange}>
                              <option value="" selected hidden>
                                Selecciona tu departamento
                              </option>
                              <option value='Ahuachapán'>Ahuachapán</option>
                              <option value='Cabañas'>Cabañas</option>
                              <option value='Chalatenango'>Chalatenango</option>
                              <option value='Cuscatlán'>Cuscatlán</option>
                              <option value='La Libertad'>La Libertad</option>
                              <option value='Morazán'>Morazán</option>
                              <option value='La Paz'>La Paz</option>
                              <option value='Santa Ana'>Santa Ana</option>
                              <option value='San Miguel'>San Miguel</option>
                              <option value='San Salvador'>San Salvador</option>
                              <option value='San Vicente'>San Vicente</option>
                              <option value='Sonsonate'>Sonsonate</option>
                              <option value='La Unión'>La Unión</option>
                              <option value='Usulután'>Usulután</option>
                            </FormSelect>
                          </div>
                        </div>
                      </Row>
                      <Row md="12" className="form-group">
                        <label htmlFor="feFirstName">Contraseña</label>
                        <FormInput
                          id="feFirstName"
                          placeholder="Contraseña"
                          type="password"
                          name="password"
                          value={password}
                          required
                          onChange={onChange}
                        />
                      </Row>
                      <Row md="12" className="form-group">
                        <label htmlFor="feFirstName">Confirmar Contraseña</label>
                        <FormInput
                          id="feFirstName"
                          placeholder="Contraseña"
                          type="password"
                          name="confirmPassword"
                          value={confirmPassword}
                          onChange={onChange}
                          required
                        />
                      </Row>
                    </Col>
                  </div>
                  <div style={{
                    width:"1px",
                    border:"1px groove #ffffff",
                  }}></div>
                  <div style={{width:"50%"}}>
                    <Col>
                      <div small className="mb-4 pt-3">
                        <div className="text-center">
                          <div className="mb-3 mx-auto">
                            <h3>Foto de perfil</h3>
                            <div style={{height: "200px",
                              width: "200px",
                              backgroundImage:`url(\"${picture}\")`,
                              backgroundRepeat: "no-repeat",
                              backgroundAttachment: "local",
                              backgroundPosition: "center",
                              backgroundSize: "cover",
                              borderRadius: "50%",
                              margin: "auto",
                            }}></div>
                          </div>
                        </div>
                        <div style={{    width: "96%",
                          margin: "auto"}} >
                          <Col  md="12" className="form-group">

                            <FileBase64
                              multiple={ true }
                              onDone={ getFiles.bind(this) } />

                          </Col>
                        </div>
                        <Col md="12" className="form-group">
                          <label htmlFor="feDescription">Sobre mi</label>
                          <FormTextarea id="description" required name="description" value={description} onChange={onChange} rows="5" />
                        </Col>
                      </div>
                    </Col>
                  </div>
                </div>
                <div style={{display: "flex",
                  justifyContent: "center",
                  paddingTop: "20px"}}>
                  <Button theme="primary" type="submit" className="btn btn-primary btn-lg">Crear usuario</Button>
                </div>
              </Form>
            </Col>
          </Row>
        </ListGroupItem>
      </ListGroup>
    </Card>
  );
}

RegistryForm.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

RegistryForm.defaultProps = {
  title: "Registro",
};

export default withRouter(RegistryForm);
