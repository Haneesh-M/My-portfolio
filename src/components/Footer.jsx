import { motion } from 'framer-motion';
import { personal } from '../data/personal';

export default function Footer() {
    const year = new Date().getFullYear();
    const handleScroll = (href) => {
        const el = document.querySelector(href);
        if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY - 72;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    return (
        <footer className="relative border-t border-[var(--color-border-subtle)] bg-[var(--color-bg-primary)]">
            {/* Top gradient line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid sm:grid-cols-3 gap-10 mb-10">
                    {/* Brand */}
                    <div>
                        <div className="font-mono text-xl font-bold mb-3">
                            <span className="gradient-text">HM</span>
                            <span className="text-slate-600 ml-1">{'</>'}</span>
                        </div>
                        <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                            Building reliable, scalable, and intelligent systems. Backend Developer & ML Enthusiast.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-xs font-mono font-semibold tracking-widest text-slate-500 uppercase mb-4">Navigate</h4>
                        <ul className="space-y-2">
                            {['about', 'skills', 'projects', 'education', 'contact'].map(id => (
                                <li key={id}>
                                    <button
                                        onClick={() => handleScroll(`#${id}`)}
                                        className="text-sm text-slate-400 hover:text-white capitalize transition-colors"
                                    >
                                        {id}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-xs font-mono font-semibold tracking-widest text-slate-500 uppercase mb-4">Connect</h4>
                        <div className="flex gap-3">
                            {[
                                { href: personal.github, label: 'GitHub', icon: <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /> },
                                { href: personal.linkedin, label: 'LinkedIn', icon: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></> },
                                { href: `mailto:${personal.email}`, label: 'Email', icon: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></> },
                            ].map(({ href, label, icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="p-2.5 rounded-lg border border-white/[0.06] bg-white/[0.02] text-slate-500 hover:text-white hover:border-white/15 hover:bg-white/[0.06] transition-all"
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        {icon}
                                    </svg>
                                </a>
                            ))}
                        </div>
                        <p className="text-xs text-slate-600 mt-4">{personal.email}</p>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-xs text-slate-600">
                        © {year} Markapudi Haneesh. All rights reserved.
                    </p>
                    <button
                        onClick={() => handleScroll('#hero')}
                        className="flex items-center gap-2 text-xs text-slate-600 hover:text-slate-300 transition-colors group"
                    >
                        Back to top
                        <svg className="group-hover:-translate-y-0.5 transition-transform" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="18 15 12 9 6 15" />
                        </svg>
                    </button>
                </div>
            </div>
        </footer>
    );
}
