import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetCarts } from "../redux/reducers/Cart";

function Home() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);
  console.log("🚀 ~ file: home.js ~ line 8 ~ Home ~ product", product);

  const {
    cart: { Carts },
  } = useSelector((state) => state);
  useEffect(() => {
    dispatch(GetCarts());
  }, []);
  //   console.log(Carts, "Carts");

  useEffect(() => {
    if (Carts.carts) {
      setProduct(Carts.carts);
    } else {
      setProduct([]);
    }
  }, [Carts]);

  return (
    <>
      {product.map((v, i) => {
        return (
          <div style={{ backgroundColor: "red" }}>
            <h3>{v.id}</h3>

            <h3>{v.discountedTotal}</h3>
            {v.products.map((item) => {
              return (
                <div style={{ backgroundColor: "green" }}>
                  <h3>{item.title}</h3>
                  <h3>{item.price}</h3>
                </div>
              );
            })}
          </div>
        );
      })}
      {
        // product.map(({id,discountedTotal,product})=>{
        //     return (
        //         <div style={{backgroundColor:'red'}}>
        //             <h3>{id}</h3>
        //             <h3>{discountedTotal}</h3>
        //             {
        //                 product.products.map((item)=>{
        //                     return (
        //                         <h3>{item.title}</h3>
        //                     )
        //                 })
        //             }
        //         </div>
        //     )
        // })
      }
      {/* {product.length}
        {product.map((v, i) => {
            <div>
              {v}
              <span>{v?.total}</span>
              <span>{i}</span>
              <br />
            </div>;
          })}
      </div>
      {product[0]?.total} */}
      {/* <h1>hello word</h1> */}
    </>
  );
}

export default Home;
