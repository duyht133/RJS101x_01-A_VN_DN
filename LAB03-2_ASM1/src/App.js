import "./App.css";
import React, { Component } from "react";
import Menu from "./components/Menucomponent";
import { Navbar, NavbarBrand } from "reactstrap";
import {dishes} from "./shared/dishes";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: dishes
    }
  }
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">tao moi reactjs</NavbarBrand>
          </div>
        </Navbar>
     
        <Menu dishes={this.state.dishes}/>
  
      </div>
  
    );
  }
  
}
  
  


export default App;
