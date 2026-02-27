import { motion } from 'framer-motion';

export default function Card({ children, className = '', hoverEffect = true, delay = 0 }) {
    const fadeUp = {
        initial: { opacity: 0, y: 28 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-60px' },
        transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
    };

    return (
        <motion.div
            {...fadeUp}
            className={`glass-card p-6 h-full flex flex-col ${hoverEffect ? 'hover:border-[var(--color-border-glow)] hover:-translate-y-1' : ''
                } transition-all duration-300 ${className}`}
        >
            {children}
        </motion.div>
    );
}
