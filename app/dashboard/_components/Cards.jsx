import React from 'react'
import { Pencil, Trash, TrendingDown, TrendingUp, User } from 'lucide-react'
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
function Cards() {
  return (

      <div className='m-4 grid gap-4 sm:grid-cols-3'>
      
        <Card className="min-h-[100px] bg-[#101010]">
        <CardHeader>
        <div className='flex p-4'>
        <User className='h-14 w-14 text-lime-300'/>
        <div className='ml-4'>
        <CardTitle className="text-white">Total Patients</CardTitle>
        <h2 className='text-lg text-slate-500'>174</h2>
        </div>  
        </div>
        </CardHeader>
        </Card>

        <Card className="min-h-[100px] bg-[#101010]">
        <CardHeader>
        <div className='flex p-4'>
        <TrendingUp className='h-12 w-12 text-lime-300'/>
        <div className='ml-4'>
        <CardTitle className="text-white mr-4">Present Percentage</CardTitle>
        <h2 className='text-lg text-slate-500'>17.4%</h2>
        </div>  
        </div>
        </CardHeader>  
        </Card>

        <Card className="min-h-[100px] bg-[#101010]">
        <CardHeader>
        <div className='flex p-4'>
        <TrendingDown className='h-12 w-12 text-lime-300'/>
        <div className='ml-4'>
        <CardTitle className="text-white">Absent    Percentage</CardTitle>
        <h2 className='text-lg text-slate-500'>8.4%</h2>
        </div>  
        </div>
        </CardHeader>  
        </Card>

    </div>
   

  )
}

export default Cards
