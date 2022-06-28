import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { productReducers } from "../reducers/productReducers";

const reducers = combineReducers({
  productsStore: productReducers,
});

export const store = createStore(reducers, compose(applyMiddleware(thunk)));
