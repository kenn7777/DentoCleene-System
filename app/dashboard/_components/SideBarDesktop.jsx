"use client"
import React from 'react'
import Image from 'next/image'
import { Hand, LayoutIcon, User, View, UserCheck2} from 'lucide-react'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useMediaQuery } from "@uidotdev/usehooks";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";



function SideBarDesktop() {


  const {user} = useKindeBrowserClient();

   const menuList=[
    {
     id:1,
     name:'Dashboard',
     icon:LayoutIcon,
     path:'/dashboard'

    },
    {
      id:2,
      name:'Patients',
      icon:UserCheck2,
      path:'/dashboard/patients'
    },
    {
      id:3,
      name:'Adjustments',
      icon:Hand,
      path:'/dashboard/adjustments'
    },
   
    
   ]

   const SignOut=[
    {
      id:1,
      name:'Sign Out',
      icon:User,
      path:'/dashboard/signout'

    },
  ]




  const OverlayMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const openMenu = () => setIsOpen(true);
    const closeMenu = () => setIsOpen(false);

  }



  const isDesktop = useMediaQuery('(min-width: 768px)');




  if (isDesktop)
return (
    <div className='border shadow-md h-screen p-7 items-center bg-[#101010]'>
       
       <div className="ml-12">

       <Image src={'/Tooth.png'}
        width={70}
        height={50}
        alt='logo'
        />


       </div>
        

        <hr className='my-7 border-slate-500'/>

        {menuList.map((menu,index)=>(
          <Link href={menu.path}>
           <h2 className='flex items-center gap-3 text-md p-4
           text-slate-500
           hover:bg-lime-300
           hover:text-black
           cursor-pointer
           rounded-lg
           my-2 
           '>
              <menu.icon/>
              {menu.name}

           </h2>
           </Link>
        ))}    



       <div className="flex gap-2 items-center bottom-5 fixed p-2">
       <LogoutLink>
       <Button className="bg-[#101010]  text-slate-500 text-base hover:bg-lime-300 hover:text-black rounded-lg"><User className='h-7 w-7 mr-4'/>Sign Out</Button>
      </LogoutLink>
       </div>

    


    </div>
  )

}


export default SideBarDesktop
