import { createSlice } from "@reduxjs/toolkit"; // import createSlice từ reduxToolkit để tạo mới 1 reducer(slice)

export const FormReducer = createSlice({
  name: "feedback",
  initialState: {
    firtName: "",
    lastName: "",
    telNum: "",
    email: "",
    agree:"false",
    contactType: "Tel.",
    message: "",
  },
  reducers: {
    // reducer ở đây chính là công nhân thực thi các action
    setStatefeedback: (state, action) => {
      // đây là action
      const newstate = { ...state };
      // state ở đây chính là dữ liệu trong initialState
      return { ...newstate, [action.payload.nameInput]: action.payload.value };
      // action là trạng thái dispatch truyền vào từ sự kiện bên ngoài trên UI.

    },
  },
});

// export theo kiểu bắc buộc.
export const { setStatefeedback } = FormReducer.actions; // export action từ reducer ra để sử dụng.

export default FormReducer.reducer; // export contactReducer trực tiếp dưới chính nó.
