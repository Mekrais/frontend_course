import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPeople = createAsyncThunk(
  "people/fetchPeople",
  async () => {
    const response = await fetch(
      "https://superpeople-api.netlify.app/.netlify/functions/get-superpeople"
    );
    const data = await response.json();
    return data; // This will be the resolved data
  }
);

const personSlice = createSlice({
  name: "people",
  initialState: {
    data: [], // Default initial state
    status: "idle", // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {
    addPerson: (state, action) => {
      state.data.push(action.payload); // Add a new person
    },
    removePerson: (state, action) => {
      state.data = state.data.filter((person) => person.name !== action.payload); // Remove a person
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPeople.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPeople.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload; // Populate the state with fetched data
      })
      .addCase(fetchPeople.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addPerson, removePerson } = personSlice.actions;
export default personSlice.reducer;
