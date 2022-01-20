import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { leaders } from "../share/leaders";
import { promotions } from "../share/promotions";
import { dishes } from "../share/dishes";


function RenderCard1() {
  return (
    <>
      {/* {dishes.map((e) => ( */}
        <div>
          <Card key={dishes[0].id}>
            <CardImg src={dishes[0].image} alt={dishes[0].name} />
            <CardBody>
              <CardTitle>{dishes[0].name}</CardTitle>
              {dishes[0].designation ? <CardSubtitle>{dishes[0].designation}</CardSubtitle> : null}
              <CardText>{dishes[0].description}</CardText>
            </CardBody>
          </Card>
        </div>
      {/* ))} */}
    </>
  );
}

function RenderCard2() {
  return (
    <div>
      {promotions.map((e) => (
        <div>
          <Card key={e.id}>
            <CardImg src={e.image} alt={e.name} />
            <CardBody>
              <CardTitle>{e.name}</CardTitle>
              {e.designation ? <CardSubtitle>{e.designation}</CardSubtitle> : null}
              <CardText>{e.description}</CardText>
            </CardBody>
          </Card>
        </div>
      ))}
    </div>
  );
}

function RenderCard3() {
  return (
    <div>
      {/* {leaders.map((e) => ( */}
        <div>
          <Card key={leaders[3].id}>
            <CardImg src={leaders[3].image} alt={leaders[3].name} />
            <CardBody>
              <CardTitle>{leaders[3].name}</CardTitle>
              {leaders[3].designation ? <CardSubtitle>{leaders[3].designation}</CardSubtitle> : null}
              <CardText>{leaders[3].description}</CardText>
            </CardBody>
          </Card>
        </div>
      {/* ))} */}
    </div>
  );
}

function Home() {
  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">{<RenderCard1 />}</div>
        <div className="col-12 col-md m-1">{<RenderCard2 />}</div>
        <div className="col-12 col-md m-1">{<RenderCard3 />}</div>
      </div>
    </div>
  );
}

export default Home;
