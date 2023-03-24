import React from 'react'
import { Navigate } from 'react-router-dom'


export const Protected = ({component:Component,isAuth,user}) => {
  return (
    <>
    {
        !isAuth
        
        ?
        
        <Navigate to="/"/>
        
        :
        
        isAuth && !user.activated
        ?
        <Navigate to="/activate"/>
        :
        <Component/>
    }
    </>
  )
}
