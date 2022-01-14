import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function Dishdetail(props) {
  let info = null;
  let comments = null;
  
  if (props.dish) {
    info = (
      <div>
        <Card className="dishDetail" >
          <CardImg className="imageDish" src={props.dish.image} alt={props.dish.image}></CardImg>
          <CardBody className="text">
            <CardTitle>{props.dish.name}</CardTitle>
            <CardText >{props.dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

  if (props.dish) {
    comments = (
      <div className="comMent">
        <h4>Comments</h4>
        <ul className="list-unstyled">
          {props.dish.comment.map((e) => {
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
  }

  return (
    <div>
      {info}
      {comments}
    </div>
  );
}

export default Dishdetail;
