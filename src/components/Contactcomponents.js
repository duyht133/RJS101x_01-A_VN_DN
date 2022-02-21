import React, { useState } from "react";
import { Form, FormGroup, Label, Col, Input, FormFeedback } from "reactstrap";
import Select from "react-select"; // import react-select để dùng FormSelect.

function Contact() {
  const [firtName, setFirtname] = useState("");
  const [lastName, setLastname] = useState("");
  const [telNum, setTelnum] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [contactType, setContactType] = useState("Tel.");
  const [message, setMessage] = useState("");

  /// tạo biến option để dùng làm giá trị Select
  const options = [
    { value: contactType, label: contactType },
    { value: email, label: email },
  ];

  /// hàm nhận sự kiện submit
  const handleSubmit = () => {
    console.log(firtName, lastName, telNum, email, agree, contactType, message);
  };

  /// các hàm sử lý điều kiện nhập
  const HandleBlurFirtName = () => {
    if (firtName.length < 3 && firtName.length > 0) {
      return <div>Tên phải lớn hơn 3</div>;
    } else if (firtName.length > 10) {
      return <div>Tên phải nhỏ hơn 10</div>;
    }
  };
  const HandleBlurlastName = () => {
    if (lastName.length < 2 && lastName.length > 0) {
      return <div>họ phải lớn hơn 3</div>;
    } else if (lastName.length > 10) {
      return <div>họ phải lớn hơn</div>;
    }
  };
  const HandleBlurTelNum = () => {
    if (telNum.length < 11 && telNum.length > 0 && isNaN(telNum)) {
      return <div>không được có chữ</div>;
    } else if (telNum.length > 13 && isNaN(telNum)) {
      return <div>số phải nhỏ hơn 13</div>;
    }
  };
  const HandleBlurEmail = () => {
    if (email.length > 8 && email.split('').filter(x => x ==="@").length !==1) {
      return <div>mail phải có @</div>;
    }
  };

  return (
    <div className="container">
      <div className="row row-content">
        <div className="col-12">
          <h3>Location Information</h3>
        </div>
        <div className="col-12 col-sm-4 offset-sm-1">
          <h5>Our Address</h5>
          <address>
            121, Clear Water Bay Road
            <br />
            Clear Water Bay, Kowloon
            <br />
            HONG KONG
            <br />
            <i className="fa fa-phone"></i>: +852 1234 5678
            <br />
            <i className="fa fa-fax"></i>: +852 8765 4321
            <br />
            <i className="fa fa-envelope"></i>:{" "}
            <a href="mailto:confusion@food.net">confusion@food.net</a>
          </address>
        </div>
        <div className="col-12 col-sm-6 offset-sm-1">
          <h5>Map of our Location</h5>
        </div>
        <div className="col-12 col-sm-11 offset-sm-1">
          <div className="btn-group" role="group">
            <a role="button" className="btn btn-primary" href="tel:+85212345678">
              <i className="fa fa-phone"></i> Call
            </a>
            <a role="button" className="btn btn-info">
              <i className="fa fa-skype"></i> Skype
            </a>
            <a role="button" className="btn btn-success" href="mailto:confusion@food.net">
              <i className="fa fa-envelope-o"></i> Email
            </a>
          </div>
        </div>
      </div>
{/* /////////////////////////// */}
      <div className="row row-content mb-5">
        <div className="col-12">
          <h3>Send us Your feedback</h3>
        </div>
        <div className="col-12 col-md-9">
          <label>
            Firtname:
            <input
              type="text"
              value={firtName}
              name="name"
              placeholder="Firt Name"
              onChange={(event) => setFirtname(event.target.value)}
              onBlur={HandleBlurFirtName}
            />
            <div className="color">{HandleBlurFirtName()}</div>
          </label>
          <br />
          <label>
            Lastname:
            <input
              type="text"
              value={lastName}
              name="name"
              placeholder="Last Name"
              onChange={(event) => setLastname(event.target.value)}
              onBlur={HandleBlurlastName}
            />
            <div className="color">{HandleBlurlastName()}</div>
          </label>
          <br />
          <label>
            TelNumber:
            <input
              type="text"
              value={telNum}
              name="name"
              placeholder="Tel Number"
              onChange={(event) => setTelnum(event.target.value)}
              onBlur={HandleBlurTelNum}
            />
            <div className="color">{HandleBlurTelNum()}</div>
          </label>
          <br />
          <label>
            Email:
            <input
              type="text"
              value={email}
              name="email"
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
              onBlur={HandleBlurEmail}
            />
            <div className="color">{HandleBlurEmail()}</div>
          </label>

          <FormGroup row>
            <Col md={{ size: 6, offset: 2 }}>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    name="agree"
                    checked={agree}
                    onChange={() => setAgree(!agree)}
                  />
                  {""}
                  <strong>May we contact you?</strong>
                </Label>
              </FormGroup>
            </Col>

            <Col md={{ size: 3, offset: 1 }}>
              {/*  <Input
                type="select"
                name="contactType"
                value={contactType}
                onChange={() => setContactType(!contactType)}
              >
                <option>Tel.</option>
                <option>Email</option>
              </Input> */}

              <Select options={options} onChange={() => setContactType(email)} />
            </Col>
          </FormGroup>

          <label>
            your feedback:
            <Input
              row="12"
              id="message"
              type="textarea"
              value={message}
              name="message"
              onChange={(event) => setMessage(event.target.value)}
            />
          </label>
          <br />
          <input type="submit" value="Submit" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
}

export default Contact;
