import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Watch from "../Watch/Watch";
import "./Shop.css";
const Shop = () => {
  const [watches, setWatches] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  const [addItem, setAddItem] = useState([]);
  useEffect(() => {
    fetch("Watch.json")
      .then((res) => res.json())
      .then((data) => setWatches(data));
  }, []);
  const addToCartHandler = (watch) => {
    const newCart = [...cartItem, watch];
    const added = [...addItem, watch.id];
    setAddItem(added);
    if (addItem.includes(watch.id)) {
      return alert("Already Selected");
    } else {
      setCartItem(newCart);
    }
  };
  const chooseItem = () => {
    const randomItem = Math.floor(Math.random() * cartItem.length);
    const itemName = cartItem[randomItem].name;
    alert(itemName);
  };
  const removeCartItems = () => {
    const removeItem = [];
    setCartItem(removeItem);
  };
  return (
    <div className="row w-100 mx-auto mb-5">
      <div className="watch-container col-12 col-lg-9">
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
      <div className="cart-container col-12 col-lg-3 border border-info">
        <div className="sticky-top p-3 mt-2">
          <h4>Selected Items</h4>
          {cartItem.map((watch) => (
            <Cart key={watch.id} watch={watch} />
          ))}
          <div>
            <button
              className="w-100 rounded-pill my-3 choose-btn"
              onClick={chooseItem}
            >
              Choose 1 Item
            </button>
            <button
              className="w-100 rounded-pill remove-btn"
              onClick={removeCartItems}
            >
              Remove Items
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
