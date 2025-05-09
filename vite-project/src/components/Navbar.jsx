import React from 'react'

export default function Navbar() {
  return (
    <div className=' bg-black'>
        <div className=' flex justify-between py-5 px-10 items-center bg-black text-lime-300 gap-10'>
        <div className='text-4xl hover:border-b-2 border-cyan-400'>
          <a href=""><h1>Kushagra</h1></a>
        </div>
        <div>
          <ul className=' flex justify-between gap-20 text-2xl '>
            <a href=""><li className='hover:border-b-2 border-cyan-400'>Home</li></a>
            <a href=""><li className='hover:border-b-2 border-cyan-400'>Portfolio</li></a>
            <a href=""><li className='hover:border-b-2 border-cyan-400 '>Contact</li></a>
          </ul>
        </div>
      </div>
    </div>
  )
}
