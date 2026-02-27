import { motion } from 'framer-motion';

export default function Section({ id, title, children, className = '', containerClass = '' }) {
    return (
        <section id={id} className={`w-full py-24 sm:py-32 ${className}`}>
            <div className={`w-full px-[5%] md:px-[8%] lg:px-[12%] mx-auto ${containerClass}`}>
                {title && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16 md:mb-20"
                    >
                        <h2 className="text-3xl md:text-5xl font-black text-[var(--color-text-primary)] tracking-tight">
                            {title}<span className="text-[#818cf8]">.</span>
                        </h2>
                    </motion.div>
                )}
                <div className="w-full">
                    {children}
                </div>
            </div>
        </section>
    );
}
