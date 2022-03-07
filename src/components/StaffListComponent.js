import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  useSelector,
  useDispatch,
} from "react-redux"; /* 2 hook get, push dữ liệu lên store Redux */
import { Modal, Button, ModalBody, FormGroup, Label, Input } from "reactstrap";
import "../App.css";
import { setStatecontact } from "../redux/reducer"; // import actions từ reducer(công nhân)

const StaffListComponent = ({ selectStaff }) => {
  /* push dispatch lên store */
  const dispatch = useDispatch();
  ///////////////////////////////////
  /* get state từ reducer */
  // get data staffs
  const dataStaffs = useSelector((data) => {
    //useSelector() chọc thẳng vào biến dataContact ở store để lấy state từ biến initialState trong reducer
    return data.dataContact.staffs;
  });
  // get data department
  const dataDepartment = useSelector((data) => {
    return data.dataContact.departments;
  });
  /* state data contact */
  /* const dataContact = useSelector((data) => {
    return data.dataContact.contact;
  }); */

  ///////////////////////////////////
  /* state option select */
  const [option, setOptions] = useState(() => {
    return dataDepartment.map((depart) => {
      return depart.name;
    });
  });
  ///////////////////////////////////
  /* state toggle */
  const [modal, setModal] = useState(false);
  //toggle modal ADD
  const toggleModal = () => {
    setModal(!modal);
  };
  ///////////////////////////////////
  /* get data on use Input */
  //get data ID
  const [dataID, setdataID] = useState("");
  const getdataID = (event) => {
    setdataID(event.target.value);
  };
  // get data Name
  const [dataName, setdataName] = useState("");
  const getdataName = (event) => {
    setdataName(event.target.value);
  };
  //get data date birth
  const [dataBirth, setdataBirth] = useState("");
  const getdataBirth = (event) => {
    setdataBirth(event.target.value);
  };
  //get data in job
  const [dataInjob, setdataInjob] = useState("");
  const getdataInjob = (event) => {
    setdataInjob(event.target.value);
  };
  // get data select
  const [dataSelect, setdataSelect] = useState("");
  const getdataSelect = (event) => {
    setdataSelect(event.target.value);
  };
  //get data Salary
  const [dataSalary, setdataSalary] = useState("");
  const getdataSalary = (event) => {
    setdataSalary(event.target.value);
  };
  //get data days off
  const [dataDaysOff, setdataDaysOff] = useState("");
  const getdataDaysOff = (event) => {
    setdataDaysOff(event.target.value);
  };
  // get data overTime
  const [dataOverTime, setdataOverTime] = useState("");
  const getdataOvertime = (event) => {
    setdataOverTime(event.target.value);
  };
  // data img
  const [dataImg, setdataimg] = useState("https://www.cse.ust.hk/~muppala/img/muppala.jpg");
  
  ///////////////////////////////////
  /* handleADD */
  const handleADD = () => {
    const stateContact = {
      id: dataID,
      name: dataName,
      doB: dataBirth,
      startDate: dataInjob,
      department: dataSelect,
      salaryScale: dataSalary,
      annualLeave: dataDaysOff,
      overTime: dataOverTime,
      image: dataImg,
    };
    toggleModal();
    dispatch(setStatecontact(stateContact));
  };
  ///////////////////////////////////
  /* data search */
  const [dataSearch, setdataSearch] = useState("");
  const getdataSearch = (event) => {
    setdataSearch(event.target.value);
  };
  const btSearch = () => {
    dataStaffs.map((event)=>{
      const inputSearch = dataSearch.toString().toLowerCase();
      const stateName =  event.name.toLowerCase();
      /* console.log(stateName[1]) */
      for(let i=0; i<stateName.length; i++){
        if(stateName[i] === inputSearch){
          console.log(dataSearch)
        }
      }
    })
    
  };



  ///////////////////////////////////
  /* tạo biến render */
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

  ///////////////////////////////////
  return (
    // sử dụng bootstraps để grid
    <div className="container">
      <h1 className="text-center">Nhân Viên</h1>
      <div className="d-flex">
        <Button
          style={{
            width: "70px",
            height: "70px",
            marginRight: "20px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
          outline
          onClick={toggleModal}
        >
          <span className="fa fa-sign-in fa-lg login"></span> ADD
        </Button>
        <Input
          type="text"
          name="search"
          id="search"
          placeholder="Tìm kiếm nhân viên"
          style={{ width: "30%", margin: "20px 0px" }}
          onChange={getdataSearch}
        />
        <Button
          style={{ width: "20%", height: "30%", marginTop: "20px", marginLeft: "20px" }}
          color="primary"
          onClick={btSearch}
        >
          Tìm kiếm
        </Button>
      </div>
      <div className="row">
        <Modal isOpen={modal} toggle={toggleModal}>
          <ModalBody>
            <h1>Thêm nhân viên</h1>
            <FormGroup>
              <Label htmlFor="Ten">Mã Nhân Viên:</Label>
              <Input type="number" name="id" id="id" onChange={getdataID} />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="Ten">Tên:</Label>
              <Input type="text" name="Ten" id="Ten" onChange={getdataName} />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="Ngaysinh">Ngày sinh:</Label>
              <Input type="date" name="Ngaysinh" id="Ngaysinh" onChange={getdataBirth} />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="Ngayinjob">Ngày vào công ty:</Label>
              <Input type="date" name="Ngayinjob" id="Ngayinjob" onChange={getdataInjob} />
            </FormGroup>

            {/* tạo select tại đây */}
            <FormGroup>
              <Label htmlFor="PhongBan">Phòng Ban:</Label>
              <Input id="PhongBan" onChange={getdataSelect} type="select">
                <option value={option[0]}>Sale</option>
                <option value={option[1]}>HR</option>
                <option value={option[2]}>Marketing</option>
                <option value={option[3]}>IT</option>
                <option value={option[4]}>Finance</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="Hesoluong">Hệ số lương:</Label>
              <Input type="number" name="Hesoluong" id="Hesoluong" onChange={getdataSalary} />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="Songaynghiconlai">Số ngày nghỉ còn lại:</Label>
              <Input
                type="number"
                name="Songaynghiconlai"
                id="Songaynghiconlai"
                onChange={getdataDaysOff}
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="Songaydalamthem">Số ngày đã làm thêm:</Label>
              <Input
                type="number"
                name="Songaydalamthem"
                id="Songaydalamthem"
                onChange={getdataOvertime}
              />
            </FormGroup>
            <br></br>
            <Button type="submit" value="submit" color="primary" onClick={handleADD}>
              ADD
            </Button>
          </ModalBody>
        </Modal>
        <Render />
      </div>
    </div>
  );
};

export default StaffListComponent;
