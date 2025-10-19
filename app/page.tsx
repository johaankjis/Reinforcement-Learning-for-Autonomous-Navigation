import { Header } from '@/components/header'
import { SensorFusionDashboard } from '@/components/sensor-fusion-dashboard'
import { RLTrainingMonitor } from '@/components/rl-training-monitor'
import { ModelOptimizationPanel } from '@/components/model-optimization-panel'
import { DeploymentStatus } from '@/components/deployment-status'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-6 space-y-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <SensorFusionDashboard />
          <RLTrainingMonitor />
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <ModelOptimizationPanel />
          <DeploymentStatus />
        </div>
      </main>
    </div>
  )
}
