import { createSlice } from "@reduxjs/toolkit"; // import reduxToolkit

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
      firtelNumtName: "",
      email: "",
      contactType: "Tel.",
      message: "",
    },
  },
  reducer:{
      setStatecontact:(state,action)=>{
        state.contact.firtName =action.payload;
        /* state.contact.lastName =action.payload.contact.lastName;
        state.contact.firtelNumtName =action.payload.contact.firtelNumtName;
        state.contact.email =action.payload.contact.email;
        state.contact.contactType =action.payload.contact.contactType;
        state.contact.message =action.payload.contact.message; */
      }
  }
});

// export theo kiểu bắc buộc.
export const { setStatecontact } = contactReducer.actions

export default contactReducer.reducer