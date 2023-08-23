import { createAsyncThunk } from "@reduxjs/toolkit";

import getSponsors from "../../shared/services/api/sponsors";

export const fetchFriends = createAsyncThunk(
  "friends/fetchFriends",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getSponsors();
      return data;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);
