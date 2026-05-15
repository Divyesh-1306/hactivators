import { useScrollAnimation } from '../hooks/useScrollAnimation';

const categories = [
  {
    title: 'Frontend',
    items: [
      { name: 'React.js', desc: 'Component UI' },
      { name: 'Mapbox', desc: 'GIS Mapping' },
      { name: 'Recharts', desc: 'Data Viz' },
    ],
    color: 'sky',
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', desc: 'API Server' },
      { name: 'FastAPI', desc: 'ML Pipeline' },
      { name: 'PostGIS', desc: 'Spatial DB' },
    ],
    color: 'cyan',
  },
  {
    title: 'AI / ML',
    items: [
      { name: 'LSTM', desc: 'Time Series' },
      { name: 'Random Forest', desc: 'Classification' },
      { name: 'Scikit-learn', desc: 'ML Toolkit' },
    ],
    color: 'teal',
  },
  {
    title: 'Cloud & DevOps',
    items: [
      { name: 'AWS / Azure', desc: 'Cloud Infra' },
      { name: 'Docker', desc: 'Containers' },
      { name: 'Redis', desc: 'Cache Layer' },
    ],
    color: 'emerald',
  },
];

const colorMap: Record<string, { bg: string; border: string; badge: string; card: string; cardBorder: string }> = {
  sky: { bg: 'bg-sky-50 dark:bg-sky-950/30', border: 'border-sky-200 dark:border-sky-800/50', badge: 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-300', card: 'bg-white dark:bg-slate-800/80', cardBorder: 'border-slate-200 dark:border-slate-700' },
  cyan: { bg: 'bg-cyan-50 dark:bg-cyan-950/30', border: 'border-cyan-200 dark:border-cyan-800/50', badge: 'bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300', card: 'bg-white dark:bg-slate-800/80', cardBorder: 'border-slate-200 dark:border-slate-700' },
  teal: { bg: 'bg-teal-50 dark:bg-teal-950/30', border: 'border-teal-200 dark:border-teal-800/50', badge: 'bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300', card: 'bg-white dark:bg-slate-800/80', cardBorder: 'border-slate-200 dark:border-slate-700' },
  emerald: { bg: 'bg-emerald-50 dark:bg-emerald-950/30', border: 'border-emerald-200 dark:border-emerald-800/50', badge: 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300', card: 'bg-white dark:bg-slate-800/80', cardBorder: 'border-slate-200 dark:border-slate-700' },
};

export default function TechStack() {
  const ref = useScrollAnimation();

  return (
    <section id="techstack" className="py-24 bg-white dark:bg-slate-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-up">
          <span className="inline-block px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Technology
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Technology Stack
          </h2>
          <p className="max-w-2xl mx-auto text-slate-500 dark:text-slate-400 text-lg">
            Built on proven, scalable technologies for enterprise-grade reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
          {categories.map((cat, i) => {
            const c = colorMap[cat.color];
            return (
              <div
                key={i}
                className={`card-hover rounded-2xl ${c.bg} border ${c.border} p-6`}
              >
                <span className={`inline-block px-3 py-1 rounded-full ${c.badge} text-[10px] font-bold uppercase tracking-wider mb-5`}>
                  {cat.title}
                </span>
                <div className="space-y-3">
                  {cat.items.map((item, j) => (
                    <div
                      key={j}
                      className={`rounded-xl ${c.card} border ${c.cardBorder} p-3 flex items-center gap-3`}
                    >
                      <div className={`w-10 h-10 rounded-lg ${c.bg} border ${c.border} flex items-center justify-center shrink-0`}>
                        <span className="text-xs font-bold text-slate-700 dark:text-slate-200">
                          {item.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-800 dark:text-slate-100">{item.name}</p>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
