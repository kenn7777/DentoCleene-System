
"use client"
import React from 'react' 

import { Monitor } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
 
import { ChartConfig, ChartContainer,  ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent} from "@/components/ui/chart"

const chartConfig = {
  present: {
    label: "Present",
    color: "#CDDF50",
  },
  absent: {
    label: "Absent",
    color: "#000000",
  },
}







const chartData = [
  { month: "January", present: 55, absent: 19 },
  { month: "February", present: 50, absent: 24 },
  { month: "March", present: 45, absent: 29 }, 
  { month: "April", present: 45, absent: 29 }, 
  { month: "May", present: 44, absent: 30 },
  { month: "June", present: 54, absent: 20 },
  { month: "July", present: 61, absent: 13 },
  { month: "August", present: 55, absent: 19 },
  { month: "September", present: 50, absent: 24 },
  { month: "October", present: 45, absent: 29 },
  { month: "November", present: 45, absent: 29 },
  { month: "December", present: 45, absent: 29 },
  
   
]



function BarCharts() { 
  return (
    <div>

<ChartContainer config={chartConfig} className="min-h-[370px] w-full shadow-lg">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
      dataKey="month"
      tickLine={false}
      tickMargin={10}
      axisLine={false}
      tickFormatter={(value) => value.slice(0, 3)}
    />
    <ChartTooltip content={<ChartTooltipContent />} />
    <ChartLegend content={<ChartLegendContent />} />

        <Bar dataKey="present" fill="var(--color-present)" radius={4} />
        <Bar dataKey="absent" fill="var(--color-absent)" radius={4} />
      </BarChart>
    </ChartContainer>
      
    </div>
  )
}

export default BarCharts
