import React, { Component } from "react";
import { Media } from "reactstrap";

const menu = [
  {
    id: 0,
    name: "Uthappiza",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/13/89/1b/c2/48-pizza.jpg",
    category: "mains",
    label: "hot",
    price: "4.99$",
    description: "món ăn ấn độ",
  },
  {
    id: 2,
    name: "pizza lao",
    image: "https://top10quynhon.com/wp-content/uploads/pizza.jpg",
    category: "mains",
    label: "very hot",
    price: "7.49$",
    description: "món ăn ấn độ",
  },
];

function Menuitem({ id, name, image, price }) {
    return (
      <div class="course-item">
        <img src={id} />
        <h2>{name}</h2>
        <p> {image} </p>
        <p> {price} </p>
      </div>
    );
}

function Menucomponent() {
  
  return (
    <div className="container">
      <div className="row">
        <Media list>
             {menu.map((e) => {
                 return <Menuitem 
                    id = {e.id}
                    name = {e.name}
                    image = {e.image}
                    price = {e.price}
                 />
             })}
        </Media>
      </div>
    </div>
  );
}
export default Menucomponent;
