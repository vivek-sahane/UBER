import React from 'react'

const OngoingRide = () => {
  return (
    <div>
        <div className='rounded '>
            {/** profile photo + names div */}
            <div className='flex '>
                <div>
                    <img className='h-20 w-20 rounded-2xl' src='https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png' alt='user' />
                </div>
                <div className='flex-col  items-center justify-center mt-3'>
                    <h4 className=' text-gray-400 '>Pick up at</h4>
                    <h5 className='text-xl font-bold'>7958 Swift Village</h5>
                </div>

                
            </div>

            <hr className='text-gray-200' />
            
            {/** for 3 sections */}
            <div className='flex justify-evenly mt-5'>
                <div className='flex-col items-center justify-center'>
                    <h4 className='flex items-center justify-center text-gray-400'>EST</h4>
                    <h5 className='text-xl font-bold'>5 min</h5>
                </div>

                <div className='flex-col'>
                    <h4 className='flex items-center justify-center text-gray-400'>EST</h4>
                    <h5 className='text-xl font-bold'>2.2 km</h5>
                </div>

                <div className='flex-col'>
                    <h4 className='flex items-center justify-center text-gray-400'>EST</h4>
                    <h5 className='text-xl font-bold'>$25.00</h5>
                </div>
            </div>

            {/** div for drop off */}
            <div className='rounded-xl flex items-center justify-center mx-5 mt-6 bg-amber-300 px-7 py-3  text-xl font-bold w-[90%]'>
                DROP OFF
            </div>

            <hr className='text-gray-200 mt-7 ' />

            {/** div for below section */}
            <div>
                {/** div for arrow & text*/}
                <div className='flex items-center m-6'>
                    <i className="ri-arrow-up-line text-2xl text-black"></i>
                    <h5 className='mx-7 font-medium '>Head southwest on Madisot St</h5>
                </div>
                <div className='flex'>
                    <h3>18 miles</h3>
                    <hr className='text-gray-900' />
                </div>

            </div>
            
        </div>
    </div>
  )
}

export default OngoingRide