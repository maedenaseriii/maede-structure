import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
  name: "global",
  initialState: {
    isLogin: false,
    username: ""
  },
  reducers: {
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    }
  }
});

export const { setIsLogin, setUsername } = globalSlice.actions;
export default globalSlice.reducer;
