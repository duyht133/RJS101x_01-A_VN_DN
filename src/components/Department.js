import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { useSelector } from "react-redux";

const Department = ({ onrenderDepartment }) => {
  const Render = () => {
    const dataDepartments = useSelector((data) => data.dataContact.departments);
    const dataContact = useSelector((data) => data.dataContact.contact);

    const [departSale, setDepartSale] = useState(null);
    const [departHR, setDepartHR] = useState(null);
    const [departMaketing, setDepartMaketing] = useState(null);
    const [departIT, setDepartIT] = useState(null);
    const [departFinance, setDepartFinance] = useState(null);

    const ListStaffSale = dataContact.filter((contact) => contact.department.includes("Sale"));
    const ListStaffHR = dataContact.filter((contact) => contact.department.includes("HR"));
    const ListStaffMaketing = dataContact.filter((contact) =>
      contact.department.includes("Marketing")
    );
    const ListStaffIT = dataContact.filter((contact) => contact.department.includes("IT"));
    const ListStaffFinance = dataContact.filter((contact) =>
      contact.department.includes("Finance")
    );

    useEffect(() => {
      setDepartSale(ListStaffSale.length);
      setDepartHR(ListStaffHR.length);
      setDepartMaketing(ListStaffMaketing.length);
      setDepartIT(ListStaffIT.length);
      setDepartFinance(ListStaffFinance.length);
    },[]);
    console.log(departSale);

    return (
      <div className="departmentbox">
        <div className="staffdepartment" key={dataDepartments[0].id}>
          <Link to="/RenderDepartment" onClick={() => onrenderDepartment(ListStaffSale)}>
            <h1>{dataDepartments[0].name}</h1>
            <p>số lượng nhân viên: {departSale}</p>
          </Link>
        </div>
        <div className="staffdepartment" key={dataDepartments[1].id}>
          <Link to="/RenderDepartment" onClick={() => onrenderDepartment(ListStaffHR)}>
            <h1>{dataDepartments[1].name}</h1>
            <p>số lượng nhân viên: {departHR}</p>
          </Link>
        </div>
        <div className="staffdepartment" key={dataDepartments[2].id}>
          <Link to="/RenderDepartment" onClick={() => onrenderDepartment(ListStaffMaketing)}>
            <h1>{dataDepartments[2].name}</h1>
            <p>số lượng nhân viên: {departMaketing}</p>
          </Link>
        </div>
        <div className="staffdepartment" key={dataDepartments[3].id}>
          <Link to="/RenderDepartment" onClick={() => onrenderDepartment(ListStaffIT)}>
            <h1>{dataDepartments[3].name}</h1>
            <p>số lượng nhân viên: {departIT}</p>
          </Link>
        </div>
        <div className="staffdepartment" key={dataDepartments[4].id}>
          <Link to="/RenderDepartment" onClick={() => onrenderDepartment(ListStaffFinance)}>
            <h1>{dataDepartments[4].name}</h1>
            <p>số lượng nhân viên: {departFinance}</p>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="container ">
      <Link to="/home">Nhân Viên</Link> | Phòng Ban
      <div className="row  ">
        <Render />
      </div>
    </div>
  );
};

export default Department;
