import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { useSelector } from "react-redux";   /* hook selecTor dùng để get dữ liệu từ store Redux */
import { dishes,promotions,leaders } from "../redux/selector"; // sử dụng state của redux thay vì import trực tiếp


function RenderCard1() {
  // dùng state redux tại đây
  const datadishes = useSelector(dishes)
  return (
    <div>
      <div>
        <Card key={datadishes[0].id}>
          <CardImg src={datadishes[0].image} alt={datadishes[0].name} />
          <CardBody>
            <CardTitle>{datadishes[0].name}</CardTitle>
            {datadishes[0].designation ? <CardSubtitle>{datadishes[0].designation}</CardSubtitle> : null}
            <CardText>{datadishes[0].description}</CardText>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

function RenderCard2() {
  // dùng state redux tại đây
  const datapromotions = useSelector(promotions)
  return (
    <div>
      {datapromotions.map((e) => (
        <div key={e.id}>
          <Card >
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
  // dùng state redux tại đây
  const datapleaders = useSelector(leaders)

  return (
    <div>
      <div>
        <Card key={datapleaders[3].id}>
          <CardImg src={datapleaders[3].image} alt={datapleaders[3].name} />
          <CardBody>
            <CardTitle>{datapleaders[3].name}</CardTitle>
            {datapleaders[3].designation ? <CardSubtitle>{datapleaders[3].designation}</CardSubtitle> : null}
            <CardText>{datapleaders[3].description}</CardText>
          </CardBody>
        </Card>
      </div>
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
