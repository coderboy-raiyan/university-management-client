import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TUser } from "../../../types";

type TAuthInitialState = {
  user: TUser | null;
  accessToken: null | string;
};

const initialState: TAuthInitialState = {
  user: null,
  accessToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<TAuthInitialState>) {
      state.user = action.payload.user;
      state.accessToken = action?.payload?.accessToken;
    },
    logout(state) {
      state.user = null;
      state.accessToken = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
