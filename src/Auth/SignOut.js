import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectloggedInAgency, signOutAsync } from './authSlice';
import { Link, Navigate } from 'react-router-dom';

function SignOut() {
    const dispatch = useDispatch();
   
    const agency = useSelector(selectloggedInAgency)
    useEffect(() => {
        dispatch(signOutAsync());
        window.location.reload();
      }, [dispatch]);


  return (
    <>   {console.log(agency)}
       {!agency && <Navigate to="/" replace={true}></Navigate>}
    </>
  )
}

export default SignOut