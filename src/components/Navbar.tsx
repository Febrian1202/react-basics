// import React from 'react'
import reactLogo from '../assets/react.svg'
import { NavLink } from 'react-router'

const Navbar = () => {
    return (
        <nav className='fixed top-0 left-0 w-full border-b-[1px] bg-gray-950 border-b-white'>
            <div className='flex items-center h-16 px-16'>
                <div className='flex-1'>
                    <img src={reactLogo} alt="Logo" className='h-8' />
                </div>
                <div className='flex gap-6'>
                    <NavLink to={'/'} end className={({ isActive }) => `hover:text-cyan-300 transition-colors duration-200 ${isActive ? "text-cyan-300" : "text-white"}`}>Home</NavLink>
                    <NavLink to={'/product-list'} className={({ isActive }) => `hover:text-cyan-300 transition-colors duration-200 ${isActive ? "text-cyan-300" : "text-white"}`}>Products</NavLink>
                    <NavLink to={'/about'} className={({ isActive }) => `hover:text-cyan-300 transition-colors duration-200 ${isActive ? "text-cyan-300" : "text-white"}`}>About</NavLink>
                    <NavLink to={'/contact'} className={({ isActive }) => `hover:text-cyan-300 transition-colors duration-200 ${isActive ? "text-cyan-300" : "text-white"}`}>Contact</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
