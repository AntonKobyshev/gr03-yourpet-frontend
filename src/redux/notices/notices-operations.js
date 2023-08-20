import * as api from "../../shared/services/api/notices";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllNotices = createAsyncThunk(
  "notice/fetch-all",
  async (_, thunkAPI) => {
    try {
      const data = await api.getAllNotices();
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);

export const fetchNoticeById = createAsyncThunk(
  "notices/fetchNoticeById",
  async (_id, { rejectWithValue }) => {
    try {
      const result = await api.getNoticesById(_id);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

export const fetchAddNotice = createAsyncThunk(
  "notice/add",
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addNotice(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);

export const fetchDeleteNotice = createAsyncThunk(
  "notice/delete",
  async (_id, { rejectWithValue }) => {
    try {
      await api.deleteNotice(_id);
      return _id;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);

export const fetchNoticesByCategory = createAsyncThunk(
  "notices/category",
  async ({ categoryName, query, page }, { rejectWithValue }) => {
    try {
      const data = await api.getNoticesByCategory(categoryName, query, page);
      return { data, category: categoryName };
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);
export const fetchNoticesByOwn = createAsyncThunk(
  "notices/own",
  async ({ query, page }, { rejectWithValue }) => {
    try {
      const data = await api.getNoticesByOwn(query, page);
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);

export const fetchAllFavoriteNotices = createAsyncThunk(
  "notices/all-favorite",
  async ({ query, page }, { rejectWithValue }) => {
    try {
      const data = await api.getAllFavoriteNotices(query, page);
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);

export const fetchAddToFavorite = createAsyncThunk(
  "notices/add-favorite",
  async (_id, { rejectWithValue }) => {
    try {
      const data = await api.addToFavoriteNotices(_id);
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);

export const fetchRemoveFromFavorite = createAsyncThunk(
  "notices/remove-favorite",
  async (_id, { rejectWithValue }) => {
    try {
      const data = await api.removeFromFavoriteNotices(_id);
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);
