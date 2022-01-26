/* import "./App.css";
import React, { Component } from "react";
import StaffListComponent from "./components/StaffListComponent";
import RenderDish from "./components/RenderDish";
import { Navbar, NavbarBrand } from "reactstrap";
import { STAFFS } from "./shared/staffs";
import { Routes, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      STAFFS: STAFFS,
    };
  }
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
          </div>
        </Navbar>

        <h1>Nhân Viên</h1>

        <Routes>

          <Route path="/" element={<StaffListComponent STAFFS={this.state.STAFFS} />} />

          <Route path="/staff/:eId" element={<StaffListComponent STAFFS={this.state.STAFFS} />} />

        </Routes>
      </div>
    );
  }
}

export default App; */

//////////////////////////

import MainComponent from "./MainComponent";

function App() {
  return (
    <div className="App">
      <MainComponent/>
    </div>
  );
}

export default App;