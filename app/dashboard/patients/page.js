"use client"
import React from 'react'
import AddNewPatient from './_components/AddNewPatient'
import PatientListTable from './_components/PatientListTable'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'


function Student() {

  return (
    <div className='p-10'>
        <h2 className='font-bold text-2xl'>Patients</h2>

           <div className='flex gap-5 my-5 py-5 border rounded-lg shadow-sm justify-between'>
             <div className='flex gap-2 items-center'>
                <Input className="ml-4" placeholder="Search Patient"/>
                <Button className="bg-black dark:bg-white hover:bg-[#CDDF50] hover:text-black">Search</Button>
            </div>
            <div className="mr-4">
            <AddNewPatient/>
            </div>
           </div>

           <PatientListTable/>




    </div>
  )

  
}

export default Student 
