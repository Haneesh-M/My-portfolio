import { motion } from 'framer-motion';
import { personal } from '../data/personal';

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 32 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Contact() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#818cf8]/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#3b82f6]/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.h2 {...fadeUp(0.1)} className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
                        Let's <span className="gradient-text-purple">Connect</span>
                    </motion.h2>
                    <motion.p {...fadeUp(0.2)} className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
                        Feel free to reach out for collaborations, opportunities, or just to say hi!
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left Column: Contact Info */}
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="flex flex-col gap-8"
                    >
                        <motion.div {...fadeUp(0.3)}>
                            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Get in Touch</h3>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8">
                                I'm actively looking for new opportunities. Whether you have a question about my work or want to build something scalable together, my inbox is always open.
                            </p>
                        </motion.div>

                        <div className="flex flex-col gap-6 mt-auto">
                            {/* Email Card */}
                            <motion.a
                                {...fadeUp(0.4)}
                                href={`mailto:${personal.email}`}
                                className="flex items-center gap-6 p-6 rounded-2xl bg-white dark:bg-[#151b2b] border border-slate-200 dark:border-[#2d3748] hover:border-purple-500 dark:hover:border-[#818cf8]/50 transition-colors group shadow-sm dark:shadow-none"
                            >
                                <div className="w-12 h-12 rounded-full gradient-bg-purple flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform shadow-md">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-[var(--color-text-secondary)] mb-1">Email</p>
                                    <p className="text-lg font-medium text-slate-900 dark:text-white">{personal.email}</p>
                                </div>
                            </motion.a>

                            {/* Social Cards */}
                            <div className="grid grid-cols-2 gap-4">
                                <motion.a
                                    {...fadeUp(0.5)}
                                    href={personal.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-[#151b2b] border border-slate-200 dark:border-[#2d3748] hover:border-blue-500 transition-colors group shadow-sm dark:shadow-none"
                                >
                                    <div className="text-[#3b82f6] group-hover:scale-110 transition-transform">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                            <rect x="2" y="9" width="4" height="12" />
                                            <circle cx="4" cy="4" r="2" />
                                        </svg>
                                    </div>
                                    <span className="font-medium text-slate-900 dark:text-white">LinkedIn</span>
                                </motion.a>

                                <motion.a
                                    {...fadeUp(0.6)}
                                    href={personal.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-[#151b2b] border border-slate-200 dark:border-[#2d3748] hover:border-slate-800 dark:hover:border-white/50 transition-colors group shadow-sm dark:shadow-none"
                                >
                                    <div className="text-slate-800 dark:text-white group-hover:scale-110 transition-transform">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                        </svg>
                                    </div>
                                    <span className="font-medium text-slate-900 dark:text-white">GitHub</span>
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Contact Form */}
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        {...fadeUp(0.4)}
                        className="bg-white dark:bg-[#151b2b] rounded-3xl p-8 border border-slate-200 dark:border-[#2d3748] shadow-lg dark:shadow-none"
                    >
                        <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Send a Message</h3>
                        <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-sm font-medium text-[var(--color-text-secondary)]">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="John Doe"
                                    className="px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-[#2d3748] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-purple-500 dark:focus:border-[#818cf8] transition-colors"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-sm font-medium text-[var(--color-text-secondary)]">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="john@example.com"
                                    className="px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-[#2d3748] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-purple-500 dark:focus:border-[#818cf8] transition-colors"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-sm font-medium text-[var(--color-text-secondary)]">Your Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    placeholder="How can I help you?"
                                    className="px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-[#2d3748] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-purple-500 dark:focus:border-[#818cf8] transition-colors resize-none"
                                />
                            </div>
                            <button
                                type="submit"
                                className="mt-2 w-full py-4 rounded-xl gradient-bg-purple text-white font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-md"
                            >
                                Send Message
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="22" y1="2" x2="11" y2="13" />
                                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                                </svg>
                            </button>
                        </form>
                    </motion.div>
                </div>

                {/* Footer CTA Block */}
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    {...fadeUp(0.6)}
                    className="mt-32 max-w-4xl mx-auto rounded-3xl p-10 sm:p-14 border border-[#818cf8]/20 relative overflow-hidden text-center"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1]/10 to-[#a855f7]/10" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

                    <div className="relative z-10">
                        <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                            Ready to Build Something <span className="text-[#818cf8]">Amazing</span>?
                        </h3>
                        <p className="text-[var(--color-text-secondary)] text-lg mb-8 max-w-2xl mx-auto">
                            Let's discuss how my backend and systems architecture skills can help your team scale effectively.
                        </p>
                        <a
                            href={`mailto:${personal.email}?subject=Coffee Chat Inquiry`}
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-700 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-[#0b0f19] font-bold hover:scale-105 transition-all shadow-md"
                        >
                            Schedule a Coffee Chat
                            <span className="text-xl">☕</span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
