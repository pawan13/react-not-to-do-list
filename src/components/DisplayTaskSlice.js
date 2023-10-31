import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskList: [],
};

const DisplayTaskSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setTaskList: (state, { payload }) => {
      state.taskList = payload;
    },
    // setGoodTaskList: (state, { payload }) => {   // this didn't worked
    //   state.taskList = payload;
    // },
  },
});

const { reducer, actions } = DisplayTaskSlice;
export const { setTaskList, setGoodTaskList } = actions;
export default reducer;
