import React, { Component } from "react";
import { Link } from "react-router-dom";

const Header = ({getAnimation}) => {
  return (
    <div>
      <div className="header">
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
            <Link className="nav-link" to="/home" onClick={getAnimation}>
              <span className="fas fa-users">Nhân viên</span>
            </Link>
          </div>

          <div>
            <Link className="nav-link" to="/department" onClick={getAnimation}>
              <span className="fas fa-address-book">Phòng Ban</span>
            </Link>
          </div>

          <div>
            <Link className="nav-link" to="/salary" onClick={getAnimation}>
              <span className="fas fa-money-bill">Bảng Lương</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
