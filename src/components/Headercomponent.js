import React, { Component, useState } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  Jumbotron,
  Modal,
  ModalHeader,
} from "reactstrap";
import { Link } from "react-router-dom";
import "./App.css";

/* this.state = {
      isNavOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this); */

function Header() {
  const [state, setState] = useState(false);

  const toggleNav = () => {
    console.log(state);
    setState(!state);
  };

  const Render = () => {
    if (state !== false) {
      return (
        <div className="toggle">
          <Link className="nav-link" to="/home">
            <span className="fa fa-home fa-lg"></span> Home
          </Link>

          <Link className="nav-link" to="/aboutus">
            <span className="fa fa-info fa-lg"></span> About Us
          </Link>

          <Link className="nav-link" to="/menu">
            <span className="fa fa-list fa-lg"></span> Menu
          </Link>

          <Link className="nav-link" to="/contact">
            <span className="far fa-id-card"></span> Contact
          </Link>
        </div>
      );
    } else {
      return <div></div>;
    }
  };

  return (
    <div>
      <div className="Navbar">
        <button className="nav-toggle" onClick={toggleNav} >
          <p>Toggle</p>
        </button>
        <Link to="/home">
          <img
            className="Logo"
            src="https://backlinks.vn/digital-marketing-logo/imager_98186.jpg"
            alt="Ristorante Con Fusion"
          />
        </Link>

        <div className="nav">
          <Link className="nav-link" to="/home">
            <span className="fa fa-home fa-lg"></span> Home
          </Link>

          <Link className="nav-link" to="/aboutus">
            <span className="fa fa-info fa-lg"></span> About Us
          </Link>

          <Link className="nav-link" to="/menu">
            <span className="fa fa-list fa-lg"></span> Menu
          </Link>

          <Link className="nav-link" to="/contact">
            <span className="far fa-id-card"></span> Contact
          </Link>
        </div>
      </div>
      <Render />

      <Jumbotron>
        <div className="container">
          <div className="row row-header">
            <div className="col-12 col-sm-6">
              <h1>Ristonrate con funsion</h1>
              <p>quan an nha hang tiec cuoi sang trong</p>
            </div>
          </div>
        </div>
      </Jumbotron>
      <Modal>
        <ModalHeader>Login</ModalHeader>
      </Modal>
    </div>
  );
}

export default Header;
