"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Brain, TrendingUp, Target } from "lucide-react"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Mock training data
const generateTrainingData = () => {
  let reward = 0
  return Array.from({ length: 100 }, (_, i) => {
    reward += (Math.random() - 0.3) * 10
    return {
      episode: i * 30,
      reward: Math.max(0, reward + 50),
      successRate: Math.min(95, 45 + i * 0.5 + Math.random() * 5),
    }
  })
}

const trainingData = generateTrainingData()

const chartConfig = {
  reward: {
    label: "Reward",
    color: "hsl(var(--chart-1))",
  },
  successRate: {
    label: "Success Rate",
    color: "hsl(var(--chart-3))",
  },
}

export function RLTrainingMonitor() {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-foreground">RL Policy Network</CardTitle>
            <CardDescription className="text-muted-foreground">Policy gradient training progress</CardDescription>
          </div>
          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
            <Brain className="h-3 w-3 mr-1" />
            Training
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Success Rate</span>
              <span className="text-xs font-mono text-foreground">72.5%</span>
            </div>
            <Progress value={72.5} className="h-2" />
            <div className="flex items-center gap-1 text-xs text-chart-3">
              <TrendingUp className="h-3 w-3" />
              <span>+25% vs baseline</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Convergence</span>
              <span className="text-xs font-mono text-foreground">89.2%</span>
            </div>
            <Progress value={89.2} className="h-2" />
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Target className="h-3 w-3" />
              <span>Episode 2,847/3,000</span>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-foreground">Training Metrics</h3>
            <div className="flex gap-4 text-xs">
              <div className="flex items-center gap-1.5">
                <div className="h-2 w-2 rounded-full bg-chart-1" />
                <span className="text-muted-foreground">Reward</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="h-2 w-2 rounded-full bg-chart-3" />
                <span className="text-muted-foreground">Success %</span>
              </div>
            </div>
          </div>
          <ChartContainer config={chartConfig} className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trainingData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="episode" stroke="hsl(var(--muted-foreground))" fontSize={10} tickLine={false} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={10} tickLine={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area
                  type="monotone"
                  dataKey="reward"
                  stroke="var(--color-reward)"
                  fill="var(--color-reward)"
                  fillOpacity={0.2}
                  strokeWidth={2}
                />
                <Area
                  type="monotone"
                  dataKey="successRate"
                  stroke="var(--color-successRate)"
                  fill="var(--color-successRate)"
                  fillOpacity={0.2}
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>

        <div className="grid grid-cols-3 gap-3 pt-2 border-t border-border">
          <div>
            <p className="text-xs text-muted-foreground">Learning Rate</p>
            <p className="text-sm font-semibold text-foreground font-mono">3e-4</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Entropy Coef</p>
            <p className="text-sm font-semibold text-foreground font-mono">0.01</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Batch Size</p>
            <p className="text-sm font-semibold text-foreground font-mono">256</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
