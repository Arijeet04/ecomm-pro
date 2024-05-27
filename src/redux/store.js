//import { createStore } from "redux";
import rootReducer from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";

const store =configureStore({reducer:rootReducer});
//const store = createStore(rootReducer);//store needs some fucntion to work
export default store;