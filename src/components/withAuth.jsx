

import React from 'react'
import { Navigate } from 'react-router-dom';

const withAuth = (WrappedComponent) => {
  return (props)=>{
    const token = localStorage.getItem('token');
    
    if(!token){
        return <Navigate  to="/login" replace />;
    }
    else{
        return <WrappedComponent {...props}></WrappedComponent>
    }
  }
}

export default withAuth
