import { createSlice } from '@reduxjs/toolkit';

import { addPet, addNotice } from './pets-operations';

const initialState = {
  items: [],
  loading: false,
  error: null,
  result: '',
};

const petsSlice = createSlice({
  name: 'pets',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(addPet.pending, state => {
        state.loading = true;
        state.error = null;
        state.result = `pending`;
      })
      .addCase(addPet.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items.push(payload);
        state.user = payload;
        state.result = `fulfilled`;
      })
      .addCase(addPet.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.result = `rejected`;
      })
      .addCase(addNotice.pending, state => {
        state.loading = true;
        state.error = null;
        state.result = `pending`;
      })
      .addCase(addNotice.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.result = `fulfilled`;
      })
      .addCase(addNotice.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.result = `rejected`;
      });
  },
});

export default petsSlice.reducer;
