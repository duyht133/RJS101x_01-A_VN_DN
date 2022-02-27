import React, { useState } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle} from "reactstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
/* import { dishes } from "../share/dishes"; */

// sử dụng state của redux thay vì import trực tiếp
import { dishes } from "../redux/selector";



function Menu({onSelect}) {
  const dataDishes = useSelector(dishes)

  return (
    <>
      <Link to="/home">Home</Link> | <Link to="/menu">Menu</Link>

      {dataDishes.map((data) => (
        <Link to={`/menu/${data.id}`} key={data.id}>
          <div className="col-12 col-md-5 m-1 menu" >
            <Card
              onClick={() => {
                onSelect(data)
              }}
            >
              <CardImg className="image" src={data.image} alt={data.name} />
              <CardImgOverlay className="nameMenu">
                <CardTitle>{data.name}</CardTitle>
              </CardImgOverlay>
            </Card>
          </div>
        </Link>
      ))}
    </>
  );
}

export default Menu;
