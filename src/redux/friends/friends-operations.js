import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../../shared/services/api/sponsors";

export const fetchFriends = createAsyncThunk(
  "friends/fetchFriends",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.getSponsors();
      return data;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);
