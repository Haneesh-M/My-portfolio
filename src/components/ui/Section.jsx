import { motion } from 'framer-motion';

export default function Section({ id, title, subtitle, children, className = '' }) {
    const fadeUp = (delay = 0) => ({
        initial: { opacity: 0, y: 28 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-60px' },
        transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
    });

    return (
        <section id={id} className={`relative py-24 sm:py-32 overflow-hidden ${className}`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
                {title && (
                    <div className="mb-12 md:mb-16">
                        <motion.div {...fadeUp(0)} className="flex items-center gap-3 mb-4">
                            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-accent-cyan)]">
                                {title}
                            </span>
                            <div className="flex-1 max-w-[80px] h-[1px] bg-gradient-to-r from-[var(--color-accent-cyan)]/50 to-transparent" />
                        </motion.div>

                        {subtitle && (
                            <motion.h2 {...fadeUp(0.1)} className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)]">
                                {subtitle}
                            </motion.h2>
                        )}
                    </div>
                )}

                {children}
            </div>
        </section>
    );
}
