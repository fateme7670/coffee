import {ProductProps, WishlistProps } from "@/utils/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const AddwishlisttFromServer = createAsyncThunk(
  "wishlist/AddwishlisttFromServer",
  async (data: WishlistProps) => {
    return await fetch(`/api/wishlist`, {
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
export const AllwishlistFromServer = createAsyncThunk(
  "wishlist/AllwishlistFromServer",
  async (id) => {
    return await fetch(`/api/wishlist/${id}`, {
    
    })
      .then((res) => res.json())
      .then((data) => data);
  }
);
interface DeleteProps{
  id:string
}
export const DeletewishlistFromServer = createAsyncThunk(
  "wishlist/DeletewishlistFromServer",
  async ({id}: DeleteProps) => {
    return await fetch(`/api/wishlist/${id}`, {
      method: "DELETE",
      
    })
      .then((res) => res.json())
      .then((data) => data);
  }
);

const slice = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(AddwishlisttFromServer.fulfilled, (state , action) => {
      return [...state];
    });
    builder.addCase(AllwishlistFromServer.fulfilled, (state , action) => {
      return action.payload;
    });
    builder.addCase(DeletewishlistFromServer.fulfilled, (state , action) => {
      return [...state];
    });
  },
});
export default slice.reducer;
