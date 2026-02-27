import { motion } from 'framer-motion';
import { personal } from '../data/personal';

export default function Hero() {
    return (
        <section id="hero" className="w-full min-h-[50vh] flex flex-col justify-center pt-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col gap-6"
            >
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[var(--color-text-primary)] tracking-tighter leading-[1.1]">
                    {personal.name}.<br />
                    <span className="text-[var(--color-text-secondary)] block mt-2">I build things for the web.</span>
                </h1>

                <p className="text-lg sm:text-xl text-[var(--color-text-secondary)] leading-relaxed mt-4 max-w-2xl">
                    {personal.description}
                </p>

                <div className="flex items-center gap-6 mt-8">
                    <button
                        onClick={() => {
                            const cur = document.getElementById('contact');
                            if (cur) {
                                const y = cur.getBoundingClientRect().top + window.scrollY - 100;
                                window.scrollTo({ top: y, behavior: 'smooth' });
                            }
                        }}
                        className="text-sm font-bold border-b-2 border-transparent text-[var(--color-text-primary)] hover:border-[var(--color-text-primary)] transition-colors pb-1"
                    >
                        Get in touch
                    </button>
                    <a
                        href={personal.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[#818cf8] transition-colors"
                    >
                        GitHub ↗
                    </a>
                    <a
                        href={personal.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[#818cf8] transition-colors"
                    >
                        LinkedIn ↗
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
