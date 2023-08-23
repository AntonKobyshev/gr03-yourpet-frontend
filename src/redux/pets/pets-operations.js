import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../shared/services/api/auth";

export const addPet = createAsyncThunk(
  "auth/pets",
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addMyNewPet(data);

      return result.data;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

export const addNotice = createAsyncThunk(
  "notice/add",
  async (data, { rejectWithValue }) => {
    try {
      const { data: result } = await api.addPetNotice(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);
