/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {Link} from 'react-router-dom';
import {useState} from "react";
import { withRouter  } from "react-router-dom";

import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Badge,
  CardHeader, Button,
  FormSelect, Form
} from "shards-react";
import PageTitle from "../components/common/PageTitle";
import AuthService from "../services/AuthService";
import Config from "../utils/Config";

class BlogPosts extends React.Component {

  constructor(props) {
    super(props);

    this.state = { PostsListOne: [], filter:""};

  }
      componentDidMount() {
        if(this.state.filter==="todos" || this.state.filter===""){ // Simple GET request using fetch
        fetch(`${Config.baseUrl}/findAllPublications`)
            .then(response => response.json())
            .then(data => {
              this.setState( {PostsListOne: data})
              }
            );}
    }

    changeNewStage=(e)=>{
      this.setState({filter: e.target.value});
    }

  render() {
    const {
      PostsListOne
    } = this.state;


    const FilterPublication=(filter) =>{
      // Simple GET request using fetch
      filter.preventDefault();
      if(this.state.filter==="todos" || this.state.filter===""){ // Simple GET request using fetch
          fetch(`${Config.baseUrl}/findAllPublications`)
              .then(response => response.json())
              .then(data => this.setState( {PostsListOne: data}

              )
              );}
      else{
        fetch(`${Config.baseUrl}/filter/` + this.state.filter )
            .then(response => response.json())
            .then(data => this.setState( {PostsListOne: data})
            );
      }
    }



    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}

          <Row noGutters className="page-header py-4">
            <PageTitle sm="4" title="Publicaciones" className="text-sm-left mr-auto" />
            { AuthService.getAuth() ?
            <Link className="d-flex"
                  to={{ pathname:  `/nueva-publicacion`}}
            > <button className="btn pmd-btn-fab pmd-ripple-effect btn-primary pmd-btn-raised ml-auto rounded-circle" type="button"><i class="material-icons pmd-sm" style={{fontSize:"20px"}}>add</i></button> </Link>
            : ''}
            </Row>
        <Form className="add-new-post" onSubmit={FilterPublication}>
        <Row className="pb-4">
          <Col  lg="3" md="5" sm="5" >
            <label htmlFor="filter">Filtrar por categoria de mascota: </label>
          </Col>
          <Col>
            <FormSelect id="filter" name="filter"  onChange={this.changeNewStage} >
              <option value="todos">Filtrar...</option>
                    <option value="perro">Perro</option>
                    <option value="gato">Gato</option>
                    <option value="pez">Pez</option>
                    <option value="hamster">Hamster</option>
                    <option value="otro">Otro</option>

            </FormSelect>
          </Col>
          <Col lg="2" md="2" sm="2">
            <Button className=" btn-primary" type="submit">Buscar</Button>
          </Col>
        </Row>
        </Form>


        {/* First Row of Posts */}
        <Row>
          {PostsListOne.map((post, idx) => (
            <Col lg="3" md="6" sm="12" className="mb-4" key={post.idPublication}  >
              <Card  small className="card-post card-post--1">
                <div
                  className="card-post__image"
                  style={{ backgroundImage: `url(${post.petImages.petImages[0].base64})` }}
                >
                  <Badge
                    pill
                    className={`card-post__category bg-${post.categoryTheme}`}
                  >
                    {post.species}
                  </Badge>
                </div>
                <CardBody  class="card-body d-flex row justify-content-center align-items-center ml-4 ">
                  <div className={"ml-2"}>
                    <h5 className="card-title text-center">
                      <a href="#" className="text-fiord-blue" >
                        {post.petName}
                      </a>
                    </h5>
                    <Row>
                      <Col>
                        <p className="card-text d-inline-block mb-3">Raza: {post.petBreed}</p> <br/>
                        <p className="card-text d-inline-block mb-3">Sexo: {post.petSex}</p><br/>

                      </Col>
                      <Col>
                        <p className="card-text d-inline-block mb-3">Color: {post.petColor}</p><br/>
                        <p className="card-text d-inline-block mb-3">Edad: {post.petAge}</p><br/>

                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p className="card-text d-inline-block mb-3">Tamaño: {post.size}</p><br/>

                      </Col>

                    </Row>

                  </div>

                  <div className={" text-center center-block my-3  ml-4 "}>
                    <Row>
                      <Col >  <span className="text-muted right-date small">{post.publicationDate}</span></Col>
                      <Col> <Link
                        to={{
                          pathname:  `/view/${post.idPublication}`

                        }}
                      > <Button className=" btn-primary" >Ver mas</Button> </Link> </Col>
                    </Row>


                  </div>

                </CardBody>

              </Card>

            </Col>
          ))}


        </Row>

      </Container>
    );
  }
}




export default BlogPosts;
