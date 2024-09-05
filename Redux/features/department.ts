import { DepartmentProps, SubDepartmentProps } from "@/utils/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const AddDepartmentFromServer = createAsyncThunk(
  "department/AddDepartmentFromServer",
  async (data: DepartmentProps) => {
    return await fetch(`/api/department`, {
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

export const AllDepartmentFromServer = createAsyncThunk(
  "department/AllDepartmentFromServer",
  async () => {
    return await fetch(`/api/department`)
      .then((res) => res.json())
      .then((data) => data);
      
  }
);
export const SebdepartmentFromServer = createAsyncThunk(
  "department/SebdepartmentFromServer",
  async (data: SubDepartmentProps) => {
    return await fetch(`/api/department/subDepartment`, {
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
interface Props{
  id:string | number
}
export const AllSebdepartmentFromServer = createAsyncThunk(
  "department/EditSebdepartmentFromServer",
  async ({id}:Props) => {
    return await fetch(
      `/api/department/subDepartment/${id}` )
      .then((res) => res.json())
      .then((data) => data);
  }
);

const slice = createSlice({
  name: "department",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(AddDepartmentFromServer.fulfilled, (state, action) => {
      return [...state];
    });
    builder.addCase(AllDepartmentFromServer.fulfilled, (state, action) => {
      return action.payload;
    });

    builder.addCase(SebdepartmentFromServer.fulfilled, (state, action) => [
      ...state,
    ]);
    builder.addCase(
      AllSebdepartmentFromServer.fulfilled,
      (state, action) =>   action.payload
    );
  },
});
export default slice.reducer;
