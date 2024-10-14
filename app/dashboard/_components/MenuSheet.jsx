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
import SideNav from './SideBarDesktop'
import { useMediaQuery } from "@uidotdev/usehooks";
import SideBarMobile from './SideBarMobile'
import { MenuIcon } from 'lucide-react'






const SHEET_SIDE = ["left"];


function MenuSheet() {
 
  return (
    <div>
        <div className="grid grid-cols-2 gap-2">
      {SHEET_SIDE.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button className="bg-[#101010] text-white hover:bg-[#CDDF50] hover:text-black"><MenuIcon className='h-4 w-4'/></Button>
          </SheetTrigger>
          <SheetContent side={side} className="w-[200px] sm:w-[540px] bg-black dark:bg-white">
           <SideBarMobile/>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  
  
    </div>
  )
}

export default MenuSheet
