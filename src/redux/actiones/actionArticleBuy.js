import { typesBuy } from "../types/type"


export const addArticleBuySync = (article)=> {
    return {
        type: typesBuy.addArticle,
        payload: article
    }
}
export const actionDeleteArticleBuySync = (title) => {
    return {
        type: typesBuy.deleteArticle,
        payload: title
    }
}
export const listArticleBuySync = (article)=>{
    return{
        type: typesBuy.listArticle,
        payload: article
    }
} 