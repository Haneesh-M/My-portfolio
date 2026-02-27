import { motion } from 'framer-motion';
import { personal } from '../data/personal';
import Section from './ui/Section';

export default function About() {
    return (
        <Section id="about" title="01. About">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col gap-8 text-[var(--color-text-secondary)] text-lg leading-relaxed"
            >
                <p>
                    {personal.professionalSummary}
                </p>
                <div className="flex flex-col gap-4 mt-6">
                    <h3 className="text-[var(--color-text-primary)] text-sm font-bold uppercase tracking-wider">Capabilities</h3>
                    {personal.strengths.map((s, i) => (
                        <div key={i} className="flex items-start gap-4">
                            <span className="text-[#818cf8] text-sm font-mono mt-1 shrink-0">▹</span>
                            <span className="text-base">{s}</span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </Section>
    );
}
