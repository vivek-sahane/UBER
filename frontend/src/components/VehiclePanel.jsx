import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
        <h5 className='p-3 text-center w-[93%] absolute top-0 '
          onClick={()=> {
            props.setVehiclePanel(false)
          }}
          ><i className='text-3xl text-gray-200 ri-arrow-down-wide-line'></i></h5>

        <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>

        {/** Div:1 for location */}
        <div 
        onClick={()=>{
          props.setConfirmRidePanel(true)
        }}
        className='flex border-2 active:border-black mb-2 rounded-xl p-3 w-full items-center justify-between '>
          <img className='h-12'  src='https://tse2.mm.bing.net/th/id/OIP.jD4muZBvbCYzo-cmaSVl3QHaFj?pid=Api&P=0&h=180' />
          
          <div className='ml-2 w-1/2'>
            <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-3-fill"></i>4</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
          </div>
          <h2 className='text-xl font-semibold'>193.20 $</h2>
        </div>

        <div 
        onClick={()=>{
          props.setConfirmRidePanel(true)
        }}
        className='flex border-2 active:border-black mb-2 rounded-xl p-3 w-full items-center justify-between '>
          <img className='h-12'  src='https://tse2.mm.bing.net/th/id/OIP.jD4muZBvbCYzo-cmaSVl3QHaFj?pid=Api&P=0&h=180' />
          
          <div className='ml-2 w-1/2'>
            <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-3-fill"></i>4</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
          </div>
          <h2 className='text-xl font-semibold'>193.20 $</h2>
        </div>

        <div 
        onClick={()=>{
          props.setConfirmRidePanel(true)
        }}
        className='flex border-2 active:border-black mb-2 rounded-xl p-3 w-full items-center justify-between '>
          <img className='h-12'  src='https://tse3.mm.bing.net/th/id/OIP.sUxREtT1w4CJlmY03I0ZBgHaEk?pid=Api&P=0&h=180https://tse3.mm.bing.net/th/id/OIP.sUxREtT1w4CJlmY03I0ZBgHaEk?pid=Api&P=0&h=180' />
          
          <div className='ml-2 w-1/2'>
            <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-3-fill"></i>4</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
          </div>
          <h2 className='text-xl font-semibold'>193.20 $</h2>
        </div>
    </div>
  )
}

export default VehiclePanel