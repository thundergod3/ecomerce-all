import { combineReducers } from "redux";
import productReducer from "./redux/reducers/productReducer";
import cartReducer from "./redux/reducers/cartReducer";

const rootReducer = combineReducers({
  productStore: productReducer,
  cartStore: cartReducer
});

export default rootReducer
