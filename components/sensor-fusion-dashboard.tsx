"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Camera, Radar, Activity } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Mock sensor data
const generateSensorData = () => {
  return Array.from({ length: 50 }, (_, i) => ({
    time: i,
    vision: 0.75 + Math.random() * 0.2,
    lidar: 0.8 + Math.random() * 0.15,
    fused: 0.85 + Math.random() * 0.12,
  }))
}

const sensorData = generateSensorData()

const chartConfig = {
  vision: {
    label: "Vision",
    color: "hsl(var(--chart-1))",
  },
  lidar: {
    label: "Lidar",
    color: "hsl(var(--chart-2))",
  },
  fused: {
    label: "Fused",
    color: "hsl(var(--chart-3))",
  },
}

export function SensorFusionDashboard() {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-foreground">Sensor Fusion Module</CardTitle>
            <CardDescription className="text-muted-foreground">Multimodal sensing integration</CardDescription>
          </div>
          <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
            <Activity className="h-3 w-3 mr-1" />
            Active
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50 border border-border">
            <Camera className="h-5 w-5 text-chart-1" />
            <div>
              <p className="text-xs text-muted-foreground">Vision Input</p>
              <p className="text-lg font-semibold text-foreground font-mono">92.4%</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50 border border-border">
            <Radar className="h-5 w-5 text-chart-2" />
            <div>
              <p className="text-xs text-muted-foreground">Lidar Input</p>
              <p className="text-lg font-semibold text-foreground font-mono">88.7%</p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-foreground">Sensor Confidence</h3>
            <div className="flex gap-4 text-xs">
              <div className="flex items-center gap-1.5">
                <div className="h-2 w-2 rounded-full bg-chart-1" />
                <span className="text-muted-foreground">Vision</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="h-2 w-2 rounded-full bg-chart-2" />
                <span className="text-muted-foreground">Lidar</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="h-2 w-2 rounded-full bg-chart-3" />
                <span className="text-muted-foreground">Fused</span>
              </div>
            </div>
          </div>
          <ChartContainer config={chartConfig} className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={sensorData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" fontSize={10} tickLine={false} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={10} tickLine={false} domain={[0.5, 1]} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line type="monotone" dataKey="vision" stroke="var(--color-vision)" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="lidar" stroke="var(--color-lidar)" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="fused" stroke="var(--color-fused)" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>

        <div className="grid grid-cols-3 gap-3 pt-2 border-t border-border">
          <div>
            <p className="text-xs text-muted-foreground">Collision Rate</p>
            <p className="text-sm font-semibold text-foreground font-mono">-40%</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Latency</p>
            <p className="text-sm font-semibold text-foreground font-mono">12ms</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Fusion Quality</p>
            <p className="text-sm font-semibold text-foreground font-mono">94.2%</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
