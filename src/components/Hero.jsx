import { motion } from 'framer-motion';
import { personal } from '../data/personal';

export default function Hero() {
    return (
        <section id="hero" className="w-full min-h-[90vh] flex flex-col justify-center px-[5%] md:px-[8%] lg:px-[12%] py-20 mt-16">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-4xl"
            >
                <div className="inline-flex items-center gap-2 mb-6">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-sm font-bold text-[var(--color-text-secondary)] uppercase tracking-wide">
                        Available for New Opportunities
                    </span>
                </div>

                <h1 className="text-6xl sm:text-7xl md:text-[5.5rem] font-black text-[var(--color-text-primary)] tracking-tighter leading-[1] mb-6">
                    Haneesh <br className="sm:hidden" />
                    Markapudi<span className="text-[#818cf8]">.</span>
                </h1>

                <h2 className="text-2xl md:text-4xl text-[var(--color-text-secondary)] font-medium leading-tight mb-8">
                    I build exceptional digital experiences.
                </h2>

                <p className="text-lg md:text-xl text-[var(--color-text-muted)] leading-relaxed max-w-2xl mb-12">
                    {personal.description}
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                    <button
                        onClick={() => {
                            const cur = document.getElementById('projects');
                            if (cur) {
                                const y = cur.getBoundingClientRect().top + window.scrollY - 80;
                                window.scrollTo({ top: y, behavior: 'smooth' });
                            }
                        }}
                        className="px-8 py-4 bg-[var(--color-text-primary)] text-[var(--color-bg-primary)] font-bold text-lg hover:bg-[#818cf8] hover:text-white transition-colors duration-300"
                    >
                        Check out my work
                    </button>

                    <div className="flex items-center gap-6">
                        {[
                            { href: personal.github, icon: <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />, label: 'GitHub' },
                            { href: personal.linkedin, icon: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>, label: 'LinkedIn' },
                            { href: `mailto:${personal.email}`, icon: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></>, label: 'Email' },
                        ].map(({ href, icon, label }, i) => (
                            <a
                                key={i}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-300"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    {icon}
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
