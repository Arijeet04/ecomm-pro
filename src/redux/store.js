import { createStore } from "redux";
import rootReducer from "./rootReducer";


const store = createStore(rootReducer);//store needs some fucntion to work
export default store;