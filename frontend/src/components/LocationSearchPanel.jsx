import React from 'react'

const LocationSearchPanel = ({ setPanelOpen, setVehiclePanel }) => {
  // sample array for locations
  const locations = [
    "24B, Near Kappor's cafe, Shree ram mandir, Bhopal",
    "22B, Near Kappor's cafe, Shree ram mandir, Bhopal",
    "12B, Near Kappor's cafe, Shree ram mandir, Bhopal",
    "10B, Near Kappor's cafe, Shree ram mandir, Bhopal",
  ]

  return (
    <div className='flex-col top-10'>
      {/* this is just a sample data */}
      {
        locations.map((elem, idx) => (
          <div 
            key={idx}
            onClick={() => {
              setVehiclePanel(true)   // show vehicles panel
              setPanelOpen(false)     // close location search
            }}
            className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start '
          >
            <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'>
              <i className='ri-map-pin-fill text-xl'></i>
            </h2>
            <h4 className='font-medium'>{elem}</h4>
          </div>
        ))
      }
    </div>
  )
}

export default LocationSearchPanel
