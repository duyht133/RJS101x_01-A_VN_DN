import { configureStore } from "@reduxjs/toolkit"; // dùng function configureStore api từ toolkit đê tạo mới Store
import DataContactReducer from "./reducer"; // export contactReducer trực tiếp
import userReducer from "./reducerThunk";
import FormReducer from "./reducerForms";

export const store = configureStore({
  reducer: {
    dataContact: DataContactReducer,
    user: userReducer,
    form: FormReducer,
  },
});
