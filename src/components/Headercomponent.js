import React, { Component } from "react";
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
            <div className="header">
              {/* <NavbarToggler onClick={this.toggleNav} /> */}

              <Link className="nav-link" to="/">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/39/FreeCodeCamp_logo.png"
                  height="40"
                  width="100"
                  alt="demo"
                />
              </Link>

              <div className="nav">
                  <div>
                    <Link className="nav-link" to="/">
                      <span className="fas fa-users">Nhân viên</span> 
                    </Link>
                  </div>

                  <div>
                    <Link className="nav-link" to="/department">
                      <span className="fas fa-address-book">Phòng Ban</span> 
                    </Link>
                  </div>

                  <div>
                    <Link className="nav-link" to="/salary">
                      <span className="fas fa-money-bill">Bảng Lương</span> 
                    </Link>
                  </div>
              </div>
            </div>
      </React.Fragment>
    );
  }
}
export default Header;
