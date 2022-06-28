import { typesProduct } from "../types/types";

const initialState = {
  products: [],
};

export const productReducers = (state = initialState, action) => {
  switch (action.type) {
    case typesProduct.ADD:
      return {
        products: [...state.products, action.payload],
      };
    case typesProduct.LIST:
      return {
        products: [...action.payload],
      };
    case typesProduct.EDIT:
      return {
        products: [...state.products],
      };
    case typesProduct.DELETE:
      return {
        products: state.products.filter(
          (product) => product.title !== action.payload
        ),
      };
    default:
      return state;
  }
};
