import * as types from "../../../constants/types";

const getListCart = JSON.parse(localStorage.getItem("cart"));

const initialState = {
  listCart: getListCart ? getListCart : []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.RECEIVE_ADD_TO_CART: {
      const { listCart } = state;
      const { productAddToCart } = action.payload;
      let productAlreadyInCart = false;

      listCart.forEach(item => {
        if (item.id === productAddToCart.id) {
          productAlreadyInCart = true;
          item.count++;
        }
      });

      if (!productAlreadyInCart) {
        listCart.push({ ...productAddToCart, count: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(listCart));
      return { listCart };
    }
    case types.RECEIVE_DELETE_CART_ITEM: {
      const { listCart } = state;
      let tempListCart = state.listCart;
      const { productDelete } = action.payload;

      tempListCart = listCart.filter(item => item.id !== productDelete);
      localStorage.setItem("cart", JSON.stringify(tempListCart));
      
      return {
        listCart: tempListCart
      };
    }
    default: {
      return state;
    }
  }
};

export default cartReducer;
