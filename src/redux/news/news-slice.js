import { createSlice } from "@reduxjs/toolkit";

import { fetchAllNews, fetchFilteredNews } from "./news-operation";

const initialState = {
  items: [],
  loading: false,
  error: null,
  totalPages: 0,
  page: 0,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllNews.fulfilled, (state, { payload }) => {
        state.totalPages = payload.totalPages;
        state.page = Number(payload.page);
        state.loading = false;
        state.items = payload.news;
      })
      .addCase(fetchAllNews.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(fetchFilteredNews.pending, (state) => {
        state.loading = true;
        state.items = [];
      })
      .addCase(fetchFilteredNews.fulfilled, (state, { payload }) => {
        state.totalPages = payload.totalPages;
        state.page = Number(payload.page);
        state.loading = false;
        state.items = payload.news;
      })
      .addCase(fetchFilteredNews.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});
export default newsSlice.reducer;
