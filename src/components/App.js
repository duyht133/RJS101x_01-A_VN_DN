import MainComponent from "./MainComponent";
import "../App.css";
import React, { useState,useEffect } from "react";
import {
  useSelector,
  useDispatch,
} from "react-redux";
import {contactReducerThunk,departmentsReducerThunk } from "../redux/reducer";

function App() {
  //dispatch api set state contact reducer
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(contactReducerThunk());
    dispatch(departmentsReducerThunk());
  }, [dispatch]);

  return (
    <div className="App">
      <MainComponent/>
    </div>
  );
}

export default App;