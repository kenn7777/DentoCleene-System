import React from 'react'
import Header from './Header'
import ViewImage from '@/app/dashboard/patients/_components/ViewImage'
import PatientTransaction from './PatientTransaction'





function PatientInformation() {




  return (
    <div>
      <div>
      </div>
     

     <div className=''> 
        <Header/>
     <div className='p-10'>



      <div className='flex items-center justify-center'>
      <h2 className='font-bold text-4xl'>Jin Young</h2>
      </div>


      <div className='flex gap-5 my-5 py-5 border rounded-lg shadow-sm  justify-between'>
            <div className="flex items-center gap-2">
            <h2 className='text-1xl ml-4'>View X-Ray</h2>
            <ViewImage/>
            </div> 
      </div>

      <PatientTransaction/>





       </div> 
      </div>
    </div>
  )
}

export default PatientInformation
