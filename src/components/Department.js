import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { DEPARTMENTS } from "../shared/staffs";



const Department = () => {

  return <div>
      <div>
          <Card>
            <h1>Sale</h1>
            <div>
                số lượng nhân viên: {DEPARTMENTS[0].numberOfStaff}
            </div>
          </Card>

          <Card>
            <h1>HR</h1>
            <div>
                số lượng nhân viên: {DEPARTMENTS[1].numberOfStaff}
            </div>
          </Card>

          <Card>
            <h1>Marketing</h1>
            <div>
                số lượng nhân viên: {DEPARTMENTS[2].numberOfStaff}
            </div>
          </Card>

          <Card>
            <h1>IT</h1>
            <div>
                số lượng nhân viên: {DEPARTMENTS[3].numberOfStaff}
            </div>
          </Card>

          <Card>
            <h1>Finance</h1>
            <div>
                số lượng nhân viên: {DEPARTMENTS[4].numberOfStaff}
            </div>
          </Card>
        </div>
  </div>;
};

export default Department;
