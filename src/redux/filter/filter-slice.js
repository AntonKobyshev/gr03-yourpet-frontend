import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  age: [],
  gender: [],
};

const filterSlice = createSlice({
  name: "filer",
  initialState,
  reducers: {
    setAgeFilter: (state, action) => {
      state.age = action.payload;
    },
    setGenderFilter: (state, action) => {
      state.gender = action.payload;
    },
  },
});

export const { setAgeFilter, setGenderFilter } = filterSlice.actions;

export default filterSlice.reducer;
