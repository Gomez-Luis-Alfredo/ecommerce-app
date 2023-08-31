import { createStore } from "@reduxjs/toolkit";
import rootReducer from ".";
const store = createStore (rootReducer);

export default store;