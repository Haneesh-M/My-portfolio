import { motion } from 'framer-motion';
import { education, certifications } from '../data/personal';
import Section from './ui/Section';

export default function Education() {
    return (
        <Section id="education" title="Background.">
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">

                {/* Education List */}
                <div className="lg:col-span-6 flex flex-col">
                    <h3 className="text-2xl font-black text-[var(--color-text-primary)] mb-10 tracking-tight">Academic History</h3>
                    <div className="flex flex-col gap-12">
                        {education.map((edu, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col pb-12 border-b border-[var(--color-border-subtle)] last:border-0 last:pb-0"
                            >
                                <span className="text-sm font-bold text-[var(--color-text-secondary)] uppercase tracking-widest mb-3">
                                    {edu.period}
                                </span>
                                <h4 className="text-2xl font-black text-[var(--color-text-primary)] mb-2">
                                    {edu.degree}
                                </h4>
                                <p className="text-xl text-[var(--color-text-secondary)] font-medium mb-1">
                                    {edu.institution}
                                </p>
                                <p className="text-base text-[var(--color-text-muted)] mb-4">
                                    {edu.location}
                                </p>
                                <div className="inline-flex items-center gap-3">
                                    <span className="w-2 h-2 bg-[#818cf8] rounded-full" />
                                    <span className="text-sm font-bold text-[var(--color-text-primary)]">
                                        Grade: {edu.score}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Certifications Grid */}
                <div className="lg:col-span-6 flex flex-col">
                    <h3 className="text-2xl font-black text-[var(--color-text-primary)] mb-10 tracking-tight">Certifications</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {certifications.map((cert, i) => (
                            <motion.a
                                key={i}
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col group p-6 border border-[var(--color-border-subtle)] bg-[var(--color-bg-primary)] hover:border-[var(--color-text-primary)] transition-colors"
                            >
                                <div className="text-3xl text-[var(--color-text-secondary)] mb-6 group-hover:text-[#818cf8] transition-colors">
                                    {cert.icon}
                                </div>
                                <h4 className="text-lg font-bold text-[var(--color-text-primary)] leading-tight mb-2">
                                    {cert.title}
                                </h4>
                                <span className="text-xs font-bold uppercase tracking-widest text-[#818cf8]">
                                    {cert.issuer}
                                </span>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
