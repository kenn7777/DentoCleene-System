import React from 'react'
import { Input } from '@/components/ui/input'
import { Label } from "@/components/ui/label"



function UploadImage() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5 sm:mr-17">
    <Input id="picture" type="file" />
  </div>
  )
}

export default UploadImage
