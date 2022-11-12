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
