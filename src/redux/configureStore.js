import { configureStore } from '@reduxjs/toolkit'; // dùng function configureStore api từ toolkit đê tạo mới Store
import  contactReducer  from "./reducer"; // export contactReducer trực tiếp

export default configureStore({
    reducer:{
        dataContact:contactReducer,
    },
})
