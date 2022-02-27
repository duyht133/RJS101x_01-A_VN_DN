import { dishes } from "../share/dishes";
import { comments } from "../share/comment";
import { leaders } from "../share/leaders";
import { promotions } from "../share/promotions";
 
export const initialState = {
    dishes:dishes,
    comments:comments,
    leaders:leaders,
    promotions:promotions,
}

export const Reducer = (state = initialState, action) =>{
    return state;
}