import React from 'react'
import navLinks from '../constants'
import logo from '../assets/logo.png'
const Navbar = () =>  (
    <nav className=' flex justify-between items-center mx-24 my-4 '>
        <img src={logo} width={80} alt="logo" />
        <ul className='flex gap-8 font-sans font-medium'>
            {navLinks.map((nav, index)=>(
                <li key={nav.id}>{nav.title}</li>
            ))}
        </ul>
        <button className='font-sans font-medium bg-red-600 px-4 py-[5px] rounded-[2px] text-white'>Login</button>
    </nav>
  )


export default Navbar
