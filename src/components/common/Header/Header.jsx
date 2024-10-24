// src/components/landingComponent/header/Header.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import './Header.css'
import Logo from '../../../assets/images/logo.png'
import ShoppingBagIcon from '../../../assets/images/Shopping Bag.png'
import Favorite from '../../../assets/images/Favorite.png'
import User from '../../../assets/images/User.png'
const Header = () => {
  const [activeTitle, setActiveTitle] = useState('صفحه نخست')

  const titles = [
    'صفحه نخست',
    'دوره ها',
    'اساتید',
    'اخبار مقالات',
    'تماس با ما'
  ]

  return (
    <header className='header'>
      <div className='header-right'>
        <img src={Logo} alt='Logo' className='logo' />
      </div>

      <div className='header-center'>
        {titles.map(title => (
          <div
            key={title}
            onClick={() => setActiveTitle(title)}
            className='header-title-container'
          >
            <h1 className='header-title'>{title}</h1>
            {activeTitle === title && <div className='orange-line'></div>}
          </div>
        ))}
      </div>

      <div className='header-left'>
        <button className='nav-button heart-button'>
          <img src={Favorite} alt='Shopping Bag'  className='account-icon'/>
        </button>
        <button className='nav-button cart-button'>
          <img src={ShoppingBagIcon} alt='Shopping Bag'  className='account-icon' />
        </button>

        <button className='nav-button account-button'>
        حساب کاربری
            <img src={User} alt='User'  className='account-icon'/>
          
        </button>
      </div>
    </header>
  )
}

export default Header
