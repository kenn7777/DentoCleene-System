
import React from 'react'
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { Button } from '@/components/ui/button';
import { Checkbox } from "@/components/ui/checkbox"
import { CalendarDays } from 'lucide-react'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"



function AdjusmentListTable({patientList}) {

 

  return (
    <div>
      <Table>

  <TableCaption>A list of your Patients.</TableCaption>

  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">ID</TableHead>
      <TableHead>Name</TableHead>
      <TableHead>1</TableHead>
      <TableHead>2</TableHead>
      <TableHead>3</TableHead>
      <TableHead>4</TableHead>
      <TableHead>5</TableHead>
      <TableHead>6</TableHead>
      <TableHead>7</TableHead>
      <TableHead>8</TableHead>
      <TableHead>9</TableHead>
      <TableHead>10</TableHead>
      <TableHead>11</TableHead>
      <TableHead>12</TableHead>
      <TableHead>13</TableHead>
      <TableHead>14</TableHead>
      <TableHead>15</TableHead>
      <TableHead>16</TableHead>
      <TableHead>17</TableHead>
      <TableHead>18</TableHead>
      <TableHead>19</TableHead>
      <TableHead>20</TableHead>
      <TableHead>21</TableHead>
      <TableHead>22</TableHead>
      <TableHead>23</TableHead>
      <TableHead>24</TableHead>
      <TableHead>25</TableHead>
      <TableHead>26</TableHead>
      <TableHead>27</TableHead>
      <TableHead>28</TableHead>
      <TableHead>29</TableHead>
      <TableHead>30</TableHead>
      <TableHead>31</TableHead>
    </TableRow>
  </TableHeader>


  <TableBody>

    <TableRow>
      <TableCell className="font-medium">1</TableCell>
      <TableCell>Jin Young</TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      
    </TableRow>
  </TableBody>

  <TableBody>

<TableRow>
  <TableCell className="font-medium">2</TableCell>
  <TableCell>Ja Hyun</TableCell>
  <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
</TableRow>
</TableBody>

<TableBody>

<TableRow>
  <TableCell className="font-medium">3</TableCell>
  <TableCell>Lee Jin</TableCell>
  <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
</TableRow>
</TableBody>

<TableBody>

<TableRow>
  <TableCell className="font-medium">4</TableCell>
  <TableCell>Rein Julia</TableCell>
  <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
</TableRow>
</TableBody>


<TableBody>

<TableRow>
  <TableCell className="font-medium">5</TableCell>
  <TableCell>Riri Hae</TableCell>
  <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
</TableRow>
</TableBody>


<TableBody>

<TableRow>
  <TableCell className="font-medium">6</TableCell>
  <TableCell>Kai Jey</TableCell>
  <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
</TableRow>
</TableBody>



<TableBody>

<TableRow>
  <TableCell className="font-medium">7</TableCell>
  <TableCell>Eun Ja</TableCell>
  <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
      <TableCell> <Checkbox className="border-black data-[state=checked]:bg-black"/></TableCell>
</TableRow>
</TableBody>
  


</Table>


    
      
    </div>
  )
}

export default AdjusmentListTable
