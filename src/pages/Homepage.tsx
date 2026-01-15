// import React from 'react'
import { Link } from 'react-router'

const Homepage = () => {
    return (
        <div className='flex flex-col items-center m-4'>
            <h1 className='font-extrabold text-6xl mb-2 '>Ini HomePage</h1>
            <p className='font-normal text-2xl p-2 text-left w-4/5'>Selamat datang di React App pertama saya</p>
            {/* <a href="/terms" className="text-cyan-200 hover:underline-2">Menuju Halaman Terms!</a> */}
            <Link to="/terms" className="text-cyan-200 hover:underline-2">Menuju halaman terms</Link>  {/* Tidak request ke server lagi */}
        </div>
    )
}

export default Homepage
