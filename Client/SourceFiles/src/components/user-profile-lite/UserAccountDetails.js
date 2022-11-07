import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {
  Button,
  Card,
  CardHeader,
  Col,
  Form,
  FormInput,
  FormSelect,
  FormTextarea,
  ListGroup,
  ListGroupItem,
  Row
} from "shards-react";
import swal from 'sweetalert';
import axios from "axios";
import Config from "../../utils/Config";
import AuthService from "../../services/AuthService";
let countAction = 0;
const UserAccountDetails = ({ userDetails }) => {
  const [user, setUser] = useState(userDetails)
  useEffect(()=>{
    countAction++
    if (countAction === 2){
      setUser(userDetails)
    }
  }, )
  const sendData = (e) => {
    e.preventDefault();
    if (user.password1 === user.password2 && (user.password2 !== "" || user.password2 !== undefined) && (user.password1 !== "" && user.password1 !== undefined) ){
      setUser({ ...user, password: user.password1 });
      //const completeAddress = user.address + ', ' + user.department
      setUser({ ...user, phone: Number(user.phone) });
      //setUser({ ...user, address: completeAddress });
      let obj = user;
      obj.idUser = AuthService.getToken().jti
      obj.password = user.password1;
      console.log(user, obj)
      const url = `${Config.baseUrl}/modifyProfile`
      axios.put(url, obj).then(response => {
        if (response.data.message === "Successful modified"){
          swal("Operacion Exitosa", "Usuario actualizado correctamente", "success");

        }
      }).catch(error => swal("Algo salio mal", "Intentalo de nuevo", "error"))

    }

   console.log(user);
  }
  const onChange = (e) =>{
    //console.log(user)
    setUser({ ...user, [e.target.name]: e.target.value });
   // console.log(user)
  }

  return (
    <Card small className="mb-4">
      <CardHeader className="border-bottom">
        <h6 className="m-0">Detalles de la cuenta</h6>
      </CardHeader>
      <ListGroup flush>
        <ListGroupItem className="p-3">
          <Row>
            <Col>
              <Form onSubmit={sendData}>
                <Row form>
                  {/* First Name */}
                  <Col md="6" className="form-group">
                    <label htmlFor="feFirstName">Nombre</label>
                    <FormInput
                      id="feFirstName"
                      placeholder="Nombre"
                      name="nameUser"
                      value={user.nameUser}
                      onChange={onChange}
                    />
                  </Col>
                  {/* Last Name */}
                  <Col md="6" className="form-group">
                    <label htmlFor="feLastName">Telefono</label>
                    <FormInput
                      id="feLastName"
                      type="number"
                      name="phone"
                      value={user.phone}
                      placeholder="Telefono"
                      onChange={onChange}
                    />
                  </Col>
                </Row>
                <Row form>
                  {/* Email */}
                  <Col md="6" className="form-group">
                    <label htmlFor="feEmail">Edad</label>
                    <FormInput
                      type="number"
                      id="feEmail"
                      name="age"
                      placeholder="Edad"
                      value={user.age}
                      onChange={onChange}
                      autoComplete="edad"
                    />
                  </Col>
                  <Col md="6" className="form-group">
                    <label htmlFor="feEmail">Correo</label>
                    <FormInput
                      type="text"
                      id="feEmail"
                      placeholder="Correo"
                      value={user.email}
                      name="email"
                      onChange={onChange}
                      autoComplete="email"
                    />
                  </Col>

                </Row>
                <Row form>
                  {/* City */}
                  <Col md="6" className="form-group">
                    <label htmlFor="feCity">Dirreccion</label>
                    <FormInput
                      id="feCity"
                      value={user.address}
                      name="address"
                      placeholder="Dirreccion"
                      onChange={onChange}
                    />
                  </Col>
                  {/* State */}
                  <Col md="6" className="form-group">
                    <label htmlFor="feInputState">Departamento</label>
                    <FormSelect id="feInputState" value={user.department} name="department" onChange={onChange}>
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
                  </Col>
                </Row>
                <Row form>
                  {/* Password*/}
                  <Col md="6" className="form-group">
                    <label htmlFor="fePassword">Nueva Contraseña</label>
                    <FormInput
                      type="password"
                      id="fePassword"
                      name="password1"
                      placeholder="Contraseña"
                      value={user.password1}
                      onChange={onChange}
                      autoComplete="current-password"
                    />
                  </Col>
                  {/* Password*/}
                  <Col md="6" className="form-group">
                    <label htmlFor="fePassword">Confirmar Contraseña</label>
                    <FormInput
                      type="password"
                      id="fePassword"
                      name="password2"
                      placeholder="Contraseña"
                      value={user.password2}
                      onChange={onChange}
                      autoComplete="current-password"
                    />
                  </Col>
                </Row>
                <Row form>
                  {/* Description */}
                  <Col md="12" className="form-group">
                    <label htmlFor="feDescription">Sobre mi</label>

                    <FormTextarea id="feDescription" rows="5" name="description" value={user.description} onChange={onChange}/>
                  </Col>
                </Row>
                <Button theme="accent">Guardar</Button>
              </Form>
            </Col>
          </Row>
        </ListGroupItem>
      </ListGroup>
    </Card>
  )
};

UserAccountDetails.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};


export default UserAccountDetails;
