import { Cpu, Brain, Map, Mic, MessageSquare, ClipboardList, Radio } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const workflowSteps = [
  {
    step: 'SENSE',
    icon: Radio,
    color: 'sky',
    items: ['IoT Drain Sensors', 'Ultrasonic Level Detection', 'Real-Time Data Streams'],
  },
  {
    step: 'PREDICT',
    icon: Brain,
    color: 'cyan',
    items: ['AI Prediction (LSTM)', 'Random Forest Models', 'Flood Risk Scoring'],
  },
  {
    step: 'DECIDE',
    icon: Map,
    color: 'teal',
    items: ['GIS Heatmaps', 'Zone Risk Analysis', 'Decision Engine'],
  },
  {
    step: 'ACT',
    icon: ClipboardList,
    color: 'emerald',
    items: ['Auto Task Assignment', 'Drainage Response', 'Resource Deployment'],
  },
  {
    step: 'ALERT',
    icon: Mic,
    color: 'blue',
    items: ['Tamil Voice Alerts', 'WhatsApp & SMS', 'Citizen Reporting'],
  },
];

const colorClasses: Record<string, { bg: string; border: string; icon: string; badge: string; line: string }> = {
  sky: { bg: 'bg-sky-50 dark:bg-sky-950/30', border: 'border-sky-200 dark:border-sky-800/50', icon: 'text-sky-500', badge: 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-300', line: 'from-sky-400' },
  cyan: { bg: 'bg-cyan-50 dark:bg-cyan-950/30', border: 'border-cyan-200 dark:border-cyan-800/50', icon: 'text-cyan-500', badge: 'bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300', line: 'from-cyan-400' },
  teal: { bg: 'bg-teal-50 dark:bg-teal-950/30', border: 'border-teal-200 dark:border-teal-800/50', icon: 'text-teal-500', badge: 'bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300', line: 'from-teal-400' },
  emerald: { bg: 'bg-emerald-50 dark:bg-emerald-950/30', border: 'border-emerald-200 dark:border-emerald-800/50', icon: 'text-emerald-500', badge: 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300', line: 'from-emerald-400' },
  blue: { bg: 'bg-blue-50 dark:bg-blue-950/30', border: 'border-blue-200 dark:border-blue-800/50', icon: 'text-blue-500', badge: 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300', line: 'from-blue-400' },
};

export default function SolutionWorkflow() {
  const ref = useScrollAnimation();

  return (
    <section id="solution" className="py-24 bg-slate-50 dark:bg-slate-950" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-up">
          <span className="inline-block px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 text-xs font-semibold uppercase tracking-wider mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Intelligent Flood Response Workflow
          </h2>
          <p className="max-w-2xl mx-auto text-slate-500 dark:text-slate-400 text-lg">
            From sensing drain levels to alerting citizens in Tamil -- a complete AI-driven pipeline.
          </p>
        </div>

        {/* Desktop timeline */}
        <div className="hidden lg:flex items-start justify-between gap-2 relative">
          {/* Connecting line */}
          <div className="absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-sky-300 via-cyan-300 via-teal-300 via-emerald-300 to-blue-300 dark:opacity-30 opacity-50" />

          {workflowSteps.map((step, i) => {
            const c = colorClasses[step.color];
            return (
              <div key={i} className="flex-1 fade-up text-center relative" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className={`w-24 h-24 rounded-2xl ${c.bg} border-2 ${c.border} flex items-center justify-center mx-auto mb-4 relative z-10 shadow-lg`}>
                  <step.icon className={`w-10 h-10 ${c.icon}`} />
                </div>
                <span className={`inline-block px-3 py-1 rounded-full ${c.badge} text-xs font-bold mb-3`}>
                  {step.step}
                </span>
                <ul className="space-y-1.5">
                  {step.items.map((item, j) => (
                    <li key={j} className="text-sm text-slate-600 dark:text-slate-300 font-medium">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Mobile timeline */}
        <div className="lg:hidden space-y-6">
          {workflowSteps.map((step, i) => {
            const c = colorClasses[step.color];
            return (
              <div key={i} className="fade-up flex gap-4" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="flex flex-col items-center">
                  <div className={`w-14 h-14 rounded-xl ${c.bg} border-2 ${c.border} flex items-center justify-center shadow-lg shrink-0`}>
                    <step.icon className={`w-6 h-6 ${c.icon}`} />
                  </div>
                  {i < workflowSteps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-gradient-to-b from-sky-300 to-transparent dark:opacity-30 mt-2" />
                  )}
                </div>
                <div className={`flex-1 rounded-xl ${c.bg} border ${c.border} p-4`}>
                  <span className={`inline-block px-2.5 py-0.5 rounded-full ${c.badge} text-xs font-bold mb-2`}>
                    {step.step}
                  </span>
                  <ul className="space-y-1">
                    {step.items.map((item, j) => (
                      <li key={j} className="text-sm text-slate-600 dark:text-slate-300 font-medium">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
