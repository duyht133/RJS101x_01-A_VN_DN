import { createSlice } from "@reduxjs/toolkit"; // import createSlice từ reduxToolkit để tạo mới 1 reducer(slice)
import { STAFFS as staffs } from "../shared/staffs";
import { DEPARTMENTS as departments } from "../shared/staffs";


export const contactReducer = createSlice({
  name: "contact",
  initialState: {
    staffs,
    departments,
    contact: {
      firtName: "",
      lastName: "",
      telNum: "",
      email: "",
      contactType: "Tel.",
      message: "",
    },
  },
  reducers: {
    // reducer ở đây chính là công nhân thực thi các action
    setStatecontact: (state, action) => {
      // đây là action
      state.contact = action.payload; 
      // state ở đây chính là dữ liệu trong initialState
      // action là trạng thái dispatch truyền vào từ sự kiện bên ngoài trên UI.

      console.log(state.staffs);
    },
  },
});

// export theo kiểu bắc buộc.
export const { setStatecontact } = contactReducer.actions; // export action từ reducer ra để sử dụng.

export default contactReducer.reducer; // export contactReducer trực tiếp dưới chính nó.
