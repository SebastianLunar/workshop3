import { typesFavorites } from "../types/type"

export const addInfoFavoriteSync = (article)=> {
    return {
        type: typesFavorites.addFavorites,
        payload: article
    }
}
export const actionDeleteArticleFavoriteSync = (title) => {
    return {
        type: typesFavorites.deleteFavorites,
        payload: title
    }
}
export const listArticleFavoriteSync = (article)=>{
    return{
        type: typesFavorites.listFavorites,
        payload: article
    }
} 