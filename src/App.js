import "./App.css";
import React, { Component } from "react";
import Menu from "./components/Menucomponent";
import StaffListComponent from "./components/StaffListComponent";
import { Navbar, NavbarBrand } from "reactstrap";
import { STAFFS } from "./shared/staffs";
import {dishes} from "./shared/dishes";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: dishes,
      STAFFS: STAFFS
    }
  }
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
          </div>
        </Navbar>
        {/* <Menu dishes={this.state.dishes}/> */}

        <StaffListComponent STAFFS={this.state.STAFFS}/>

      </div>
  
    );
  }
  
}
  
  


export default App;
