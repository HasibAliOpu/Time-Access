import React from "react";

const Watch = ({ watch }) => {
  const { img, name, price } = watch;
  return (
    <div>
      <img src={img} className="w-25" alt="" />
      <span className="watch-info">
        <p>{name}</p>
        <p>Price: ৳{price}</p>
      </span>
    </div>
  );
};

export default Watch;
