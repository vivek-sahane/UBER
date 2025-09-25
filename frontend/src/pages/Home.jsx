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
  const [vehiclePanel, setVehiclePanel] = useState(false)
  const vehiclePanelRef = useRef(null)

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

  useGSAP(function() {
    if(vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        transform:'translateY(0)'
      })
    }
    else{
      gsap.to(vehiclePanelRef.current, {
        transform:'translateY(100%)'
      })
    }
  },[vehiclePanel])

  return (
    <div className='h-screen relative'>

      <img src={logo} alt="MargDarshak Logo" className="w-16 absolute left-5 top-5 mb-10 " />

      <div 
        onClick={()=> {
          setVehiclePanel(false)
        }}
        className='h-screen w-screen'>
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
            <LocationSearchPanel  setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel} />
        </div>
      </div>

      <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-8'>
        <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>

        {/** Div:1 for location */}
        <div className='flex border-2 active:border-black mb-2 rounded-xl p-3 w-full items-center justify-between '>
          <img className='h-12'  src='https://tse2.mm.bing.net/th/id/OIP.jD4muZBvbCYzo-cmaSVl3QHaFj?pid=Api&P=0&h=180' />
          
          <div className='ml-2 w-1/2'>
            <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-3-fill"></i>4</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
          </div>
          <h2 className='text-xl font-semibold'>193.20 $</h2>
        </div>

        <div className='flex border-2 active:border-black mb-2 rounded-xl p-3 w-full items-center justify-between '>
          <img className='h-12'  src='https://tse2.mm.bing.net/th/id/OIP.jD4muZBvbCYzo-cmaSVl3QHaFj?pid=Api&P=0&h=180' />
          
          <div className='ml-2 w-1/2'>
            <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-3-fill"></i>4</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
          </div>
          <h2 className='text-xl font-semibold'>193.20 $</h2>
        </div>

        <div className='flex border-2 active:border-black mb-2 rounded-xl p-3 w-full items-center justify-between '>
          <img className='h-12'  src='https://tse3.mm.bing.net/th/id/OIP.sUxREtT1w4CJlmY03I0ZBgHaEk?pid=Api&P=0&h=180https://tse3.mm.bing.net/th/id/OIP.sUxREtT1w4CJlmY03I0ZBgHaEk?pid=Api&P=0&h=180' />
          
          <div className='ml-2 w-1/2'>
            <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-3-fill"></i>4</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
          </div>
          <h2 className='text-xl font-semibold'>193.20 $</h2>
        </div>

      </div>

    </div>
  )
}

export default Home