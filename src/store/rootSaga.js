import { all, fork } from "redux-saga/effects";
import productSaga from "./saga/productSaga";
import cartSaga from "./saga/cartSaga";

function* rootSaga() {
  yield all([fork(productSaga)]);
  yield all([fork(cartSaga)]);
}

export default rootSaga;
