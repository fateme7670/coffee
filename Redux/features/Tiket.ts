import {CommentProps, ProductProps, TiketProps } from "@/utils/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const AddTiketFromServer = createAsyncThunk(
  "tiket/AddTiketFromServer",
  async (data: TiketProps) => {
    return await fetch(`/api/tiket`, {
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


export const AnswerTiketFromServer = createAsyncThunk(
  "tiket/AnswerTiketFromServer",
  async (data:TiketProps,id) => {
    return await fetch(`/api/tiket/${id}`, {
     method:'POST',
     headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(data)

    })
      .then((res) => res.json())
      .then((data) => data);
  }
);


const slice = createSlice({
  name: "tiket",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(AddTiketFromServer.fulfilled, (state , action) => {
      return [...state];
    });
  
  
    builder.addCase(AnswerTiketFromServer.fulfilled, (state, action) => [...state]);
  },
});
export default slice.reducer;
