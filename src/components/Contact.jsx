import { motion } from 'framer-motion';
import { personal } from '../data/personal';
import Section from './ui/Section';

export default function Contact() {
    return (
        <Section id="contact" title="05. Contact">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col gap-8"
            >
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[var(--color-text-primary)] tracking-tighter">
                    Get In Touch.
                </h2>
                <p className="text-lg text-[var(--color-text-secondary)] max-w-xl leading-relaxed">
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                <div className="mt-8">
                    <a
                        href={`mailto:${personal.email}`}
                        className="px-8 py-4 bg-[var(--color-text-primary)] text-[var(--color-bg-primary)] text-sm font-bold uppercase tracking-widest hover:bg-[#818cf8] hover:text-white transition-colors inline-block"
                    >
                        Say Hello
                    </a>
                </div>
            </motion.div>
        </Section>
    );
}
