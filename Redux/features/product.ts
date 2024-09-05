import {ProductProps } from "@/utils/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface AddProps{
  formData: any
}
export const AddproductFromServer = createAsyncThunk(
  "products/AddproductFromServer",
  async ({formData}: AddProps) => {
    return await fetch(`/api/product`, {
      method: "POST",
    
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => data);
  }
);
interface EditProps{
  id:string
  formData: any
}
export const EditproductFromServer = createAsyncThunk(
  "products/EditproductFromServer",
  async ({formData,id}:EditProps) => {
    return await fetch(`/api/product/${id}`, {
      method: "PUT",
     
      body:formData,
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
interface DeleteProps{
  id:string

}
export const DeleteproductFromServer = createAsyncThunk(
  "products/DeleteproductFromServer",
  async ({id}: DeleteProps) => {
    return await fetch(`/api/product/${id}`, {
      method: "DELETE",     
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
      return action.payload;
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
