"use client"
import React from 'react'
import { View } from 'lucide-react'
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/router';

import Link from 'next/link'


const ViewPatientInfo=[
    {
      path:'/dashboard/patients/info'
    },
  ]




function ViewInfo() {

  return (
      
    <Link href={ViewPatientInfo[0].path}>
    <Button className="bg-black dark:bg-white hover:bg-[#CDDF50] hover:text-black">
      <View className='h-4 w-4' />
    </Button>
  </Link>
 


      
     )       
  
}

export default ViewInfo
