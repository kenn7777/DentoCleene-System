
import React from 'react'
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { Button } from '@/components/ui/button';
import { Pencil, Trash } from 'lucide-react'


import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"




function PatientTransaction({patientList}) {

 

  return (
    <div className="mt-4">
      <Table>

  <TableCaption>List of your Transaction</TableCaption>

  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">ID</TableHead>
      <TableHead>Transaction</TableHead>
      <TableHead>Payment</TableHead>
      <TableHead>Date</TableHead>
    </TableRow>
  </TableHeader>


  <TableBody>
    <TableRow>
    <TableCell className="font-medium">1</TableCell>
    <TableCell>Adjusment,Tooth Filling</TableCell>
      <TableCell>1400</TableCell>
      <TableCell>July 3 2023</TableCell>
      <TableCell className="flex items-center gap-2">
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
      </TableCell>

    </TableRow>
  </TableBody>

  
  


</Table>


    
      
    </div>
  )
}

export default PatientTransaction
