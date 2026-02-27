import { motion } from 'framer-motion';
import { personal } from '../data/personal';
import Section from './ui/Section';
import Card from './ui/Card';

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function About() {
    return (
        <Section id="about" title="01. About" subtitle={<>Building systems that <span className="gradient-text">scale and perform</span></>}>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start relative z-10">
                {/* Left — Professional Summary */}
                <div className="flex flex-col h-full justify-center">
                    {personal.about.map((para, i) => (
                        <motion.p
                            key={i}
                            {...fadeUp(0.15 + i * 0.1)}
                            className="text-[var(--color-text-secondary)] text-[15px] sm:text-base leading-relaxed mb-6"
                        >
                            {para}
                        </motion.p>
                    ))}

                    {/* Links */}
                    <motion.div {...fadeUp(0.45)} className="flex gap-6 mt-10 flex-wrap">
                        <a
                            href={personal.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors group"
                        >
                            <svg className="group-hover:scale-110 transition-transform" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                            </svg>
                            GitHub
                        </a>
                        <a
                            href={personal.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors group"
                        >
                            <svg className="group-hover:scale-110 transition-transform" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                <rect x="2" y="9" width="4" height="12" />
                                <circle cx="4" cy="4" r="2" />
                            </svg>
                            LinkedIn
                        </a>
                        <a
                            href={`mailto:${personal.email}`}
                            className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors group"
                        >
                            <svg className="group-hover:scale-110 transition-transform" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                            {personal.email}
                        </a>
                    </motion.div>
                </div>

                {/* Right — Core Strengths */}
                <div className="w-full">
                    <Card delay={0.2} className="h-full">
                        <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-6 border-b border-[var(--color-border-subtle)] pb-4">
                            Core Capabilities
                        </h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                            {personal.strengths.map((s, i) => (
                                <li
                                    key={i}
                                    className="flex items-center gap-3 text-sm text-[var(--color-text-secondary)]"
                                >
                                    <svg className="w-4 h-4 text-[var(--color-accent-emerald)] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="font-medium">{s}</span>
                                </li>
                            ))}
                        </ul>
                    </Card>
                </div>
            </div>
        </Section>
    );
}
