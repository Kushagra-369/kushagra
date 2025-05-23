import React, { useState } from 'react'
import { FaBars } from "react-icons/fa6";
import { GiSplitCross } from "react-icons/gi";
import { Link } from 'react-scroll';


export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = [
    { href: "", title1: "HOME" ,title2 : ""},
    { href: "", title1: "PORTFOLIO",title2 : "portfolio" },
    { href: "", title1: "CONNECT",title2 : "connect" }
  ];

  return (
    <div className='bg-black relative'>
      <div className='flex justify-between py-5 px-10 items-center bg-black text-green-400 font-bold gap-10'>
        <div className='text-4xl hover:border-b-2 border-cyan-400'>
          <a href=""><h1>Kushagra</h1></a>
        </div>

        {/* Desktop Menu */}
        <ul className='hidden md:flex justify-between gap-20 text-2xl'>
          {navItems.map((item, key) => (
            <Link key={key} to={item.title2} smooth={true} duration={500}>
              <li className='hover:border-b-2 border-cyan-400 hover:text-blue-500 hover:bg-yellow-300'>
                {item.title1}
              </li>
            </Link>
          ))}
        </ul>

        {/* Mobile Icon */}
        <div onClick={toggleMenu} className='md:hidden block px-5 z-50 text-3xl text-green-400'>
          {menuOpen ? <GiSplitCross /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu - Slide in from right */}
      {menuOpen && (
        <div className='md:hidden fixed top-0 right-0 h-full w-full bg-gray-800 text-yellow-300 p-10 z-40 shadow-lg transition-all duration-300'>
          <ul className='flex flex-col gap-10 text-2xl'>
            {navItems.map((item, key) => (
              <li key={key}>
                <Link
                  to={item.title2}
                  smooth={true}
                  duration={500}
                  onClick={toggleMenu} 
                >
                  {item.title1}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
