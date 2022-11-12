//------------------REDUCER FILE START-------------------------

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

//------------------REDUCER FILE END-------------------------

//------------------FETCH FILE START-------------------------

export const getRequest = async (api, get) => {
    const res = await fetch(api, {
      //fetch mai 2 params api or method jata hai
      method: "GET",
      headers: {
        //   Authorization: localStorage.getItem('token'),
        "Content-Type": "application/json",
        //   Accept: "*/*"
      },
    });
    return await res.json();
  };
  //getRequest k params mai api or get recieve horaha hai, get=(method mai use horaha hai usse pata lagta hai k kia method perform karna hai)
  
  //RIGHT WAY TO DO IT IS TO GET SECOND PARAM AS type AND USE TO PERFORM METHOD FOR EXAMPLE:
  export const Request = async (api, type) => {
    const res = await fetch(api, {
      method: type,
      headers: { "Content-Type": "application/json" },
    });
    return await res.json();
  };
  //is tarha mai request method manwaunga or 2 params (api aur type i.e get,post,put) bhejdunga or wo perform hojaega or hume postRequest,GetRequest etc banane ki zaroorat nhi
//------------------FETCH FILE END-------------------------

//------------------HOME FILE START-------------------------
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProducts } from "../redux/reducers/Product";

function Home() {
  const dispatch = useDispatch();
  const [itemProduct, setItemProduct] = useState([]);
  
  const {product: { Products }} = useSelector((state) => state);
  //product slice k state(initialstate) se Product mangwarahe hain or usko product variable mai save karva denge

  useEffect(() => {
    dispatch(GetProducts());
  }, []);
  //useDispatch aur useSelector important hain useSelector store ko access karne k liye use karenge or dispatch send karne k liye jese yaha pe..
//.. GetProducts func dispatch kar rahe hain taake ye function chal jae or is case mai api hit hojae jo product file ka thunk mai horha hai..
//.. or useSelector se hum product ko access kar rhe jo hum waha Slice se bhej rhe hai (jisme value hum yaha dispatch se bhej rhe hain)


  useEffect(() => {
    if (Products?.products) {
      setItemProduct(Products?.products);
    } else {
      setItemProduct([]);
    }
  }, [Products]);

  console.log("itemProduct", itemProduct);
  console.log(Products, "Carts");
  console.log(Products?.products, "PRODUCTS");


  return (
    <>
      {itemProduct.map((v, i) => {
        return (
          <div style={{ backgroundColor: "red" }}>
            <h3>{v.id}</h3>
            <h3>{itemProduct.length}</h3>
            <h3>{v.description}</h3>
            <h3>{v.brand}</h3>
            <h3>{v.category}</h3>
            <h3>{v.total}</h3>
            <a href={v.id}> <h3>{v.title}</h3> </a>
            <img style={{ width: "100px", height: "100px" }} src={v.images[0]} />
            <h3>{v.discountedTotal}</h3>
          </div>
        );
      })}
    </>
  );
}

export default Home;
//------------------HOME FILE END-------------------------

//------------------MAIN INDEX FILE START-------------------------
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { store } from "./redux/store/index";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
  //store ko import karke provider ko react redux se import karwange or App k around wrap kardenge isse store saare App mai accessible hojaega
);

//------------------MAIN INDEX FILE END-------------------------


//------------------STORE FILE START-------------------------

import { configureStore } from "@reduxjs/toolkit";
import Product from "../reducers/Product";
import Cart from "../reducers/Cart";

export const store = configureStore({
  reducer: {
    product: Product,
    //product variable mai Product(jo slice se mil rha hai) save karwa rhe hai taake ise useSelector k through access karle
    cart: Cart,
    // dbUser: DbUser,
  },
});

//configstore ko toolkit se import karwa kar store variable mai save karwaenge taake Index ki file mai App ko provider k through wrap karlen

//------------------STORE FILE END-------------------------
