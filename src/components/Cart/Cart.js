import React from "react";

const Cart = ({ watch }) => {
  return (
    <div>
      <div className="d-flex mt-2 info">
        <img src={watch.img} className="w-25 rounded-circle me-2" alt="" />
        <p>{watch.name}</p>
      </div>
    </div>
  );
};

export default Cart;
