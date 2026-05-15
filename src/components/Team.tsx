import { Linkedin, Github, GraduationCap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const teamMembers = [
  {
    name: 'Karthick J',
    role: 'Team Lead & Full-Stack Developer',
    initials: 'KJ',
    color: 'sky',
  },
  {
    name: 'Aswin G',
    role: 'AI/ML Engineer',
    initials: 'AG',
    color: 'cyan',
  },
  {
    name: 'Divyesh N',
    role: 'IoT & Hardware Lead',
    initials: 'DN',
    color: 'teal',
  },
];

const mentor = {
  name: 'Dr. Adlin Sheeba',
  role: 'Faculty Mentor',
  initials: 'AS',
  color: 'emerald',
};

const colorMap: Record<string, { bg: string; border: string; avatar: string; ring: string }> = {
  sky: { bg: 'bg-sky-50 dark:bg-sky-950/30', border: 'border-sky-200 dark:border-sky-800/50', avatar: 'bg-gradient-to-br from-sky-400 to-sky-600', ring: 'ring-sky-200 dark:ring-sky-800' },
  cyan: { bg: 'bg-cyan-50 dark:bg-cyan-950/30', border: 'border-cyan-200 dark:border-cyan-800/50', avatar: 'bg-gradient-to-br from-cyan-400 to-cyan-600', ring: 'ring-cyan-200 dark:ring-cyan-800' },
  teal: { bg: 'bg-teal-50 dark:bg-teal-950/30', border: 'border-teal-200 dark:border-teal-800/50', avatar: 'bg-gradient-to-br from-teal-400 to-teal-600', ring: 'ring-teal-200 dark:ring-teal-800' },
  emerald: { bg: 'bg-emerald-50 dark:bg-emerald-950/30', border: 'border-emerald-200 dark:border-emerald-800/50', avatar: 'bg-gradient-to-br from-emerald-400 to-emerald-600', ring: 'ring-emerald-200 dark:ring-emerald-800' },
};

export default function Team() {
  const ref = useScrollAnimation();

  return (
    <section id="team" className="py-24 bg-white dark:bg-slate-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-up">
          <span className="inline-block px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 text-xs font-semibold uppercase tracking-wider mb-4">
            The Team
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Team HACTIVATORS
          </h2>
          <p className="max-w-2xl mx-auto text-slate-500 dark:text-slate-400 text-lg">
            A passionate team building the future of flood intelligence for India.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
          {teamMembers.map((member, i) => {
            const c = colorMap[member.color];
            return (
              <div
                key={i}
                className={`card-hover rounded-2xl ${c.bg} border ${c.border} p-8 text-center`}
              >
                <div className={`w-20 h-20 rounded-2xl ${c.avatar} flex items-center justify-center mx-auto mb-4 ring-4 ${c.ring} shadow-lg`}>
                  <span className="text-xl font-bold text-white">{member.initials}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{member.role}</p>
                <div className="flex items-center justify-center gap-2">
                  <a href="#" className="w-8 h-8 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 hover:text-sky-500 transition-colors">
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 hover:text-sky-500 transition-colors">
                    <Github className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}

          {/* Mentor card */}
          {(() => {
            const c = colorMap[mentor.color];
            return (
              <div className={`card-hover rounded-2xl ${c.bg} border ${c.border} p-8 text-center relative`}>
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold uppercase tracking-wider">
                    <GraduationCap className="w-3 h-3" />
                    Mentor
                  </span>
                </div>
                <div className={`w-20 h-20 rounded-2xl ${c.avatar} flex items-center justify-center mx-auto mb-4 ring-4 ${c.ring} shadow-lg mt-2`}>
                  <span className="text-xl font-bold text-white">{mentor.initials}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-1">
                  {mentor.name}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{mentor.role}</p>
                <div className="flex items-center justify-center gap-2">
                  <a href="#" className="w-8 h-8 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 hover:text-sky-500 transition-colors">
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </section>
  );
}
