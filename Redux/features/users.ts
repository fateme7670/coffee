import { UserProps } from "@/utils/types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
interface RoleProps{
  id:string
}
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
  async ({id}:RoleProps) => {
    return fetch(`/api/user/${id}`, {
      method: "DELETE",
      
    })
      .then((res) => res.json())
      .then((data) => data);
  }
);
interface BanProps{
  data: Object
}

export const BanUserFromServer = createAsyncThunk(
  "users/BanUserFromServer",
  async ({data}: BanProps) => {
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
interface Props {
 
  id: string;
  formData:any 
}
export const EditUserFromServer = createAsyncThunk(
  "users/EditUserFromServer",
  async ({formData, id}:Props) => {
    return await fetch(`/api/user/${id}`, {
      method: "POST",
   
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => data);
  }
);
interface PasProps {
  data: string | any;
  id: string;

}

export const EditPassUserFromServer = createAsyncThunk(
  "users/EditPassUserFromServer",
  async ({ data, id }: PasProps) => {
    return await fetch(`/api/user/password/${id}`, {
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

export const EditRoleUserFromServer = createAsyncThunk(
  "users/EditRoleUserFromServer",
  async ({id}: RoleProps) => {
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
