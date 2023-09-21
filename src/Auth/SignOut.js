import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { signOutAsync } from './authSlice';

function SignOut() {
    const dispatch = useDispatch();
    const token = localStorage.getItem('token');

    useEffect(()=>{
        dispatch(signOutAsync());
    })

  return (
    <>
        {!token && <Navigate to="/" replace={true}></Navigate>}
    </>
  )
}

export default SignOut