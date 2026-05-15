import { Droplets, Linkedin, Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-cyan-400 flex items-center justify-center">
                <Droplets className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-white">
                VARUNA<span className="text-sky-400">-X</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              AI-Powered Flood Intelligence & Drainage Response System for smart cities across India.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: 'Problem', href: '#problem' },
                { label: 'Solution', href: '#solution' },
                { label: 'Features', href: '#features' },
                { label: 'Dashboard', href: '#dashboard' },
                { label: 'Hardware', href: '#hardware' },
                { label: 'Tech Stack', href: '#techstack' },
                { label: 'Impact', href: '#impact' },
                { label: 'Team', href: '#team' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-400 hover:text-sky-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-4">Connect</h4>
            <div className="flex items-center gap-3 mb-4">
              <a href="#" className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:bg-slate-700 transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:bg-slate-700 transition-all">
                <Github className="w-4 h-4" />
              </a>
              <a href="mailto:hactivatorsniral@gmail.com" className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:bg-slate-700 transition-all">
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <p className="text-sm text-slate-400">
              hactivatorsniral@gmail.com
            </p>
            <p className="text-sm text-slate-400 mt-1">
              +91 82480 65826
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            NIRAL Hackathon 2026 | Team HACTIVATORS
          </p>
          <p className="text-xs text-slate-600">
            Built with purpose for a flood-resilient India
          </p>
        </div>
      </div>
    </footer>
  );
}
