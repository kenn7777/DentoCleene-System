"use client"

import React from 'react';
import PatientInfo from '../_components/PatientInfo';
import ViewImage from '../_components/ViewImage';
import UploadImage from '../_components/UploadImage';
import AddNewDetails from './_components/AddNewDetails';


function page() {


   return(
    <div className='p-10'>

      <div className='flex items-center justify-center'>
      <h2 className='font-bold text-4xl'>Jin Young</h2>
      </div>




      <div className='flex gap-5 my-5 py-5 border rounded-lg shadow-sm  justify-between'>

       
            <div className="flex items-center gap-2">
              <ViewImage/>
              <UploadImage/>
            </div>
            <div className="mr-4">
            <AddNewDetails/>
            </div>
  
      </div>







      <PatientInfo/>


       </div> 



   )  

   
}

export default page
