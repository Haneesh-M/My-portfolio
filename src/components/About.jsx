import { motion } from 'framer-motion';
import { personal } from '../data/personal';
import Section from './ui/Section';

export default function About() {
    return (
        <Section id="about" title="About.">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20"
            >
                {/* Main Text Column */}
                <div className="lg:col-span-8 flex flex-col">
                    <h3 className="text-3xl lg:text-4xl font-black text-[var(--color-text-primary)] mb-8 tracking-tight">
                        Engineering digital solutions<br />with precision.
                    </h3>
                    <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed font-medium">
                        {personal.professionalSummary}
                    </p>
                </div>

                {/* Capabilities Column */}
                <div className="lg:col-span-4 flex flex-col">
                    <h4 className="text-lg font-bold text-[var(--color-text-primary)] uppercase tracking-widest mb-8 border-b border-[var(--color-border-subtle)] pb-4">
                        Core Focus
                    </h4>
                    <div className="flex flex-col gap-6">
                        {personal.strengths.map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-start gap-4"
                            >
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#818cf8]" />
                                <span className="text-lg font-bold text-[var(--color-text-secondary)]">
                                    {s}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </Section>
    );
}
