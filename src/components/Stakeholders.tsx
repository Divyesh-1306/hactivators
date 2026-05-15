import { Building2, User, Award } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const stakeholders = [
  {
    icon: Building2,
    title: 'Greater Chennai Corporation',
    subtitle: 'Ripon Building, Chennai',
    description: 'Data and insights collected directly from GCC officials responsible for drainage and flood management infrastructure.',
    color: 'sky',
  },
  {
    icon: User,
    title: 'Sreevatsan',
    subtitle: 'Industry Expert & Mentor',
    description: 'Strategic guidance on smart city technology integration, IoT deployment, and government partnership frameworks.',
    color: 'cyan',
  },
  {
    icon: Award,
    title: 'Wadhwani Foundation',
    subtitle: 'Mentoring & Support',
    description: 'Entrepreneurial mentoring, network access, and strategic support for scaling the VARUNA-X platform across India.',
    color: 'teal',
  },
];

const colorMap: Record<string, { bg: string; border: string; icon: string; badge: string }> = {
  sky: { bg: 'bg-sky-50 dark:bg-sky-950/30', border: 'border-sky-200 dark:border-sky-800/50', icon: 'text-sky-500', badge: 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-300' },
  cyan: { bg: 'bg-cyan-50 dark:bg-cyan-950/30', border: 'border-cyan-200 dark:border-cyan-800/50', icon: 'text-cyan-500', badge: 'bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300' },
  teal: { bg: 'bg-teal-50 dark:bg-teal-950/30', border: 'border-teal-200 dark:border-teal-800/50', icon: 'text-teal-500', badge: 'bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300' },
};

export default function Stakeholders() {
  const ref = useScrollAnimation();

  return (
    <section id="stakeholders" className="py-24 bg-slate-50 dark:bg-slate-950" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-up">
          <span className="inline-block px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Partners & Mentors
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Stakeholder & Mentorship
          </h2>
          <p className="max-w-2xl mx-auto text-slate-500 dark:text-slate-400 text-lg">
            Backed by government data, industry expertise, and foundation support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
          {stakeholders.map((s, i) => {
            const c = colorMap[s.color];
            return (
              <div
                key={i}
                className={`card-hover rounded-2xl ${c.bg} border ${c.border} p-8 text-center`}
              >
                <div className={`w-16 h-16 rounded-2xl ${c.bg} border ${c.border} flex items-center justify-center mx-auto mb-5`}>
                  <s.icon className={`w-8 h-8 ${c.icon}`} />
                </div>
                <span className={`inline-block px-3 py-1 rounded-full ${c.badge} text-[10px] font-bold uppercase tracking-wider mb-3`}>
                  {s.subtitle}
                </span>
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-3">
                  {s.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {s.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
