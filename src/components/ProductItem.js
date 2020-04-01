import React, { useContext } from "react";

const ProductItem = props => {
  const { product,handleAddToCart } = props;
  const { id, sku, title, price } = product;

  return (
    <div className="col-md-4">
      <div className="thumbnail text-center">
        <a href={`products/${id}`}>
          <img src={`/products/${sku}_2.jpg`} alt={title} />
          <p>{title}</p>
        </a>
        <div>
          <b>${price.toFixed(2)}</b>
          <button
            className="btn btn-primary"
            onClick={() => handleAddToCart(product)}
          >Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
