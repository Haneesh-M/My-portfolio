import { motion } from 'framer-motion';
import { education, certifications } from '../data/personal';
import Section from './ui/Section';

export default function Education() {
    return (
        <Section id="education" title="04. Education">
            <div className="flex flex-col gap-16">
                <div className="flex flex-col gap-10">
                    {education.map((edu, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8"
                        >
                            <span className="w-32 flex-shrink-0 text-sm font-mono text-[var(--color-text-muted)]">
                                {edu.period}
                            </span>
                            <div className="flex flex-col">
                                <h3 className="text-lg font-bold text-[var(--color-text-primary)]">{edu.degree}</h3>
                                <p className="text-base text-[var(--color-text-secondary)] mt-1">{edu.institution}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="flex flex-col gap-8 mt-4">
                    <h3 className="text-[var(--color-text-primary)] md:text-lg font-bold">Certifications</h3>
                    <div className="flex flex-col gap-4">
                        {certifications.map((cert, i) => (
                            <motion.a
                                key={i}
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-4 group hover:bg-[var(--color-bg-secondary)] -mx-4 px-4 py-2 rounded-lg transition-colors"
                            >
                                <span className="text-base text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)] transition-colors">
                                    {cert.title}
                                </span>
                                <span className="text-xs text-[var(--color-text-muted)] whitespace-nowrap hidden sm:block">
                                    — {cert.issuer}
                                </span>
                                <span className="text-[#818cf8] ml-auto transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                                    ↗
                                </span>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
