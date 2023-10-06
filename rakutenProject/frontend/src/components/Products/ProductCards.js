import React, { useEffect, useState } from "react";

function ProductCards({ product }) {
  return (
    <div className="checkbox">
      <div className="overlap-group-3">
        <img className="image-7" alt="Image" src={product.image} />
        <div className="text-input">
          <div className="cargotrousers">{product.title}</div>
          <div className="rs">￥{product.price}</div>
        </div>
        <div className="cargotrousers-2">Buy Now</div>
      </div>
    </div>
  );
}

export default ProductCards;
