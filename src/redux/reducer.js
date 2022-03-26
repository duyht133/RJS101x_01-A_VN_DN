import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; // import createSlice từ reduxToolkit để tạo mới 1 reducer(slice)
import axios from "axios";

/* get request api contact */
export const contactReducerThunk = createAsyncThunk("user/contact", async () => {
  return axios
    .get("http://localhost:3001/contact")
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      // test error tại đây
      if (error) {
        return error.message;
      }
    });
});
//get request api department
export const departmentsReducerThunk = createAsyncThunk("user/departments", async () => {
  return axios
    .get("http://localhost:3001/department")
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      // test error tại đây
      if (error) {
        return error.message;
      }
    });
});
//post request api Contact
export const postContact = createAsyncThunk("user/PostContact", async (data) => {
  return axios({
    method: "POST",
    url: "http://localhost:3001/contact",
    data: {
      id: data.id,
      name: data.name,
      doB: data.doB,
      salaryScale: data.salaryScale,
      startDate: data.startDate,
      department: data.department,
      annualLeave: data.annualLeave,
      overTime: data.overTime,
      image: data.image,
    },
  }).then((res) => {
    return res.data;
  });
});

// delete request
export const deleteContact = createAsyncThunk("user/deleteContact", async (data) => {
  return axios.delete(`http://localhost:3001/contact/${data.id}`).then((res) => {
    return res.data;
  })
});



export const contactReducer = createSlice({
  name: "contact",
  initialState: {
    departments: "",
    contact: "",
    isLoading: false,
  },
  extraReducers: {
    [contactReducerThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [contactReducerThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.contact = action.payload;
    },
    /////////////
    [departmentsReducerThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [departmentsReducerThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.departments = action.payload;
    },
    /////////////
    [postContact.fulfilled]: (state, action) => {
      const newList = { ...state }; // ... là toán tử spread es6 để sao chép lại dữ liệu state
      newList.contact = [...newList.contact, action.payload];
      return newList;
    },




    /////////////
    [deleteContact.fulfilled]: (state, action) => {
      const newList = { ...state }; // ... là toán tử spread es6 để sao chép lại dữ liệu state
      newList.contact = [...newList.contact, action.payload];
      return newList;
    },
  },
});

// export theo kiểu bắc buộc.
export const { setStatecontact } = contactReducer.actions; // export action từ reducer ra để sử dụng.

export default contactReducer.reducer; // export contactReducer trực tiếp dưới chính nó.
