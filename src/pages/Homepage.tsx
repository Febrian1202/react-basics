// import React from 'react'
import { Link } from 'react-router'

const Homepage = () => {
    return (
        <div>
            <h1>Ini HomePage</h1>
            <p>Setujui Syarat Di Bawah Ini!</p>
            {/* <a href="/terms" className="text-cyan-200 hover:underline-2">Menuju Halaman Terms!</a> */}
            <Link to="/terms" className="text-cyan-200 hover:underline-2">Menuju halaman terms</Link> // Tidak request ke server lagi
        </div>
    )
}

export default Homepage
