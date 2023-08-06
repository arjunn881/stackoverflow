import React from 'react'
import { useSelector } from 'react-redux';

export const UsersList = () => {

    const users = useSelector((state)=> state.usersReducer);
  return (
    <div className=''>
         
    </div>
  )
}
