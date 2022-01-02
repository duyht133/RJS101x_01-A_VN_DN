import "./App.css";
import Menu from "./components/Menucomponent";
import { Navbar, NavbarBrand } from "reactstrap";

function App() {
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">tao moi reactjs</NavbarBrand>
        </div>
      </Navbar>
   
      <Menu/>

    </div>

  );
}

export default App;
