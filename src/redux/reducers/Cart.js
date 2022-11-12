import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/api";
import {
  getDataByBody,
  getRequest,
  postRequest,
  putRequest,
} from "../../utils/fetch";

const initialState = {
  Carts: [],
  fetchingAccounts: false,
};

// GET REQUESTS
export const GetCarts = createAsyncThunk("GetCarts", async () => {
  const result = await getRequest(`${BASE_URL}/carts`, "get");
  return result;
});

const cartsReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: {
    [GetCarts.fulfilled]: (state, action) => {
      state.fetchingAccounts = false;
      const data = action.payload;
      state.Carts = data;
      return state;
    },
    [GetCarts.pending]: (state, action) => {
      state.fetchingAccounts = true;
      return state;
    },
    // [GetCarts.rejected]: (state, action) => {
    //   state.fetchingAccounts = false;
    //   return state;
    // },
  },
});

export default cartsReducer.reducer;
