import { Heart, ShieldCheck, Zap, Building, TrendingUp } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const impacts = [
  {
    icon: Heart,
    title: 'Saves Lives',
    description: 'Early warning systems give citizens critical time to evacuate before floodwaters rise.',
    metric: '6-12h',
    metricLabel: 'Advance Warning',
    color: 'red',
  },
  {
    icon: ShieldCheck,
    title: 'Reduces Flood Damage',
    description: 'Proactive drainage management prevents blockages that cause 73% of urban flooding.',
    metric: '60%',
    metricLabel: 'Damage Reduction',
    color: 'sky',
  },
  {
    icon: Zap,
    title: 'Faster Emergency Response',
    description: 'Automated alerts and task assignment cut response time from hours to minutes.',
    metric: '4x',
    metricLabel: 'Faster Response',
    color: 'amber',
  },
  {
    icon: Building,
    title: 'Smart City Ready',
    description: 'Integrates with existing smart city infrastructure for seamless deployment.',
    metric: '100%',
    metricLabel: 'API Compatible',
    color: 'emerald',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Across India',
    description: 'Modular architecture designed to scale from Chennai to every flood-prone city in India.',
    metric: '50+',
    metricLabel: 'Cities Target',
    color: 'blue',
  },
];

const colorMap: Record<string, { bg: string; border: string; icon: string; metric: string }> = {
  red: { bg: 'bg-red-50 dark:bg-red-950/30', border: 'border-red-200 dark:border-red-900/50', icon: 'text-red-500', metric: 'text-red-600 dark:text-red-400' },
  sky: { bg: 'bg-sky-50 dark:bg-sky-950/30', border: 'border-sky-200 dark:border-sky-800/50', icon: 'text-sky-500', metric: 'text-sky-600 dark:text-sky-400' },
  amber: { bg: 'bg-amber-50 dark:bg-amber-950/30', border: 'border-amber-200 dark:border-amber-900/50', icon: 'text-amber-500', metric: 'text-amber-600 dark:text-amber-400' },
  emerald: { bg: 'bg-emerald-50 dark:bg-emerald-950/30', border: 'border-emerald-200 dark:border-emerald-800/50', icon: 'text-emerald-500', metric: 'text-emerald-600 dark:text-emerald-400' },
  blue: { bg: 'bg-blue-50 dark:bg-blue-950/30', border: 'border-blue-200 dark:border-blue-800/50', icon: 'text-blue-500', metric: 'text-blue-600 dark:text-blue-400' },
};

export default function Impact() {
  const ref = useScrollAnimation();

  return (
    <section id="impact" className="py-24 bg-slate-50 dark:bg-slate-950" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-up">
          <span className="inline-block px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Impact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Measurable Impact
          </h2>
          <p className="max-w-2xl mx-auto text-slate-500 dark:text-slate-400 text-lg">
            Real outcomes that matter -- from saving lives to building smarter cities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 stagger-children">
          {impacts.map((impact, i) => {
            const c = colorMap[impact.color];
            return (
              <div
                key={i}
                className={`card-hover rounded-2xl ${c.bg} border ${c.border} p-6 text-center`}
              >
                <div className={`w-14 h-14 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center mx-auto mb-4`}>
                  <impact.icon className={`w-7 h-7 ${c.icon}`} />
                </div>
                <div className="mb-3">
                  <span className={`text-3xl font-extrabold ${c.metric}`}>{impact.metric}</span>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">{impact.metricLabel}</p>
                </div>
                <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 mb-2">{impact.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{impact.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
