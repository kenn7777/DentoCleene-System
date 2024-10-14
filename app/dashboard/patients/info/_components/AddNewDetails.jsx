"use client"
import { Button } from '@/components/ui/button'
import React, {useState} from 'react'
import { Input } from "@/components/ui/input"
import { useForm, SubmitHandler } from "react-hook-form"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  

function AddNewDetails() {
     const [open,setOpen]=useState(false); 
     const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
  
    const onSubmit=(data) => {
        console.log("FormData",data);
    }


  return (
    <div>
      <Button onClick={()=> setOpen(true)} className="bg-black dark:bg-white hover:bg-[#CDDF50] hover:text-black" >Add Transaction</Button>
      <Dialog open={open}>
      <DialogContent>
        <DialogHeader>
        <DialogTitle>Add Transaction</DialogTitle>
        <DialogDescription>

             <form onSubmit={handleSubmit(onSubmit)}>
            
             <Select>
               <SelectTrigger className="w-full">
               <SelectValue placeholder="Transcation" />
               </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bi">Braces Installment</SelectItem>
                        <SelectItem value="a">Adjusment</SelectItem>
                        <SelectItem value="te">Tooth Extraction</SelectItem>
                        <SelectItem value="tf">Tooth Filling</SelectItem>
                      </SelectContent>
             </Select>

           
             <div className='py-2'> 
                <label>Payment</label>
                <Input className="mt-4" type='number' {...register('contact')}/>
             </div>
             <div className='py-2'> 
                <label>Date</label>
                <Input className="mt-4" {...register('address')}/>
             </div>
             <div className='flex gap-3 items-center justify-end my-5'>
                <Button onClick={()=>setOpen(false)} variant="ghost">Cancel</Button>
                <Button type="submit" className="bg-black dark:bg-white hover:bg-[#CDDF50] hover:text-black">Save</Button>
             </div>
            </form>





        </DialogDescription>
        </DialogHeader>
       </DialogContent>
     </Dialog>

    </div>
  )
}

export default AddNewDetails
