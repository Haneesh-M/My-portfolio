import { useState } from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';
import Section from './ui/Section';
import Card from './ui/Card';

const colorMap = {
    cyan: {
        badge: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-300 hover:border-cyan-400/50 hover:bg-cyan-500/15',
        icon: 'text-cyan-400',
        headerBg: 'from-cyan-500/10 to-transparent',
        dot: 'bg-cyan-400',
    },
    violet: {
        badge: 'bg-violet-500/10 border-violet-500/20 text-violet-300 hover:border-violet-400/50 hover:bg-violet-500/15',
        icon: 'text-violet-400',
        headerBg: 'from-violet-500/10 to-transparent',
        dot: 'bg-violet-400',
    },
    emerald: {
        badge: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300 hover:border-emerald-400/50 hover:bg-emerald-500/15',
        icon: 'text-emerald-400',
        headerBg: 'from-emerald-500/10 to-transparent',
        dot: 'bg-emerald-400',
    },
};

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

function SkillCard({ category, index }) {
    const c = colorMap[category.color] || colorMap.cyan;

    return (
        <Card delay={index * 0.07} className="p-6">
            <div className={`flex items-center gap-3 mb-5 pb-4 border-b border-[var(--color-border-subtle)]`}>
                <span className={`font-mono text-xl font-bold ${c.icon}`}>{category.icon}</span>
                <h3 className="text-sm font-semibold text-[var(--color-text-primary)] tracking-wide">{category.label}</h3>
                <span className={`ml-auto w-1.5 h-1.5 rounded-full ${c.dot} opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all`} />
            </div>
            <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                    <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05, y: -1 }}
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border cursor-default transition-all duration-200 font-mono ${c.badge}`}
                    >
                        {skill}
                    </motion.span>
                ))}
            </div>
        </Card>
    );
}

export default function Skills() {
    return (
        <Section id="skills" title="02. Skills" subtitle={<>Technical <span className="gradient-text">Arsenal</span></>}>
            <div className="absolute bottom-0 left-0 w-[50vw] h-[30vw] max-w-xl rounded-full bg-[var(--color-accent-cyan)]/5 blur-[140px] pointer-events-none" />

            <div className="relative z-10 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {skillCategories.map((cat, i) => (
                        <SkillCard key={cat.label} category={cat} index={i} />
                    ))}
                </div>
            </div>
        </Section>
    );
}
