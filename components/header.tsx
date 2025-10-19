import { Activity, Cpu, Radio } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export function Header() {
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Radio className="h-6 w-6 text-primary" />
              <h1 className="text-xl font-semibold text-foreground">
                Autonomous Navigation RL
              </h1>
            </div>
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
              <Activity className="h-3 w-3 mr-1" />
              Live
            </Badge>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Cpu className="h-4 w-4" />
              <span className="font-mono">TensorFlow v2.15</span>
            </div>
            <Badge variant="secondary" className="font-mono">
              Episode 2,847
            </Badge>
          </div>
        </div>
      </div>
    </header>
  )
}
