"use client"
import React, { useState } from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { Button } from '@/components/ui/button'
import { CalendarDays } from 'lucide-react'
import {addMonths} from 'date-fns';

import moment from 'moment/moment';



function MonthSelection() {
   
    const today = new Date();
    const nextMonths = addMonths(new Date(),0);
    const [month,setMonth] =useState(nextMonths);

  return (
    <div>
      <Popover>
         <PopoverTrigger>
            <Button  variant="outline" className="flex gap-2 items-center text-slate-500">
              <CalendarDays className='h-5 w-5'/>
                
                {moment(month).format('MMM yyyy')}
                
            </Button>
         </PopoverTrigger>
  <PopoverContent>
       DATE
  </PopoverContent>
</Popover>

    </div>
  )
}

export default MonthSelection
