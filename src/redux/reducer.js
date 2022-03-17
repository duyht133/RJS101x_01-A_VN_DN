import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; // import createSlice từ reduxToolkit để tạo mới 1 reducer(slice)
import { dishes } from "../share/dishes";
import { comments } from "../share/comment";
import { leaders } from "../share/leaders";
import { promotions } from "../share/promotions";


export const DataContactReducer = createSlice({
  name: "contact",
  initialState: {
    dishes: null,
    comments: comments,
    leaders: leaders,
    promotions: promotions,
  },
  reducers: {
    setStatecomment: (state, action) => {
      const newList = { ...state }; // ... là toán tử spread es6 để sao chép lại dữ liệu state
      newList.comments = [...newList.comments, action.payload];
      return newList;
    },
    updateDishes: (state, action) => {
      const newDishes = { ...state }; // ... là toán tử spread es6 để sao chép lại dữ liệu state
      newDishes.dishes =  action.payload;
      return newDishes;
    },
  },
});

// export theo kiểu bắc buộc.
export const { setStatecomment, updateDishes } = DataContactReducer.actions;

export default DataContactReducer.reducer; // export contactReducer trực tiếp dưới chính nó.
