import {ArticlesProps, ProductProps } from "@/utils/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const AddarticleFromServer = createAsyncThunk(
  "article/AddarticleFromServer",
  async (data: ArticlesProps) => {
    return await fetch(`/api/article`, {
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
export const EditArticleFromServer = createAsyncThunk(
  "article/EditArticleFromServer",
  async (data: ArticlesProps,id) => {
    return await fetch(`/api/article/${id}`, {
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
export const AllArticleromServer = createAsyncThunk(
  "article/AllArticleromServer",
  async () => {
    return await fetch(`/api/article`, {
    
    })
      .then((res) => res.json())
      .then((data) => data);
  }
);
export const DeleteArticleFromServer = createAsyncThunk(
  "article/DeleteArticleFromServer",
  async (id: string) => {
    return await fetch(`/api/article/${id}`, {
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
  name: "article",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(AddarticleFromServer.fulfilled, (state , action) => {
      return [...state];
    });
    builder.addCase(AllArticleromServer.fulfilled, (state , action) => {
      return action.payload;
    });
    builder.addCase(DeleteArticleFromServer.fulfilled, (state , action) => {
      return [...state];
    });
    builder.addCase(EditArticleFromServer.fulfilled, (state, action) => [...state] );
  },
});
export default slice.reducer;
