import React, { Component } from "react";
import "reactstrap";

class Testcomponents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ho: "",
      ten: "",
    };
  }

  handleTen = (e) => {
    this.setState({
      ten: e.target.value,
    });
  };

  handleHo = (e) => {
    this.setState({
      ho: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    let { name, age, data } = this.props;
    return (
      <>
        <div>
          <h3>ten</h3>
          <input
            type="text"
            value={this.state.ten}
            onChange={(e) => {
              this.handleTen(e);
            }}
          />
        </div>

        <div>
          <h3>ho</h3>
          <input
            type="text"
            value={this.state.ho}
            onChange={(e) => {
              this.handleHo(e);
            }}
          />
        </div>
        <div>
          <input
            type="submit"
            onClick={(e) => {
              this.handleSubmit(e);
            }}
          />
        </div>
        <div>
          {this.state.name}
          <br />
          {age}
          <br />
          {data}
        </div>
      </>
    );
  }
}
export default Testcomponents;
