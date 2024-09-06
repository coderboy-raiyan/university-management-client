import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TAuthInitialState = {
  user: null | object;
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
