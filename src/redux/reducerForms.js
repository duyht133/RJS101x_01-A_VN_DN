import { createSlice } from "@reduxjs/toolkit"; // import createSlice từ reduxToolkit để tạo mới 1 reducer(slice)

export const FormReducer = createSlice({
  name: "feedback",
  initialState: {
    feedback: {
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
    setStatefeedback: (state, action) => {
      const newstate = { ...state.feedback };
      return { ...newstate, [action.payload.nameInput]: action.payload.value };

      // đây là action
      /*  state.feedback = action.payload; */
      // state ở đây chính là dữ liệu trong initialState
      // action là trạng thái dispatch truyền vào từ sự kiện bên ngoài trên UI.
    },
  },
});

// export theo kiểu bắc buộc.
export const { setStatefeedback } = FormReducer.actions; // export action từ reducer ra để sử dụng.

export default FormReducer.reducer; // export contactReducer trực tiếp dưới chính nó.
