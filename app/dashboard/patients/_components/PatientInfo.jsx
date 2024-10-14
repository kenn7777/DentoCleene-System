
import React from 'react'
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { Button } from '@/components/ui/button';
import { Checkbox } from "@/components/ui/checkbox"
import { Pencil, Trash, View } from 'lucide-react'
import ViewInfo from '../info/_components/ViewInfo';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"




function PatientInfo({patientList}) {

 

  return (
    <div className="mt-4">
      <Table>

  <TableCaption>List of Patient Transaction</TableCaption>

  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">ID</TableHead>
      <TableHead>Transaction</TableHead>
      <TableHead>Payment</TableHead>
      <TableHead>Date</TableHead>
      <TableHead>Action</TableHead>
    </TableRow>
  </TableHeader>


  <TableBody>
    <TableRow>
    <TableCell className="font-medium">1</TableCell>
    <TableCell>Adjusment,Tooth Filling</TableCell>
      <TableCell>1400</TableCell>
      <TableCell>July 3 2023</TableCell>
      <TableCell className="flex items-center gap-2">
      <Button className="bg-black dark:bg-white hover:bg-[#CDDF50] hover:text-black"><Pencil className='h-4 w-4'/></Button>
      <Button className="bg-black dark:bg-white hover:bg-[#CDDF50] hover:text-black"><Trash className='h-4 w-4'/></Button> 
      </TableCell>
    </TableRow>
  </TableBody>

  <TableBody>
    <TableRow>
    <TableCell className="font-medium">2</TableCell>
    <TableCell>Adjusment,Tooth Extraction</TableCell>
    <TableCell>1400</TableCell>
    <TableCell>Aug 3 2023</TableCell>
      <TableCell className="flex items-center gap-2"> 
        <Button className="bg-black dark:bg-white hover:bg-[#CDDF50] hover:text-black"><Pencil className='h-4 w-4'/></Button>
        <Button className="bg-black dark:bg-white hover:bg-[#CDDF50] hover:text-black"><Trash className='h-4 w-4'/></Button>  
      </TableCell>
    </TableRow>
  </TableBody>

 

  <TableBody>
    <TableRow>
    <TableCell className="font-medium">3</TableCell>
    <TableCell>Adjusment,Tooth Filling</TableCell>
    <TableCell>1400</TableCell>
    <TableCell>Sept 3 2023</TableCell>
      <TableCell className="flex items-center gap-2"> 
      <Button className="bg-black dark:bg-white hover:bg-[#CDDF50] hover:text-black"><Pencil className='h-4 w-4'/></Button>
      <Button className="bg-black dark:bg-white hover:bg-[#CDDF50] hover:text-black"><Trash className='h-4 w-4'/></Button> 
      </TableCell>

     
    </TableRow>
  </TableBody>

  <TableBody>
    <TableRow>
      <TableCell className="font-medium">4</TableCell>
      <TableCell>Adjusment</TableCell>
      <TableCell>1400</TableCell>
      <TableCell>Oct 3 2023</TableCell>
      <TableCell className="flex items-center gap-2"> 
      <Button className="bg-black dark:bg-white hover:bg-[#CDDF50] hover:text-black"><Pencil className='h-4 w-4'/></Button>
      <Button className="bg-black dark:bg-white hover:bg-[#CDDF50] hover:text-black"><Trash className='h-4 w-4'/></Button> 
      </TableCell>

    </TableRow>
  </TableBody>

  
  


</Table>


    
      
    </div>
  )
}

export default PatientInfo
