import Main from "./Maincomponent";
import { useEffect, useState } from "react";

import { updateDishes } from "../redux/reducer";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  fetch("http://localhost:3001/dishes") 
    .then((data) => data.json())    
    .then((jsonData) => {  
      dispatch(updateDishes(jsonData));   
    });
    

  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
