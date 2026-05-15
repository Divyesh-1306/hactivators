import { Cpu, Radio, Waves, Wifi, Zap, Box } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const hardwareItems = [
  {
    icon: Cpu,
    title: 'ESP32 Microcontroller',
    description: 'Low-power dual-core processor with built-in Wi-Fi and Bluetooth for edge computing and sensor data transmission.',
    color: 'sky',
  },
  {
    icon: Waves,
    title: 'Ultrasonic Sensors',
    description: 'HC-SR04 sensors measure water levels in drains with centimeter-level precision, even in murky conditions.',
    color: 'cyan',
  },
  {
    icon: Radio,
    title: 'MQTT Protocol',
    description: 'Lightweight messaging protocol enables real-time sensor data streaming to the cloud with minimal bandwidth.',
    color: 'teal',
  },
  {
    icon: Wifi,
    title: 'Real-Time Monitoring',
    description: 'Continuous 24/7 data collection from drain networks with sub-second latency for instant alerting.',
    color: 'emerald',
  },
  {
    icon: Zap,
    title: 'Solar-Powered Nodes',
    description: 'Self-sustaining sensor nodes with solar panels and battery backup for uninterrupted operation during floods.',
    color: 'amber',
  },
  {
    icon: Box,
    title: 'Pilot Deployment',
    description: 'Prototype stage with planned pilot deployment across 5 critical drainage zones in Chennai.',
    color: 'blue',
  },
];

const colorMap: Record<string, { bg: string; border: string; icon: string }> = {
  sky: { bg: 'bg-sky-50 dark:bg-sky-950/30', border: 'border-sky-200 dark:border-sky-800/50', icon: 'text-sky-500' },
  cyan: { bg: 'bg-cyan-50 dark:bg-cyan-950/30', border: 'border-cyan-200 dark:border-cyan-800/50', icon: 'text-cyan-500' },
  teal: { bg: 'bg-teal-50 dark:bg-teal-950/30', border: 'border-teal-200 dark:border-teal-800/50', icon: 'text-teal-500' },
  emerald: { bg: 'bg-emerald-50 dark:bg-emerald-950/30', border: 'border-emerald-200 dark:border-emerald-800/50', icon: 'text-emerald-500' },
  amber: { bg: 'bg-amber-50 dark:bg-amber-950/30', border: 'border-amber-200 dark:border-amber-800/50', icon: 'text-amber-500' },
  blue: { bg: 'bg-blue-50 dark:bg-blue-950/30', border: 'border-blue-200 dark:border-blue-800/50', icon: 'text-blue-500' },
};

export default function HardwarePrototype() {
  const ref = useScrollAnimation();

  return (
    <section id="hardware" className="py-24 bg-white dark:bg-slate-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-up">
          <span className="inline-block px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Hardware
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            IoT Hardware Prototype
          </h2>
          <p className="max-w-2xl mx-auto text-slate-500 dark:text-slate-400 text-lg">
            Purpose-built sensor nodes designed for harsh drainage environments with reliable, low-power operation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {hardwareItems.map((item, i) => {
            const c = colorMap[item.color];
            return (
              <div
                key={i}
                className={`card-hover rounded-2xl ${c.bg} border ${c.border} p-6`}
              >
                <div className={`w-12 h-12 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center mb-4`}>
                  <item.icon className={`w-6 h-6 ${c.icon}`} />
                </div>
                <h3 className="text-base font-bold text-slate-800 dark:text-slate-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Architecture diagram */}
        <div className="mt-16 fade-up">
          <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-8">
            <h3 className="text-sm font-bold text-slate-700 dark:text-slate-200 text-center mb-8 uppercase tracking-wider">
              Sensor Node Architecture
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              {[
                { label: 'Ultrasonic Sensor', sub: 'Water Level' },
                { label: 'ESP32', sub: 'Edge Compute' },
                { label: 'MQTT Broker', sub: 'Cloud Relay' },
                { label: 'AI Engine', sub: 'Prediction' },
                { label: 'Dashboard', sub: 'Visualization' },
              ].map((node, i) => (
                <div key={i} className="flex items-center gap-4 md:gap-8">
                  <div className="w-28 py-3 px-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center shadow-sm">
                    <p className="text-xs font-bold text-slate-800 dark:text-slate-100">{node.label}</p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400">{node.sub}</p>
                  </div>
                  {i < 4 && (
                    <div className="hidden md:block w-8 h-0.5 bg-gradient-to-r from-sky-400 to-cyan-400" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
