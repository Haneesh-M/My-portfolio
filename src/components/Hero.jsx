import { motion } from 'framer-motion';
import { personal } from '../data/personal';

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 32 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
    const handleScroll = (href) => {
        const el = document.querySelector(href);
        if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY - 72;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Ambient Glow Blobs */}
            <div className="ambient-glow-1 top-[-10%] left-[-10%]" />
            <div className="ambient-glow-2 bottom-0 right-[-10%]" />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 mt-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    {/* Left Content */}
                    <div className="flex flex-col items-start text-left">
                        <motion.h2 {...fadeUp(0.1)} className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-2">
                            Hello, I'm
                        </motion.h2>
                        <motion.h1 {...fadeUp(0.2)} className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-deep-purple mb-4">
                            Haneesh M
                        </motion.h1>
                        <motion.p {...fadeUp(0.3)} className="text-xl sm:text-2xl text-[var(--color-text-secondary)] mb-2 mt-4">
                            Software Engineer
                        </motion.p>
                        <motion.p {...fadeUp(0.4)} className="text-lg text-[var(--color-accent-blue)] mb-10">
                            Building Scalable Apps & Elegant Code Solutions
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div {...fadeUp(0.5)} className="flex flex-col sm:flex-row gap-4 mb-12">
                            <button
                                onClick={() => handleScroll('#projects')}
                                className="px-6 py-3 rounded-xl gradient-bg-purple text-white font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                            >
                                View My Work
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 5v14M19 12l-7 7-7-7" />
                                </svg>
                            </button>

                            <a
                                href={personal.resumeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 rounded-xl bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-[#2d3748] text-slate-900 dark:text-white font-medium hover:bg-slate-50 dark:hover:bg-[#151b2b] transition-colors flex items-center justify-center gap-2"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                                </svg>
                                Download Resume
                            </a>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div {...fadeUp(0.6)} className="flex items-center gap-6">
                            {[
                                { href: personal.github, icon: <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /> },
                                { href: personal.linkedin, icon: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></> },
                                { href: `mailto:${personal.email}`, icon: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></> },
                            ].map(({ href, icon }, i) => (
                                <a
                                    key={i}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                                >
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        {icon}
                                    </svg>
                                </a>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Content - Profile Image Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="relative hidden lg:flex justify-center items-center"
                    >
                        {/* Decorative background blobs for image */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/5" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/5" />

                        {/* Floating Dots */}
                        <div className="absolute top-10 right-20 w-3 h-3 rounded-full bg-[#a855f7] blur-[1px]" />
                        <div className="absolute top-32 right-10 w-4 h-4 rounded-full bg-[#818cf8] blur-[1px]" />
                        <div className="absolute bottom-20 right-24 w-4 h-4 rounded-full bg-[#3b82f6] blur-[1px]" />

                        {/* Image Circle */}
                        <div className="relative w-80 h-80 rounded-full bg-white overflow-hidden shadow-[0_0_40px_rgba(129,140,248,0.2)] flex items-center justify-center">
                            {/* Placeholder text (until user adds an image to assets) */}
                            <span className="text-slate-300 font-mono text-xl">Add Photo</span>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator Down Arrow */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <svg className="animate-bounce text-slate-400" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14M19 12l-7 7-7-7" />
                    </svg>
                </motion.div>
            </div>
        </section>
    );
}
