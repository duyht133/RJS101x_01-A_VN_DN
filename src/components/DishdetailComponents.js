import {
  Card,
  CardImg,
  CardText,
  CardTitle,
  Modal,
  Button,
  ModalBody,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import {
  useSelector,
  useDispatch,
} from "react-redux"; /* 2 hook get, push dữ liệu lên store Redux */
import { comments } from "../redux/selector"; // sử dụng state của redux thay vì import trực tiếp
import { postComment } from "../redux/reducer"; // import actions từ reducer(công nhân)
import { FadeTransform, Fade, Stagger } from "react-animation-components";

function Dishdetail({ props }) {
  /* hook selecTor dùng để get dữ liệu từ store Redux */
  const dataComments = useSelector(comments); //comment được import từ selector trỏ thẳng đến configureStore.
  /* handle input */
  const [rating, setRating] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [commentInput, setCommentInput] = useState("");
  const handleRating = (event) => setRating(event.target.value);
  const handleNameInput = (event) => setNameInput(event.target.value);
  const handleCommentInput = (event) => setCommentInput(event.target.value);

  /* Toggle modal */
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setRating("");
    setNameInput("");
    setCommentInput("");
    setModal(!modal);
  };

  /* Handle Submit */
  const date = new Date().toString(); // get date right now
  const dispatch = useDispatch(); // dispatch trỏ trực tiếp vào actions reducer để truyền dữ liệu

  const stateComment = {
    /* id: Math.random().toString(36).slice(2), // get random id */
    rating: rating,
    comment: commentInput,
    author: nameInput,
    date: date,
  };
  const handleSubmit = () => {
    if (stateComment.rating !== "" && stateComment.comment !== "" && stateComment.author !== "") {
      /* dispatch(setStatecomment(stateComment)); */ //dishpatch trực tiếp vào state qua reducers
      dispatch(postComment(stateComment)); //dishpatch gọi Api trả giá trị về state qua extraReducers
      toggleModal();
    }
  };

  //////////////////////////
  const Info = () => {
    if (props != null) {
      return (
        <div>
          <FadeTransform   /* chuyển đổi hoạt ảnh */
            in
            transformProps={{
              exitTransition: "scale(0.5) translateY(-50%)",
            }}
          >
            <Card className="dishDetail">
              <CardImg className="imageDish" src={props.image} alt={props.image}></CardImg>
              <CardTitle>{props.name}</CardTitle>
              <CardText>{props.description}</CardText>
            </Card>
          </FadeTransform>
        </div>
      );
    } else return <div></div>;
  };
  ///////////////////////////
  const Comments = () => {
    // dùng state redux tại đây
    if (dataComments != null) {
      return (
        <div className="row">
          <div className="comment">
            <h4>Comments</h4>
            <ul className="list-unstyled">
              <Stagger in>
                {dataComments.map((e) => {
                  return (
                    <Fade in>
                      <li key={e.id}>
                        <p>User: {e.author}</p>
                        <p>Comment: {e.comment}</p>
                        <p>Date: {e.date}</p>
                      </li>
                    </Fade>
                  );
                })}
              </Stagger>
            </ul>
          </div>
          <Button onClick={toggleModal} className="w-75">
            Submit
          </Button>
        </div>
      );
    } else return <div></div>;
  };

  return (
    <div>
      <Link to="/home">Home</Link> | <Link to="/menu">Menu</Link>
      <div className="dish">
        <Info />
        <Comments />

        {/* render modal */}
        <div>
          <Modal isOpen={modal} toggle={toggleModal}>
            <ModalBody>
              <div className="d-flex">
                <h3>Submit Comments</h3>
                <Button onClick={toggleModal} className=" ms-auto h-75">
                  <span className="fa-solid fa-xmark"> X </span>
                </Button>
              </div>

              <FormGroup>
                <Label htmlFor="id">Rating</Label>
                <Input type="number" name="id" id="id" onChange={handleRating} />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="Ten">Your Name</Label>
                <Input type="text" name="Ten" id="Ten" onChange={handleNameInput} />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="comment">Comments</Label>
                <Input type="textarea" name="comment" id="comment" onChange={handleCommentInput} />
              </FormGroup>
              <br></br>
              <Button onClick={handleSubmit} type="submit" value="submit" color="primary">
                Submit
              </Button>
            </ModalBody>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Dishdetail;
