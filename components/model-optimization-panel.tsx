"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Zap, Scissors, Gauge, CheckCircle2 } from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const optimizationData = [
  { name: "Original", size: 100, inference: 100 },
  { name: "Pruned", size: 72, inference: 68 },
  { name: "Quantized", size: 45, inference: 42 },
  { name: "Optimized", size: 35, inference: 35 },
]

const chartConfig = {
  size: {
    label: "Model Size",
    color: "hsl(var(--chart-1))",
  },
  inference: {
    label: "Inference Time",
    color: "hsl(var(--chart-2))",
  },
}

export function ModelOptimizationPanel() {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-foreground">Model Optimization</CardTitle>
            <CardDescription className="text-muted-foreground">Pruning and quantization pipeline</CardDescription>
          </div>
          <Badge variant="outline" className="bg-chart-3/10 text-chart-3 border-chart-3/20">
            <CheckCircle2 className="h-3 w-3 mr-1" />
            Complete
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50 border border-border">
            <Scissors className="h-5 w-5 text-chart-1" />
            <div>
              <p className="text-xs text-muted-foreground">Model Pruning</p>
              <p className="text-lg font-semibold text-foreground font-mono">-28%</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50 border border-border">
            <Gauge className="h-5 w-5 text-chart-2" />
            <div>
              <p className="text-xs text-muted-foreground">Quantization</p>
              <p className="text-lg font-semibold text-foreground font-mono">INT8</p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-foreground">Optimization Impact</h3>
            <div className="flex gap-4 text-xs">
              <div className="flex items-center gap-1.5">
                <div className="h-2 w-2 rounded-full bg-chart-1" />
                <span className="text-muted-foreground">Size</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="h-2 w-2 rounded-full bg-chart-2" />
                <span className="text-muted-foreground">Inference</span>
              </div>
            </div>
          </div>
          <ChartContainer config={chartConfig} className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={optimizationData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={10} tickLine={false} />
                <YAxis
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={10}
                  tickLine={false}
                  label={{
                    value: "% of Original",
                    angle: -90,
                    position: "insideLeft",
                    style: { fontSize: 10, fill: "hsl(var(--muted-foreground))" },
                  }}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="size" fill="var(--color-size)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="inference" fill="var(--color-inference)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>

        <div className="space-y-3 pt-2 border-t border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-chart-3" />
              <span className="text-sm text-foreground">Compute Overhead Reduction</span>
            </div>
            <span className="text-sm font-semibold text-chart-3 font-mono">-35%</span>
          </div>
          <Progress value={65} className="h-2" />
          <div className="grid grid-cols-3 gap-3 text-xs">
            <div>
              <p className="text-muted-foreground">Original Size</p>
              <p className="font-semibold text-foreground font-mono">142 MB</p>
            </div>
            <div>
              <p className="text-muted-foreground">Optimized Size</p>
              <p className="font-semibold text-foreground font-mono">49 MB</p>
            </div>
            <div>
              <p className="text-muted-foreground">Accuracy Loss</p>
              <p className="font-semibold text-foreground font-mono">-0.8%</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
