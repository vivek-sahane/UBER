import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import FinishRide from '../components/FinishRide';

const CaptainRiding = () => {

  const [finishRidePanel, setFinishRidePanel] = useState(false)
  const finishRidePanelRef = useRef(null)

  useGSAP(function() {
    if(finishRidePanel) {
      gsap.to(finishRidePanelRef.current, {
        transform:'translateY(0)'
      })
    }
    else{
      gsap.to(finishRidePanelRef.current, {
        transform:'translateY(100%)'
      })
    }
  },[finishRidePanel])


  return (
    <div className='h-screen relative'>

      
      <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
        <img className='w-16' src='https://www.medianama.com/wp-content/uploads/2018/06/Screenshot_20180619-112715.png' alt='' />

        <Link to='/captain-home' className='h-10 w-10 bg-white flex items-center justify-center rounded-full '>
            <i className='text-lg font-medium  ri-logout-box-r-line'></i>
        </Link>
      </div>
        

        <div className='h-4/5'>
            {/* image for temporary use  */}
          <img 
            className='h-full w-full object-cover' 
            src='https://financialpanther.com/wp-content/uploads/Screen-Shot-2023-01-19-at-1.44.02-PM.png' 
            alt='background' 
          />
        </div>

        <div className='h-1/5 p-6 flex relative bg-yellow-400 items-center justify-between pt-10'
        onClick={()=>{
          setFinishRidePanel(true)
        }}>
            <h5 className='p-1 text-center w-[95%] absolute top-0 '
            ><i className='text-3xl text-gray-800 ri-arrow-up-wide-line'></i></h5>
            <h4 className='text-xl font-semibold'>4 Km away</h4>
            <button className=" bg-green-600 text-white font-semibold p-3 px-10 rounded-lg">Complete Ride</button>
        </div>

        <div ref={finishRidePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full  bg-white px-3 py-10 pt-12'>
          <FinishRide setFinishRidePanel={setFinishRidePanel}  />
        </div>

    </div>
  )
}

export default CaptainRiding