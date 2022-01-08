import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDish: null
    };
  }

  onDishSelect(e) {
    this.setState({selectedDish:e});
  }

  renderDish(e) {
    if(e != null) {
      return(
        <Card>
          <CardImg width="100%" src={e.image} alt={e.name}></CardImg>
          <CardBody>
            <CardTitle>{e.name}</CardTitle>
            <CardText>{e.description}</CardText>
          </CardBody>
        </Card>
      )
    }else{
      return(
        <div>
          <button> hide </button>
        </div>
      )
    }
  }

  render() {
    const menu = this.props.dishes.map((e) => {
      return (
        <div key={e.id} className="col-12 col-md-5 m-1">
          <Card onClick={()=>{this.onDishSelect(e)}}>
            <CardImg width="100%" src={e.image} alt={e.name} />
            <CardImgOverlay>
              <CardTitle>{e.name}</CardTitle>
              <p>{e.description}</p>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });
    return (
      <div className="container">

        <div className="row">
          {menu}
        </div>

        <div className="row">
          {this.renderDish(this.state.selectedDish)}
        </div>
 
      </div>
    );
  }
}

export default Menu;
