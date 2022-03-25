import React, { useEffect, useState } from "react";
import "./Shop.css";
const Shop = () => {
  const [watches, setWatches] = useState([]);
  useEffect(() => {
    fetch("Watch.json")
      .then((res) => res.json())
      .then((data) => setWatches(data));
  }, []);
  return (
    <div className="row w-100 mx-auto">
      <div className="watch-container col-12 col-lg-9 bg-warning">
        <h3>Watch container {watches.length}</h3>
        {watches.map((watch) => console.log(watch))}
      </div>
      <div className="cart-container col-12 col-lg-3 bg-info">
        <h4>Cart container</h4>
      </div>
    </div>
  );
};

export default Shop;
