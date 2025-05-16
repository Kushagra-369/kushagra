import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoSass } from "react-icons/io5";
import { BsBootstrap } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

export default function Skills() {
    return (
        <div className=' text-white bg-black text-center items-center py-20'>
            <div className=' text-white  text-center'>
                <h1 className='text-4xl md:text-6xl'>SKILLS</h1>
                <br />
                <div className='text-sm md:text-2xl'>
                    <h1>I worked on various frontend projects. Check them <a className=' border-b-2 border-amber-300' href="">there</a></h1>
                </div>
                <br />
                <br />
            </div >
            <div className='  flex justify-center ' >

                <div className='hover:scale-105 transition-all duration-300 border-red-700 border-4 bg-black rounded-2xl w-[300px] h-[250px]' style={{ boxShadow: '4px 4px 50px rgba(62, 242, 7, 0.943)' }}>
                    <h1 className="text-center text-2xl text-cyan-300">Frontend</h1>
                    <br />

                    <div className='flex justify-around items-center text-2xl gap-5 text-center'>
                        <a href="" className=' text-orange-500 flex justify-between gap-2'><FaHtml5 />HTML</a>
                        <a href="" className=' text-blue-500 flex justify-between gap-2'><FaCss3Alt />CSS  </a>
                    </div>
                    <br />
                    <div className='flex justify-around items-center text-2xl gap-5'>
                        <a href="" className=' text-green-300 flex justify-between gap-2'><IoLogoSass />SASS</a>
                        <a href="" className=' text-red-500 flex justify-between gap-2'><BsBootstrap />
                            SASS</a>
                    </div>
                    <br />
                    <div className='flex justify-around items-center text-2xl gap-5'>
                        <a href="" className=' text-yellow-300 flex justify-between gap-2'><IoLogoJavascript />JAVASCRIPT</a>
                        <a href="" className=' text-cyan-300 flex justify-between gap-2'><FaReact />REACT</a>
                    </div>
                </div>

            </div>
        </div>
    )
}
