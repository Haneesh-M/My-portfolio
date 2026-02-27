import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import Section from './ui/Section';

export default function Projects() {
    return (
        <Section id="projects" title="Work.">
            <div className="w-full flex flex-col gap-32">
                {projects.map((project, i) => (
                    <motion.article
                        key={project.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start"
                    >
                        {/* Title & Metadata */}
                        <div className="lg:col-span-4 flex flex-col">
                            <span className="text-sm font-bold text-[#818cf8] uppercase tracking-widest mb-4">
                                {project.subtitle}
                            </span>

                            <h3 className="text-4xl lg:text-5xl font-black text-[var(--color-text-primary)] tracking-tight mb-8">
                                {project.title}
                            </h3>

                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-4 text-[var(--color-text-primary)] font-bold text-lg hover:text-[#818cf8] transition-colors group w-max"
                            >
                                View Source
                                <svg className="transform group-hover:translate-x-2 transition-transform" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>

                        {/* Description & Tech */}
                        <div className="lg:col-span-8 flex flex-col">
                            <p className="text-xl lg:text-2xl text-[var(--color-text-secondary)] leading-relaxed mb-12 font-medium">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-4">
                                {project.tech.map(tech => (
                                    <span key={tech} className="px-5 py-2.5 bg-[var(--color-bg-primary)] border border-[var(--color-border-subtle)] text-sm font-bold text-[var(--color-text-primary)]">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.article>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-24 pt-12 border-t border-[var(--color-border-subtle)] flex justify-between items-center"
            >
                <span className="text-2xl font-bold text-[var(--color-text-primary)]">More on GitHub</span>
                <a
                    href="https://github.com/Haneesh-M"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-full bg-[var(--color-text-primary)] text-[var(--color-bg-primary)] hover:bg-[#818cf8] hover:text-white transition-colors"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </a>
            </motion.div>
        </Section>
    );
}
