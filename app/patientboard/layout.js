"use client"
import React from 'react'
import Header from './_components/Header'



   function layout({children}) {

  return (
    <div>
         <div className=''> 
          <Header/>
          {children}
         </div>
      </div>
  )


 // return <PatientInformation/>;

 
  

}

export default layout
