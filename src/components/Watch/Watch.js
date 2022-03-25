import React from "react";
import "./Watch.css";
const Watch = ({ watch }) => {
  const { img, name, price } = watch;
  return (
    <div class="col">
      <div class="card h-100 bg-info p-1 watch-card">
        <img src={img} class="card-img-top" alt="" />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default Watch;
