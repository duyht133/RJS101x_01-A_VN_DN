import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  CardImgOverlay,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

function Dishdetail({ dish }) {
  /*  let info = null;
  let comments = null;

  if (dish) {
    info = (
      <div>
        <Card className="dishDetail">
          <CardImg className="imageDish" src={dish.image} alt={dish.image}></CardImg>
          <CardBody className="text">
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

  if (dish) {
    comments = (
      <div className="comMent">
        <h4>Comments</h4>
        <ul className="list-unstyled">
          {dish.comment.map((e) => {
            return (
              <li key={e.id}>
                <p>comment:{e.comment}</p>
                <p>user:{e.author}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } */

  const Info = () => {
    if (dish != null) {
      return (
        <div>
          <Card className="dishDetail">
            <Link to={`/menu/${dish.id}`}>
              <CardImg className="imageDish" src={dish.image} alt={dish.image}></CardImg>
              <CardImgOverlay className="text">
                <CardTitle>{dish.name}</CardTitle>
              </CardImgOverlay>
            </Link>
          </Card>
        </div>
      );
    } else return <div></div>;
  };

  /* const Comments = () => {
    if (dish != null) {
      return (
        <div className="comMent">
          <h4>Comments</h4>
          <ul className="list-unstyled">
            {dish.comment.map((e) => {
              return (
                <li key={e.id}>
                  <p>comment:{e.comment}</p>
                  <p>user:{e.author}</p>
                </li>
              );
            })}
          </ul>
        </div>
      );
    } else return <div></div>;
  };
 */
  return (
    <div>
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Menu</h3>
        </div>
      </div>

      <Info />
      {/* <Comments/> */}
    </div>
  );
}

export default Dishdetail;
