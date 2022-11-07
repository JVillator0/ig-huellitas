import React, {useState} from "react";
import ReactQuill from "react-quill";
import {Link} from 'react-router-dom';
import AuthService from "../services/AuthService";
import axios  from "axios";

import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  ModalBody,
  img,
  CardHeader,
  CardColumns, Modal,
  Form,
  FormInput,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  FormFeedback,
  Button,
  FormCheckbox,
  ModalHeader
} from "shards-react";




import PageTitle from "../components/common/PageTitle";
import {set} from "react-ga";
import {responsivePropType} from "react-bootstrap/createUtilityClasses";
import User from "../services/UserService";



import Config from "../utils/Config";
import swal from "sweetalert";
const ListOne = [
  {
    id:"1",
    backgroundImage: require("../images/content-management/michi.png"),
    category: "Gatos",
    categoryTheme: "dark",
    author: "Anna Kunis",
    name: "Michi",
    race:"comun" ,
    color:"pardo",
    sex:"Hembra",
    age:"1 año",
    size:"mediano",
    control:"si",
    vacunas:"si",
    body:
      "Lorem ipsum dolor sit amet,  consectetur adipiscing elit. \n" +
      "Etiam semper augue a lectus  ornare, ut laoreet leo ornare.  Nulla et dui in nunc sollicitudin venenatis. Maecenas molestie risus vitae odio condimentum pharetra.",
    date: "28 February 2019"
  },
  {
    id:"2",
    backgroundImage: require("../images/content-management/mestizo.png"),
    category: "Perros",
    categoryTheme: "dark",
    author: "Anna Kunis",
    name: "firulai",
    race:"mestizo" ,
    color:"cafe",
    sex:"macho",
    age:"1 año",
    size:"grande",
    control:"si",
    vacunas:"si",
    body:
      "Lorem ipsum dolor sit amet,  consectetur adipiscing elit. \n" +
      "Etiam semper augue a lectus  ornare, ut laoreet leo ornare.  Nulla et dui in nunc sollicitudin venenatis. Maecenas molestie risus vitae odio condimentum pharetra.",
    date: "29 February 2019"
  },
  {
    id:"3",
    backgroundImage: require("../images/content-management/hamster.png"),
    category: "Hamster",
    categoryTheme: "dark",
    author: "Anna Kunis",
    name: "Quesito",
    race:"comun" ,
    color:"naranja",
    sex:"Hembra",
    age:"1 año",
    size:"pequeño",
    control:"si",
    vacunas:"si",
    body:
      "Lorem ipsum dolor sit amet,  consectetur adipiscing elit. \n" +
      "Etiam semper augue a lectus  ornare, ut laoreet leo ornare.  Nulla et dui in nunc sollicitudin venenatis. Maecenas molestie risus vitae odio condimentum pharetra.",
    date: "29 February 2019"
  },
  {
    id:"4",
    backgroundImage: require("../images/content-management/pez.png"),
    category: "Peces",
    categoryTheme: "dark",
    author: "Anna Kunis",
    name: "Nemo",
    race:"Pez dorado" ,
    color:"naranja,negro y blanco",
    sex:"Hembra",
    age:"1 año",
    size:"mediano",
    control:"si",
    vacunas:"si",
    body:
      "Lorem ipsum dolor sit amet,  consectetur adipiscing elit. \n" +
      "Etiam semper augue a lectus  ornare, ut laoreet leo ornare.  Nulla et dui in nunc sollicitudin venenatis. Maecenas molestie risus vitae odio condimentum pharetra.",
    date: "29 February 2019"
  },

];

/*     idUser: AuthService.getToken().jti,
          state:"",
          idRequest: 0,
          message:"",
          contact:0,
          adopter:0,
          publication:0 */

/*
 const newRequest = [
   idUser: AuthService.getToken().jti,
  state:"",
  idRequest: 0,
  message:"",
  contact:0,
  adopter:0,
  publication:0
 ]
*/


class ViewMore extends React.Component{

  /*
  constructor(props) {
    super(props);

    this.state = {
        newRequest:null}


  }
*/


  state = {
    hasOpen: false,
    petObject:{
      "idPublication": 0,
      "publicationDate": "",
      "tittle": "",
      "description": "",
      "idOwner": 0,
      "idPet": 0,
      "petId": 0,
      "petSex": "",
      "petName": "",
      "petColor": "",
      "veterynaryCare": false,
      "petBreed": "",
      "vaccinePet": false,
      "petImage": "",
      "species": "",
      "petAge": 0,
      "size": "",
      "petDescript": ""
    },
    message:"",
    state:"Pendiente",
    publication: Number(window.location.pathname.substring(6)),
    idUser: Number(AuthService.getToken().jti)
  }

  onOpen = () =>{
    this.setState({hasOpen:true});
  }

  onClose = () =>{
    this.setState({hasOpen:false});
  }



  componentDidMount(){
    console.log(User.firstName)
    const ruteId = window.location.pathname.substring(6);
    axios.get(`${Config.baseUrl}/publicacion/${ruteId}`).then(
      response => {
        this.setState({petObject: response.data})
        console.log(this.state)
      }
    );

  }

  onChange=(e)=>{
    console.log(e.target.value)
    this.setState({message: e.target.value});
  }

