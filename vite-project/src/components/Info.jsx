import React from 'react'
import image1 from '../assets/images/KKUU.jpg'
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoDownloadOutline } from "react-icons/io5";
import { TypeAnimation } from 'react-type-animation';



export default function Info() {



  return (

    <div className=' items-center md:flex justify-between  md:px-5 py-10 bg-black ' >
      <div className='px-10 md:px-0'>
        <div className='h-[70px] w-[300] md:w-[470px] md:text-2xl text-white ' >

          <TypeAnimation
            sequence={[
              1000,
              'Front end developer ',
              1000,
              'Web designer',
              1000
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
          />
        </div>

        <div>
          <div className='text-3xl md:text-6xl text-white'>HEY , I AM</div>
          <div className=' text-3xl md:text-5xl py-1 text-white '>KUSHAGRA CHHABRA</div>
          <div className='md:text-2xl py-4 text-white'> I am a frontend developer within 3 months </div>
          <div className=' text-white flex gap-10 md:gap-15 items-center py-5 '>
            <div className='flex items-center  py-10 border-2 border-cyan-300 h-20 w-50 rounded-2xl text-2xl text-center'>
              <h1 className=' px-5'>Download</h1> <a href=""><IoDownloadOutline />  </a>
            </div>
            <div className=' text-4xl'>
              <a href=""><FaGithub /></a>
            </div>
            <div className=' text-4xl'>
              <a href="https://www.linkedin.com/in/kushagra-chhabra-83b215355?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="_blank"
                rel="noopener noreferrer"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
      </div>

      <div className=' h-90 w-80 flex justify-center md:h-[500px] md:w-[400px] py-10  md:px-5  ' >
        <img className='h-70 w-50 md:h-[400px]  md:w-[400px] ' src={image1} alt="" />
      </div>
    </div>

  )
}
