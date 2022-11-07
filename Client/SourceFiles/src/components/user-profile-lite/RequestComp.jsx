import React, {useEffect, useState} from "react";
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
import swal from "sweetalert";
import AuthService from "../../services/AuthService";
import Config from "../../utils/Config";
import axios from "axios";//props

function RequestComp({request, recd}){
  if (request.length > 0 && !recd){
    request = request.filter(e=> e.userId === Number(AuthService.getToken().jti) )
  } else if (request.length > 0 && recd){
    request = request.filter(e=> e.ownerUserId === Number(AuthService.getToken().jti) )
  }
  console.log(request, Number(AuthService.getToken().jti))
  const [comment, newComment] = useState("");
  const onChange = (e) => {
    newComment(e.target.value)
  }
    const rechazar = (currentRequest) => {
      swal({
        title: "Rechazar Solicitud",
        text: "¿Seguro que desea rechazar la solicitud de adopción?",
        icon: "warning",
        buttons: ["Cancelar", "Aceptar"]
      }).then(resp => {
        if (resp) {
          axios.put(`${Config.baseUrl}/Request/rejectRequest/${currentRequest.request_id}`, {comment}).then(response => {
            request = request.map(e => {
              if (e.publicationId === currentRequest.publicationId){
                e.state = "Aceptado";
              }
              return e;
            })

            if (response.data.Message === "Success"){
              swal({
                text: "Solicitud aceptada",
                icon: "success",
                timer: "1000"
              }).then(() => window.location.reload())
            }
          }).catch(error => {
            swal("Algo salio mal", "Intentalo de nuevo", "error");
          })

        }
      })
    }


    const confirmacion = (currentRequest) => {
      swal({
        title: "Aceptar Solicitud",
        text: "¿Seguro que desea aceptar la solicitud de adopción?",
        icon: "warning",
        buttons: ["Cancelar", "Aceptar"]
      }).then(resp => {
        if (resp) {
          console.log(currentRequest.request_id)
          axios.put(`${Config.baseUrl}/Request/acceptRequest/${currentRequest.request_id}`, {comment}).then(response => {
            request = request.map(e => {
              if (e.publicationId === currentRequest.publicationId){
                e.state = "Aceptado";
              }
              return e;
            })

            if (response.data.Message === "Success"){
              swal({
                text: "Solicitud aceptada",
                icon: "success",
                timer: "1000"
              }).then(() => window.location.reload())
            }
          }).catch(error => {
            swal("Algo salio mal", "Intentalo de nuevo", "error");
          })

        }
      })
    }
    return(
      ((request.length) > 0 ? <div>
        {request.map((res, key) =>
          <Card small className="mb-4" key = {key}>
            <CardHeader className="border-bottom">
              <Badge
                pill
                className={"card-post__category bg-info"}>
                {res.estado}
              </Badge>
              <Row>
                {recd ? <Col lg="9"><h6 className="m-0">{res.posibleadoptador} Te ha hecho una solicitud a tu publicacion: {res.publicacion} </h6></Col> :
                  <Col lg="9"><h6 className="m-0">Has hecho una solicitud a la publicacion: {res.publicacion} </h6></Col>}
                <Col lg="3"><h6 className="m-0 justify-content-center">fecha: {res.fechadesolicitud}</h6></Col>
              </Row>
            </CardHeader>

            <Row>
              <Col lg="3">
                <div className="p-3 text-center">
                  <img
                    src={res.foto}
                    //className="card-post__image"
                    style={{ width: "25%" , height: "50%" }}
                  />
                  <h6 className="mt-3">{res.posibleadoptador}</h6>
                </div>
              </Col>
              <Col lg="9" >
                <Row form className="mx-3">
                  <Col md="6" className="form-group">
                    <label htmlFor="feLastName">Telefono: {res.telefono}</label>
                  </Col>
                  <Col md="6" className="form-group">
                    <label htmlFor="feCity">Dirreccion: {res.direccion}</label>
                  </Col>
                </Row>
                <Row form className="mx-3">
                  <Col md="12" className="form-group">
                    <label htmlFor="feDescription">{res.mensaje}</label>
                  </Col>
                  <Col md="12" className="form-group">
                    <label htmlFor="feDescription">{res.comment ? ("Comentario: " + res.comment): ""}</label>
                  </Col>
                </Row >
                {(recd && res.estado === "Pendiente") &&
                <div>
                  <Row form className="mx-3 ">
                    <label htmlFor="reqComment">Agregar comentario: </label>
                    <FormInput
                      placeholder="Comment"
                      
                      onChange={onChange}
                      required/>
                  </Row>
                  <Row className="mt-4 mb-3 justify-content-center" >
                    {res.estado !== "Aceptado" && <Button className="btn btn-primary mr-2" onClick={() => confirmacion(res)}>Aceptar solicitud</Button>}
                    {res.estado !== "Rechazado" &&<Button className="btn btn-danger" onClick={() => rechazar(res)}>Rechazar solicitud</Button>}
                  </Row>
                </div >
                }
              </Col>
            </Row>

          </Card>)}
      </div>: "No hay solicitudes")


    );
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
