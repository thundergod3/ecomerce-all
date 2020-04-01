import React from "react";

const ProductCart = props => {
  const { listCart, handleRemoveCart } = props;

  return (
    <div className="alert alert-info">
      {listCart.length === 0 ? (
        "You do not have any item in shopping cart"
      ) : (
        <div>You have {listCart.length} products in the cart</div>
      )}
      {listCart.length > 0 && (
        <div>
          <ul>
            {listCart.map(item => (
              <li key={item.id}>
                <b>{item.title}</b> X {item.count} = {item.price * item.count}
                <button
                  className="btn btn-danger"
                  onClick={() => handleRemoveCart(item.id)}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
          Total:$
          {listCart
            .reduce((total, item) => total + item.price * item.count, 0)
            .toFixed(2)}
          <button
            className="btn btn-primary"
            onClick={() => alert("Checkout needs to implement...")}
          >CHECK OUT</button>
        </div>
      )}
    </div>
  );
};

export default ProductCart;
