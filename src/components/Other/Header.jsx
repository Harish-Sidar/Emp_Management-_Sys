import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>

<h1 className='font-medium text-white text-2xl'>Hello <br/><span className='text-3xl font-semibold'>Rohan 👋</span></h1>
<button className='bg-red-600 text-lg font-medium px-5 py-2 rounded-xl cursor-pointer hover:bg-red-400 text-white'>Log Out</button>

    </div>
  )
}

export default Header 