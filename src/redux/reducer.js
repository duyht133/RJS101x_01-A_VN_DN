import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; // import createSlice từ reduxToolkit để tạo mới 1 reducer(slice)
import axios from "axios";

///Thunk fetch API từ server sau đó sẽ được dishpatch từ Maincomponents
export const fetchDisheUser = createAsyncThunk("user/Dishdetail", async () => {
  return axios.get("http://localhost:3001/dishes").then((res) => {
    return res.data;
  });
});

///thử tại đây
export const postComment = createAsyncThunk("user/PostComments", async (data) => {
  return axios({
    method: "POST",
    url: "http://localhost:3001/comments",
    data: {
      rating:data.rating,
      comment:data.comment,
      author:data.author,
      date:data.date,
    }
  }).then((res) => {
    return res.data;
  });
});
////
export const fetchComment = createAsyncThunk("user/Comments", async () => {
  return axios.get("http://localhost:3001/comments").then((res) => {
    return res.data;
  });
});


export const fetchPromotions = createAsyncThunk("user/Promotions", async () => {
  return axios.get("http://localhost:3001/promotions").then((res) => {
    return res.data;
  });
});
export const fetchLeaders = createAsyncThunk("user/leaders", async () => {
  return axios.get("http://localhost:3001/leaders").then((res) => {
    return res.data;
  });
});

export const DataContactReducer = createSlice({
  name: "contact",
  initialState: {
    dishes: "",
    comments: '',
    promotions: '',
    leaders: '',

    isLoading: false,
    errorMessage: "",
  },
  /* reducers: {
    // actions này để thực hiện hành động thêm mới comments.
    setStatecomment: (state, action) => {
      const newList = { ...state }; // ... là toán tử spread es6 để sao chép lại dữ liệu state
      newList.comments = [...newList.comments, action.payload];
      return newList;
    },
  }, */
  extraReducers: {
    /////Dishes
    [fetchDisheUser.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchDisheUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.dishes = action.payload;
    },
    [fetchDisheUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload.message;
    },
    /////Comments
    [fetchComment.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.comments = action.payload;
    },
    [fetchComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload.message;
    },
    /////promotions
    [fetchPromotions.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchPromotions.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.promotions = action.payload;
    },
    [fetchPromotions.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload.message;
    },
    /////leaders
    [fetchLeaders.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchLeaders.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.leaders = action.payload;
    },
    [fetchLeaders.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload.message;
    },



    ///postcomments
    [postComment.fulfilled]: (state, action) => {
      const newList = { ...state }; // ... là toán tử spread es6 để sao chép lại dữ liệu state
      newList.comments = [...newList.comments, action.payload];
      return newList;
    },
    ////
  },
});

// export theo kiểu bắc buộc.
export const { setStatecomment } = DataContactReducer.actions;

export default DataContactReducer.reducer; // export contactReducer trực tiếp dưới chính nó.
