import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo-list",
  initialState: {
    initialStateArray: [],
    initialStateValue: "",
  },
  reducers: {
    createList: (state, action) => {
      state.initialStateArray = [...state.initialStateArray, action.payload];
    },
    clearAllList: (state) => {
      state.initialStateArray = [];
    },
    clearCurrnetList: (state, action) => {
      state.initialStateArray = state.initialStateArray.filter(
        (list, index) => index !== action.payload
      );
    },
    setInputValue: (state, action) => {
      state.initialStateValue = action.payload;
    },
  },
});

export const { createList
  ,clearAllList,
  clearCurrnetList,
  setInputValue } =
  todoSlice.actions;
export default todoSlice.reducer;
