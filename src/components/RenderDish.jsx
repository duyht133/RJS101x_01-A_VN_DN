import dateFormat from "dateformat";
import { Link } from "react-router-dom";
import "../App.css";

const RenderDish = ({ staff }) => { // nhận staff từ mainComponent
  const Render = () => {
    if (staff != null) {
      return (
        <div className="dish">
          <div className="col-lg-3 col-md-4 col-sm-12">
            <img src={staff.image} alt={staff.name} />
          </div>

          <div className="col-lg-9 col-md-8 col-sm-12 infoDish">
            <div>
              <h3>Họ và tên: {staff.name}</h3>
              <p>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</p>
              <p>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</p>
              <p>Phòng ban :{staff.department.name}</p>
              <p>Số ngày nghỉ còn lại: {staff.annualLeave}</p>
              <p>Số ngày đã làm thêm: {staff.overTime}</p>
            </div>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  };

  return (
    // sử dụng bootstaps
    <div>
      <div className="container">
        <Link to="/">Nhân Viên</Link> |{staff.name}
        <div className="row">
          <Render />
        </div>
      </div>
    </div>
  );
};

export default RenderDish;
