
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
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';




function PatientListTable({patientList}) {

 

  return (
    <div className="mt-4">
      <Table>

  <TableCaption>A list of your Patients.</TableCaption>

  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">ID</TableHead>
      <TableHead>Name</TableHead>
      <TableHead>Contact Number</TableHead>
      <TableHead>Address</TableHead>
      <TableHead>Email</TableHead>
      <TableHead>Braces</TableHead>
      <TableHead>Date</TableHead>
      <TableHead>Action</TableHead>
    </TableRow>
  </TableHeader>


  <TableBody>
    <TableRow>
    <TableCell className="font-medium">1</TableCell>
    <TableCell>Jin Young</TableCell>
      <TableCell>09374673234</TableCell>
      <TableCell>Visayan</TableCell>
      <TableCell>jinyoung1@gmail.com</TableCell>
      <TableCell>A</TableCell>
      <TableCell>Oct 3 2023</TableCell>
      <TableCell className="flex items-center gap-2">
      <ViewInfo/> 
      <EditButton/>
      <DeleteButton/>
      </TableCell>
    </TableRow>
  </TableBody>

  <TableBody>
    <TableRow>
    <TableCell className="font-medium">2</TableCell>
    <TableCell>Ja Hyun</TableCell>
      <TableCell>09374673234</TableCell>
      <TableCell>Magugpo</TableCell>
      <TableCell>jahyun2@gmail.com</TableCell>
      <TableCell>A</TableCell>
      <TableCell>Oct 3 2023</TableCell>
      <TableCell className="flex items-center gap-2"> 
        <Button className="bg-black dark:bg-white hover:bg-[#CDDF50] hover:text-black"><View className='h-4 w-4'/></Button>
        <Button className="bg-black dark:bg-white hover:bg-[#CDDF50] hover:text-black"><Pencil className='h-4 w-4'/></Button>
        <Button className="bg-black dark:bg-white hover:bg-[#CDDF50] hover:text-black"><Trash className='h-4 w-4'/></Button>  
      </TableCell>
    </TableRow>
  </TableBody>

  <TableBody>
    <TableRow>
    <TableCell className="font-medium">3</TableCell>
    <TableCell>Lee Jin</TableCell>
      <TableCell>09374673234</TableCell>
      <TableCell>Suaybaguio</TableCell>
      <TableCell>leejin3@gmail.com</TableCell>
      <TableCell>A</TableCell>
      <TableCell>Oct 3 2023</TableCell>
      <TableCell className="flex items-center gap-2"> 
      <Button className="bg-black dark:bg-white hover:bg-[#CDDF50] hover:text-black"><View className='h-4 w-4'/></Button>
      <Button className="bg-black dark:bg-white hover:bg-[#CDDF50] hover:text-black"><Pencil className='h-4 w-4'/></Button>
      <Button className="bg-black dark:bg-white hover:bg-[#CDDF50] hover:text-black"><Trash className='h-4 w-4'/></Button> 
      </TableCell>
    </TableRow>
  </TableBody>

  <TableBody>
    <TableRow>
    <TableCell className="font-medium">4</TableCell>
    <TableCell>Rein Julia</TableCell>
      <TableCell>09374673234</TableCell>
      <TableCell>San Miguel</TableCell>
      <TableCell>reinjulia4@gmail.com</TableCell>
      <TableCell>A</TableCell>
      <TableCell>Oct 3 2023</TableCell>
      <TableCell className="flex items-center gap-2"> 
      <Button className="bg-black dark:bg-white hover:bg-[#CDDF50] hover:text-black"><View className='h-4 w-4'/></Button>
      <Button className="bg-black dark:bg-white hover:bg-[#CDDF50] hover:text-black"><Pencil className='h-4 w-4'/></Button>
      <Button className="bg-black dark:bg-white hover:bg-[#CDDF50] hover:text-black"><Trash className='h-4 w-4'/></Button> 
      </TableCell>
    </TableRow>
  </TableBody>

  <TableBody>
    <TableRow>
    <TableCell className="font-medium">5</TableCell>
    <TableCell>Riri Hae</TableCell>
      <TableCell>09374673234</TableCell>
      <TableCell>Mankilam</TableCell>
      <TableCell>ririhae5@gmail.com</TableCell>
      <TableCell>A</TableCell>
      <TableCell>Oct 3 2023</TableCell>
      <TableCell className="flex items-center gap-2">  
      <Button className="bg-black dark:bg-white hover:bg-[#CDDF50] hover:text-black"><View className='h-4 w-4'/></Button>
      <Button className="bg-black dark:bg-white hover:bg-[#CDDF50] hover:text-black"><Pencil className='h-4 w-4'/></Button>
      <Button className="bg-black dark:bg-white hover:bg-[#CDDF50] hover:text-black"><Trash className='h-4 w-4'/></Button>  
      </TableCell>
    </TableRow>
  </TableBody>

  <TableBody>
    <TableRow>
    <TableCell className="font-medium">6</TableCell>
    <TableCell>Kai Jey</TableCell>
      <TableCell>09374673234</TableCell>
      <TableCell>Pagsabangan</TableCell>
      <TableCell>kaijey6@gmail.com</TableCell>
      <TableCell>A</TableCell>
      <TableCell>Oct 3 2023</TableCell>
      <TableCell className="flex items-center gap-2"> 
      <Button className="bg-black dark:bg-white hover:bg-[#CDDF50] hover:text-black"><View className='h-4 w-4'/></Button>
      <Button className="bg-black dark:bg-white hover:bg-[#CDDF50] hover:text-black"><Pencil className='h-4 w-4'/></Button>
      <Button className="bg-black dark:bg-white hover:bg-[#CDDF50] hover:text-black"><Trash className='h-4 w-4'/></Button> 
      </TableCell>

     
    </TableRow>
  </TableBody>

  <TableBody>
    <TableRow>
      <TableCell className="font-medium">7</TableCell>
      <TableCell>Eun Ja</TableCell>
      <TableCell>09374673234</TableCell>
      <TableCell>La Filipina</TableCell>
      <TableCell>eunja74@gmail.com</TableCell>
      <TableCell>A</TableCell>
      <TableCell>Oct 3 2023</TableCell>
      <TableCell className="flex items-center gap-2"> 
      <Button className="bg-black dark:bg-white hover:bg-[#CDDF50] hover:text-black"><View className='h-4 w-4'/></Button>
      <Button className="bg-black dark:bg-white hover:bg-[#CDDF50] hover:text-black"><Pencil className='h-4 w-4'/></Button>
      <Button className="bg-black dark:bg-white hover:bg-[#CDDF50] hover:text-black"><Trash className='h-4 w-4'/></Button> 
      </TableCell>

    </TableRow>
  </TableBody>


  <TableBody>
    <TableRow>
      <TableCell className="font-medium">7</TableCell>
      <TableCell>Park Lee</TableCell>
      <TableCell>09374673234</TableCell>
      <TableCell>La Filipina</TableCell>
      <TableCell>eunja74@gmail.com</TableCell>
      <TableCell>N/A</TableCell>
      <TableCell>Oct 3 2023</TableCell>
      <TableCell className="flex items-center gap-2"> 
      <Button className="bg-black dark:bg-white hover:bg-[#CDDF50] hover:text-black"><View className='h-4 w-4'/></Button>
      <Button className="bg-black dark:bg-white hover:bg-[#CDDF50] hover:text-black"><Pencil className='h-4 w-4'/></Button>
      <Button className="bg-black dark:bg-white hover:bg-[#CDDF50] hover:text-black"><Trash className='h-4 w-4'/></Button> 
      </TableCell>

    </TableRow>
  </TableBody>

  
  


</Table>


    
      
    </div>
  )
}

export default PatientListTable