  sendData = (e) =>{
    e.preventDefault();
    console.log(this.state)
    axios
      .post(`${Config.baseUrl}/Request/sendRequest/`,this.state)
      .then((response)=>{
        console.log(response);
        if(response.data.Message === "Success" ){
          swal("Operacion Exitosa", "Solicitud enviada exitosamente", "success").then(value =>{
            if (value){
              this.props.history.push('/publicaciones')
            }
          })
        }

      }).catch(error => {
      swal("Algo salio mal", "Intentalo de nuevo", "error");
    });


  }

  render() {




    const ruteId = window.location.pathname.substr(6,1);
    const {hasOpen} = this.state;

    return(

      <Container  fluid className="main-content-container px-4 pb-4">

        {/* Page Header */}
        <Row noGutters className="page-header py-2">
          <PageTitle sm="5" title="En Adopcion" subtitle="Components" className="text-sm-left mr-auto" />
          <Link
              to={{ pathname:  `/publicaciones`}}
          > <button className="btn pmd-btn-fab pmd-ripple-effect btn-dark pmd-btn-raised ml-auto rounded-circle" type="button" ><i class="material-icons pmd-sm" style={{fontSize:"20px"}}>close</i></button> </Link>

        </Row>

        <Row >

          <Col>

              <Card small>
                <CardHeader className="justify-content-center text-center my-0" >
                  <h1 className={"  modal-title font-weight-normal text-center  text-primary"} >{this.state.petObject.petName} en busca de familia</h1>
                  <h4>{this.state.petObject.tittle}</h4>
                  <p className={" font-weight-normal text-justify mx-5 text-center"}>{this.state.petObject.description}</p>
                </CardHeader>
                <CardBody className={"ml-5"}>
                  <Row>
                    <Col className={"col-sm "}>

                        <div className="text-center">
                          <img  className={" border-img img-responsive align-middle mb-4"}   src={this.state.petObject.petImage}  />
                        </div>
                        <div className={"text-center"}>
                          <p   className=" font-weight-normal  text-justify mx-5"  >{this.state.petObject.petDescript}</p>
                        </div>

                    </Col>
                    <Col>

                        <h3 className="font-weight-bold text-center mb-4 mr-5">{this.state.petObject.name}</h3>

                      <Row className="">
                        <Col>
                        <p className={"font-p"}> <label htmlFor="feFirstName">Tipo de animal:</label> {this.state.petObject.species}</p>
                        <p className={"font-p"}> <label htmlFor="feFirstName">Color: </label> {this.state.petObject.petColor}</p>
                        <p className={"font-p"}>  <label htmlFor="feFirstName">Sexo: </label> {this.state.petObject.petSex}</p>
                        <p className={"font-p"}> <label>Control Veterinario:</label> {this.state.petObject.veterynaryCare ? "Si": "No"}</p>

                        </Col>
                        <Col>
                        <p className={"font-p"}> <label htmlFor="feFirstName">Raza:</label> {this.state.petObject.petBreed}</p>
                        <p className={"font-p"}> <label htmlFor="feFirstName">Edad:</label> {this.state.petObject.petAge}</p>
                        <p className={"font-p"}> <label htmlFor="feFirstName">Tamaño:</label> {this.state.petObject.size}</p>
                        <p className={"font-p"}> <label>Vacunacion al dia:</label> {this.state.petObject.vaccinePet ? "Si": "No"}</p>

                        </Col>
                      </Row>

                    </Col>
                  </Row>

                </CardBody>
                    <div className={" text-center center-block mb-4 "}>
                      { AuthService.getAuth() && (this.state.petObject.userId !== Number(AuthService.getToken().jti)) ?
                        <Button  onClick={this.onOpen} type={"button"} data-toggle="modal" theme="accent">Solicitar adopcion</Button>:''
                      }
                    </div>
              </Card>



          </Col>


        </Row>
            <Modal open={hasOpen} className={" modal-dialog modal-lg modal-ku "} aria-hidden="true"  >
              <ModalHeader>
                <button onClick={this.onClose}  type={"button"} className={" close"} data-dismiss={"modal"} aria-label={"Close"}>&times;</button>
              </ModalHeader>
              <ModalBody >
                <Form className="add-new-post " onSubmit={this.sendData}>
                  <Row>
                    <Col>
                      <div className="div-img">
                        <img
                          className="rounded-circle center my-4 img-soli"
                          src={require("./../images/avatars/gatito.png")}
                          width="200"
                          alt={"agregar foto"}
                        />
                        <h3 className={"ml-4"}>{this.state.petObject.petName}</h3>
                      </div>


                    </Col>
                    <Col>
                      <div className={"div-inputs"}>
                        <label htmlFor="feFirstName" >Contact</label>
                        <FormInput size="lg" value={User.phone} className="mb-3" placeholder="Telefono" disabled /*onChange={onchange}*//>
                      </div>

                      <div className="div-inputs">
                        <label htmlFor="comment"  className={""}>Comment:</label>
                        <textarea className="form-control" rows="5" id="comment" onChange={this.onChange}/>
                      </div>

                    </Col>
                  </Row>
                  <div className={" text-center center-block my-3"}>
                    <button type="submit" className={" btn  btn-accent "}>Enviar Solicitud</button>
                  </div>
                </Form>
              </ModalBody>


            </Modal>


      </Container>
    );
  }
}

export default ViewMore;
