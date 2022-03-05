import { createSlice } from "@reduxjs/toolkit"; // import createSlice từ reduxToolkit để tạo mới 1 reducer(slice)
import { STAFFS as staffs } from "../shared/staffs";
import { DEPARTMENTS as departments } from "../shared/staffs";

export const contactReducer = createSlice({
  name: "contact",
  initialState: {
    staffs,
    departments,
  },
  reducers: {
    // reducer ở đây chính là công nhân thực thi các action
    setStatecontact: (state, action) => {
      // state ở đây chính là dữ liệu trong initialState
      // action là trạng thái dispatch truyền vào từ sự kiện bên ngoài từ UI.
      const newList = { ...state }; // ... là toán tử spread es6 để sao chép lại dữ liệu state
      newList.staffs = [...newList.staffs, action.payload];
      return newList;
    },
  },
});

// export theo kiểu bắc buộc.
export const { setStatecontact } = contactReducer.actions; // export action từ reducer ra để sử dụng.

export default contactReducer.reducer; // export contactReducer trực tiếp dưới chính nó.
