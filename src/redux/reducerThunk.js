import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// tạo redux thunk
export const login = createAsyncThunk("user/login", async (data, { rejectWithValue }) => {
  const response = await fetch("https://fake-rest-api-nodejs.herokuapp.com/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const jsonData = await response.json();
  if (response.status < 200 || response.status >= 300) {
    return rejectWithValue(jsonData);
  }
  return jsonData;
});

// tạo slice
export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    currentUser: "",
    errorMessage: "",
    /* author:false, //3 */
  },
  reducers: {
    // Logout không gọi API mà chỉ cập nhật state
    logout: (state) => {
      state.currentUser = "";
      state.errorMessage = "";
    },
  },
  // Code logic xử lý async action
  extraReducers: {
    [login.pending]: (state) => {
      state.isLoading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.currentUser = action.payload;
    },
    [login.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload.message;
    },
  },
});

// Export
export const { logout } = userSlice.actions;
export default userSlice.reducer;
