import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskList: [
    {
      id: 1,
      task: "watching TV",
      hr: 4,
      type: "entry", 
    },
  ],
};

const DisplayTaskSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setTaskList: (state, action) => {
      state.taskList = [...state.taskList, action.payload];
    },
  },
});

const { reducer, actions } = DisplayTaskSlice;
export const { setTaskList } = actions;
export default reducer;
