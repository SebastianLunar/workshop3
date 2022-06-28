import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import thunk from "redux-thunk";
import {  articleBuyReducers } from "../reducers/listCar";
import { infArticleFavReducers } from "../reducers/listFavoritesReduce";


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const reducers = combineReducers({
        favoritesStore:infArticleFavReducers,
        articleBuyStore:articleBuyReducers
        

})

export const store = createStore(
    reducers,
   composeEnhancers(
    applyMiddleware(thunk)
   )
)