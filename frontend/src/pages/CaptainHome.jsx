import React from 'react'
import { Link } from 'react-router-dom'

const CaptainHome = () => {
  return (
    <div className='h-screen'>
      <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
        <img className='w-16' src='https://www.medianama.com/wp-content/uploads/2018/06/Screenshot_20180619-112715.png' alt='' />

        <Link to='/home' className='h-10 w-10 bg-white flex items-center justify-center rounded-full '>
            <i className='text-lg font-medium  ri-logout-box-r-line'></i>
        </Link>
      </div>
        

        <div className='h-3/5'>
            {/* image for temporary use  */}
          <img 
            className='h-full w-full object-cover' 
            src='https://financialpanther.com/wp-content/uploads/Screen-Shot-2023-01-19-at-1.44.02-PM.png' 
            alt='background' 
          />
        </div>
        <div className='h-2/5 p-6'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center justify-start gap-3' >
              <img className='h-10 w-10 rounded-full object-cover ' src='https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=2000' alt='user' />
              <h4 className='text-lg font-medium'>Abhishek Sethi</h4>
            </div>
            <div>
              <h4 className='text-xl font-semibold'>$295.2</h4>
              <p className='text-sm text-gray-600'>Earned</p>
            </div>
          </div>
          <div className='flex p-3 mt-8 bg-gray-100 rounded-xl justify-center gap-5 items-start'>
            <div className='text-center '>
              <i className='text-3xl mb-2 font-thin ri-timer-2-line'></i>
              <h5 className='text-lg font-medium'>10.2</h5>
              <p className='text-sm text-gray-600'>Hours Online</p>
            </div>
            <div className='text-center '>
              <i className='text-3xl mb-2 font-thin ri-speed-up-line'></i>
              <h5 className='text-lg font-medium'>10.2</h5>
              <p className='text-sm text-gray-600'>Hours Online</p>
            </div>
            <div className='text-center '>
              <i className='text-3xl mb-2 font-thin ri-booklet-line'></i>
              <h5 className='text-lg font-medium'>10.2</h5>
              <p className='text-sm text-gray-600'>Hours Online</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CaptainHome