"use client"
import React from 'react'
import Image from 'next/image'
import { Hand, LayoutIcon, Settings, User, User2Icon, UserCheck, UserCheck2, Menu } from 'lucide-react'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useMediaQuery } from "@uidotdev/usehooks";
import SideBarDesktop from './SideBarDesktop'
import MenuSheet from './MenuSheet'



function SideBar() {


  const isDesktop = useMediaQuery('(min-width: 768px)');

  if (isDesktop) return <SideBarDesktop/>;

  






}


export default SideBar
