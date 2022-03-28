import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  useSelector,
  useDispatch,
} from "react-redux"; /* 2 hook get, push dữ liệu lên store Redux */
import { Modal, Button, ModalBody, FormGroup, Label, Input } from "reactstrap";
import "../App.css";
import {postContact} from "../redux/reducer"


const StaffListComponent = ({ selectStaff }) => {
  /* tạo biến dispatch */
  const dispatch = useDispatch();
  ///////////////////////////////////
  /* get data on use Input */
  const [dataID, setdataID] = useState("");
  const [dataName, setdataName] = useState("");
  const [dataBirth, setdataBirth] = useState("");
  const [dataInjob, setdataInjob] = useState("");
  const [dataSelect, setdataSelect] = useState("");
  const [dataSalary, setdataSalary] = useState("");
  const [dataDaysOff, setdataDaysOff] = useState("");
  const [dataOverTime, setdataOverTime] = useState("");
  //get data ID
  const getdataID = (event) => setdataID(event.target.value);
  // get data Name
  const getdataName = (event) => setdataName(event.target.value);
  //get data date birth
  const getdataBirth = (event) => setdataBirth(event.target.value);
  //get data in job
  const getdataInjob = (event) => setdataInjob(event.target.value);
  // get data select
  const getdataSelect = (event) => setdataSelect(event.target.value);
  //get data Salary
  const getdataSalary = (event) => setdataSalary(event.target.value);
  //get data days off
  const getdataDaysOff = (event) => setdataDaysOff(event.target.value);
  // get data overTime
  const getdataOvertime = (event) => setdataOverTime(event.target.value);

  ///////////////////////////////////
  /* state toggle */
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    // set lại data của input khi thoát khỏi modal
    setdataID("");
    setdataName("");
    setdataBirth("");
    setdataInjob("");
    setFormblur(false);
    /* setdataSalaryPayment(""); */
    // toggle modal
    setModal(!modal);
  };
  ///////////////////////////////////
  /* handleADD */
  const handleADD = () => {
    const stateContact = {
      id: dataID,
      name: dataName,
      doB: dataBirth,
      salaryScale: dataSalary,
      startDate: dataInjob,
      department: dataSelect,
      annualLeave: dataDaysOff,
      overTime: dataOverTime,
      image: "https://www.cse.ust.hk/~muppala/img/muppala.jpg",
    };
    if (
      // so sánh điều kiện input nhập vào nếu nhập đủ các trường thì cho phép dispatch lên store.
      stateContact.id != "" &&
      stateContact.name != "" &&
      stateContact.doB != "" &&
      stateContact.startDate != ""
    ) {
      dispatch(postContact(stateContact));
      console.log("thanhcong")
      toggleModal();
    } else AddBlur(); // gọi trực tiếp từ validate form
  };

  ///////////////////////////////////
  /* state option select */ // lấy từ staffs
  /* Data Contact and search and options */
  //get data contact
  const dataContact = useSelector((data) => data.dataContact.contact);
  const [contact, setcontact] = useState(dataContact);
  useEffect(() => {
    setcontact(dataContact);
    console.log("load",contact);
  }, [dataContact]);

  // Options Selector
  const dataDepartments = useSelector((data) => {
    return data.dataContact.departments;
  });
  const [option, setOptions] = useState(() => {
    return dataDepartments.map((depart) => {
      return depart.name;
    });
  });

  // tạo state để lưu trữ giá trị input search
  const [dataSearch, setdataSearch] = useState("");
  const getdataSearch = (event) => {
    setdataSearch(event.target.value);
  };
  /* Button search onclick */
  const btSearch = () => {
    // tạo 1 biến mới để lưu dataStaffs get từ store
    const listFilter = dataContact;
    // filter lọc  mảng với điều kiện chỉ định,nếu thỏa điều kiện sẽ tạo ra các phần tử đã lọc thành mảng con
    // includes kiểm tra 1 điều kiện đầu vào có nằm trong 1 mảng, nếu đúng trả về true
    const newListStaff = listFilter.filter((contact) => {
      return contact.name.toLowerCase().includes(dataSearch.toLowerCase());
    });
    setcontact(newListStaff); //set state staffs là 1 dữ liệu mới đã lọc
    console.log(newListStaff)
  };

  ///////////////////////////////////
  /* Validate form */
  // tạo state cho validate form
  const [formblur, setFormblur] = useState(false);
  // hiển thị Blur validate form được gọi ở dòng 121 khi button add được onclick
  const AddBlur = () => {
    setFormblur(true);
  };
  // so sánh điều kiện input
  const HandleBlurID = () => {
    if (formblur !== false && dataID == "") {
      return <div>Yêu Cầu nhập</div>;
    } else return <div></div>;
  };
  const HandleBlurName = () => {
    if (formblur !== false && dataName == "") {
      return <div>Yêu Cầu nhập</div>;
    } else return <div></div>;
  };
  const HandleBlurDatebirth = () => {
    if (formblur !== false && dataBirth == "") {
      return <div>Yêu Cầu nhập</div>;
    } else return <div></div>;
  };
  const HandleBlurDatestart = () => {
    if (formblur !== false && dataInjob == "") {
      return <div>Yêu Cầu nhập</div>;
    } else return <div></div>;
  };

  ///////////////////////////////////

  /* tạo biến render */
  const Render = () => {
    // tạo biến uidataState
    const uidataState = (contact) => (
      <div className="col-lg-2 col-md-4 col-sm-6 staff" key={contact.id}>
        <Link to={`/contact/${contact.id}`}>
          <div
            onClick={() => {
              // lắng nghe sự kiện onclick truyền dự liệu vào function selectStaff ở main
              selectStaff(contact);
            }}
          >
            <img className="img" src={contact.image} alt={contact.name} />
            <div className="name">{contact.name}</div>
          </div>
        </Link>
      </div>
    );
    return contact.map(uidataState); // lấy biến staffs từ state data search
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

      {/* Modal */}
      <div className="row">
        <Modal isOpen={modal} toggle={toggleModal}>
          <ModalBody>
            <div className="d-flex">
              <h1>Thêm nhân viên</h1>
              <Button onClick={toggleModal} className=" ms-auto h-75">
                <span className="fa-solid fa-xmark"> X </span>
              </Button>
            </div>
            <FormGroup>
              <Label htmlFor="Ten">Mã Nhân Viên:</Label>
              <Input type="number" name="id" id="id" onChange={getdataID} onBlur={HandleBlurID} />
              <div style={{ color: "red" }}>{HandleBlurID()}</div>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="Ten">Tên:</Label>
              <Input
                type="text"
                name="Ten"
                id="Ten"
                onChange={getdataName}
                onBlur={HandleBlurName}
              />
              <div style={{ color: "red" }}>{HandleBlurName()}</div>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="Ngaysinh">Ngày sinh:</Label>
              <Input
                type="date"
                name="Ngaysinh"
                id="Ngaysinh"
                onChange={getdataBirth}
                onBlur={HandleBlurDatebirth}
              />
              <div style={{ color: "red" }}>{HandleBlurDatebirth()}</div>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="Ngayinjob">Ngày vào công ty:</Label>
              <Input
                type="date"
                name="Ngayinjob"
                id="Ngayinjob"
                onChange={getdataInjob}
                onBlur={HandleBlurDatestart}
              />
              <div style={{ color: "red" }}>{HandleBlurDatestart()}</div>
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

           {/*  <FormGroup>
              <Label htmlFor="Luongduoctra">Lương được trả:</Label>
              <Input
                type="number"
                name="Luongduoctra"
                id="Luongduoctra"
                onChange={getdataSalaryPay}
              />
            </FormGroup> */}
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
