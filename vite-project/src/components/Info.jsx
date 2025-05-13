import React from 'react'
import image1 from '../assets/images/KKUU.jpg'
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


export default function Info() {


  
  return (
    <div>
        <div className=' text-2xl flex justify-between py-20 md:py-10 px-5 bg-black text-yellow-400 gap-10 '>
                <div className='w-50 md:w-250' >
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
                      <div className=' flex justify-around gap-10'>
                        <div className=' items-center hover:scale-105 transition-all duration-300 w-[200px] h-[50px] border-2 border-cyan-300 text-center'>
                        <h1 className='   py-1.5 '><a href="">DOWNLOAD</a></h1>
                        </div>
                        <div className=' flex justify-around text-4xl gap-10  '>
                        <a className='hover:scale-120 transition-all duration-300 ' href=""><FaGithub /></a>
                        <a className='hover:scale-120 transition-all duration-300' href=""><FaLinkedinIn /></a>

                        </div>
                      </div>
                    </div>
        
                  </div>
        
                </div>
        
                <div >
                  <img className='h-[250px] w-50 md:h-[450px] md:w-150' src={image1} alt="" />
                </div>
              </div>
    </div>
  )
}
