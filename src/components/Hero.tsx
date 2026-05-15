import { Activity, AlertTriangle, BarChart3, CloudRain, Droplets, MapPin, Radio, Shield, Wifi } from 'lucide-react';

const floatingWidgets = [
  { icon: CloudRain, label: 'Rainfall', value: '142mm', x: '8%', y: '18%', delay: '0s' },
  { icon: Droplets, label: 'Water Level', value: '2.4m', x: '78%', y: '12%', delay: '0.5s' },
  { icon: AlertTriangle, label: 'Risk Level', value: 'HIGH', x: '85%', y: '55%', delay: '1s' },
  { icon: Activity, label: 'Sensors Active', value: '847', x: '5%', y: '60%', delay: '1.5s' },
  { icon: Shield, label: 'Zones Safe', value: '23/28', x: '72%', y: '78%', delay: '2s' },
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-sky-50 dark:from-slate-950 dark:via-slate-900 dark:to-sky-950">
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-400/10 dark:bg-sky-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-400/10 dark:bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-300/5 dark:bg-sky-400/3 rounded-full blur-3xl" />

      {/* Floating dashboard widgets */}
      {floatingWidgets.map((w, i) => (
        <div
          key={i}
          className="absolute hidden lg:flex items-center gap-3 px-4 py-3 rounded-xl bg-white/70 dark:bg-slate-800/60 backdrop-blur-lg border border-slate-200/50 dark:border-slate-700/50 shadow-lg animate-float-slow"
          style={{ left: w.x, top: w.y, animationDelay: w.delay }}
        >
          <div className="w-8 h-8 rounded-lg bg-sky-100 dark:bg-sky-900/50 flex items-center justify-center">
            <w.icon className="w-4 h-4 text-sky-600 dark:text-sky-400" />
          </div>
          <div>
            <p className="text-[10px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">{w.label}</p>
            <p className="text-sm font-bold text-slate-900 dark:text-white">{w.value}</p>
          </div>
        </div>
      ))}

      {/* Map visual */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-[0.03] dark:opacity-[0.04]">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <path d="M50,200 Q100,100 200,150 T350,200" stroke="currentColor" fill="none" strokeWidth="2" className="text-sky-500" />
          <path d="M80,250 Q150,180 250,220 T380,180" stroke="currentColor" fill="none" strokeWidth="1.5" className="text-cyan-500" />
          <path d="M30,300 Q120,200 220,280 T370,250" stroke="currentColor" fill="none" strokeWidth="1" className="text-sky-400" />
          <circle cx="200" cy="150" r="3" className="fill-sky-500" />
          <circle cx="250" cy="220" r="3" className="fill-cyan-500" />
          <circle cx="150" cy="180" r="2" className="fill-sky-400" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-24 pb-16">
        <div className="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 dark:bg-sky-900/40 border border-sky-200 dark:border-sky-800 text-sky-700 dark:text-sky-300 text-xs font-semibold mb-8 tracking-wide uppercase">
            <Radio className="w-3.5 h-3.5" />
            Smart City Infrastructure
          </div>
        </div>

        <h1 className="fade-up text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4">
          <span className="gradient-text">VARUNA-X</span>
        </h1>

        <p className="fade-up text-lg sm:text-xl md:text-2xl font-semibold text-slate-700 dark:text-slate-200 mb-4 leading-tight">
          AI-Powered Flood Intelligence &<br className="hidden sm:block" /> Drainage Response System
        </p>

        <p className="fade-up text-base sm:text-lg text-slate-500 dark:text-slate-400 mb-10 font-medium tracking-wide">
          Predict &bull; Prevent &bull; Protect Tamil Nadu from Urban Flooding
        </p>

        <div className="fade-up flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#contact"
            className="px-8 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-sky-500 to-cyan-500 rounded-xl hover:from-sky-600 hover:to-cyan-600 shadow-xl shadow-sky-500/25 hover:shadow-sky-500/40 transition-all hover:-translate-y-0.5"
          >
            Request Demo
          </a>
          <a
            href="#dashboard"
            className="px-8 py-3.5 text-sm font-bold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:border-sky-300 dark:hover:border-sky-600 shadow-lg shadow-black/5 transition-all hover:-translate-y-0.5"
          >
            View Dashboard
          </a>
        </div>

        {/* Mini dashboard preview */}
        <div className="fade-up scale-in max-w-3xl mx-auto">
          <div className="rounded-2xl bg-white/80 dark:bg-slate-800/60 backdrop-blur-xl border border-slate-200/60 dark:border-slate-700/40 shadow-2xl shadow-slate-900/10 dark:shadow-black/30 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-200/60 dark:border-slate-700/40">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 flex items-center justify-center">
                <div className="px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-700 text-[10px] font-mono text-slate-500 dark:text-slate-400">
                  varuna-x-dashboard.live
                </div>
              </div>
            </div>
            <div className="p-4 grid grid-cols-3 gap-3">
              <div className="col-span-2 rounded-xl bg-gradient-to-br from-sky-50 to-cyan-50 dark:from-sky-950/50 dark:to-cyan-950/50 border border-sky-100 dark:border-sky-900/50 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">Chennai - Live Map</span>
                </div>
                <div className="h-28 rounded-lg bg-slate-100 dark:bg-slate-800/50 flex items-center justify-center relative overflow-hidden">
                  <svg viewBox="0 0 200 100" className="w-full h-full opacity-60">
                    <path d="M20,50 Q50,20 80,40 T140,35 T180,50" stroke="#0ea5e9" fill="none" strokeWidth="2" />
                    <path d="M10,70 Q40,50 70,65 T130,55 T190,70" stroke="#06b6d4" fill="none" strokeWidth="1.5" />
                    <circle cx="80" cy="40" r="4" fill="#ef4444" opacity="0.8" />
                    <circle cx="140" cy="35" r="3" fill="#f59e0b" opacity="0.8" />
                    <circle cx="50" cy="55" r="3" fill="#22c55e" opacity="0.8" />
                    <circle cx="120" cy="60" r="2.5" fill="#0ea5e9" opacity="0.8" />
                  </svg>
                </div>
              </div>
              <div className="space-y-3">
                <div className="rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 p-3">
                  <div className="flex items-center gap-1.5 mb-1">
                    <BarChart3 className="w-3.5 h-3.5 text-sky-500" />
                    <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase">Risk Index</span>
                  </div>
                  <p className="text-xl font-bold text-red-500">78%</p>
                </div>
                <div className="rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 p-3">
                  <div className="flex items-center gap-1.5 mb-1">
                    <Wifi className="w-3.5 h-3.5 text-green-500" />
                    <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase">Sensors</span>
                  </div>
                  <p className="text-xl font-bold text-slate-900 dark:text-white">847</p>
                </div>
                <div className="rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 p-3">
                  <div className="flex items-center gap-1.5 mb-1">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                    <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase">Alerts</span>
                  </div>
                  <p className="text-xl font-bold text-amber-500">12</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-slate-900 to-transparent" />
    </section>
  );
}
