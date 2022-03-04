import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Select from "react-select";
import {
  useSelector,
  useDispatch,
} from "react-redux"; /* 2 hook get, push dữ liệu lên store Redux */
import { Modal, Button, ModalBody, FormGroup, Label, Input } from "reactstrap";

const StaffListComponent = ({ selectStaff }) => {
  /* get state từ reducer */
  // get data staffs
  const dataStaffs = useSelector((data) => {
    return data.dataContact.staffs;
  });
  // get data department
  const dataDepartment = useSelector((data) => {
    return data.dataContact.departments;
  });

  /* state option select */
  const [option, setOptions] = useState(() => {
    return dataDepartment.map((depart) => {
      return depart.name;
    });
  });
  //options select
  const options = [
    { value: option[0], label: option[0] },
    { value: option[1], label: option[1] },
    { value: option[2], label: option[2] },
    { value: option[3], label: option[3] },
    { value: option[4], label: option[4] },
  ];

  /* state toggle */
  const [modal, setModal] = useState(false);
  //toggle modal ADD
  const toggleModal = () => {
    setModal(!modal);
  };

  /* state dataInput */
  const [dataInput, setdataInput] = useState("");
  /* const getdataInput = (event) => setdataInput(event.target.value); */

  // tạo biến render
  const Render = () => {
    return dataStaffs.map((staff) => (
      <div className="col-lg-2 col-md-4 col-sm-6 staff" key={staff.id}>
        <Link to={`/staff/${staff.id}`}>
          <div
            onClick={() => {
              // lắng nghe sự kiện onclick truyền dự liệu vào function selectStaff ở main
              selectStaff(staff);
            }}
          >
            <img className="img" src={staff.image} alt={staff.name} />
            <div className="name">{staff.name}</div>
          </div>
        </Link>
      </div>
    ));
  };

  // render modal
  const RenderModal = () => {
    return (
      <div>
        {/* render modal */}
        <Modal isOpen={modal} toggle={toggleModal}>
          <ModalBody>
            <h1>Thêm nhân viên</h1>
            <FormGroup>
              <Label htmlFor="Ten">Tên:</Label>
              <Input
                type="text"
                name="Ten"
                id="Ten"
                /* value={dataInput} onChange={getdataInput} */
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="Ngaysinh">Ngày sinh:</Label>
              <Input type="date" name="Ngaysinh" id="Ngaysinh" />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="Ngayinjob">Ngày vào công ty:</Label>
              <Input type="date" name="Ngayinjob" id="Ngayinjob" />
            </FormGroup>

            {/* tạo select tại đây */}
            <FormGroup>
              <Label htmlFor="PhongBan">Phòng Ban:</Label>
              {/* <Select options={options} onClick={(event) => {
                  event.preventDefault();
                  setdataInput(event.target.value);
                }} /> */}
              <Input
                id="PhongBan"
                onClick={(event) => {
                  event.preventDefault();
                  setdataInput(event.target.value);
                }}
                type="select"
              >
                <option value={option[0]}>Sale</option>
                <option value={option[1]}>HR</option>
                <option value={option[2]}>Marketing</option>
                <option value={option[3]}>IT</option>
                <option value={option[4]}>Finance</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="Hesoluong">Hệ số lương:</Label>
              <Input type="number" name="Hesoluong" id="Hesoluong" />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="Songaynghiconlai">Số ngày nghỉ còn lại:</Label>
              <Input type="number" name="Songaynghiconlai" id="Songaynghiconlai" />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="Songaydalamthem">Số ngày đã làm thêm:</Label>
              <Input type="number" name="Songaydalamthem" id="Songaydalamthem" />
            </FormGroup>
            <br></br>
            <Button
              type="submit"
              value="submit"
              color="primary"
              onClick={() => {
                console.log(dataInput);
              }}
            >
              ADD
            </Button>
          </ModalBody>
        </Modal>
      </div>
    );
  };

  return (
    // sử dụng bootstraps để grid
    <div className="container">
      <h1 className="text-center">Nhân Viên</h1>
      <Button outline onClick={toggleModal}>
        <span className="fa fa-sign-in fa-lg login"></span> ADD
      </Button>
      <div className="row">
        <RenderModal />
        <Render />
      </div>
    </div>
  );
};

export default StaffListComponent;
