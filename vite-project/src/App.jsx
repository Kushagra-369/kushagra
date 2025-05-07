import React, { useState } from 'react'
import image1 from "../src/assets/images/KKUU.jpg"
import { CiAirportSign1 } from "react-icons/ci";
import { CiApple } from "react-icons/ci";
import { CiBluetooth } from "react-icons/ci";


export default function App() {


  return (
    <div>
      <div className=' flex justify-between py-5 px-10 items-center bg-black text-lime-300'>
        <div className='text-4xl hover:border-b-2 border-cyan-400'>
          <a href=""><h1>Kushagra</h1></a>
          </div>
          <div>
            <ul className=' flex justify-between gap-20 text-2xl'>
              <a href=""><li className='hover:border-b-2 border-cyan-400'>Home</li></a>
              <a href=""><li className='hover:border-b-2 border-cyan-400'>Portfolio</li></a>
              <a href=""><li className='hover:border-b-2 border-cyan-400'>Contact</li></a>
            </ul>
          </div>
      </div>

      <div className=' flex justify-between py-10 px-5 bg-black text-yellow-400 gap-10'>
        <div>
            <div className='text-6xl'>
              <h1>FRONT END DEVELOPER</h1>
              <br />
              <h1>Hey , I am KUSHAGRA CHHABRA</h1>
            </div>
              <br />
            <div className=' text-2xl'>
                <h1>I love to write poetries</h1>
            </div>
              <br />
              <br />
            <div className=' flex justify-between'>
                <div className=' text-2xl'>
                  <div className=' flex justify-around gap-10'>
                <h1 className=' border-2 border-cyan-300 text-center'>DOWNLOAD</h1>
                <div className=' flex justify-around text-4xl gap-10'>
                <CiAirportSign1 />
                <CiApple />
                <CiBluetooth />
                </div>
                </div>
                </div>
               
            </div>
            
        </div>

        <div >
            <img className=' h-[450px] w-150' src={image1} alt="" />
        </div>
      </div>
       
    </div>
  )
}
