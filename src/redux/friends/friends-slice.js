import { createSlice } from '@reduxjs/toolkit';
import { fetchFriends } from './friends-operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const friendsSlice = createSlice({
  name: 'friends',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchFriends.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchFriends.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(fetchFriends.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export default friendsSlice.reducer;
