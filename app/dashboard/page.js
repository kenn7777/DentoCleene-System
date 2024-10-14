"use client"
import { useTheme } from 'next-themes';
import React, { useEffect } from 'react'
import MonthSelection from '../_components/MonthSelection';
import Cards from './_components/Cards';
import BarCharts from './_components/BarCharts';
import PieCharts from './_components/PieCharts';
import YearSelection from './_components/YearSelection';





function Dashboard() {
  
  const { setTheme } = useTheme()

   useEffect(()=>{
     
      setTheme('light');
   },[])





  return (
    
    <div className='p-10'>

      <div className='flex items-center justify-between '>
           <h2 className='font-bold text-2xl'>Dashboard</h2>    
         
      </div>
      <Cards/>
          <div className='flex items-center justify-between'>
          <h2 className=' font-bold text 4xl'>Monthly Tracking Adjusment</h2>
          <YearSelection/>
          </div>
        

          <div className='m-2 grid gap-24 sm:grid-cols-2'>
          <BarCharts/>
          <PieCharts/>
          </div>
       
    </div> 
       
       


       

  )
}

export default Dashboard
