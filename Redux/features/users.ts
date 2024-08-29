import { UserProps } from "@/utils/types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUsersFromServer = createAsyncThunk(
  "users/getUsersFromServer",
  async () => {
    return fetch("/api/user")
      .then((res) => res.json())
      .then((data) => data);
  }
);

export const removeUserFromServer = createAsyncThunk(
  "users/removeUsersFromServer",
  async (id) => {
    return fetch(`/api/user/${id}`, {
      method: "DELETE",
      headers: {
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH",
      },
    })
      .then((res) => res.json())
      .then((data) => data);
  }
);



export const BanUserFromServer = createAsyncThunk(
  "users/BanUserFromServer",
  async (data: Object) => {
    return await fetch(`/api/user/ban`, {
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

export const EditUserFromServer = createAsyncThunk(
  "users/EditUserFromServer",
  async (data: UserProps, id) => {
    return await fetch(`/api/user/${id}`, {
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
export const EditPassUserFromServer = createAsyncThunk(
  "users/EditPassUserFromServer",
  async (password: string, id) => {
    return await fetch(`/api/user/password/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(password),
    })
      .then((res) => res.json())
      .then((data) => data);
  }
);
export const EditRoleUserFromServer = createAsyncThunk(
  "users/EditRoleUserFromServer",
  async (id: string) => {
    return await fetch(`/api/user/role`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(id),
    })
      .then((res) => res.json())
      .then((data) => data);
  }
);

const slice = createSlice({
  name: "users",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getUsersFromServer.fulfilled,
      (state, action) => action.payload
    ),
      builder.addCase(removeUserFromServer.fulfilled, (state, action) => {
        console.log("state remove", state);
        console.log("action remove", action);
        const newuser = state.filter(
          (item: any) => item.id !== action.payload.id
        );
        return newuser;
      });
    builder.addCase(BanUserFromServer.fulfilled, (state, action) => [...state]);
    builder.addCase(EditUserFromServer.fulfilled, (state, action) => [
      ...state,
    ]);
    builder.addCase(EditPassUserFromServer.fulfilled, (state, action) => [
      ...state,
    ]);
    builder.addCase(EditRoleUserFromServer.fulfilled, (state, action) => [
      ...state,
    ]);
  },
});

export default slice.reducer;
