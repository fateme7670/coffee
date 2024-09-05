import {ArticlesProps, ProductProps } from "@/utils/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
interface Props{

  formData: any
}

export const AddarticleFromServer = createAsyncThunk(
  "article/AddarticleFromServer",
  async ({formData}: Props) => {
    return await fetch(`/api/article`, {
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

export const EditArticleFromServer = createAsyncThunk(
  "article/EditArticleFromServer",
  async ({formData,id}:EditProps) => {
    return await fetch(`/api/article/${id}`, {
      method: "PUT",
     
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => data);
  }
);
interface FormProps{
  id:string
  data: any
  }
export const FormArticleFromServer = createAsyncThunk(
  "article/FormArticleFromServer",
  async ({data,id}:FormProps) => {
    return await fetch(`/api/article/${id}`, {
      method: "POST",
     
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
interface DeleteProps{

  id: string
}

export const DeleteArticleFromServer = createAsyncThunk(
  "article/DeleteArticleFromServer",
  async ({id}: DeleteProps) => {
    return await fetch(`/api/article/${id}`, {
      method: "DELETE",
     
     
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
    builder.addCase(FormArticleFromServer.fulfilled, (state , action) => {
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
