import "./App.css";
import Menucomponent from "./components/Menucomponent.js";
import { Navbar, NavbarBrand } from "reactstrap";

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">tao moi reactjs</NavbarBrand>
        </div>
      </Navbar>
   
      <Menucomponent />

    </div>

  );
}

export default App;
