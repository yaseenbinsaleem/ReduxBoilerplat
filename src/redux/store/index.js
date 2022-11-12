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