import React, { useContext } from 'react'
import userAuth from '../../Features/Context/AuthUser'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const {user}=useContext(userAuth)
    if (!user){
        alert("You Have To Sign In")
        return <Navigate to="/signin"/>
    }
  return {children}
}

export default ProtectedRoute