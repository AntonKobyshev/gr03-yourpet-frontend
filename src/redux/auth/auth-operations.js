import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import * as toasty from "../../shared/toastify/toastify";
import * as api from "../../shared/services/api/auth";
import { setToken } from "../../shared/services/api/auth";

export const register = createAsyncThunk(
  "auth/register",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const result = await api.register(data);
      dispatch(openModal());
      return result;
    } catch ({ response }) {
      if (response.status === 400 || response.status === 409) {
        toasty.toastError(response.data.message);
        return rejectWithValue(response);
      } else {
        toasty.toastError(response.data.message);
        return rejectWithValue(response);
      }
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.login(data);
      return result;
    } catch ({ response }) {
      if (response.status === 500 || response.status === 401) {
        toasty.toastError(
          (response.data.message = "Email or password invalid")
        );
        return rejectWithValue(response);
      } else {
        toasty.toastError(response.data.message);
        return rejectWithValue(response);
      }
    }
  }
);

export const current = createAsyncThunk(
  "auth/current",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (!persistedToken) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }
    try {
      setToken(persistedToken);
      const { auth } = thunkAPI.getState();

      const data = await api.getCurrent(auth.token);
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.logout();
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);

export const fetchUser = createAsyncThunk("user/fetch", async (_, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    const data = await api.getUser(persistedToken);
    return data;
  } catch ({ response }) {
    return thunkAPI.rejectWithValue(response.data);
  }
});

export const fetchUpdateUser = createAsyncThunk(
  "user/update",
  async ({ token, fieldToUpdate, newValue }, { rejectWithValue }) => {
    try {
      const result = await api.updateUserInf(fieldToUpdate, newValue, token);
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchUpdateAvatar = createAsyncThunk(
  "user/updateAvatar",
  async ({ token, formData }, { rejectWithValue }) => {
    try {
      const result = await api.updateAvatar(token, formData);
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchDeleteUserPet = createAsyncThunk(
  "user/deleteUserPet",
  async (id, { rejectWithValue }) => {
    try {
      await api.deleteUserPet(id);
      return id;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);

export const openModal = createAction("auth/openModal");
export const closeModal = createAction("auth/closeModal");
