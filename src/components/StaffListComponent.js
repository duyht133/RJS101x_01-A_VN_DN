import React, { Component } from "react";
import dateFormat from "dateformat";

class StaffListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null,
     /*  hide: false, */
    };
  }

  handle = (e,status) => {
    this.setState({ selectedDish: e });
    /* this.setState({ hide: status }); */
  };

  renderDish = (e,status) => {
    
    if (e != null) {
      return (
        <div>
          <div key={e.id} className="render">
            Họ và tên: {e.name}
            <br />
            Ngày sinh: {dateFormat(e.doB, "dd/mm/yyyy")}
            <br />
            Ngày vào công ty: {dateFormat(e.startDate, "dd/mm/yyyy")}
            <br />
            Phòng ban :{e.department.name}
            <br />
            Số ngày nghỉ còn lại: {e.annualLeave}
            <br />
            Số ngày đã làm thêm: {e.overTime}
          </div>
        </div>
      );
    }else {
      return(
        <div>
          
        </div>
      )
    }
  };


  //////////////
  render() {
    let STAFFS = this.props.STAFFS.map((e) => {
      return (
        <>
          <row className="table" key={e.id}>
            <button
              onClick={() => {
                this.handle(e);
              }}
              className="col-lg-4 col-md-6 col-12 button"
            >
              {e.name}
            </button>
          </row>
        </>
      );
    });

    return (
      <div className="full">
        <div>{STAFFS}</div>
        <div className="text">Bấm vào tên nhân viên để xem thông tin.</div>
        <div>{this.renderDish(this.state.selectedDish)}</div>

        {/* {this.state.hide === false && (
            )} */}
          <div className="hide">
            <button
              onClick={() => {
                this.handle();
              }}
              >
              HIDE
            </button>
          </div>
      </div>
    );
  }
}
export default StaffListComponent;
