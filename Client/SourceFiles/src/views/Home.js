import React from "react";
import {Container, Row, Col, Button} from "shards-react";
import PageTitle from "../components/common/PageTitle";
import {Link} from "react-router-dom";
import AuthService from "../services/AuthService";
const BlogOverview = () => (
  //HOME
  <Container fluid className="main-content-container px-4">
    {/* Header of index page*/}
    <Row noGutters className="page-header py-4">
      <PageTitle title="Huellitas UCA" subtitle="Pagina de inicio" className="text-sm-left mb-3" />

    </Row>
    <div className="text-center center-block ">
      <div>
        <p className="h1 fw-bolder font-weight-bold" style={{ color: "#7749F8"}} >HuellitasUCA.org</p>
        { !AuthService.getAuth() ?
          <Link
            to={{
              pathname:  `/login`
            }}
          >
            <Button className="py-4 my-2" style={{fontSize:"19px"}}>Unirme</Button></Link>:''
        }
      </div>
      <img
        id="img1"
        className="img-responsive"
        style={{ maxWidth: "70%"}}
        src={require("../images/content-management/ADOPTA.jpg")}
        alt="No compres, Adopta :)"
      />

      <div className="container my-3">
        <div className={"row"}>
          <div className={"col-sm"}>
            <p className="h5 fw-bolder font-weight-bold"
               style={{color: "#7749F8"}}>Objetivo de la org</p>
            <p className="text-black text-justify mx-5 my-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper augue a lectus ornare, ut laoreet leo ornare. Nulla et dui in nunc sollicitudin venenatis. Maecenas molestie risus vitae odio condimentum pharetra.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper augue a lectus ornare, ut laoreet leo ornare. Nulla et dui in nunc sollicitudin venenatis. Maecenas molestie risus vitae odio condimentum pharetra.

            </p>
          </div>
          <div className="col-sm my-4">
            <img
              id="img2"
              className="img-responsive align-middle"
              style={{ maxWidth: "50%"}}
              src={require("../images/content-management/ADOPTA2.jpg")}
              alt=" Adopta en tu ciudad :)"
            />
          </div>
        </div>
      </div>


      <div className="container my-3">
        <p className="h5 fw-bolder font-weight-bold" style={{color: "#7749F8"}}>¿Cómo funciona?</p>

        <div className={"row "}>
          <div className={"col-sm"}>
            <img
              id="img3"
              className="img-responsive align-middle"
              style={{ maxWidth: "75px"}}
              src={require("../images/avatars/sitio-web.png")}
              alt=" Adopta en tu ciudad :)"
            />
            <p>Navega y encuentra tu favorito</p>
          </div>
          <div className={"col-sm"}>
            <img
              id="img4"
              className="img-responsive align-middle"
              style={{ maxWidth: "75px"}}
              src={require("../images/avatars/llamada.png")}
              alt=" Adopta en tu ciudad :)"
            />
            <p>Ponte en contacto</p>
          </div>
          <div className={"col-sm"}>
            <img
              id="img5"
              className="img-responsive align-middle"
              style={{ maxWidth: "75px"}}
              src={require("../images/avatars/gatito.png")}
              alt=" Adopta en tu ciudad :)"
            />
            <p>Conoce y adopta a tu mascota</p>
          </div>
        </div>
      </div>


      <div className="container my-3">
        <p className="h5 fw-bolder font-weight-bold" style={{color: "#7749F8"}}>¿Por que adoptar?</p>
        <p className="text-black text-justify mx-5 my-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper augue a lectus ornare, ut laoreet leo ornare. Nulla et dui in nunc sollicitudin venenatis. Maecenas molestie risus vitae odio condimentum pharetra.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper augue a lectus ornare, ut laoreet leo ornare. Nulla et dui in nunc sollicitudin venenatis. Maecenas molestie risus vitae odio condimentum pharetra.

        </p>
      </div>
    </div>
  </Container>
);

export default BlogOverview;
