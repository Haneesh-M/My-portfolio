import { motion } from 'framer-motion';

export default function Section({ id, title, children, className = '' }) {
    return (
        <section id={id} className={`w-full relative ${className}`}>
            {title && (
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-sm font-mono tracking-widest text-[#818cf8] uppercase mb-12"
                >
                    {title}
                </motion.h2>
            )}
            <div className="w-full">
                {children}
            </div>
        </section>
    );
}
