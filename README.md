# Reinforcement Learning for Autonomous Navigation

A real-time monitoring and visualization dashboard for autonomous navigation systems powered by Reinforcement Learning. This application provides comprehensive insights into sensor fusion, RL policy training, model optimization, and on-device deployment metrics.

## 🚀 Features

### 🎯 Sensor Fusion Dashboard
- **Multimodal Sensing Integration**: Combines vision and lidar sensor data for robust environmental perception
- **Real-time Confidence Monitoring**: Visualizes sensor confidence levels and fusion quality
- **Performance Metrics**: Tracks collision rate reduction, latency, and fusion quality
- **Live Data Visualization**: Interactive charts showing sensor performance over time

### 🧠 RL Policy Network Training
- **Policy Gradient Training**: Monitor reinforcement learning policy training progress in real-time
- **Training Metrics**: Track reward accumulation, success rates, and convergence
- **Hyperparameter Display**: View learning rate, entropy coefficient, and batch size
- **Performance Trends**: Visual representation of training episodes and success rates

### ⚡ Model Optimization Pipeline
- **Neural Network Pruning**: Reduce model size while maintaining accuracy
- **INT8 Quantization**: Optimize models for efficient edge device deployment
- **Optimization Impact Analysis**: Compare original vs. optimized models
- **Resource Efficiency**: Track compute overhead reduction and memory usage

### 🚁 On-Device Deployment
- **Edge Device Support**: Deploy on NVIDIA Jetson Xavier, Raspberry Pi 4, and Intel NUC
- **Real-time Inference**: Monitor inference latency, throughput, and memory usage
- **Multi-platform Monitoring**: Track deployment status across multiple devices
- **Production Metrics**: View uptime, deployment count, and average response times

## 🛠️ Technology Stack

### Frontend Framework
- **Next.js 15.2.4**: React framework with App Router
- **React 19**: Latest React version with modern features
- **TypeScript**: Type-safe development

### UI Components & Styling
- **Radix UI**: Accessible, unstyled component primitives
- **Tailwind CSS 4**: Utility-first CSS framework
- **Lucide React**: Beautiful icon library
- **shadcn/ui**: Re-usable component library

### Data Visualization
- **Recharts**: Composable charting library for React
- **Custom Chart Components**: Specialized visualizations for RL metrics

### Additional Libraries
- **React Hook Form**: Efficient form management
- **Zod**: TypeScript-first schema validation
- **date-fns**: Modern date utility library
- **next-themes**: Dark mode support

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js**: Version 18 or higher
- **pnpm**: Package manager (or npm/yarn)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/johaankjis/Reinforcement-Learning-for-Autonomous-Navigation.git
   cd Reinforcement-Learning-for-Autonomous-Navigation
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```
   
   Or using npm:
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   ```
   
   Or using npm:
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📦 Available Scripts

- `pnpm dev` - Start the development server
- `pnpm build` - Build the application for production
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint for code quality checks

## 🏗️ Project Structure

```
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout component
│   ├── page.tsx             # Main dashboard page
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── header.tsx           # Application header
│   ├── sensor-fusion-dashboard.tsx
│   ├── rl-training-monitor.tsx
│   ├── model-optimization-panel.tsx
│   ├── deployment-status.tsx
│   ├── theme-provider.tsx   # Dark/light mode provider
│   └── ui/                  # Reusable UI components
├── hooks/                   # Custom React hooks
├── lib/                     # Utility functions
├── public/                  # Static assets
└── styles/                  # Additional styles
```

## 🎨 Component Overview

### Sensor Fusion Dashboard
Monitors the integration of multiple sensor modalities (vision and lidar) for robust environmental perception. Displays:
- Vision input confidence (92.4%)
- Lidar input confidence (88.7%)
- Real-time sensor confidence charts
- Collision rate reduction metrics
- Fusion latency and quality

### RL Training Monitor
Tracks the training progress of reinforcement learning policies using policy gradient methods. Shows:
- Success rate with baseline comparison
- Training convergence progress
- Episode-based reward trends
- Hyperparameters (learning rate, entropy coefficient, batch size)

### Model Optimization Panel
Visualizes the model compression pipeline through pruning and quantization. Includes:
- Model size reduction (65% compression)
- Inference time improvement
- INT8 quantization results
- Compute overhead reduction
- Accuracy loss metrics

### Deployment Status
Monitors real-time inference performance on edge devices. Features:
- Inference latency tracking (8.2ms)
- Throughput monitoring (122 FPS)
- Memory usage statistics
- Multi-platform deployment status
- System uptime and health indicators

## 🔄 Real-time Data

The dashboard currently displays mock data for demonstration purposes. To integrate with real systems:

1. Replace the mock data generators in each component with API calls to your backend
2. Implement WebSocket connections for real-time updates
3. Configure data refresh intervals based on your requirements

Example integration points:
```typescript
// components/sensor-fusion-dashboard.tsx
const sensorData = generateSensorData() // Replace with API call

// components/rl-training-monitor.tsx
const trainingData = generateTrainingData() // Replace with real-time data stream
```

## 🎯 Use Cases

This dashboard is designed for:
- **Research Teams**: Monitor RL training experiments and model performance
- **Robotics Engineers**: Track autonomous navigation system metrics
- **ML Engineers**: Optimize and deploy models to edge devices
- **System Administrators**: Monitor production deployments and system health

## 🔐 Configuration

### Next.js Configuration
The project uses custom Next.js configuration for TypeScript and image optimization:
```javascript
{
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}
```

### Theme Support
The application supports both light and dark themes using `next-themes`. Toggle between themes using the theme provider.

## 📊 Metrics & KPIs

### Training Metrics
- Success Rate: 72.5% (+25% vs baseline)
- Convergence: 89.2%
- Current Episode: 2,847/3,000
- Learning Rate: 3e-4

### Optimization Results
- Model Size Reduction: 65% (142 MB → 49 MB)
- Inference Time Improvement: 65%
- Accuracy Loss: Only 0.8%

### Deployment Performance
- Inference Latency: 8.2ms
- Throughput: 122 FPS
- Memory Usage: 384 MB
- System Uptime: 99.8%

## 🚀 Deployment

### Production Build
```bash
pnpm build
pnpm start
```

### Environment Variables
Create a `.env.local` file for environment-specific configuration:
```env
# Add your environment variables here
NEXT_PUBLIC_API_URL=your_api_url
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes:
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Built with Next.js and React
- UI components from Radix UI and shadcn/ui
- Charts powered by Recharts
- Icons from Lucide React

## 📧 Contact

For questions or support, please open an issue on GitHub.

---

**Note**: This is a visualization dashboard. For the actual RL training implementation and autonomous navigation algorithms, please refer to the backend repository or integration documentation.
