import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
import * as types from "../../constants/types";
import { receiveAddToCart, receiveDeleteCartItem } from "../redux/actions/cartAction"

function* addToCart({ payload }) {
  const { product } = payload
 yield put(receiveAddToCart(product))
}

function* deleteCartitem({ payload }) {
  const { productId } = payload
 yield put(receiveDeleteCartItem(productId))
}

export default function* cartSaga() {
  yield takeEvery(types.REQUEST_ADD_TO_CART, addToCart);
  yield takeEvery(types.REQUEST_DELETE_CART_ITEM, deleteCartitem);
}
