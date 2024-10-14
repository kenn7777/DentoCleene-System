import React from 'react'
import Lightbox from "yet-another-react-lightbox";
import { View } from 'lucide-react';
import { Button } from '@/components/ui/button'
import  {useState} from 'react'
import "yet-another-react-lightbox/styles.css";




const image = [
    {
        src: 'https://eastportdentalaz.com/wp-content/uploads/2022/02/dental-x-ray-mesa-az.jpeg',
    
    },
    {
      src: 'https://o.quizlet.com/71J.LJVQXsQCSA6d2-1XHA.jpg'
  
    }



    
]


function ViewImage() {

    const [open,setOpen]=useState(false); 



  return (
    <div>
    <Button onClick={()=> setOpen(true)} className="ml-4 bg-black dark:bg-white hover:bg-[#CDDF50] hover:text-black"><View className='h-4 w-4'/></Button>
    <Lightbox 
    open={open}
    close={() => setOpen(false)}
    slides={image}
    />
    </div>
  )
}

export default ViewImage
