import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Welcome Foodies!</h2>
        <p style={{ fontSize: '20px' }}>We invite you to a world full of heavenly food! Welcome to your comfort food zone</p>
        <button
          onClick={() => window.location.href = '/#explore-menu'}
          style={{ cursor: 'pointer' }}>
          <strong>View Menu</strong>
        </button>

      </div>

    </div>
  )
}

export default Header
