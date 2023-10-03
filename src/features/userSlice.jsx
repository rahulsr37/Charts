import { createSlice } from "@reduxjs/toolkit";

const user = localStorage.getItem("user");

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: user ? JSON.parse(user) : null,
  },
  reducers: {
    login: (state, action) => {
      const loginCreds = action.payload;
      if (!loginCreds.name || !loginCreds.email || !loginCreds.password) {
        alert(`Enter credentials for login!`);
        return;
      }
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
});

export const { login, logout } = userSlice.actions;

// Exporting the state
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
