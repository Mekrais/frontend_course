import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { name: "Batman", superpower: "Rich" },
  { name: "Superman", superpower: "Flying" },
  { name: "Wonder Woman", superpower: "Lasso of Truth" },
];

const personSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    addPerson: (state, action) => {
      state.push(action.payload); // Add a new person
    },
    removePerson: (state, action) => {
      return state.filter((person) => person.name !== action.payload); // Remove a person
    },
  },
});

export const { addPerson } = personSlice.actions;
export const { removePerson } = personSlice.actions;
export default personSlice.reducer;
