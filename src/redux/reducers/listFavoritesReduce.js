import { typesFavorites } from "../types/type"

const initialState={
    infoArticle : []
}
export const infArticleFavReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesFavorites.addFavorites:
            return {

                infoArticle: [action.payload]
            }
        case typesFavorites.deleteFavorites:
                return{
                    infoArticle: state.infoArticle.filter(r => r.title !== action.payload)
           }  
           case typesFavorites.listFavorites:
            return{
                infoArticle : [...action.payload]
       }
        
        default:
            return state
    }
}
