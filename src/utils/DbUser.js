import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/api";
import {
  getDataByBody,
  getRequest,
  postRequest,
  putRequest,
} from "../../utils/fetch";

const initialState = {
  DbUser: [],
};

// GET REQUESTS
export const GetDbUser = createAsyncThunk("GetDbUser", async () => {
  const result = await getRequest(`${BASE_URL}/db_users`, "get");
  return result;
});

const dbUserReducer = createSlice({
  name: "dbUser",
  initialState,
  reducers: {},
  extraReducers: {
    [GetDbUser.fulfilled]: (state, action) => {
      state.fetchingAccounts = false;
      const data = action.payload;
      state.DbUser = data;
      return state;
    },
  },
});

export default dbUserReducer.reducer;
