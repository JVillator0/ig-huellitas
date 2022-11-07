import React from "react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  NavItem,
  NavLink
} from "shards-react";
import Config from "../../../../utils/Config";
import axios from "axios";
import AuthService from "../../../../services/AuthService";
import User from "../../../../services/UserService";

export default class UserActions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "Loading user...",
      picture: "https://i.stack.imgur.com/l60Hf.png",
      visible: false
    };

    this.toggleUserActions = this.toggleUserActions.bind(this);


  }
  componentDidMount() {
    axios
      .get(`${Config.baseUrl}/getProfile?id=${AuthService.getToken().jti}`, )
      .then((response) => {
        //this.props.user =  response.data
        User.changeName = (response.data.nameUser)
        User.changePhone = (response.data.phone)
        this.setState({
          user: response.data.nameUser,
          picture: response.data.picture
        });
        //this.state.user = response.data
      });
  }
  toggleUserActions() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    return (
      <NavItem tag={Dropdown} caret toggle={this.toggleUserActions}>
        <DropdownToggle caret tag={NavLink} className="text-nowrap px-3">
          <img
            className="user-avatar rounded-circle mr-2"
            src={this.state.picture}
            alt="User Avatar"
            style={{
              height: "2.5rem"
            }}
          />{" "}
          <span className="d-none d-md-inline-block">{this.state.user}</span>
        </DropdownToggle>
        <Collapse tag={DropdownMenu} right small open={this.state.visible}>
          <DropdownItem tag={Link} to="perfil">
            <i className="material-icons">&#xE7FD;</i> Perfil
          </DropdownItem>
          <DropdownItem tag={Link} to="requests" className="text-danger">
          <i className="material-icons">&#xF189;</i> Solicitudes
          </DropdownItem>
          <Link to={{
            pathname:  `/`
          }}>
            <DropdownItem tag={Link} to="login" className="text-danger" onClick={() => localStorage.removeItem("token")}>
              <i className="material-icons text-danger">&#xE879;</i> Logout
            </DropdownItem>
          </Link>
        </Collapse>
      </NavItem>
    );
  }
}
