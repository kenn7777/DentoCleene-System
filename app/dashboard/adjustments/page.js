"use client"
import MonthSelection from '@/app/_components/MonthSelection'
import { Button } from '@/components/ui/button'
import React from 'react'
import AdjusmentListTable from './_components/AdjustmentListTable'
import { Input } from '@/components/ui/input'

function Adjustments() {
  return (
    <div className='p-10'>

       <h2 className='font-bold text-2xl'>Adjustments</h2>

          <div className='flex gap-5 my-5 py-5 border rounded-lg shadow-sm justify-between'>
         
            <div className='flex gap-2 items-center'>
                <Input className="ml-4" placeholder="Search Patient"/>
                <Button className="bg-black dark:bg-white hover:bg-[#CDDF50] hover:text-black">Search</Button>
            </div>
            <div className='flex gap-2 items-center'>
               <MonthSelection/>
               <Button className="bg-black dark:bg-white hover:bg-[#CDDF50] hover:text-black mr-4">Select</Button>
            </div>
  
          
            </div>
     


          <AdjusmentListTable/>
    </div>
  )
}

export default Adjustments
