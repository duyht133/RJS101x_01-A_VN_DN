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
  Button,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  ModalFooter,
} from "reactstrap";
import { Link } from "react-router-dom";
import "./App.css";

function Header() {
  const [state, setState] = useState(false);
  const [modal, setModal] = useState(false);

  const toggleNav = () => {
    console.log(">>state", state);
    setState(!state);
  };
  const toggleModal = () => {
    console.log(">>modal", modal);
    setModal(!modal);
  };

  /////////
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

  /////
  return (
    <div>
      <div className="Navbar">
        <button className="nav-toggle" onClick={toggleNav}>
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

          <Nav className="ml-auto " navbar>
            <NavItem>
              <Button outline onClick={toggleModal} className="loginToggle">
                <span className="fa fa-sign-in fa-lg login"></span> Login
              </Button>
            </NavItem>
          </Nav>
        </div>
      </div>
      <Render />

      {/* render modal */}
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalBody>
          <FormGroup>
            <Label htmlFor="username">Username</Label>
            <Input type="text" name="username" id="username" />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="Password">Password</Label>
            <Input type="text" name="Password" id="Password" />
          </FormGroup>

          <FormGroup>
            <Label check>
              <Input type="checkbox" name="remember" />
              Remember Me
            </Label>
          </FormGroup>
          <Button type="submit" value="submit" color="primary">
            Login
          </Button>
        </ModalBody>
      </Modal>

      {/* Banner */}
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
    </div>
  );
}

export default Header;
