import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { useSelector } from "react-redux"; /* hook selecTor dùng để get dữ liệu từ store Redux */
import { dishes, promotions, leaders } from "../redux/selector"; // sử dụng state của redux thay vì import trực tiếp
import { FadeTransform } from "react-animation-components";

function RenderCard1() {
  const datadishes = useSelector(dishes);
  // dùng state redux tại đây
  return (
    <div>
      <div>
        <FadeTransform /* chuyển đổi hoạt ảnh  */
          in
          transformProps={{
            exitTransition: "scale(0.5) translateY(-50%)",
          }}
        >
          <Card key={datadishes[0].id}>
            <CardImg src={datadishes[0].image} alt={datadishes[0].name} />
            <CardBody>
              <CardTitle>{datadishes[0].name || datadishes}</CardTitle>{" "}
              {/* tại đây nếu không get được Api thì sẽ hiển thị thông báo lỗi */}
              {datadishes[0].designation ? (
                <CardSubtitle>{datadishes[0].designation}</CardSubtitle>
              ) : null}
              <CardText>{datadishes[0].description}</CardText>
            </CardBody>
          </Card>
        </FadeTransform>
      </div>
    </div>
  );
}

function RenderCard2() {
  // dùng state redux tại đây
  const datapromotions = useSelector(promotions);
  return (
    <div>
      <FadeTransform
        in
        transformProps={{
          exitTransition: "scale(0.5) translateY(-50%)",
        }}
      >
        <Card>
          <CardImg src={datapromotions[0].image} alt={datapromotions[0].name} />
          <CardBody>
            <CardTitle>{datapromotions[0].name || datapromotions}</CardTitle>
            {datapromotions[0].designation ? (
              <CardSubtitle>{datapromotions[0].designation}</CardSubtitle>
            ) : null}
            <CardText>{datapromotions[0].description}</CardText>
          </CardBody>
        </Card>
      </FadeTransform>
    </div>
  );
}

function RenderCard3() {
  // dùng state redux tại đây
  const datapleaders = useSelector(leaders);

  return (
    <div>
      <div>
        <FadeTransform
          in
          transformProps={{
            exitTransition: "scale(0.5) translateY(-50%)",
          }}
        >
          <Card key={datapleaders[3].id}>
            <CardImg src={datapleaders[3].image} alt={datapleaders[3].name} />
            <CardBody>
              <CardTitle>{datapleaders[3].name || datapleaders}</CardTitle>
              {datapleaders[3].designation ? (
                <CardSubtitle>{datapleaders[3].designation}</CardSubtitle>
              ) : null}
              <CardText>{datapleaders[3].description}</CardText>
            </CardBody>
          </Card>
        </FadeTransform>
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
