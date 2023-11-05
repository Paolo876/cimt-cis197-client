import React from 'react'
// media
import "./MainMenu.scss";
import Navbar from './Navbar';
import MainNavigation from './MainNavigation';

export default function MainMenu() {
  return (
    <div className='main-menu-page'>
      <Navbar/>
      <MainNavigation/>
    </div>
  )
}
