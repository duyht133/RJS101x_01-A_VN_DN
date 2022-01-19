import React, { useState } from "react";
import { dishes } from "../share/dishes";
import Dishdetail from "./DishdetailComponents";
import { Card, CardImg, CardImgOverlay,CardTitle } from "reactstrap";



function Menu(){
  const [dishSelected, setDishSelected] = useState(null);

  const onSelecdish = (data) => {
    setDishSelected(data);
  };

    return(
      <>
      {dishes.map((data) => (
        <div key={data.id}className="col-12 col-md-5 m-1 menu">
          <Card onClick={() =>{onSelecdish(data)}}>
            <CardImg className="image" src={data.image} alt={data.name} />
            <CardImgOverlay className="nameMenu">
              <CardTitle>{data.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
        ))}
        
        <Dishdetail dish={dishSelected} />

        </>
    )
}

export default Menu;
