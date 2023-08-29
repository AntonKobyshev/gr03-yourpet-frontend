import { createSlice } from "@reduxjs/toolkit";
import {
  register,
  login,
  logout,
  current,
  fetchUser,
  fetchUpdateUser,
  fetchUpdateAvatar,
  fetchDeleteUserPet,
  closeModal,
  openModal,
} from "./auth-operations";

const initialState = {
  user: {
    name: null,
    email: null,
    birthday: "",
    phone: "",
    city: "",
    imageURL: "",
    favorite: [],
    itemsFavorite: [],
  },
  pets: [{}],
  registrationSuccessful: false,
  isLoading: false,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        const { user, accessToken } = payload;
        state.isLoading = false;
        state.user = user;
        state.registrationSuccessful = true;
        state.token = accessToken;
        state.isLoggedIn = true;
        state.error = null;
        state.isModalOpen = true;
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(openModal, (state) => {
        state.isModalOpen = true;
      })
      .addCase(closeModal, (state) => {
        state.isModalOpen = false;
      })

      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        const { user, accessToken } = payload;
        state.isLoading = false;
        state.user = user;
        state.token = accessToken;
        state.isLoggedIn = true;
        state.user.favorite = user.favorite;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(current.pending, (state) => {
        state.isLoading = true;
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(current.fulfilled, (state, { payload }) => {
        const { favorite } = payload;
        state.isLoading = false;
        state.registrationSuccessful = false;
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;

        state.user.favorite = favorite;
      })
      .addCase(current.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isRefreshing = false;
        state.token = "";
        state.error = payload;
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        state.user = {};
        state.registrationSuccessful = false;
        state.token = null;
        state.isLoggedIn = false;
        state.user.favorite = [];
      })
      .addCase(logout.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, { payload }) => {
        const { user, pets } = payload;
        state.isLoading = false;
        state.user = user;
        state.pets = pets;
        state.error = null;
      })
      .addCase(fetchUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchUpdateUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUpdateUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.registrationSuccessful = false;
        state.user = user;
        state.error = null;
      })
      .addCase(fetchUpdateUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchUpdateAvatar.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUpdateAvatar.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.registrationSuccessful = false;
        state.user = user;
        state.error = null;
      })
      .addCase(fetchUpdateAvatar.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchDeleteUserPet.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchDeleteUserPet.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.registrationSuccessful = false;
        const index = state.pets.findIndex((pet) => pet._id === payload);
        state.pets.splice(index, 1);
      })
      .addCase(fetchDeleteUserPet.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export default authSlice.reducer;
