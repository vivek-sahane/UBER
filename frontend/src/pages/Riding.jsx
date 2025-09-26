import React from 'react'
import { Link} from 'react-router-dom'

const Riding = () => {
  return (
    <div className='h-screen'>

        <Link to='/home' className='fixed top-2 right-2 h-10 w-10 bg-white flex items-center justify-center rounded-full '>
            <i className='text-lg font-medium  ri-home-5-line'></i>
        </Link>

        <div className='h-1/2'>
            {/* image for temporary use  */}
          <img 
            className='h-full w-full object-cover' 
            src='https://financialpanther.com/wp-content/uploads/Screen-Shot-2023-01-19-at-1.44.02-PM.png' 
            alt='background' 
          />
        </div>
        <div className='h-1/2 p-4'>

            <div className='flex items-center justify-between'>
                <img className='h-12'src='https://tse2.mm.bing.net/th/id/OIP.jD4muZBvbCYzo-cmaSVl3QHaFj?pid=Api&P=0&h=180' alt='' />
                <div className='text-right'>
                    <h2 className='text-lg font-medium'>Sarthak</h2>
                    <h4 className='text-xl font-semibold -mt-1 -mb-1'>MH17 CR 9637</h4>
                    <p className='text-sm text-gray-600'>ShivShahi</p>
                </div>
                </div>
                
                <div className='flex gap-2 justify-between flex-col items-center'>
                    <div className='w-full mt-5 '>
                        {/** first location */}
                        <div className='flex items-center gap-5 p-3 border-b-2'>
                            <i className='text-lg ri-map-pin-user-fill'></i>
                            <div>
                                <h3 className='text-lg font-medium'>Vivek Sahane</h3>
                                <p className='text-sm -mt-1 text-gray-600 '>Kopargoan, Ahilyanagar</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-5 p-3 border-b-2'>
                            <i className='text-lg ri-map-pin-2-fill'></i>
                            <div>
                                <h3 className='text-lg font-medium'>562/11-A</h3>
                                <p className='text-sm -mt-1 text-gray-600 '>Kopargoan, Ahilyanagar</p>
                            </div>
                        </div> 

                        
                    </div>
                </div>

            <button className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg '>Make a Payment</button>
        </div>
    </div>
  )
}

export default Riding