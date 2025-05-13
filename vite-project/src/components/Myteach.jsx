import React from 'react'
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";



export default function Myteach() {
  return (
    <div>  
         <div className=' bg-black text-sm md:text-2xl text-white flex justify-center items-center gap-10 '>
    <div>
      <h1>MY TECH STACK</h1>
    </div>
    <div className=' flex justify-between text-4xl md:text-6xl gap-3'>
    <a href="" className=' text-cyan-300 hover:text-cyan-500'><FaReact /></a>
    <a href="" className=' text-yellow-300 hover:text-yellow-400'><IoLogoJavascript /></a>
    <a href="" className=' text-green-400 hover:text-green-700'><FaNodeJs /></a>
    <a href="" className=' text-orange-500 hover:text-orange-700'><FaHtml5 /></a>
    <a href="" className=' text-blue-500 hover:text-blue-700'><FaCss3Alt />   </a>


    </div>
  </div>
  </div>
  )
}
