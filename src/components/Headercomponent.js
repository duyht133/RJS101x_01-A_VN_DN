import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  NavItem,
  Nav,
  Jumbotron,
  Modal,
  Button,
  ModalBody,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { Link } from "react-router-dom";
import { selectLoading, selectErrorMessage, selectUser } from "../redux/selector";
import { login } from "../redux/reducerThunk";
import "./App.css";

function Header() {
  const [state, setState] = useState(false);
  const [modal, setModal] = useState(false);
  // state login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // useDispatch
  const dispatch = useDispatch();
  //handle nav
  const toggleNav = () => {
    setState(!state);
  };
  //handle modal
  const toggleModal = () => {
    setEmail(""); 
    setPassword("");
    setModal(!modal);
  };
  // Select data from store
  const isLoading = useSelector(selectLoading);
  const errorMessage = useSelector(selectErrorMessage);
  const user = useSelector(selectUser);

  const handleLogin = async () => {
    dispatch(login({ email, password }));
  };
  
  // lỗi chuyển hướng tại đây
  if (user) {
    console.log(user.firstName);
    return <Link to="/Dashboard" />;
  }

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

          <Link className="nav-link" to="/dashboard">
            <span className="far fa-id-card"></span> Dashboard
          </Link>
        </div>
      </div>
      <Render />

      {/* render modal */}
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalBody>
          <h1>Login</h1>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          <FormGroup>
            <Label htmlFor="username">Username</Label>
            <Input
              type="text"
              name="username"
              id="username"
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="Password">Password</Label>
            <Input
              type="Password"
              name="Password"
              id="Password"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <Label check>
              <Input type="checkbox" name="remember" />
              Remember Me
            </Label>
          </FormGroup>


          {/* lỗi chuyển hướng tại đây */}
          {/* <Link to="/dashboard"> */}
            <Button
              type="submit"
              value="submit"
              color="primary"
              onClick={handleLogin}
              disabled={isLoading}
            >
              Login
            </Button>
          {/* </Link> */}

          
          <p style={{ fontSize: "0.7rem", marginTop: "70px" }}>
            <b>Test account:</b>
            <br />
            <i>admin@gmail.com</i>
            <br />
            <i>admin</i>
          </p>
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
