import { typesRegister } from "../types/types.js"

export const registerReducer = (state = {}, action) => {
    switch (action.type) {
        case typesRegister.register:
            return {
                name: action.payload.name,
                email: action.payload.email,
                phone: action.payload.phone,
                country: action.payload.country,
                password: action.payload.password,
                image: action.payload.image,
            }
        default:
            return state
    }
}