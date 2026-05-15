import { Brain, Droplets, MapPin, Mic, MessageSquare, Box, UserCheck } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const features = [
  {
    icon: Brain,
    title: 'AI Flood Prediction',
    description: 'LSTM neural networks and Random Forest models predict flood risk 6-12 hours ahead with high accuracy.',
    color: 'sky',
  },
  {
    icon: Droplets,
    title: 'Smart Drain Monitoring',
    description: 'IoT ultrasonic sensors monitor real-time water levels across the entire drainage network.',
    color: 'cyan',
  },
  {
    icon: MapPin,
    title: 'Real-Time GIS Dashboard',
    description: 'Interactive heatmaps and zone-level risk visualization for administrators and field officers.',
    color: 'teal',
  },
  {
    icon: Mic,
    title: 'Tamil Voice Alerts',
    description: 'Localized voice alerts in Tamil ensure every citizen understands the risk and required action.',
    color: 'emerald',
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp & SMS Alerts',
    description: 'Multi-channel alert delivery via WhatsApp, SMS, and push notifications for maximum reach.',
    color: 'blue',
  },
  {
    icon: Box,
    title: 'Digital Twin Simulation',
    description: 'Virtual city model simulates flood scenarios and drainage response strategies before deployment.',
    color: 'indigo',
  },
  {
    icon: UserCheck,
    title: 'Officer Accountability',
    description: 'Track task assignment, response times, and resolution status for every officer in the chain.',
    color: 'violet',
  },
];

const colorMap: Record<string, { bg: string; border: string; icon: string; glow: string }> = {
  sky: { bg: 'bg-sky-50 dark:bg-sky-950/30', border: 'border-sky-200 dark:border-sky-800/50', icon: 'text-sky-500', glow: 'group-hover:shadow-sky-500/20' },
  cyan: { bg: 'bg-cyan-50 dark:bg-cyan-950/30', border: 'border-cyan-200 dark:border-cyan-800/50', icon: 'text-cyan-500', glow: 'group-hover:shadow-cyan-500/20' },
  teal: { bg: 'bg-teal-50 dark:bg-teal-950/30', border: 'border-teal-200 dark:border-teal-800/50', icon: 'text-teal-500', glow: 'group-hover:shadow-teal-500/20' },
  emerald: { bg: 'bg-emerald-50 dark:bg-emerald-950/30', border: 'border-emerald-200 dark:border-emerald-800/50', icon: 'text-emerald-500', glow: 'group-hover:shadow-emerald-500/20' },
  blue: { bg: 'bg-blue-50 dark:bg-blue-950/30', border: 'border-blue-200 dark:border-blue-800/50', icon: 'text-blue-500', glow: 'group-hover:shadow-blue-500/20' },
  indigo: { bg: 'bg-indigo-50 dark:bg-indigo-950/30', border: 'border-indigo-200 dark:border-indigo-800/50', icon: 'text-indigo-500', glow: 'group-hover:shadow-indigo-500/20' },
  violet: { bg: 'bg-violet-50 dark:bg-violet-950/30', border: 'border-violet-200 dark:border-violet-800/50', icon: 'text-violet-500', glow: 'group-hover:shadow-violet-500/20' },
};

export default function Features() {
  const ref = useScrollAnimation();

  return (
    <section id="features" className="py-24 bg-white dark:bg-slate-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-up">
          <span className="inline-block px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Platform Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Enterprise-Grade Features
          </h2>
          <p className="max-w-2xl mx-auto text-slate-500 dark:text-slate-400 text-lg">
            A comprehensive suite of AI, IoT, and GIS tools designed for government-scale flood management.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 stagger-children">
          {features.map((feature, i) => {
            const c = colorMap[feature.color];
            return (
              <div
                key={i}
                className={`group card-hover rounded-2xl ${c.bg} border ${c.border} p-6 ${c.glow} group-hover:shadow-xl transition-all`}
              >
                <div className={`w-12 h-12 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-6 h-6 ${c.icon}`} />
                </div>
                <h3 className="text-base font-bold text-slate-800 dark:text-slate-100 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
