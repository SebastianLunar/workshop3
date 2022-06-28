import { Navigate } from "react-router-dom"

export const Private = ({ isAutentication, children }) => {
    return (
        isAutentication ? children : <Navigate to="/login" />
    )
}