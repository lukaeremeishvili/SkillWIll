import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/useAuth'


const ProtectedRoutes:React.FC = () => {
    const {token} = useAuth()

    return token ? <Outlet/> : <Navigate to={"/"} />
}

export default ProtectedRoutes
