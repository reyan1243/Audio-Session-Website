import React from 'react'
import { Navigate } from 'react-router-dom'

export const SemiProtected = ({component:Component,isAuth,user}) => {
  return (
    <>
    {
        !isAuth
        
        ?
        
        <Navigate to="/"/>
        
        :
        
        isAuth && !user.activated
        ?
        <Component/>
        :
        <Navigate to="/rooms"/>
    }
    </>
  )
}
