import React, { useState } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { dishes } from "../redux/selector"; // sử dụng state của redux thay vì import trực tiếp
import "./App.css";
function Menu({ onSelect }) {
  const dataDishes = useSelector(dishes);

  const HandleDishes = () => {
    if (dataDishes == "Request failed with status code 404") {
      return <div>{dataDishes}</div>;
    } else {
      return dataDishes.map((data) => (
        <div className="col-12 col-md-5 m-1 menu">
          <Link to={`/menu/${data.id}`} key={data.id}>
            <Card
              onClick={() => {
                onSelect(data);
              }}
            >
              <CardImg className="image" src={data.image} alt={data.name} />
              <CardImgOverlay className="nameMenu">
                <CardTitle>{data.name}</CardTitle>
              </CardImgOverlay>
            </Card>
          </Link>
        </div>
      ));
    }
  };

  return (
    <>
      <Link to="/home">Home</Link> | <Link to="/menu">Menu</Link>
      <div className="container">
        <div className="row row-content mb-5">
          <HandleDishes />
        </div>
      </div>
    </>
  );
}

export default Menu;
