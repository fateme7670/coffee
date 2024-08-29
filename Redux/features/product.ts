import {ProductProps } from "@/utils/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const AddproductFromServer = createAsyncThunk(
  "products/AddproductFromServer",
  async (data: ProductProps) => {
    return await fetch(`/api/product`, {
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
export const EditproductFromServer = createAsyncThunk(
  "products/EditproductFromServer",
  async (data: ProductProps,id) => {
    return await fetch(`/api/product/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => data);
  }
);
export const AllproductFromServer = createAsyncThunk(
  "products/AllproductFromServer",
  async () => {
    return await fetch(`/api/product`, {
    
    })
      .then((res) => res.json())
      .then((data) => data);
  }
);
export const DeleteproductFromServer = createAsyncThunk(
  "products/DeleteproductFromServer",
  async (id: string) => {
    return await fetch(`/api/product/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
     
    })
      .then((res) => res.json())
      .then((data) => data);
  }
);

const slice = createSlice({
  name: "products",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(AddproductFromServer.fulfilled, (state , action) => {
      return [...state];
    });
    builder.addCase(AllproductFromServer.fulfilled, (state , action) => {
      return action.payload;
    });
    builder.addCase(DeleteproductFromServer.fulfilled, (state , action) => {
      return [...state];
    });
    builder.addCase(EditproductFromServer.fulfilled, (state, action) => [...state] );
  },
});
export default slice.reducer;
