import * as types from "../../../constants/types";

export const requestAddToCart = product => {
  return {
    type: types.REQUEST_ADD_TO_CART,
    payload: { product }
  };
};

export const receiveAddToCart = productAddToCart => {
  return {
    type: types.RECEIVE_ADD_TO_CART,
    payload: { productAddToCart }
  };
};

export const requestDeleteCartItem = productId => {
  return {
    type: types.REQUEST_DELETE_CART_ITEM,
    payload: { productId }
  };
};

export const receiveDeleteCartItem = productDelete => {
  return {
    type: types.RECEIVE_DELETE_CART_ITEM,
    payload: { productDelete }
  };
};
