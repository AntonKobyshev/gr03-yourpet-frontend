import { createSlice } from "@reduxjs/toolkit";

import { fetchNews, fetchFilteredNews } from "./news-operation";

const initialState = {
  items: [],
  loading: false,
  error: null,
  totalPages: 1,
  page: 1,
  query: "",
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNews.fulfilled, (state, { payload }) => {
        state.totalPages = payload.totalPages;
        state.page = Number(payload.page);
        state.loading = false;
        state.items = payload.news;
      })
      .addCase(fetchNews.rejected, (state, { payload }) => {
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
export const { setQuery } = newsSlice.actions;
export const { setPage } = newsSlice.actions;
