import { addDoc, collection, getDocs } from "firebase/firestore";
import { database } from "../../Firebase/firebaseConfig";
import { typesProduct } from "../types/types";

const productAddSync = (product) => {
  return {
    type: typesProduct.ADD,
    payload: product,
  };
};

export const productAddAsync = (product) => {
  return (dispatch) => {
    addDoc(collection(database, "products"), product)
      .then((doc) => {
        dispatch(productAddSync(product));
        dispatch(productListAsync());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const productListSync = (products) => {
  return {
    type: typesProduct.LIST,
    payload: products,
  };
};

export const productListAsync = () => {
  return async (dispatch) => {
    const listProducts = await getDocs(collection(database, "products"));
    const products = [];
    listProducts.forEach((product) => {
      products.push({
        ...product.data(),
      });
    });
    dispatch(productListSync(products));
  };
};
