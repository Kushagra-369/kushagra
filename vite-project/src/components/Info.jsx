import React from 'react'
import image1 from '../assets/images/KKUU.jpg'
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoDownloadOutline } from "react-icons/io5";



export default function Info() {



  return (
    <div>
      <div className=' text-3xl md:flex justify-between py-25 px-10 md:py-10 md:px-5 bg-black text-yellow-400 gap-10 '>
        <div className='w-full' >
          <div className=' md:text-6xl'>
            <h1>FRONT END DEVELOPER</h1>
            <br />
            <h1>Hey , I am KUSHAGRA CHHABRA</h1>
          </div>
          <br />
          <div className='text-sm md:text-2xl'>
            <h1>I am front end developer within 3 months </h1>
          </div>
          <br />
          <br />
          <div className=' flex justify-between'>
            <div className=' text-2xl'>
              <div className=' flex justify-around gap-10 items-center'>
                <div className=' items-center hover:scale-105 transition-all duration-300 w-[250px] h-[70px]  border-2 rounded-2xl border-cyan-300 text-center'>
                  <h1 className=' flex gap-5 items-center px-10 text-center   py-3.5 '><h1>DOWNLOAD</h1><a href=""> <IoDownloadOutline /></a></h1>
                </div>
                <div className=' flex justify-around text-4xl gap-10  '>
                  <a className='hover:scale-120 transition-all duration-300 ' href=""><FaGithub /></a>
                  <a className='hover:scale-120 transition-all duration-300' href=""><FaLinkedinIn /></a>

                </div>
              </div>
            </div>

          </div>

        </div>

        <div className='py-20 md:py-5 text-center items-center ' >
          <img className='h-[400px] w-full md:h-[450px] md:w-150' src={image1} alt="" />
        </div>
      </div>
    </div>
  )
}
