
import { Card, CardImg, CardImgOverlay,CardTitle } from "reactstrap";



function Menu(props){
    return(
        <div className="col-12 col-md-5 m-1 menu">
          <Card onClick={() =>{props.renderInfo(props.data)}}>
            <CardImg className="image" src={props.data.image} alt={props.data.name} />
            <CardImgOverlay className="nameMenu">
              <CardTitle>{props.data.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
    )
}

export default Menu;
