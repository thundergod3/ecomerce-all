import * as types from "../../../constants/types";

export const requestFetchProduct = () => {
  return {
    type: types.REQUEST_FETCH_PRODUCT
  };
};

export const receiveFetchProduct = products => {
  return {
    type: types.RECEIVE_FETCH_PRODUCT,
    payload: { products }
  };
};

export const requestSortProduct = sort => {
  return {
    type: types.REQUEST_SORT_PRODUCT,
    payload: {sort}
  };
};

export const receiveSortProduct = (sort, productsSort) => {
  return {
    type: types.RECEIVE_SORT_PRODUCT,
    payload: { sort, productsSort }
  };
};

export const requestSizeProduct = size => {
  return {
    type: types.REQUEST_SIZE_PRODUCT,
    payload: {size}
  };
};

export const receiveSizeProduct = (size, productsSize) => {
  return {
    type: types.RECEIVE_SIZE_PRODUCT,
    payload: { size, productsSize }
  };
};
