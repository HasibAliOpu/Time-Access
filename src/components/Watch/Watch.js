import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Watch.css";
const Watch = ({ watch, addToCartHandler }) => {
  const { img, name, price } = watch;
  return (
    <div className="col">
      <div className="card h-100 watch-card">
        <img src={img} className="card-img-top" alt="" />
        <div className="card-body">
          <h5>{name}</h5>
          <p className="fs-5">Price: ৳{price}.00</p>
        </div>
        <button
          onClick={() => addToCartHandler(watch)}
          className="rounded-pill mb-2"
        >
          <p className="mb-0">
            Add To Cart
            <FontAwesomeIcon icon={faCartShopping} />
          </p>
        </button>
      </div>
    </div>
  );
};

export default Watch;
