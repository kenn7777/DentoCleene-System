"use client"
import React from 'react'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import Image from 'next/image';
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import { Button } from '@/components/ui/button';
import { LogOutIcon } from 'lucide-react';



function Header() {

  const {user} = useKindeBrowserClient();

 

 return (
    <div className='p-4 shadow-sm border flex justify-between bg-[#101010]'>
      
      <LogoutLink>
       <Button className="bg-[#101010]  text-white text-base hover:bg-lime-300 hover:text-black rounded-lg"><LogOutIcon className='h-4 w-4'/></Button>
      </LogoutLink>

      <div className="flex gap-2 ">


      <Image src={user?.picture} width={35} height={35} alt='user'className='rounded-full'/>

      <div>

<h2 className='text-sm font-bold text-white'>{user?.given_name}{user?.family_name}</h2>

<h2 className='text-xs text-slate-400'>{user?.email}</h2>   



</div> 


      </div>
    </div>
  );



}

export default Header
