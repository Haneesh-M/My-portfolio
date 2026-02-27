import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';
import Section from './ui/Section';

export default function Skills() {
    return (
        <Section id="skills" title="02. Skills">
            <div className="flex flex-col gap-10">
                {skillCategories.map((cat, i) => (
                    <motion.div
                        key={cat.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8"
                    >
                        <h3 className="w-32 flex-shrink-0 text-[var(--color-text-primary)] font-bold">
                            {cat.label}
                        </h3>
                        <p className="text-[var(--color-text-secondary)] text-base leading-relaxed">
                            {cat.skills.join(', ')}
                        </p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
