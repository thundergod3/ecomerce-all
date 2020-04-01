import React, { useState, useEffect } from "react";
import "./App.scss";
import ProductItem from "./components/ProductItem";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "./store/redux/actions/productAction";
import * as cartActions from "./store/redux/actions/cartAction";
import ProductFilter from "./components/ProductFilter";
import ProductCart from "./components/ProductCart";

const App = props => {
  const {
    productsList,
    cartsList,
    productActionCreator,
    cartActionCreator
  } = props;
  const { products } = productsList;
  const { listCart } = cartsList;
  const {
    requestFetchProduct,
    requestSortProduct,
    requestSizeProduct
  } = productActionCreator;
  const { requestAddToCart, requestDeleteCartItem } = cartActionCreator;

  const handleAddToCart = product => {
    requestAddToCart(product);
  };

  const handleChangeSize = e => {
    requestSizeProduct(e.target.value);
  };

  const handleChangeSort = e => {
    requestSortProduct(e.target.value);
  };

  const handleRemoveCart = productId => {
    requestDeleteCartItem(productId);
  };

  useEffect(() => {
    requestFetchProduct();
  }, []);

  return products ? (
    <div className="container">
      <h1>Ecommerce Shopping Cart Application</h1>
      <hr />
      <div className="row">
        <div className="col-md-8">
          <ProductFilter
            handleChangeSize={handleChangeSize}
            handleChangeSort={handleChangeSort}
            count={products.length}
          />
          <hr />
          {products.map(product => {
            return (
              <ProductItem
                key={product.id}
                product={product}
                handleAddToCart={handleAddToCart}
              />
            );
          })}
        </div>
        <div className="div col-md-4">
          <ProductCart
            listCart={listCart}
            handleRemoveCart={handleRemoveCart}
          />
        </div>
      </div>
    </div>
  ) : null;
  return <div></div>;
};

const mapStateToProps = state => {
  return {
    productsList: state.productStore.listProducts,
    cartsList: state.cartStore
  };
};

const mapDispatchToProps = dispatch => {
  return {
    productActionCreator: bindActionCreators(productActions, dispatch),
    cartActionCreator: bindActionCreators(cartActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
