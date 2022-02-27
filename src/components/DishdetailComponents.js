import { Card, CardImg, CardText, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"; // import hook useSelector của react-redux
/* import { comments } from "../share/comment"; */

// sử dụng state của redux thay vì import trực tiếp
import { comments } from "../redux/selector";

function Dishdetail({ props }) {
  /* hook selecTor dùng để get dữ liệu từ store Redux */
  const dataComments = useSelector(comments);

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
    // dùng state redux tại đây
    if (dataComments != null) {
      return (
        <div className="comment">
          <h4>Comments</h4>
          <ul className="list-unstyled">
            {dataComments.map((e) => {
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
        <Comments />
      </div>
    </>
  );
}

export default Dishdetail;
