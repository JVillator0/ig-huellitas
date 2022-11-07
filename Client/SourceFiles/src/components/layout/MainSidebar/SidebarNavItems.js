import React from "react";
import { Nav } from "shards-react";

import SidebarNavItem from "./SidebarNavItem";
import { Store } from "../../../flux";
import AuthService from "../../../services/AuthService";

class SidebarNavItems extends React.Component {
  constructor(props) {
    super(props)
    let indexToDelete = Store.getSidebarItems();
    if (!AuthService.getAuth()){
      indexToDelete = Store.getSidebarItems().filter(e=> (e.to !== '/requests' && e.to !== '/perfil' ));
    }
    this.state = {
      navItems: indexToDelete
    };

    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    Store.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    Store.removeChangeListener(this.onChange);
  }

  onChange() {
    let indexToDelete = Store.getSidebarItems();
    if (!AuthService.getAuth()){
      indexToDelete = Store.getSidebarItems().filter(e=> (e.to !== '/requests' && e.to !== '/perfil' ));
    }
    this.setState({
      ...this.state,
      navItems: indexToDelete
    });
  }

  render() {
    const { navItems: items } = this.state;
    return (
      <div className="nav-wrapper">
        <Nav className="nav--no-borders flex-column">
          {items.map((item, idx) => (
            <SidebarNavItem key={idx} item={item} />
          ))}
        </Nav>
      </div>
    )
  }
}

export default SidebarNavItems;
