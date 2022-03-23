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

function Header({ getAnimation }) {
  // lấy vào hiệu ứng animation
  // useDispatch
  const dispatch = useDispatch();
  // Select data from store
  const isLoading = useSelector(selectLoading);
  const errorMessage = useSelector(selectErrorMessage);
  const user = useSelector(selectUser);

  // state modal
  const [state, setState] = useState(false);
  const [modal, setModal] = useState(false);
  // state login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
  //handle Login
  const HandleLogin = () => {
    dispatch(login({ email, password }));
    toggleModal();
  };

  // toggle link dashboar user Login.
  // nếu đăng nhập thành công sẽ hiện ra tag Dashboard
  const LinkDashboard = () => {
    if (user !== "") {
      return (
        <Link className="nav-link" to="/dashboard">
          <span className="far fa-id-card"></span> Dashboard
        </Link>
      );
    } else {
      return <div></div>;
    }
  };
  //////////////////
  // Route Dashboard
  // nếu đăng nhập thành công sẽ nút Login nếu bấm lần thứ 2 sẽ chuyển đến Dashboard
  const RouteDashboard = () => {
    if (user === "") {
      return <div>Login</div>;
    } else {
      return (
        <Link to="/dashboard">
          <div className="text-Login">Login</div>
        </Link>
      );
    }
  };
  // error Message
  const ErrorMessage = () => {
    return errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>;
  };

  /////////
  const RenderToggle = () => {
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

          <LinkDashboard />
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
          <Link className="nav-link" to="/home" onClick={getAnimation}>
            <span className="fa fa-home fa-lg"></span> Home
          </Link>

          <Link className="nav-link" to="/aboutus" onClick={getAnimation}>
            <span className="fa fa-info fa-lg"></span> About Us
          </Link>

          <Link className="nav-link" to="/menu" onClick={getAnimation}>
            <span className="fa fa-list fa-lg"></span> Menu
          </Link>

          <Link className="nav-link" to="/contact" onClick={getAnimation}>
            <span className="far fa-id-card"></span> Contact
          </Link>

          <div className="d-flex mr-5">
            <Nav className="ml-auto " navbar>
              <NavItem>
                <Button outline onClick={toggleModal} className="loginToggle">
                  <span className="fa fa-sign-in fa-lg login"></span> Login
                </Button>
              </NavItem>
            </Nav>

            <LinkDashboard />
          </div>
        </div>
      </div>

      <RenderToggle />

      {/* render modal */}
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalBody>
          <h1>Login</h1>
          <ErrorMessage />
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
          <Button
            type="submit"
            value="submit"
            color="primary"
            onClick={HandleLogin}
            disabled={isLoading}
          >
            <RouteDashboard />
          </Button>

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
      <Jumbotron style={{ backgroundColor: "#c3b7ff",height: "200px"}}>
        <div className="container">
          <div className="row row-header">
            <div className="col-12 col-sm-6 ">
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
