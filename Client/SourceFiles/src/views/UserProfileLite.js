import React, {useEffect, useState} from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import UserDetails from "../components/user-profile-lite/UserDetails";
import UserAccountDetails from "../components/user-profile-lite/UserAccountDetails";
import axios from "axios";
import Config from "../utils/Config";
import AuthService from "../services/AuthService";

const UserProfileLite = () =>{
  const [user, setUser] = useState({
    nameUser: "Loading user...",
    picture: "https://i.stack.imgur.com/l60Hf.png",
    email: "example@email.com",
    description:"Loading...",
    department:"",
    phone: 9999999,
    password1:"",
    password2:"",
    password:"",
    address:"Loading..., ...",
    age: 12
  })
  useEffect(() => {
    axios
      .get(`${Config.baseUrl}/getProfile?id=${AuthService.getToken().jti}`, )
      .then((response) => {
        //this.props.user =  response.data
        setUser({
          nameUser: response.data.nameUser,
          picture: response.data.picture,
          email: response.data.email,
          description: response.data.description,
          phone: response.data.phone,
          address: response.data.address,
          department: response.data.department,
          password1:"",
          password2:"",
          password:"",
          age: response.data.age
        });
        //this.state.user = response.data
      });
  }, [])
  return (
    <Container fluid className="main-content-container px-4">
      <Row noGutters className="page-header py-4">
        <PageTitle title="Perfil"  md="12" className="ml-sm-auto mr-sm-auto" />
      </Row>
      <Row>
        <Col lg="4">
          <UserDetails userDetails={user} />
        </Col>
        <Col lg="8">
          <UserAccountDetails userDetails={user}/>
        </Col>
      </Row>
    </Container>
  )
};

export default UserProfileLite;
