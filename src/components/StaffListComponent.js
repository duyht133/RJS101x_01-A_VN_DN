import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap";
import dateFormat from 'dateformat'; 


class StaffListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        selectedDish: null
    };
  }

  handle = (e) => {
    this.setState({selectedDish:e})
  };

  renderDish = (e) => {
    if(e != null) {
      return(
            <div key={e.id} className="render" >
                Họ và tên: {e.name}
                <br/>
                Ngày sinh: {dateFormat(e.doB, "dd/mm/yyyy")}
                <br/>
                Ngày vào công ty: {dateFormat(e.startDate, "dd/mm/yyyy")}
                <br/>
                Phòng ban :{e.department.name}
                <br/>
                Số ngày nghỉ còn lại: {e.annualLeave}
                <br/>
                Số ngày đã làm thêm: {e.overTime}
            </div>
      )
    }else{
      return(
        <div></div>
      )
    }
  }

  render() {
    let STAFFS = this.props.STAFFS.map((e) => {
        return (
          <>
          <row
            className="table"
            key={e.id}
          >
            <button onClick={() => {
              this.handle(e);
            }} className="col-lg-4 col-md-6 col-12 button" >{e.name}</button>
          </row>
          
          </>
        );
      });

    return (
      <>
        <div>
          {STAFFS}
        </div>
        <div>
          Bấm vào tên nhân viên để xem thông tin.
        </div>
        <div>
          {this.renderDish(this.state.selectedDish)}
        </div>
      </>
    );
  }
}
export default StaffListComponent;
