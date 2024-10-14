"use client"
import { Button } from '@/components/ui/button'
import React, {useState} from 'react'
import { Input } from "@/components/ui/input"
import { useForm, SubmitHandler } from "react-hook-form"
import { Trash } from 'lucide-react'



import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  

function DeleteButton() {
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
      <Button onClick={()=> setOpen(true)} className="bg-black dark:bg-white hover:bg-[#CDDF50] hover:text-black" ><Trash className='h-4 w-4'/></Button>
      <Dialog open={open}>
      <DialogContent>
        <DialogHeader>
        <DialogTitle>Are you sure about deleting this patient?</DialogTitle>
        <DialogDescription>

             <form onSubmit={handleSubmit(onSubmit)}>
            
             <div className='flex gap-2 items-center justify-end my-2'>
                <Button onClick={()=>setOpen(false)} variant="ghost">Cancel</Button>
                <Button type="submit" className="bg-black dark:bg-white hover:bg-[#CDDF50] hover:text-black">Yes</Button>
             </div>
            </form>





        </DialogDescription>
        </DialogHeader>
       </DialogContent>
     </Dialog>

    </div>
  )
}

export default DeleteButton
