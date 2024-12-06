import { configureStore } from "@reduxjs/toolkit";
import personReducer from "./features/personslice";

const store = configureStore({
  reducer: {
    people: personReducer,
  },
});

export default store;
