import React from 'react'
import logo from '../assets/logo.png'
import firstpageImg from '../assets/firstpageImg.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div
      className="h-screen pt-8 flex justify-end flex-col w-full"
      style={{
        backgroundImage: `url(${firstpageImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Top logo */}
      <img src={logo} alt="MargDarshak Logo" className="w-20 ml-6 absolute top-6" />

      {/* Bottom card */}
      <div className="bg-white rounded-t-2xl shadow-lg pb-7 py-5 px-10">
        <h2 className="font-bold">
          <p className="text-lg">Get Started with</p>
          <span className="text-2xl">MargDarshak</span>
        </h2>

        <Link
          to="/login"
          className="block text-center w-full bg-black text-white py-3 rounded mt-4 cursor-pointer hover:bg-gray-800 transition"
        >
          Continue
        </Link>
      </div>
    </div>
  )
}

export default Home
