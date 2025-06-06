import React from 'react'
import image1 from '../assets/images/computer1.jpg'
import image2 from '../assets/images/computer2.jpg'
import image3 from '../assets/images/computer3.jpg'
import { FaGithub } from "react-icons/fa";
import { Link, Element } from 'react-scroll';

export default function Myproject() {

    let data = [
        { title1: 'PROJECT:1', title2: 'UI for frontend development using React', title3: 'view site', title4: image1 , title5 :"https://food-king-iota.vercel.app/" },
        { title1: 'PROJECT:2', title2: 'Amazon clone', title3: 'view site', title4: image2 , title5 :"https://best-game.vercel.app/" },
        { title1: 'PROJECT:3', title2: 'Basic html and css project', title3: 'view site', title4: image3 , title5:"https://hcm-rho.vercel.app/" },
    ];


    return (
        <Element name="portfolio">
            <div className=' py-20 bg-black text-yellow-400 px-5 '>


                <div className='text-4xl px-2 text-cyan-200 bg-black'>
                    <h1>PORTFOLIO</h1>
                </div>

                <div className='py-10 px-5'>
                    {
                        data.map((item, key) => (
                            <div className=' flex justify-center gap-10 md:gap-20 items-center-safe'>
                                <div className=' md:h-[200px] md:w-[200px] py-5'>
                                    <img className='h-30 w-100 md:w-60 md:h-30' src={item.title4} alt="" />
                                </div>

                                <div className='text-center w-50 md:w-100'>
                                    <h1 className=' text-2xl md:text-4xl'>{item.title1}</h1>
                                    <h1 className=' text-sm'>{item.title2}</h1>
                                    <div className=' flex justify-center gap-2 py-3 '>
                                        <a href={item.title5}><h1 className='border-cyan-400 border-2 h-[50px] w-[100px] py-2 bg-blue-400 hover:bg-blue-800 '>{item.title3}</h1></a>
                                        <a href=""><div className=' text-2xl flex justify-center border-cyan-400 border-2 h-[50px] w-[100px] py-2 bg-blue-400 hover:bg-blue-800'><FaGithub /></div></a>
                                    </div>
                                </div>
                            </div>


                        ))
                    }
                </div>
            </div>


        </Element>
    )
}
