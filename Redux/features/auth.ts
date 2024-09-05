
import { Object } from "@/utils/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface SignupProps{
data:Object
}
export const RegisterUserFromServer = createAsyncThunk(
  "auth/RegisterUserFromServer",
  async ({data}: SignupProps) => {
    return await fetch(`/api/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => data);
  }
);
export const LoginUserFromServer = createAsyncThunk(
  "auth/LoginUserFromServer",
  async ({data}: SignupProps) => {
    return await fetch(`/api/auth/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((users) => users);
  }
);
export const signoutUserFromServer = createAsyncThunk(
  "auth/signoutUserFromServer",
  async () => {
    return  await fetch('/api/auth/signout',{
      method:'POST'
    })
      .then((res) => res.json())
      .then((users) => users);
  }
);
export const UserFromServer = createAsyncThunk(
  "auth/UserFromServer",
  async () => {
    return  await fetch('/api/auth/me',{
   
    })
      .then((res) => res.json())
      .then((users) => users);
  }
);

const slice = createSlice({
  name: "auth",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(RegisterUserFromServer.fulfilled, (state , action) => {
      return [...state];
    });
    builder.addCase(LoginUserFromServer.fulfilled, (state, action) => state);
    builder.addCase(signoutUserFromServer.fulfilled, (state, action) => state);
    builder.addCase(UserFromServer.fulfilled, (state, action) => [...state]);
  },
});
export default slice.reducer;
