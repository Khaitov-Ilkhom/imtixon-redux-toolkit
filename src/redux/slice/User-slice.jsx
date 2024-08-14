import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token") || null,
}

const UserSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    SuccessToken: (state, action) => {
      state.token = action.payload.token;
      localStorage.setItem("token", action.payload.token);
    },
    LogOut: (state) => {
      state.token = null;
      localStorage.removeItem("token");
    }
  }
})

export const {reducer} = UserSlice;
export const {SuccessToken, LogOut} = UserSlice.actions;