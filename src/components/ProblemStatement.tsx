import { TrendingDown, Eye, Clock, AlertTriangle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const stats = [
  {
    icon: TrendingDown,
    value: '3,000+',
    unit: 'Cr',
    label: 'Annual Flood Damage',
    description: 'Estimated economic loss per year in Tamil Nadu due to urban flooding',
    color: 'red',
  },
  {
    icon: Eye,
    value: '0',
    unit: '%',
    label: 'Real-Time Drain Monitoring',
    description: 'No live sensor infrastructure exists for drainage network oversight',
    color: 'amber',
  },
  {
    icon: Clock,
    value: '4-6',
    unit: 'hrs',
    label: 'Delayed Emergency Response',
    description: 'Average delay in deploying emergency teams to flood-affected zones',
    color: 'orange',
  },
  {
    icon: AlertTriangle,
    value: '73',
    unit: '%',
    label: 'Drainage Failure Flooding',
    description: 'Percentage of urban flooding caused by drainage system failures',
    color: 'rose',
  },
];

const colorMap: Record<string, { bg: string; icon: string; border: string; text: string }> = {
  red: { bg: 'bg-red-50 dark:bg-red-950/30', icon: 'text-red-500', border: 'border-red-200 dark:border-red-900/50', text: 'text-red-600 dark:text-red-400' },
  amber: { bg: 'bg-amber-50 dark:bg-amber-950/30', icon: 'text-amber-500', border: 'border-amber-200 dark:border-amber-900/50', text: 'text-amber-600 dark:text-amber-400' },
  orange: { bg: 'bg-orange-50 dark:bg-orange-950/30', icon: 'text-orange-500', border: 'border-orange-200 dark:border-orange-900/50', text: 'text-orange-600 dark:text-orange-400' },
  rose: { bg: 'bg-rose-50 dark:bg-rose-950/30', icon: 'text-rose-500', border: 'border-rose-200 dark:border-rose-900/50', text: 'text-rose-600 dark:text-rose-400' },
};

export default function ProblemStatement() {
  const ref = useScrollAnimation();

  return (
    <section id="problem" className="py-24 bg-white dark:bg-slate-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-up">
          <span className="inline-block px-3 py-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-semibold uppercase tracking-wider mb-4">
            The Crisis
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Urban Flooding is Devastating Tamil Nadu
          </h2>
          <p className="max-w-2xl mx-auto text-slate-500 dark:text-slate-400 text-lg">
            Every monsoon season, Chennai and other cities face catastrophic flooding with no intelligent system to predict, prevent, or respond in real time.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
          {stats.map((stat, i) => {
            const c = colorMap[stat.color];
            return (
              <div
                key={i}
                className={`card-hover rounded-2xl ${c.bg} border ${c.border} p-6 text-center`}
              >
                <div className={`w-14 h-14 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className={`w-7 h-7 ${c.icon}`} />
                </div>
                <div className="mb-2">
                  <span className={`text-4xl font-extrabold ${c.text}`}>{stat.value}</span>
                  <span className={`text-lg font-bold ${c.text}`}>{stat.unit}</span>
                </div>
                <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-2">{stat.label}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
