"use client"
import React from 'react'
import ViewImage from '@/app/dashboard/patients/_components/ViewImage'
import PatientTransaction from './_components/PatientTransaction'

function PatientBoard() {







  
  return (
  

<div>
      <div>
      </div>
     

     <div className=''> 
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

export default PatientBoard
