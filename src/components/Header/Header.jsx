import React from 'react'

const Header = () => {
  return (
    <div className='d-flex align-items-center justify-content-center bg-secondary'>
      <div className='d-flex '>
        <h2 className='p-2'>Header</h2>
      </div>
      <div className='d-flex'>
        <span className='registration'>Вход/регистрация</span>
      </div>
    </div>
  )
}

export default Header