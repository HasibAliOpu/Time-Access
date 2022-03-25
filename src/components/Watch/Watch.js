import React from "react";
import "./Watch.css";
const Watch = ({ watch }) => {
  const { img, name, price } = watch;
  return (
    <div className="col">
      <div className="card h-100 watch-card">
        <img src={img} className="card-img-top" alt="" />
        <div className="card-body">
          <h5>{name}</h5>
          <p className="fs-5">Price: ৳{price}.00</p>
        </div>
        <button className="rounded-pill mb-2">
          <p>Add To Cart</p>
        </button>
      </div>
    </div>
  );
};

export default Watch;
