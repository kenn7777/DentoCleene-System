"use client"
import * as React from "react"
import { Label, Pie, PieChart, Sector } from "recharts"


import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


import {
  ChartConfig,
  ChartContainer,
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"


import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"



export const description = "An interactive pie chart"



const patientData = [

  { month: "january", desktop: 17, fill: "var(--color-january)" },
  { month: "february", desktop: 5, fill: "var(--color-february)" },
  { month: "march", desktop: 14, fill: "var(--color-march)" },
  { month: "april", desktop: 12, fill: "var(--color-april)" },
  { month: "june", desktop: 14, fill: "var(--color-february)" },
  { month: "july", desktop: 26, fill: "var(--color-march)" },
  { month: "august", desktop: 12, fill: "var(--color-april)" },
  { month: "september", desktop: 29, fill: "var(--color-february)" },
  { month: "october", desktop: 87, fill: "var(--color-march)" },
  { month: "november", desktop: 29, fill: "var(--color-april)" },
  { month: "december", desktop: 9, fill: "var(--color-january)" },
  
]


const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  desktop: {
    label: "Desktop",
  },
  mobile: {
    label: "Mobile",
  },
  january: {
    label: "January",
    color: "#CDDF50",
  },
  february: {
    label: "February",
    color: "#ABA730",
  },
  march: {
    label: "March",
    color: "#ABA730",
  },
  april: {
    label: "April",
    color: "#667C30",
  },
  may: {
    label: "May",
    color: "91C94C",
  },
  june: {
    label: "June",
    color: "8FD33D",
  },
  july: {
    label: "July",
    color: "8FD33D",
  },
  august: {
    label: "August",
    color: "91C94C",
  },
  september: {
    label: "September",
    color: "8FD33D",
  },
  october: {
    label: "October",
    color: "8FD33D",
  },
  november: {
    label: "November",
    color: "91C94C",
  },
  december: {
    label: "December",
    color: "8FD33D",
  },
}








function PieCharts() {


  const id = "pie-interactive"
  const [activeMonth, setActiveMonth] = React.useState(patientData[0].month)
  const activeIndex = React.useMemo(
    () => patientData.findIndex((item) => item.month === activeMonth),
    [activeMonth]
  )
  const months = React.useMemo(() => patientData.map((item) => item.month), [])



  return (
    <Card data-chart={id} className="min-h-[370px] w-full shadow-lg">
      <ChartStyle id={id} config={chartConfig} />
      <CardHeader className="flex-row items-start space-y-0 pb-0">
        <div className="grid gap-1">
          <CardTitle>Monthly New Patients</CardTitle>
          <CardDescription>January - December 2024</CardDescription>
        </div>
        <Select value={activeMonth} onValueChange={setActiveMonth} className="bg-black">
          <SelectTrigger
            className="ml-auto h-7 w-[130px] rounded-lg pl-2.5"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Select month" />
          </SelectTrigger>
          <SelectContent align="end" className="rounded-xl">
  {months.map((key) => {
    const config = chartConfig[key];
    if (!config) {
      return null;
    }
    return (
      <SelectItem key={key} value={key} className="rounded-lg [&_span]:flex">
        <div className="flex items-center gap-2 text-xs">
          <span
            className="flex h-3 w-3 shrink-0 rounded-sm"
            style={{
              backgroundColor: `var(--color-${key})`,
            }}
          />
          {config.label}
        </div>
      </SelectItem>
    );
  })}
</SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="flex flex-1 justify-center pb-0">
        <ChartContainer
          id={id}
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[300px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
           <Pie
  data={patientData}
  dataKey="desktop"
  nameKey="month"
  innerRadius={60}
  strokeWidth={5}
  activeIndex={activeIndex}
  activeShape={({ outerRadius = 0, ...props }) => (
    <g>
      <Sector {...props} outerRadius={outerRadius + 10} />
      <Sector
        {...props}
        outerRadius={outerRadius + 25}
        innerRadius={outerRadius + 12}
      />
    </g>
  )}
>
  <Label
    content={({ viewBox }) => {
      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
        return (
          <text
            x={viewBox.cx}
            y={viewBox.cy}
            textAnchor="middle"
            dominantBaseline="middle"
          >
            <tspan
              x={viewBox.cx}
              y={viewBox.cy}
              className="fill-foreground text-3xl font-bold "
            >
              {patientData[activeIndex].desktop.toLocaleString()}
            </tspan>
            <tspan
              x={viewBox.cx}
              y={(viewBox.cy || 0) + 24}
              className="fill-muted-foreground"
            >
              New Patients
            </tspan>
          </text>
        );
      }
    }}
  />
</Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default PieCharts
