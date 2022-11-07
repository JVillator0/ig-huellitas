import React from "react";
import PropTypes from "prop-types";
import Req1 from "../../images/avatars/3.jpg";
import {
  Card,
  CardHeader,
  Row,
  Col,
  Button, Badge,
  FormInput
} from "shards-react";
                     //props
function RequestComp({posibleadoptador, fechadesolicitud, publicacion, telefono, direccion, mensaje, estado}){
  //React.useEffect(()=> {console.log(request)})

    return(
       <Card small className="mb-4">
        <CardHeader className="border-bottom">
        <Badge
            pill
            className={"card-post__category bg-info"}>
            {estado}
          </Badge>
          <Row>
            <Col lg="9"><h6 className="m-0">{posibleadoptador} Te ha hecho una solicitud a tu publicacion: {publicacion} </h6></Col>
            <Col lg="3"><h6 className="m-0 justify-content-center">fecha: {fechadesolicitud}</h6></Col>
          </Row>
        </CardHeader>

        <Row>
          <Col lg="3">
            <div className="p-3 text-center">
              <img
                src={Req1}
                //className="card-post__image"
                style={{ width: "25%" }, { height: "50%" }}
              />
              <h6 className="mt-3">{posibleadoptador}</h6>
            </div>
          </Col>
          <Col lg="9" >
            <Row form className="mx-3">
              <Col md="6" className="form-group">
                <label htmlFor="feLastName">Telefono: {telefono}</label>
              </Col>
              <Col md="6" className="form-group">
                <label htmlFor="feCity">Dirreccion: {direccion}</label>
              </Col>
            </Row>
            <Row form className="mx-3">
              <Col md="12" className="form-group">
                <label htmlFor="feDescription">{mensaje}</label>
              </Col>
            </Row >
              <div>
                <Row form className="mx-3 ">
                  <label htmlFor="reqComment">Agregar comentario: </label>
                  <FormInput
                    placeholder="Comment"
                    required/>
                    <Button className="btn btn-outline-secondary mr-2 mt-2 justify-content-fe">Enviar</Button>
                </Row>
                <Row className="mt-4 mb-3 justify-content-center" >
                <Button className="btn btn-primary mr-2">Aceptar solicitud</Button>
                <Button className="btn btn-danger">Rechazar solicitud</Button>

                </Row>
               </div >
              ):
              (
              <div form className="mx-3">
                <Col md="12" className="form-group">
                <label htmlFor="Comment">Comentario: <p>Lo siento, pero ya di en adopcion a Huellita</p></label>
                </Col>
              </div >)
            }
          </Col>
        </Row>

      </Card>)

}


RequestComp.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

RequestComp.defaultProps = {
  title: "Detalles de la cuenta"
};

export default RequestComp;
