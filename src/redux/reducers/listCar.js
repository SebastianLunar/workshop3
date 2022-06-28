import { typesBuy} from "../types/type"

const initialState={
    infoArticle : []
}
export const articleBuyReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesBuy.addArticle:
            return {

                infoArticle: [action.payload]
            }
        case typesBuy.deleteArticle:
                return{
                    infoArticle: state.infoArticle.filter(r => r.title !== action.payload)
           }  
           case typesBuy.listArticle:
            return{
                infoArticle : [...action.payload]
       }
        default:
            return state
    }
}