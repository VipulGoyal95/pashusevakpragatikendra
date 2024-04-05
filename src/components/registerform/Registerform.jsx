import React from 'react'

const Registerform = () => {
  return (
    <div className='flex justify-center items-center'>
      <form action="" className='w-40% p-[20px]'>
        <span>Name:</span>
        <input type="text" value=""/>
        <span>Email:</span>
        <input type="email" />
        <span>Phone No:</span>
        <input type="number" />
        <span>State</span>
      </form>
    </div>
  )
}

export default Registerform
