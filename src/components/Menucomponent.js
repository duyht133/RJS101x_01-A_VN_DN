import React, { Component } from "react";
import { Media } from "reactstrap";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes:[
        {
          id: 0,
          name:"pizzachicken",
          image:"https://cdn.tgdd.vn/2020/09/CookProduct/1200bzhspm-1200x676.jpg",
          category:"mains",
          label:"Hot",
          price:"4.99",
          description:"ăn thơm mùi gà",
        },
        {
          id: 2,
          name:"pizzacow",
          image:"https://img.dominos.vn/Veggie-mania.jpg",
          category:"nuong",
          label:"burn",
          price:"8.99",
          description:"pizza con bò cười",
        },
        {
          id: 3,
          name:"pizza8c",
          image:"https://petercat.net/wp-content/uploads/2020/04/delish-homemade-pizza-horizontal-1542312378.png",
          category:"hap",
          label:"Hot",
          price:"7.99",
          description:"pizza hấp",
        },
        {
          id: 4,
          name:"pizzaquay",
          image:"https://dulichkhampha24.com/wp-content/uploads/2020/09/pizza-ha-noi.jpg",
          category:"quay",
          label:"Hot",
          price:"6.99",
          description:"quay lên như bò",
        },
      ]
    }
  }

  render() {
    const menu = this.state.dishes.map((e)=>{
      return (
          <div key={e.id} className="col-12 mt-5">
            <Media tag="li">

              <Media left middle>
                  <Media object src={e.image} alt={e.name}/>
              </Media>

              <Media body className="ml-5">
                <Media heading>{e.name}</Media>
                <p>{e.description}</p>
              </Media>

            </Media>
          </div>
      )
    });
    return (
      <div className="container">
        <div className="row">
          <Media list>
              {menu}
           </Media>
        </div>
      </div>
    );
  }
}

export default Menu;
