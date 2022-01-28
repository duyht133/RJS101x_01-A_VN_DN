import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { DEPARTMENTS } from "../shared/staffs";

const Department = () => {
  
  const Sale = () => {
    return (
      <>
        <h1>Sale</h1>
        <div>số lượng nhân viên: {DEPARTMENTS[0].numberOfStaff}</div>
      </>
    );
  };

  const HR = () => {
    return <div>số lượng nhân viên: {DEPARTMENTS[1].numberOfStaff}</div>;
  };
  const Marketing = () => {
    return <div>số lượng nhân viên: {DEPARTMENTS[2].numberOfStaff}</div>;
  };
  const IT = () => {
    return <div>số lượng nhân viên: {DEPARTMENTS[3].numberOfStaff}</div>;
  };
  const Finance = () => {
    return <div>số lượng nhân viên: {DEPARTMENTS[4].numberOfStaff}</div>;
  };

  return (
    <div>
      <div>
        <Card>
          <Sale />
        </Card>

        <Card>
          <h1>HR</h1>
          <HR />
        </Card>

        <Card>
          <h1>Marketing</h1>
          <Marketing />
        </Card>

        <Card>
          <h1>IT</h1>
          <IT />
        </Card>

        <Card>
          <h1>Finance</h1>
          <Finance />
        </Card>
      </div>
    </div>
  );
};

export default Department;
