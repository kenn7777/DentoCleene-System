"use client"
import React from 'react'
import SideBar from './_components/SideBar'
import Header from './_components/Header'
import PatientInformation from '../patientboard/_components/PatientInformation';



   function layout({children}) {
  

  //const { getPermission } = getKindeServerSession();

  //const hasPermission  = await getPermission('view:details');
  
  // const admin = 'admin';
 //  const patient = 'patient';


  //if(admin == 'admin')
  return (
    <div>
      <div className='w-64 fixed  md:block'>
        <SideBar/>
      </div>
      <div className='md:ml-64'> 
        <Header/>
        {children}
      </div>
    </div>
  )


  return <PatientInformation/>;

 
  

}

export default layout
