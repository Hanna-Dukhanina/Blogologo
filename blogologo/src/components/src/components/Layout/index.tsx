import React from 'react'
import Header from '../Header'
import { Outlet } from 'react-router-dom'
import './styles.css'

const Layout = () => {
  return (
    <div className='page'>
      <Header />

      <div className='outlet'>
        <Outlet />
      </div>

      <footer className='footer'>footer</footer>
    </div>
  )
}

export default Layout