import dateFormat from "dateformat";
import { Link } from "react-router-dom";

const RenderDish = ({staff}) => {
    const Render = () =>{
        if (staff != null) {
            return (
              <div className="render">
                <img className="image" src={staff.image} alt={staff.name} />
                <div key={staff.id} >
                  Họ và tên: {staff.name}
                  <br />
                  Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}
                  <br />
                  Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}
                  <br />
                  Phòng ban :{staff.department.name}
                  <br />
                  Số ngày nghỉ còn lại: {staff.annualLeave}
                  <br />
                  Số ngày đã làm thêm: {staff.overTime}
                </div>
              </div>
            );
          } else {
            return <div></div>;
          }
    }

  return (
    <div>
      <Link to="/">Nhân Viên</Link> |{staff.name}
      <div>
        <Render/>
      </div>
    </div>
  );
};

export default RenderDish;
