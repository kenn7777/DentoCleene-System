"use client"
import React from 'react'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import Image from 'next/image';
import MenuSheet from './MenuSheet';
import { useMediaQuery } from "@uidotdev/usehooks";


function Header() {

  const {user} = useKindeBrowserClient();

  const isMobile = useMediaQuery('(min-width: 768px)');

  if(isMobile)
     return (
    <div className='flex p-4 shadow-sm border justify-between bg-[#101010]'>
       <div>

       </div>
       <div className="flex gap-2">

      <Image src={user?.picture} width={35} height={35} alt='user'className='rounded-full'/>

      <div>
        <h2 className='text-sm font-bold text-white'>{user?.given_name} {user?.family_name}</h2>
        <h2 className='text-xs text-slate-400'>{user?.email}</h2>   
      </div> 

      </div>
    </div>
  );







 return (
    <div className='p-4 shadow-sm border flex justify-between bg-[#101010]'>
      
      <MenuSheet/>

      <div className="flex gap-2 ">


      <Image src={user?.picture} width={35} height={35} alt='user'className='rounded-full'/>

      <div>

<h2 className='text-sm font-bold'>{user?.given_name} {user?.family_name}</h2>
<h2 className='text-xs text-slate-400'>{user?.email}</h2> 



</div> 


      </div>
    </div>
  );



}

export default Header
