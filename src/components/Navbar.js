import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
      <nav>
          <div className='flex items-center bg-gradient-to-tr from-orange-800 to-white'>
              <h1 className='p-4 font-bold text-base sm:text-lg text-white'>TVMaze</h1>
              <Link to={'/'} className='hover:text-neutral-300 p-4 font-medium text-xs sm:text-sm text-white'>Home</Link>
          </div>
      </nav>
  )
}

export default Navbar