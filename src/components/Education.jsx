import { motion } from 'framer-motion';
import { education, certifications, personal } from '../data/personal';
import Section from './ui/Section';
import Card from './ui/Card';
import Button from './ui/Button';

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

const certColorMap = {
    cyan: {
        border: 'border-cyan-500/20 hover:border-cyan-500/40',
        bg: 'bg-cyan-500/5 hover:bg-cyan-500/8',
        badge: 'text-cyan-400',
    },
    violet: {
        border: 'border-violet-500/20 hover:border-violet-500/40',
        bg: 'bg-violet-500/5 hover:bg-violet-500/8',
        badge: 'text-violet-400',
    },
    emerald: {
        border: 'border-emerald-500/20 hover:border-emerald-500/40',
        bg: 'bg-emerald-500/5 hover:bg-emerald-500/8',
        badge: 'text-emerald-400',
    },
};

export default function Education() {
    return (
        <Section id="education" title="04. Education" subtitle={<>Academic <span className="gradient-text">Background</span></>}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70vw] h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 relative z-10 w-full">
                {/* Education Timeline */}
                <div>
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-[18px] top-6 bottom-6 w-[1px] bg-gradient-to-b from-[var(--color-accent-cyan)]/40 via-[var(--color-accent-violet)]/30 to-transparent" />

                        <div className="space-y-6">
                            {education.map((edu, i) => (
                                <div
                                    key={i}
                                    className="relative flex gap-5"
                                >
                                    {/* Timeline dot */}
                                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[var(--color-bg-primary)] border border-[var(--color-border-subtle)] flex items-center justify-center text-lg z-10 mt-2">
                                        {edu.icon}
                                    </div>

                                    {/* Card */}
                                    <Card delay={0.1 + i * 0.1} className="flex-1 p-5">
                                        <div className="flex flex-col sm:flex-row items-start justify-between gap-2 mb-2 sm:mb-1">
                                            <h3 className="text-sm font-bold text-[var(--color-text-primary)] leading-tight pr-2">{edu.degree}</h3>
                                            <span className="text-xs font-mono text-[var(--color-text-muted)] flex-shrink-0 bg-[var(--color-bg-secondary)] px-2.5 py-1 rounded-full border border-[var(--color-border-subtle)]">
                                                {edu.period}
                                            </span>
                                        </div>
                                        <div className="text-xs text-[var(--color-text-secondary)] mb-1">{edu.institution}</div>
                                        <div className="text-xs text-[var(--color-text-muted)]">{edu.location}</div>
                                        <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[var(--color-accent-emerald)]/10 border border-[var(--color-accent-emerald)]/20">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-emerald)]" />
                                            <span className="text-xs font-bold text-[var(--color-accent-emerald)]">{edu.score}</span>
                                        </div>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Certifications + Resume */}
                <div className="space-y-5">
                    <motion.div {...fadeUp(0.15)}>
                        <h3 className="text-xs font-mono font-semibold tracking-widest text-slate-500 uppercase mb-4">
                            Certifications
                        </h3>
                        <div className="space-y-3">
                            {certifications.map((cert, i) => {
                                const c = certColorMap[cert.color] || certColorMap.cyan;
                                return (
                                    <motion.a
                                        key={i}
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        {...fadeUp(0.2 + i * 0.08)}
                                        className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 ${c.border} ${c.bg} group cursor-pointer`}
                                    >
                                        <span className="text-xl">{cert.icon}</span>
                                        <div className="flex-1 min-w-0">
                                            <div className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors truncate">
                                                {cert.title}
                                            </div>
                                            <div className={`text-xs font-medium ${c.badge}`}>{cert.issuer}</div>
                                        </div>
                                        <svg className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M7 17L17 7M7 7h10v10" />
                                        </svg>
                                    </motion.a>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Resume Download */}
                    <motion.div
                        {...fadeUp(0.4)}
                        className="p-5 rounded-2xl border border-dashed border-white/10 hover:border-cyan-500/30 transition-all duration-300 text-center group"
                    >
                        <div className="text-3xl mb-3">📄</div>
                        <h4 className="text-sm font-semibold text-slate-200 mb-1">Full Resume</h4>
                        <p className="text-xs text-slate-500 mb-4">Download my complete resume with all details.</p>
                        <a
                            href={personal.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/25 text-cyan-400 text-sm font-semibold hover:border-cyan-500/50 hover:from-cyan-500/15 hover:to-violet-500/15 transition-all duration-200"
                        >
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 15V3M6 9l6 6 6-6M3 21h18" />
                            </svg>
                            Download Resume
                        </a>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}
