import * as types from "../../../constants/types";

const initialState = {
  listProducts: []
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.RECEIVE_FETCH_PRODUCT: {
      return { listProducts: action.payload };
    }
    case types.RECEIVE_SORT_PRODUCT: {
      let tempListProduct = state.listProducts.products;
      const { productsSort, sort } = action.payload;
      if (sort !== "") {
        tempListProduct = productsSort.sort((a, b) =>
          sort === "lowest"
            ? a.price > b.price
              ? 1
              : -1
            : a.price < b.price
            ? 1
            : -1
        );
      } else {
        tempListProduct = productsSort.sort((a, b) => (a.id > b.id ? 1 : -1));
      }
      return { listProducts: { products: tempListProduct } };
    }
    case types.RECEIVE_SIZE_PRODUCT: {
      let tempListProduct = state.listProducts.products;
      const { productsSize, size } = action.payload;
      console.log(productsSize);
      if (size !== "") {
        tempListProduct = productsSize.filter(
          product => product.availableSizes.indexOf(size.toUpperCase()) >= 0
        );
      }
      return { listProducts: { products: tempListProduct } };
    }
    default: {
      return state;
    }
  }
};

export default productReducer;
