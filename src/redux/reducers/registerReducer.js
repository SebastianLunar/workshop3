import { typesRegister } from "../types/types.js"

export const registerReducer = (state = {}, action) => {
    switch (action.type) {
        case typesRegister.register:
            return {
                name: action.payload.name,
                email: action.payload.email,
                password: action.payload.password,
                phone: action.payload.phone,
                image: action.payload.image,
                weight: action.payload.weight,
                height: action.payload.height,
                age: action.payload.age,
                gender: action.payload.gender,
            }
        default:
            return state
    }
}