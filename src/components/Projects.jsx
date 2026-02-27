import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import Section from './ui/Section';
import Card from './ui/Card';

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

const colorMap = {
    cyan: {
        tech: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
        dot: 'bg-cyan-400',
        glow: 'group-hover:shadow-[0_0_40px_rgba(6,182,212,0.12)]',
        border: 'group-hover:border-cyan-500/30',
        badge: 'text-cyan-400',
        gradient: 'from-cyan-500/15 via-transparent to-transparent',
        btn: 'border-cyan-500/25 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/50',
    },
    violet: {
        tech: 'bg-violet-500/10 text-violet-300 border-violet-500/20',
        dot: 'bg-violet-400',
        glow: 'group-hover:shadow-[0_0_40px_rgba(139,92,246,0.12)]',
        border: 'group-hover:border-violet-500/30',
        badge: 'text-violet-400',
        gradient: 'from-violet-500/15 via-transparent to-transparent',
        btn: 'border-violet-500/25 text-violet-400 hover:bg-violet-500/10 hover:border-violet-500/50',
    },
    emerald: {
        tech: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
        dot: 'bg-emerald-400',
        glow: 'group-hover:shadow-[0_0_40px_rgba(16,185,129,0.12)]',
        border: 'group-hover:border-emerald-500/30',
        badge: 'text-emerald-400',
        gradient: 'from-emerald-500/15 via-transparent to-transparent',
        btn: 'border-emerald-500/25 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-500/50',
    },
};
function ProjectCard({ project, index }) {
    const c = colorMap[project.color] || colorMap.cyan;

    return (
        <Card
            delay={index * 0.1}
            className={`group relative overflow-hidden transition-all duration-400 p-0 ${c.glow} ${c.border}`}
        >
            {/* Top gradient accent */}
            <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${c.gradient}`} />
            <div className={`absolute top-0 left-0 w-32 h-32 rounded-full bg-gradient-to-br ${c.gradient} blur-3xl opacity-60 pointer-events-none`} />

            <div className="relative z-10 p-6 sm:p-8 flex flex-col h-full">
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-4">
                    <div>
                        <div className={`text-[10px] font-mono font-semibold tracking-widest ${c.badge} mb-2 uppercase`}>
                            {project.subtitle}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-text-primary)] leading-tight">{project.title}</h3>
                    </div>
                    <span className={`w-2 h-2 rounded-full flex-shrink-0 mt-2 ${c.dot}`} />
                </div>

                {/* Description */}
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map(t => (
                        <span
                            key={t}
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium border ${c.tech}`}
                        >
                            {t}
                        </span>
                    ))}
                </div>

                {/* Key Features */}
                <ul className="space-y-2 mb-6">
                    {project.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]">
                            <span className={`mt-[6px] w-[5px] h-[5px] rounded-full flex-shrink-0 ${c.dot}`} />
                            {f}
                        </li>
                    ))}
                </ul>

                {/* Actions (Pushed to bottom) */}
                <div className="flex flex-wrap items-center gap-3 mt-auto pt-4 border-t border-[var(--color-border-subtle)]">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold border transition-all duration-200 ${c.btn}`}
                    >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                        GitHub
                    </a>
                </div>
            </div>
        </Card>
    );
}

export default function Projects() {
    return (
        <Section id="projects" title="03. Projects" subtitle={<>What I&apos;ve <span className="gradient-text">Built</span></>}>
            <div className="absolute top-1/2 right-0 w-[40vw] h-[40vw] max-w-lg rounded-full bg-[var(--color-accent-violet)]/5 blur-[140px] pointer-events-none" />

            <div className="relative z-10 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.id} project={project} index={i} />
                    ))}
                </div>

                {/* GitHub CTA */}
                <motion.div {...fadeUp(0.3)} className="mt-16 text-center">
                    <a
                        href="https://github.com/Haneesh-M"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] border border-[var(--color-border-subtle)] hover:border-[var(--color-border-glow)] bg-[var(--color-bg-glass)] hover:bg-[var(--color-bg-secondary)] px-8 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-1 shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                        View All on GitHub
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M7 17L17 7M7 7h10v10" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </Section>
    );
}
