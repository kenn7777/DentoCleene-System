"use client"
import React from 'react'
import Information from './_components/Information'



   function layout({children}) {

  return (
    <div>
         <div className=''> 
           <Information/>
          {children}
         </div>
      </div>
  )


 // return <PatientInformation/>;

 
  

}

export default layout
