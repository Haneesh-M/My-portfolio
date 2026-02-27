import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';
import Section from './ui/Section';

export default function Skills() {
    return (
        <Section id="skills" title="Expertise.">
            <div className="w-full flex flex-col gap-24">
                {skillCategories.map((cat, i) => (
                    <motion.div
                        key={cat.label}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="w-full grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12"
                    >
                        {/* Category Label */}
                        <div className="md:col-span-1 flex flex-col md:border-r border-[var(--color-border-subtle)] pr-8">
                            <div className="text-4xl text-[var(--color-text-primary)] mb-4">
                                {cat.icon}
                            </div>
                            <h3 className="text-2xl font-black text-[var(--color-text-primary)] tracking-tight">
                                {cat.label}
                            </h3>
                        </div>

                        {/* Skills List */}
                        <div className="md:col-span-3 flex flex-wrap gap-x-12 gap-y-6 items-center">
                            {cat.skills.map(skill => (
                                <span key={skill} className="text-lg font-bold text-[var(--color-text-secondary)] hover:text-[#818cf8] transition-colors cursor-default">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
