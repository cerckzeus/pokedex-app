import { configureStore } from "@reduxjs/toolkit";
import pageSlice from "./page-slice";

const store = configureStore({
  reducer: {
      page: pageSlice.reducer
  },
});

type RootState = ReturnType<typeof store.getState>;

export const selectPage = (state: RootState) => state.page;

export default store;
