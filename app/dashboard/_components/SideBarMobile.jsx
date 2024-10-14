"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetFooter,
    SheetClose
  } from "@/components/ui/sheet"
import SideBarDesktop from './SideBarDesktop'
import { Hand, LayoutIcon, Settings, User, User2Icon, UserCheck, UserCheck2, Menu } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";


import { useMediaQuery } from "@uidotdev/usehooks";


function SideBarMobile() {


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

   
const SHEET_SIDE = ["left"];


const isMobile = useMediaQuery('(min-width: 320px)')

  return (
    <div className='h-screen items-center bg-black'>
       
       <div className="ml-8">

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
       <Button className="bg-black  text-slate-500 text-base hover:bg-lime-300 hover:text-black rounded-lg"><User className='h-7 w-7 mr-4'/>Sign Out</Button>
      </LogoutLink>
       </div>

    </div>
  )
}

export default SideBarMobile
