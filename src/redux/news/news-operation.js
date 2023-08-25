import * as api from "../../shared/services/api/news";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchAllNews = createAsyncThunk(
//   "news/fetch-all",
//   async (_, thunkAPI) => {
//     try {
//       const data = await api.getAllNews();
//       return data;
//     } catch ({ response }) {
//       return thunkAPI.rejectWithValue(response.data);
//     }
//   }
// );
// export const fetchFilteredNews = createAsyncThunk(
//   "news/fetch-filtered",
//   async ({ query, page }, thunkAPI) => {
//     try {
//       const data = await api.getFilteredNews(query, page);
//       return data;
//     } catch ({ response }) {
//       return thunkAPI.rejectWithValue(response.data);
//     }
//   }
// );

export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async ({ query, page }, thunkAPI) => {
    try {
      const data = await api.getNews(query, page);
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);
