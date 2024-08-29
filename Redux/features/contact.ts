import { ContactsProps } from "@/utils/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const AddContactFromServer = createAsyncThunk(
  "contact/AddContactFromServer",
  async (data: ContactsProps) => {
    return await fetch(`/api/contact`, {
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


const slice = createSlice({
  name: "contact",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(AddContactFromServer.fulfilled, (state, action) => {
      return [...state];
    });
   
  },
});
export default slice.reducer;
