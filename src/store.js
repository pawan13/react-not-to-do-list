import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./components/DisplayTaskSlice";

const Store = configureStore({
  reducer: {
    taskList: taskReducer,
  },
});
export default Store;
