import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth"
import { typesRegister } from "../types/types"

export const actionRegisterAsync = (name, email, phone, password, image, weight, height, age, gender) => {
    return (dispatch) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                await updateProfile(auth.currentUser, { displayName: name }, { phoneNumber: phone })
                dispatch(actionRegisterSync(name, email, phone, password, image, weight, height, age, gender))
            })
            .catch(err => {
                console.warn(err, 'Usuario No autorizado')
            })
    }
}

export const actionRegisterSync = (name, email, phone, password, image, weight, height, age, gender) => {
    return {
        type: typesRegister.register,
        payload: {
            name, email, phone, password, image, weight, height, age, gender
        }
    }
}
