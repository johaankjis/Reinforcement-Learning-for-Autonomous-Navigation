"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Rocket, Cpu, Clock, CheckCircle2, AlertCircle } from "lucide-react"

const deploymentMetrics = [
  { label: "Inference Latency", value: "8.2ms", status: "success", icon: Clock },
  { label: "Throughput", value: "122 FPS", status: "success", icon: Cpu },
  { label: "Memory Usage", value: "384 MB", status: "warning", icon: AlertCircle },
]

const environments = [
  { name: "NVIDIA Jetson Xavier", status: "deployed", performance: "98%" },
  { name: "Raspberry Pi 4", status: "deployed", performance: "87%" },
  { name: "Intel NUC", status: "testing", performance: "95%" },
]

export function DeploymentStatus() {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-foreground">On-Device Deployment</CardTitle>
            <CardDescription className="text-muted-foreground">Real-time inference on edge devices</CardDescription>
          </div>
          <Badge variant="outline" className="bg-chart-3/10 text-chart-3 border-chart-3/20">
            <Rocket className="h-3 w-3 mr-1" />
            Production
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-3">
          {deploymentMetrics.map((metric) => {
            const Icon = metric.icon
            return (
              <div
                key={metric.label}
                className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 border border-border"
              >
                <div className="flex items-center gap-3">
                  <Icon className={`h-4 w-4 ${metric.status === "success" ? "text-chart-3" : "text-chart-4"}`} />
                  <span className="text-sm text-muted-foreground">{metric.label}</span>
                </div>
                <span className="text-sm font-semibold text-foreground font-mono">{metric.value}</span>
              </div>
            )
          })}
        </div>

        <div className="space-y-3 pt-2 border-t border-border">
          <h3 className="text-sm font-medium text-foreground">Target Platforms</h3>
          {environments.map((env) => (
            <div
              key={env.name}
              className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 border border-border"
            >
              <div className="flex items-center gap-3">
                <div className={`h-2 w-2 rounded-full ${env.status === "deployed" ? "bg-chart-3" : "bg-chart-2"}`} />
                <div>
                  <p className="text-sm text-foreground">{env.name}</p>
                  <p className="text-xs text-muted-foreground capitalize">{env.status}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-foreground font-mono">{env.performance}</p>
                <p className="text-xs text-muted-foreground">Performance</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-3 pt-2 border-t border-border">
          <div>
            <p className="text-xs text-muted-foreground">Uptime</p>
            <p className="text-sm font-semibold text-foreground font-mono">99.8%</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Deployments</p>
            <p className="text-sm font-semibold text-foreground font-mono">3/3</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Avg Response</p>
            <p className="text-sm font-semibold text-foreground font-mono">8.2ms</p>
          </div>
        </div>

        <div className="flex items-center gap-2 p-3 rounded-lg bg-chart-3/10 border border-chart-3/20">
          <CheckCircle2 className="h-4 w-4 text-chart-3" />
          <p className="text-sm text-foreground">All systems operational. Real-time navigation active on 3 devices.</p>
        </div>
      </CardContent>
    </Card>
  )
}
