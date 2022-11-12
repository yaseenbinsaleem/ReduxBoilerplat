import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/api";
import {
  getDataByBody,
  getRequest,
  postRequest,
  putRequest,
} from "../../utils/fetch";

const initialState = {
  Products: [],
  fetchingAccounts: false,
};
//initialstate ma saare variable ko define karte hain or neeche use karte hain i.e line 27

export const GetProducts = createAsyncThunk("GetProducts", async () => {
  //createAsyncThunk karenge jiske pehle param mai uska name(same as variable i.e GetProducts)..
  //..or dusre param mai func jisse action perform karwana hai
  const result = await getRequest(`${BASE_URL}/products`, "get");
  //getRequest func jo humne custom banaya hua hai api hit karwane k liye fetch k file mai, isme hum 2 params (url or type) bhejenge jo hum fetch filemai get karenge
  return result;
});

const productsReducer = createSlice({
  name: "product",
  //is product mai saare Thunks bhej denge i.e GetProducts
  initialState,
  reducers: {},
  extraReducers: {
    //fulfilled-Built in func of createSlice
    [GetProducts.fulfilled]: (state, action) => {
      //state here is equals to initialState
      //action= values sent and .payload mai action(second parameter) ki value ati hai eg: const data = action.payload;
 
      const data = action.payload;
      state.Products = data;
      //initialstate(state jo k initialstate se arhi hai) k product mai save karwai value or return karwadi jo hum waha useSelector k through access karlenge
      return state;
    },
  },
});

export default productsReducer.reducer;
