import React, { Component } from "react";
import { Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, Jumbotron } from "reactstrap";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false,
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <Navbar dark color="primary">
            <div className="">
              <NavbarToggler onClick={this.toggleNav} />
              <NavbarBrand className="mr-auto" href="/">
                <img
                  src="https://cdn.thukyluat.vn/nhch-images//CauHoi_Hinh/9eb6abaa-8cda-456c-ad66-26ba4da23ffe.jpg"
                  height="30"
                  width="41"
                  alt="Ristorante Con Fusion"
                />
              </NavbarBrand>
              <Nav navbar>
                <NavItem>
                  <Link className="nav-link" to="/home">
                    <span className="fa fa-home fa-lg"></span> Home
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/aboutus">
                    <span className="fa fa-info fa-lg"></span> About Us
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/menu">
                    <span className="fa fa-list fa-lg"></span> Menu
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/contact">
                    <span className="far fa-id-card"></span> Contact
                  </Link>
                </NavItem>
              </Nav>
            </div>
          </Navbar>
        </div>

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
      </React.Fragment>
    );
  }
}
export default Header;
