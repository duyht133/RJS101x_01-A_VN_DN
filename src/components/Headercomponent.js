import React, { Component } from "react";
import { Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, div } from "reactstrap";
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
                  <Link className="nav-link" to="/">
                    <span className="fa fa-home fa-lg"></span> Nhân viên
                  </Link>
                </NavItem>

                <NavItem>
                  <Link className="nav-link" to="/department">
                    <span className="fa fa-info fa-lg"></span> Phòng ban
                  </Link>
                </NavItem>

                <NavItem>
                  <Link className="nav-link" to="/menu">
                    <span className="fa fa-list fa-lg"></span> Bảng Lương
                  </Link>
                </NavItem>
               
              </Nav>
            </div>
          </Navbar>
        </div>
      </React.Fragment>
    );
  }
}
export default Header;
