import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./components/DisplayTaskSlice";

const store = configureStore({
  reducer: {
    taskList: taskReducer,
  },
});
export default store;
