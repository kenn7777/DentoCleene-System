"use client"
import { Button } from '@/components/ui/button'
import React, {useState} from 'react'
import { Input } from "@/components/ui/input"
import { useForm, SubmitHandler } from "react-hook-form"
import { Edit } from 'lucide-react'




import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  

function EditButton() {
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
      <Button onClick={()=> setOpen(true)} className="bg-black dark:bg-white hover:bg-[#CDDF50] hover:text-black"><Edit className='h-4 w-4'/></Button>
      <Dialog open={open}>
      <DialogContent>
        <DialogHeader>
        <DialogTitle>Edit Patient</DialogTitle>
        <DialogDescription>

             <form onSubmit={handleSubmit(onSubmit)}>
             <div className='py-2'> 
                <label>Full Name</label>
                <Input className="mt-4" {...register('name',{required:true})}/>
             </div>

           
             <div className='py-2'> 
                <label>Contact Number</label>
                <Input className="mt-4" type='number' {...register('contact')}/>
             </div>
             <div className='py-2'> 
                <label>Address</label>
                <Input className="mt-4" {...register('address')}/>
             </div>
             <div className='py-2'> 
                <label>Email</label>
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

export default EditButton
