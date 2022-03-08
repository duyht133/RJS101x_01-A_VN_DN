import { createSlice } from "@reduxjs/toolkit"; // import createSlice từ reduxToolkit để tạo mới 1 reducer(slice)

import { dishes } from "../share/dishes";
import { comments } from "../share/comment";
import { leaders } from "../share/leaders";
import { promotions } from "../share/promotions";

export const contactReducer = createSlice({
  name: "contact",
  initialState: {
    dishes: dishes,
    comments: comments,
    leaders: leaders,
    promotions: promotions,
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
    },
    setStatecomment: (state, action) => {
      const newList = { ...state }; // ... là toán tử spread es6 để sao chép lại dữ liệu state
      newList.comments = [...newList.comments, action.payload];
      return newList;
    },
  },
});

// export theo kiểu bắc buộc.
export const { setStatecontact, setStatecomment } = contactReducer.actions; // export action từ reducer ra để sử dụng.

export default contactReducer.reducer; // export contactReducer trực tiếp dưới chính nó.
