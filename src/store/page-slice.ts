import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PageAction {
  prev: string;
  next: string;
}

const initialState = {
  prevPage: "",
  nextPage: "",
};
const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    storePageApiUrl: (state, action: PayloadAction<PageAction>) => {
      console.log(action.payload);
      const { prev, next } = action.payload;
      state.prevPage = prev;
      state.nextPage = next;
    },
  },
});

export const pageActions = pageSlice.actions;

export default pageSlice;
