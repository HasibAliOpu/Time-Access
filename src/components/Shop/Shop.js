import React, { useEffect, useState } from "react";
import Watch from "../Watch/Watch";
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
      <div className="watch-container col-12 col-lg-9 mb-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {watches.map((watch) => (
            <Watch key={watch.id} watch={watch} />
          ))}
        </div>
      </div>
      <div className="cart-container col-12 col-lg-3 bg-info">
        <h4>Cart container</h4>
      </div>
    </div>
  );
};

export default Shop;
