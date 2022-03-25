import React from "react";
import "./Watch.css";
const Watch = ({ watch }) => {
  const { img, name, price } = watch;
  return (
    <div className="col-12 col-lg-4">
      <img src={img} className="watch-img" alt="" />
      <span className="watch-info">
        <p>{name}</p>
        <p>Price: ৳{price}</p>
      </span>
    </div>
  );
};

export default Watch;
