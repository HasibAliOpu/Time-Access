import React, { useEffect, useState } from "react";
import Watch from "../Watch/Watch";
import "./Shop.css";
const Shop = () => {
  const [watches, setWatches] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("Watch.json")
      .then((res) => res.json())
      .then((data) => setWatches(data));
  }, []);
  const addToCartHandler = (watch) => {
    // console.log(watch);
    const newCart = [...cart, watch];
    setCart(newCart);
  };

  return (
    <div className="row w-100 mx-auto mb-5">
      <div className="watch-container col-12 col-lg-10">
        <div className="row row-cols-1 row-cols-md-3 g-4 mx-4 mt-1">
          {watches.map((watch) => (
            <Watch
              key={watch.id}
              watch={watch}
              addToCartHandler={addToCartHandler}
            />
          ))}
        </div>
      </div>
      <div className="cart-container col-12 col-lg-2 border border-info rounded-3">
        <div className="sticky-top p-3 mt-2">
          <h4>Selected Items</h4>
          {cart.map((watch) => (
            <div className="d-flex mt-2 info">
              <img
                src={watch.img}
                className="w-25 rounded-circle me-2"
                alt=""
              />
              <p>{watch.name}</p>
            </div>
          ))}
          <button>Remove Items</button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
