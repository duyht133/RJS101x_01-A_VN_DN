import {
  Card,
  CardImg,
  CardText,
  CardTitle,
  CardImgOverlay,
} from "reactstrap";
import { Link } from "react-router-dom";

function Dishdetail({props}) {
  console.log(props);

  const Info = () => {
    if (props != null) {
      return (
        <div>
          <Card className="dishDetail">
              <CardImg className="imageDish" src={props.image} alt={props.image}></CardImg>
              <CardImgOverlay className="text">
                <CardTitle>{props.name}</CardTitle>
                <CardText>{props.description}</CardText>
              </CardImgOverlay>
          </Card>
        </div>
      );
    } else return <div></div>;
  };

 /*  const Comments = () => {
    if (com != null) {
      return (
        <div className="comMent">
          <h4>Comments</h4>
          <ul className="list-unstyled">
            {com.map((e) => {
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
  }; */

  return (
    <div>
      <div>
      <Link to="/home">Home</Link> | <Link to="/menu">Menu</Link>
      <Info />
      {/* <Comments/> */}
      </div>
    </div>
  );
}

export default Dishdetail;
