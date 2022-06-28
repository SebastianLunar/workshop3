import { Navigate } from "react-router-dom"

export const Public = ({ isAutentication, children }) => {
    return (
        !isAutentication ? children : <Navigate to="/measures" />
    )
}