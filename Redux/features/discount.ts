
import {DiscountProps, ProductProps } from "@/utils/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface Props{
    data:DiscountProps
}
export const AddDiscountFromServer = createAsyncThunk(
  "discount/AddDiscountFromServer",
  async ({data}: Props) => {
    return await fetch(`/api/discount`, {
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
interface CodeProps{
  code:string
}
export const UsesDiscountFromServer = createAsyncThunk(
  "discount/UsesDiscountFromServer",
  async ({code}: CodeProps) => {
    return await fetch(`/api/discount/uses`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({code}),
    })
      .then((res) => res.json())
      .then((data) => data);
  }
);
interface deleteProps{
    id:string
}
export const DeleteDiscountFromServer = createAsyncThunk(
  "discount/DeleteDiscountFromServer",
  async ({id}: deleteProps) => {
    return await fetch(`/api/discount/${id}`, {
      method: "DELETE",
   
     
    })
      .then((res) => res.json())
      .then((data) => data);
  }
);

const slice = createSlice({
  name: "discount",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(AddDiscountFromServer.fulfilled, (state , action) => {
      return [...state];
    });
    builder.addCase(UsesDiscountFromServer.fulfilled, (state , action) => {
      return [...state];
    });

    builder.addCase(DeleteDiscountFromServer.fulfilled, (state , action) => {
      return [...state];
    });
  },
});
export default slice.reducer;
