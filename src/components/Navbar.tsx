// import React from 'react'
import reactLogo from '../assets/react.svg'
import { Link } from 'react-router'

const Navbar = () => {
    return (
        <nav className='fixed top-0 left-0 w-full border-b-[1px] bg-gray-950 border-b-white'>
            <div className='flex items-center h-16 px-16'>
                <div className='flex-1'>
                    <img src={reactLogo} alt="Logo" className='h-8' />
                </div>
                <div className='flex gap-6'>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/product-list'}>Products</Link>
                    <Link to={'/about'}>About</Link>
                    <Link to={'/contact'}>Contact</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
