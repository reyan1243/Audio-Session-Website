import React from 'react'
import {Navigate} from 'react-router-dom'

function Protected({component:Component,isAuth}) {


return (
    <>
            
        {    
            isAuth
            ?
            <Navigate to="/rooms"/>
            :
            <Component/>
        }

    </>
  )
}

export default Protected