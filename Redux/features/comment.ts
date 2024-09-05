import {CommentProps, Object, ProductProps } from "@/utils/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const AddcommentFromServer = createAsyncThunk(
  "comments/AddcommentFromServer",
  async (data: CommentProps) => {
    return await fetch(`/api/comment`, {
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
interface EditProps{
  id:string
  data:CommentProps
}
export const EditCommentFromServer = createAsyncThunk(
  "comments/EditCommentFromServer",
  async ({data,id}: EditProps) => {
    return await fetch(`/api/comment/${id}`, {
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
export const DeleteCommentFromServer = createAsyncThunk(
  "comment/DeleteCommentFromServer",
  async ({id}: Props) => {
    return await fetch(`/api/comment/${id}`, {
      method: "DELETE",
     
     
    })
      .then((res) => res.json())
      .then((data) => data);
  }
);

export const AllcommentFromServer = createAsyncThunk(
  "comments/AllcommentFromServer",
  async () => {
    return await fetch(`api/comment`, {
     
    })
      .then((res) => res.json())
      .then((data) => data);
  }
);
interface Props{
  id:string
}
export const AcceptcommentFromServer = createAsyncThunk(
  "comments/AcceptcommentFromServer",
  async ({id}:Props) => {
    return await fetch(`/api/comment/accept`, {
     method:'PUT',
     headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({ id})

    })
      .then((res) => res.json())
      .then((data) => data);
  }
);
export const RejectcommentFromServer = createAsyncThunk(
  "comments/RejectcommentFromServer",
  async ({id}:Props) => {
    return await fetch(`/api/comment/reject`, {
     method:'PUT',
     headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({id})

    })
      .then((res) => res.json())
      .then((data) => data);
  }
);
interface ObjectProps{
  data:Object
}
export const BancommentFromServer = createAsyncThunk(
  "comments/BancommentFromServer",
  async ({data}:ObjectProps) => {
    return await fetch(`/api/comment/ban`, {
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
interface AnswerProps{
  data:CommentProps
}
export const AnswercommentFromServer = createAsyncThunk(
  "comments/AnswercommentFromServer",
  async ({data}:AnswerProps) => {
    return await fetch(`/api/comment/awnser`, {
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
  name: "comments",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(AddcommentFromServer.fulfilled, (state , action) => {
      return [...state];
    });
    builder.addCase(EditCommentFromServer.fulfilled, (state , action) => {
      return [...state];
    });
    builder.addCase(AllcommentFromServer.fulfilled, (state , action) => {
      return action.payload;
    });
    builder.addCase(AcceptcommentFromServer.fulfilled, (state , action) => {
      return [...state];
    });
    builder.addCase(RejectcommentFromServer.fulfilled, (state , action) => {
      return [...state];
    });
    builder.addCase(DeleteCommentFromServer.fulfilled, (state , action) => {
      return [...state];
    });
    builder.addCase(BancommentFromServer.fulfilled, (state, action) => [...state]);
    builder.addCase(AnswercommentFromServer.fulfilled, (state, action) => [...state]);
  },
});
export default slice.reducer;
