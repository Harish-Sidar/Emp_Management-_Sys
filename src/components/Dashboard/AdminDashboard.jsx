import React from 'react'
import Header from '../Other/Header'

const AdminDashboard = () => {
  return (
    <div className='h-screen text-white w-full p-10'>
        <Header/>
    
    <div>
        <form action="">
            <h3 className='text-white'>Task Title</h3>
            <input type="text" className='border-2 border-gray-300 p-2 rounded-md' placeholder='Enter your task'/>
             <h3 className='text-white'>Description</h3>
            <textarea className='border-red-400' name="" id="" cols= '30' rows='10'placeholder='Write a descroption'></textarea>
            <h3 className='text-white'>Date</h3>
            <input type="date" className='border-2 border-gray-300 p-2 rounded-md' placeholder='Enter your task'/>
            <h3 className='text-white'>Time</h3>
            <input type="text" placeholder='enter something' />
          
            
            
            
            <button type="submit" className='bg-blue-500 text-white p-2 rounded-md'>Submit</button>
        </form>
    </div>




    </div>
    
  )
}

export default AdminDashboard