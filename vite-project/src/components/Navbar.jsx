import React, { useState } from 'react'
import { FaBars } from "react-icons/fa6";
import { GiSplitCross } from "react-icons/gi";
import { Link, Element } from 'react-scroll';

export default function Navbar() {



  let data2 = [
    { href: "", title1: "HOME" , },
    { href: "", title1: "PORTFOLIO" },
    { href: "", title1: "CONTACT" }
  ];

  const[text,settext]=  useState(false)

  const cross=()=>{
    settext(!text)
  }

  return (
    <div className=' bg-black '>
        <div className=' flex justify-between py-5 px-10 items-center bg-black text-green-400 font-bold gap-10'>
        <div className='text-4xl hover:border-b-2   border-cyan-400'>
          <a href=""><h1>Kushagra</h1></a>
        </div>
        
        <ul className='  hidden md:flex justify-between gap-20 text-2xl '>
          {
            data2.map((item,key) =>(
            <Link to="portfolio" smooth={true} duration={500}><li className='hover:border-b-2 border-cyan-400 hover:text-blue-500 hover:bg-yellow-300 '>{item.title1}</li></Link>
  
          ))
        }
        </ul>

           <div onClick={cross} className=' md:hidden block px-5 '>
          {text ?   <GiSplitCross/> : <FaBars/>}
      </div>
      {
                text && (
                    <ul className=' w-full text-center bg-gray-500 text-2xl text-yellow-300 absolute top-18  left-7'>
                        {data2.map((item,key)=>(
                            <li key={key}><Link to="portfolio"smooth={true} duration={500}>{item.title1}</Link></li>
                        ))}
                    </ul>
                )
            }
      </div>

   
    </div>
  )
}
