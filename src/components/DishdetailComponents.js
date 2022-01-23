import {
  Card,
  CardImg,
  CardText,
  CardTitle,
  CardImgOverlay,
} from "reactstrap";
import { Link } from "react-router-dom";

function Dishdetail({props,comment}) {

  const Info = () => {
    if (props != null) {
      return (
        <div>
          <Card className="dishDetail">
              <CardImg className="imageDish" src={props.image} alt={props.image}></CardImg>
                <CardTitle>{props.name}</CardTitle>
                <CardText>{props.description}</CardText>
          </Card>
        </div>
      );
    } else return <div></div>;
  };

  const Comments = () => {
    if (comment != null) {
      return (
        <div className="comment">
          <h4>Comments</h4>
          <ul className="list-unstyled">
            {comment.map((e) => {
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

  return (
      <>
      <Link to="/home">Home</Link> | <Link to="/menu">Menu</Link>
      <div className="dish">
      <Info />
      <Comments/>
      </div>
      </>
  );
}

export default Dishdetail;
