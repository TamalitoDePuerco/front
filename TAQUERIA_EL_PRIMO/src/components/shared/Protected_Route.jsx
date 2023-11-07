import { Navigate, Outlet } from "react-router-dom"

export const ProtectedRoute = ({token ,children, redirectTo="/menu"}) => {

    if(!token){
        return <Navigate to={redirectTo} />
    }

    return children ? children : <Outlet/>

}