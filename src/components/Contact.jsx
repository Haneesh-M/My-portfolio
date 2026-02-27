import { motion } from 'framer-motion';
import { personal } from '../data/personal';
import Section from './ui/Section';

export default function Contact() {
    return (
        <Section id="contact" title="Reach Out.">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-full flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-24"
            >
                <div className="flex flex-col lg:w-1/2">
                    <h2 className="text-5xl lg:text-7xl font-black text-[var(--color-text-primary)] tracking-tighter leading-tight mb-8">
                        Let's build<br className="hidden lg:block" /> something<br /> together.
                    </h2>
                    <p className="text-xl lg:text-2xl text-[var(--color-text-secondary)] leading-relaxed font-medium mb-12">
                        I'm actively seeking new opportunities to collaborate on complex engineering problems.
                    </p>
                    <a
                        href={`mailto:${personal.email}`}
                        className="inline-flex items-center gap-4 bg-[var(--color-text-primary)] text-[var(--color-bg-primary)] px-8 py-4 font-bold text-lg hover:bg-[#818cf8] hover:text-white transition-colors self-start"
                    >
                        Send an Email
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>

                <div className="flex flex-col lg:w-1/2 pt-4">
                    <h3 className="text-xl font-bold text-[var(--color-text-primary)] uppercase tracking-widest mb-8 border-b border-[var(--color-border-subtle)] pb-4">
                        Connect Online
                    </h3>
                    <div className="flex flex-col gap-6">
                        <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-3xl font-bold text-[var(--color-text-secondary)] hover:text-[#818cf8] transition-colors flex items-center gap-4">
                            LinkedIn
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="opacity-50">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                        <a href={personal.github} target="_blank" rel="noopener noreferrer" className="text-3xl font-bold text-[var(--color-text-secondary)] hover:text-[#818cf8] transition-colors flex items-center gap-4">
                            GitHub
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="opacity-50">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                        <a href={`mailto:${personal.email}`} className="text-3xl font-bold text-[var(--color-text-secondary)] hover:text-[#818cf8] transition-colors flex items-center gap-4">
                            {personal.email}
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="opacity-50">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </motion.div>
        </Section>
    );
}
