import { configureStore } from '@reduxjs/toolkit'; // dùng function configureStore api từ toolkit đê tạo mới Store
import  contactReducer  from "./reducer"; // export contactReducer trực tiếp
import userReducer from "./reducerThunk";


export const store =configureStore({
    reducer:{
        dataContact:contactReducer,
        user:userReducer
    },
})
