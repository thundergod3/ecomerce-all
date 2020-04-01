import { call, put, takeLatest } from "redux-saga/effects";
import * as types from "../../constants/types";
import {
  receiveFetchProduct,
  receiveSortProduct,
  receiveSizeProduct
} from "../redux/actions/productAction";
import { fetchProductList } from "../../constants/api";

function* fetchProduct() {
  try {
    const data = yield call(fetchProductList);
    yield put(receiveFetchProduct(data));
  } catch (error) {
    console.log(error);
  }
}

function* sortProduct({ payload }) {
  const data = yield call(fetchProductList);
  const { sort } = payload;
  yield put(receiveSortProduct(sort, data));
}

function* sizeProduct({ payload }) {
  const data = yield call(fetchProductList);
  const { size } = payload;
  yield put(receiveSizeProduct(size, data));
}


export default function* productSaga() {
  yield takeLatest(types.REQUEST_FETCH_PRODUCT, fetchProduct);
  yield takeLatest(types.REQUEST_SORT_PRODUCT, sortProduct);
  yield takeLatest(types.REQUEST_SIZE_PRODUCT, sizeProduct);
}
