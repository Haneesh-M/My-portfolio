import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import Section from './ui/Section';

export default function Projects() {
    return (
        <Section id="projects" title="03. Projects">
            <div className="flex flex-col gap-16">
                {projects.map((project, i) => (
                    <motion.article
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex flex-col group"
                    >
                        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4 gap-2">
                            <h3 className="text-2xl font-bold text-[var(--color-text-primary)] group-hover:text-[#818cf8] transition-colors">
                                {project.title}
                            </h3>
                            <div className="flex items-center gap-4">
                                <span className="text-xs font-bold text-[#818cf8] uppercase tracking-wider md:hidden">{project.subtitle}</span>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[#818cf8] transition-colors hidden md:inline-flex"
                                >
                                    Source ↗
                                </a>
                            </div>
                        </div>
                        <span className="text-xs font-bold text-[#818cf8] uppercase tracking-wider hidden md:block mb-4 -mt-2">{project.subtitle}</span>
                        <p className="text-[var(--color-text-secondary)] text-lg mb-6 leading-relaxed">
                            {project.description}
                        </p>
                        <p className="text-sm font-mono text-[var(--color-text-muted)] mt-auto">
                            {project.tech.join(' · ')}
                        </p>

                        {/* Mobile active link */}
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-[var(--color-text-primary)] mt-4 md:hidden border-b border-transparent hover:border-[var(--color-text-primary)] self-start pb-1 transition-all"
                        >
                            View Source ↗
                        </a>
                    </motion.article>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-16"
            >
                <a
                    href="https://github.com/Haneesh-M"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium border-b border-[var(--color-border-subtle)] text-[var(--color-text-primary)] hover:border-[#818cf8] hover:text-[#818cf8] transition-colors pb-1 inline-flex items-center gap-2"
                >
                    View archive on GitHub
                </a>
            </motion.div>
        </Section>
    );
}
