import React, { useState, useRef, useEffect } from 'react'
import logo from '../assets/logo.png'
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';

const Home = () => {

  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)

  const submitHandler = (e) => {
    e.preventDefault()
  }

  useGSAP(function(){
    if(panelOpen) {
      gsap.to(panelRef.current, {
        height:'70%',
        // opacity:1
        padding: 24
      })
      gsap.to(panelCloseRef.current, {
        opacity:1
      })
    }
    else{
      gsap.to(panelRef.current, {
        height:'0%',
        // opacity:1
        padding: 0
      })
      gsap.to(panelCloseRef.current, {
        opacity:0
      })
    }
  },[panelOpen])

  return (
    <div className='h-screen relative'>

      <img src={logo} alt="MargDarshak Logo" className="w-16 absolute left-5 top-5 mb-10 " />

      <div className='h-screen w-screen'>
        {/* image for temporary use  */}
        <img className='h-full w-full object-cover' src='https://www.medianama.com/wp-content/uploads/2018/06/Screenshot_20180619-112715.png.png' alt='' />
      </div>

      <div className='bg-white flex flex-col justify-end h-screen absolute top-0 w-full'>
        <div className='h-[30%] p-6 bg-white relative'>

          <h5 
            ref={panelCloseRef}
            onClick={()=> {
              setPanelOpen(false)
            }} 
            className='absolute opacity-0 top-6 right-6 text-2xl'>
            <i className='ri-arrow-down-wide-line'></i>
          </h5>

          <h4 className='text-3xl font-semibold'>Find a trip</h4>

          <form onSubmit={(e)=> {
            submitHandler(e)
          }}>

            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-700 rounded-full"></div>
            <input  
              onClick={()=>{
                setPanelOpen(true)
              }}
              className='bg-[#eee] p-8 py-2 text-base rounded-lg w-full mt-5' 
              type='text' 
              placeholder='Add a pick up location' 
              value= {pickup}
              onChange={(e)=> {
                setPickup(e.target.value)
              }}  
            />
            
            <input
              onClick={()=>{
                setPanelOpen(true)
              }} 
              className='bg-[#eee] p-8 py-2 text-base rounded-lg w-full mt-3' 
              type='text' 
              placeholder='Enter your destination' 
              value= {destination}
              onChange={(e)=> {
                setDestination(e.target.value)
              }} 
            />

          </form>
        </div>
        <div ref={panelRef} className=' bg-white h-0'>
            <LocationSearchPanel/>
        </div>
      </div>

    </div>
  )
}

export default Home