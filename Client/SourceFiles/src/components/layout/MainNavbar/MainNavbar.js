import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Container, Navbar } from "shards-react";
import BootstrapSwitchButton from "bootstrap-switch-button-react";

import NavbarSearch from "./NavbarSearch";
import NavbarNav from "./NavbarNav/NavbarNav";
import NavbarToggle from "./NavbarToggle";
import AuthService from "./../../../services/AuthService";

const MainNavbar = ({ layout, stickyTop }) => {
  const classes = classNames(
    "main-navbar",
    "bg-white",
    stickyTop && "sticky-top"
  );

  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleTheme = () => {
    setChecked(!checked);
    localStorage.setItem("theme", !checked ? "dark" : "light");
    window.location.reload();
  };

  useEffect(() => {
    if (loading) {
      setChecked(localStorage.getItem("theme") === "dark");
      setLoading(false);
    }
  }, [loading]);

  return (
    <div className={classes}>
      <Container className="p-0">
        <Navbar type="light" className="align-items-stretch flex-md-nowrap p-0">
          {AuthService.getAuth() ? (
            <div style={{ marginLeft: "auto" }}>
              <div
                style={{
                  marginLeft: "auto",
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "5px",
                  marginRight: "10px"
                }}
              >
                <BootstrapSwitchButton
                  checked={localStorage.getItem("theme") === "dark"}
                  onlabel="Light Theme"
                  offlabel="Dark Theme"
                  onstyle="light"
                  offstyle="dark"
                  onChange={checked => {
                    handleTheme();
                  }}
                  width={120}
                />
              </div>
              <NavbarNav />
            </div>
          ) : (
            <div style={{ marginLeft: "auto" }}>
              <BootstrapSwitchButton
                checked={false}
                onlabel="Admin User"
                offlabel="Regular User"
                onChange={checked => {
                  this.setState({ isUserAdmin: checked });
                }}
              />
            </div>
          )}
          <NavbarToggle />
        </Navbar>
      </Container>
    </div>
  );
};

MainNavbar.propTypes = {
  /**
   * The layout type where the MainNavbar is used.
   */
  layout: PropTypes.string,
  /**
   * Whether the main navbar is sticky to the top, or not.
   */
  stickyTop: PropTypes.bool
};

MainNavbar.defaultProps = {
  stickyTop: true
};

export default MainNavbar;
