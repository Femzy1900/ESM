import React from 'react'
import { useAuth } from '../context/authContext'
import { Navigate } from 'react-router-dom'

const RoleBaseRoutes = ({children , requiredRole}) => {
    const [user, loading] = useAuth()

    if(loading) {
        <div className="">Loading ...</div>
    }

    if(!requiredRole.includes(user.role )) {
        <Navigate to="/authorized" />
    }
    
    return user ? children : <Navigate to="login" />
}

export default RoleBaseRoutes
