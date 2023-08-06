import React from 'react'
import { Leftbar } from '../../components/leftbar/Leftbar'
import { useLocation } from 'react-router-dom'
import { UsersList } from './UsersList';
import "./Users.css";

export const Users = () => {

  const location = useLocation();


  return (
    <div className='home-container-1'>
      <Leftbar/>

      <div className="home-container-2">
        {
            location.pathname === '/Users' ?<UsersList/> : <></>
        }

        
      </div>
        
    </div>
  )
}
