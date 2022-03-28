import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const RenderDepartments = ({ renderDepartment }) => {
  /*lấy giá trị state được truyền từ department vào */
  const [render, setrender] = useState([]);
  useEffect(() => {
    setrender(renderDepartment);
  }, [setrender]);

  /*lấy dữ liệu và render */
  // lấy theo kiểu đặt biến
  const Datadepartment = render.map((e) => e.department);
  
  const DataName = () =>
    // lấy theo kiểu đặt hàm
    render.map((e) => (
      <div
        style={{ backgroundColor: "gray", marginTop: "10px", borderRadius: "20px", width: "20%" }}
      >
        <h4 className="renderdepart renderdepartH4">{e.name}</h4>
      </div>
    ));

  return (
    <div className="container ">
      <Link to="/department">Phòng Ban</Link> | {Datadepartment[0]}
      <div className="row  ">
        <div className="renderdepart">
          <h1>{Datadepartment[0]}</h1>
          <DataName />
        </div>
      </div>
    </div>
  );
};

export default RenderDepartments;
