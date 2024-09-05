import { BillProps, ContactsProps } from "@/utils/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
interface Props{
  cart:any
}
export const AddCartFromServer = createAsyncThunk(
  "cart/AddCartFromServer",
  async ({cart}: Props) => {
    return await fetch(`/api/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cart),
    })
      .then((res) => res.json())
      .then((data) => data);
  }
);


const slice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(AddCartFromServer.fulfilled, (state, action) => {
      return [...state];
    });
   
  },
});
export default slice.reducer;
