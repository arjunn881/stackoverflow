import React from 'react'
import { Leftbar } from '../../components/leftbar/Leftbar'
import { HomeMain } from '../../components/homemain/HomeMain'
import { Rightbar } from '../../components/rightbar/Rightbar'
import '../Home/Home.css';


export const Home = () => {
  return (
    <div className="home-container-1">
      <Leftbar/>
      <div className="home-container-2">
      <HomeMain/>
      <Rightbar/>
      </div>
    </div>
  )
  }
