import { useState } from 'react';
import {
  AreaChart, Area, BarChart, Bar, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';
import { MapPin, AlertTriangle, Shield, Activity, Droplets, CloudRain, Wifi, Bell } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const floodData = [
  { time: '00:00', level: 1.2, rainfall: 5, risk: 30 },
  { time: '03:00', level: 1.8, rainfall: 15, risk: 45 },
  { time: '06:00', level: 2.4, rainfall: 35, risk: 62 },
  { time: '09:00', level: 3.1, rainfall: 55, risk: 78 },
  { time: '12:00', level: 2.8, rainfall: 40, risk: 70 },
  { time: '15:00', level: 2.2, rainfall: 25, risk: 55 },
  { time: '18:00', level: 1.6, rainfall: 10, risk: 38 },
  { time: '21:00', level: 1.3, rainfall: 5, risk: 28 },
];

const zoneData = [
  { name: 'Zone A', status: 'Critical', value: 35, color: '#ef4444' },
  { name: 'Zone B', status: 'High', value: 25, color: '#f97316' },
  { name: 'Zone C', status: 'Medium', value: 20, color: '#eab308' },
  { name: 'Zone D', status: 'Low', value: 15, color: '#22c55e' },
  { name: 'Zone E', status: 'Safe', value: 5, color: '#0ea5e9' },
];

const sensorData = [
  { zone: 'A', active: 142, total: 150 },
  { zone: 'B', active: 128, total: 140 },
  { zone: 'C', active: 95, total: 120 },
  { zone: 'D', active: 110, total: 115 },
  { zone: 'E', active: 88, total: 90 },
];

const alertLog = [
  { time: '14:32', type: 'CRITICAL', zone: 'Zone A - Adyar', msg: 'Water level exceeded threshold' },
  { time: '14:15', type: 'WARNING', zone: 'Zone B - T Nagar', msg: 'Drainage blockage detected' },
  { time: '13:58', type: 'INFO', zone: 'Zone C - Velachery', msg: 'Sensor maintenance completed' },
  { time: '13:42', type: 'WARNING', zone: 'Zone D - Anna Nagar', msg: 'Heavy rainfall predicted' },
  { time: '13:20', type: 'CRITICAL', zone: 'Zone A - Adyar', msg: 'Flood risk score elevated' },
];

const zoneCards = [
  { name: 'Adyar Basin', risk: 87, status: 'Critical', color: 'red' },
  { name: 'T. Nagar', risk: 64, status: 'High', color: 'orange' },
  { name: 'Velachery', risk: 42, status: 'Medium', color: 'yellow' },
  { name: 'Anna Nagar', risk: 21, status: 'Low', color: 'green' },
];

export default function DashboardPreview() {
  const ref = useScrollAnimation();
  const [activeTab, setActiveTab] = useState<'map' | 'analytics' | 'alerts'>('map');

  return (
    <section id="dashboard" className="py-24 bg-slate-50 dark:bg-slate-950" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-up">
          <span className="inline-block px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Live Preview
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Real-Time Flood Intelligence Dashboard
          </h2>
          <p className="max-w-2xl mx-auto text-slate-500 dark:text-slate-400 text-lg">
            A production-grade monitoring interface for administrators, field officers, and emergency responders.
          </p>
        </div>

        <div className="scale-in">
          <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl shadow-slate-900/10 dark:shadow-black/30 overflow-hidden">
            {/* Dashboard header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center">
                  <Droplets className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">VARUNA-X Command Center</h3>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">Greater Chennai Corporation</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-semibold">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  LIVE
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-400 text-[10px] font-semibold">
                  <Wifi className="w-3 h-3" />
                  847 Sensors
                </div>
              </div>
            </div>

            {/* Tab bar */}
            <div className="flex gap-1 px-6 py-2 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/30">
              {(['map', 'analytics', 'alerts'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === tab
                      ? 'bg-sky-100 dark:bg-sky-900/40 text-sky-700 dark:text-sky-300'
                      : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {tab === 'map' ? 'GIS Map' : tab === 'analytics' ? 'Analytics' : 'Alerts'}
                </button>
              ))}
            </div>

            {/* Dashboard content */}
            <div className="p-6">
              {activeTab === 'map' && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Map area */}
                  <div className="lg:col-span-2 rounded-xl bg-gradient-to-br from-slate-100 to-sky-50 dark:from-slate-800 dark:to-sky-950/30 border border-slate-200 dark:border-slate-700 p-4 relative overflow-hidden min-h-[320px]">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-sky-500" />
                        <span className="text-xs font-bold text-slate-700 dark:text-slate-200">Chennai Flood Risk Map</span>
                      </div>
                      <span className="text-[10px] text-slate-400">Updated 2 min ago</span>
                    </div>
                    {/* Simulated map */}
                    <div className="relative w-full h-64 rounded-lg bg-slate-200/50 dark:bg-slate-700/30 overflow-hidden">
                      <svg viewBox="0 0 400 250" className="w-full h-full">
                        {/* Grid lines */}
                        {Array.from({ length: 10 }).map((_, i) => (
                          <line key={`h${i}`} x1="0" y1={i * 25} x2="400" y2={i * 25} stroke="currentColor" strokeWidth="0.3" className="text-slate-300 dark:text-slate-600" />
                        ))}
                        {Array.from({ length: 16 }).map((_, i) => (
                          <line key={`v${i}`} x1={i * 25} y1="0" x2={i * 25} y2="250" stroke="currentColor" strokeWidth="0.3" className="text-slate-300 dark:text-slate-600" />
                        ))}
                        {/* Roads */}
                        <path d="M50,50 L350,50" stroke="#94a3b8" strokeWidth="2" fill="none" />
                        <path d="M50,120 L350,120" stroke="#94a3b8" strokeWidth="2" fill="none" />
                        <path d="M50,200 L350,200" stroke="#94a3b8" strokeWidth="2" fill="none" />
                        <path d="M100,20 L100,230" stroke="#94a3b8" strokeWidth="2" fill="none" />
                        <path d="M200,20 L200,230" stroke="#94a3b8" strokeWidth="2" fill="none" />
                        <path d="M300,20 L300,230" stroke="#94a3b8" strokeWidth="2" fill="none" />
                        {/* Risk zones */}
                        <circle cx="120" cy="80" r="35" fill="#ef4444" opacity="0.15" />
                        <circle cx="120" cy="80" r="20" fill="#ef4444" opacity="0.25" />
                        <circle cx="250" cy="140" r="30" fill="#f97316" opacity="0.15" />
                        <circle cx="250" cy="140" r="18" fill="#f97316" opacity="0.25" />
                        <circle cx="320" cy="60" r="25" fill="#eab308" opacity="0.15" />
                        <circle cx="80" cy="180" r="28" fill="#22c55e" opacity="0.15" />
                        {/* Sensor dots */}
                        <circle cx="120" cy="80" r="4" fill="#ef4444" className="animate-pulse" />
                        <circle cx="250" cy="140" r="4" fill="#f97316" />
                        <circle cx="320" cy="60" r="3" fill="#eab308" />
                        <circle cx="80" cy="180" r="3" fill="#22c55e" />
                        <circle cx="180" cy="100" r="3" fill="#0ea5e9" />
                        <circle cx="300" cy="180" r="3" fill="#0ea5e9" />
                        {/* Labels */}
                        <text x="120" y="70" textAnchor="middle" className="fill-red-600 dark:fill-red-400" fontSize="8" fontWeight="bold">ADYAR</text>
                        <text x="250" y="130" textAnchor="middle" className="fill-orange-600 dark:fill-orange-400" fontSize="8" fontWeight="bold">T.NAGAR</text>
                        <text x="320" y="50" textAnchor="middle" className="fill-yellow-600 dark:fill-yellow-400" fontSize="7" fontWeight="bold">VELACHERY</text>
                        <text x="80" y="170" textAnchor="middle" className="fill-green-600 dark:fill-green-400" fontSize="7" fontWeight="bold">ANNA NAGAR</text>
                      </svg>
                    </div>
                  </div>

                  {/* Zone status cards */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider mb-2">Zone Status</h4>
                    {zoneCards.map((zone, i) => (
                      <div
                        key={i}
                        className={`rounded-xl border p-3 ${
                          zone.color === 'red'
                            ? 'bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-900/50'
                            : zone.color === 'orange'
                            ? 'bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-900/50'
                            : zone.color === 'yellow'
                            ? 'bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-900/50'
                            : 'bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-900/50'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-bold text-slate-800 dark:text-slate-100">{zone.name}</span>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            zone.color === 'red'
                              ? 'bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400'
                              : zone.color === 'orange'
                              ? 'bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400'
                              : zone.color === 'yellow'
                              ? 'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-600 dark:text-yellow-400'
                              : 'bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400'
                          }`}>
                            {zone.status}
                          </span>
                        </div>
                        <div className="w-full h-1.5 rounded-full bg-slate-200 dark:bg-slate-700">
                          <div
                            className={`h-full rounded-full transition-all ${
                              zone.color === 'red' ? 'bg-red-500' : zone.color === 'orange' ? 'bg-orange-500' : zone.color === 'yellow' ? 'bg-yellow-500' : 'bg-green-500'
                            }`}
                            style={{ width: `${zone.risk}%` }}
                          />
                        </div>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">Risk Score: {zone.risk}%</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'analytics' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Water level chart */}
                  <div className="rounded-xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-4">
                    <div className="flex items-center gap-2 mb-4">
                      <Droplets className="w-4 h-4 text-sky-500" />
                      <span className="text-xs font-bold text-slate-700 dark:text-slate-200">Water Level & Rainfall</span>
                    </div>
                    <ResponsiveContainer width="100%" height={200}>
                      <AreaChart data={floodData}>
                        <defs>
                          <linearGradient id="waterGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
                          </linearGradient>
                          <linearGradient id="rainGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.2} />
                            <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                        <XAxis dataKey="time" tick={{ fontSize: 10 }} stroke="#94a3b8" />
                        <YAxis tick={{ fontSize: 10 }} stroke="#94a3b8" />
                        <Tooltip contentStyle={{ fontSize: 11, borderRadius: 8 }} />
                        <Area type="monotone" dataKey="level" stroke="#0ea5e9" fill="url(#waterGrad)" strokeWidth={2} />
                        <Area type="monotone" dataKey="rainfall" stroke="#06b6d4" fill="url(#rainGrad)" strokeWidth={1.5} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Risk distribution */}
                  <div className="rounded-xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-4">
                    <div className="flex items-center gap-2 mb-4">
                      <Shield className="w-4 h-4 text-sky-500" />
                      <span className="text-xs font-bold text-slate-700 dark:text-slate-200">Zone Risk Distribution</span>
                    </div>
                    <div className="flex items-center gap-6">
                      <ResponsiveContainer width="50%" height={180}>
                        <PieChart>
                          <Pie data={zoneData} cx="50%" cy="50%" innerRadius={40} outerRadius={70} paddingAngle={3} dataKey="value">
                            {zoneData.map((entry, i) => (
                              <Cell key={i} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip contentStyle={{ fontSize: 11, borderRadius: 8 }} />
                        </PieChart>
                      </ResponsiveContainer>
                      <div className="space-y-2">
                        {zoneData.map((z, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: z.color }} />
                            <span className="text-[10px] text-slate-600 dark:text-slate-300 font-medium">{z.name} - {z.status}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Sensor status */}
                  <div className="rounded-xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-4">
                    <div className="flex items-center gap-2 mb-4">
                      <Activity className="w-4 h-4 text-sky-500" />
                      <span className="text-xs font-bold text-slate-700 dark:text-slate-200">Sensor Uptime by Zone</span>
                    </div>
                    <ResponsiveContainer width="100%" height={180}>
                      <BarChart data={sensorData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                        <XAxis dataKey="zone" tick={{ fontSize: 10 }} stroke="#94a3b8" />
                        <YAxis tick={{ fontSize: 10 }} stroke="#94a3b8" />
                        <Tooltip contentStyle={{ fontSize: 11, borderRadius: 8 }} />
                        <Bar dataKey="active" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="total" fill="#e2e8f0" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Risk trend */}
                  <div className="rounded-xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-4">
                    <div className="flex items-center gap-2 mb-4">
                      <AlertTriangle className="w-4 h-4 text-amber-500" />
                      <span className="text-xs font-bold text-slate-700 dark:text-slate-200">Flood Risk Trend (24h)</span>
                    </div>
                    <ResponsiveContainer width="100%" height={180}>
                      <LineChart data={floodData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                        <XAxis dataKey="time" tick={{ fontSize: 10 }} stroke="#94a3b8" />
                        <YAxis tick={{ fontSize: 10 }} stroke="#94a3b8" />
                        <Tooltip contentStyle={{ fontSize: 11, borderRadius: 8 }} />
                        <Line type="monotone" dataKey="risk" stroke="#f59e0b" strokeWidth={2.5} dot={{ fill: '#f59e0b', r: 3 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              )}

              {activeTab === 'alerts' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider">Recent Alerts</h4>
                    <span className="text-[10px] text-slate-400">5 active alerts</span>
                  </div>
                  {alertLog.map((alert, i) => (
                    <div
                      key={i}
                      className={`flex items-start gap-3 rounded-xl border p-3 ${
                        alert.type === 'CRITICAL'
                          ? 'bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-900/50'
                          : alert.type === 'WARNING'
                          ? 'bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900/50'
                          : 'bg-sky-50 dark:bg-sky-950/20 border-sky-200 dark:border-sky-900/50'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                        alert.type === 'CRITICAL'
                          ? 'bg-red-100 dark:bg-red-900/50'
                          : alert.type === 'WARNING'
                          ? 'bg-amber-100 dark:bg-amber-900/50'
                          : 'bg-sky-100 dark:bg-sky-900/50'
                      }`}>
                        <Bell className={`w-4 h-4 ${
                          alert.type === 'CRITICAL' ? 'text-red-500' : alert.type === 'WARNING' ? 'text-amber-500' : 'text-sky-500'
                        }`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                            alert.type === 'CRITICAL'
                              ? 'bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400'
                              : alert.type === 'WARNING'
                              ? 'bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400'
                              : 'bg-sky-100 dark:bg-sky-900/50 text-sky-600 dark:text-sky-400'
                          }`}>
                            {alert.type}
                          </span>
                          <span className="text-[10px] text-slate-400">{alert.time}</span>
                        </div>
                        <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">{alert.zone}</p>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400">{alert.msg}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Dashboard footer stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-slate-200 dark:bg-slate-700 border-t border-slate-200 dark:border-slate-800">
              {[
                { icon: CloudRain, label: 'Rainfall Today', value: '142mm', color: 'text-sky-500' },
                { icon: Droplets, label: 'Avg Water Level', value: '2.4m', color: 'text-cyan-500' },
                { icon: Shield, label: 'Zones Monitored', value: '28', color: 'text-emerald-500' },
                { icon: AlertTriangle, label: 'Active Alerts', value: '12', color: 'text-amber-500' },
              ].map((s, i) => (
                <div key={i} className="bg-white dark:bg-slate-900 p-4 flex items-center gap-3">
                  <s.icon className={`w-5 h-5 ${s.color} shrink-0`} />
                  <div>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">{s.label}</p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">{s.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
