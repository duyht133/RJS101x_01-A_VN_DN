import { createStore } from "redux";
import { Reducer,initialState } from "./reducer";

export const ConfigureStote = () => {
    const store = createStore(Reducer);
    return store;
}