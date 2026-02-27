import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [progress, setProgress] = useState(0);
    const [active, setActive] = useState('');

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20);

            // Progress bar
            const total = document.documentElement.scrollHeight - window.innerHeight;
            setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);

            // Active section detection
            const sections = navLinks.map(l => l.href.replace('#', ''));
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el && window.scrollY >= el.offsetTop - 120) {
                    setActive(sections[i]);
                    break;
                }
            }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleNav = (e, href) => {
        e.preventDefault();
        setMenuOpen(false);
        const target = document.querySelector(href);
        if (target) {
            const offset = 72;
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    return (
        <>
            {/* Scroll Progress Bar */}
            <div
                className="fixed top-0 left-0 z-[200] h-[2px] transition-all duration-100"
                style={{
                    width: `${progress}%`,
                    background: 'linear-gradient(90deg, #06b6d4, #8b5cf6)',
                }}
            />

            <motion.header
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className={`fixed top-0 left-0 right-0 z-[100] transition-colors duration-300 ${scrolled
                    ? 'bg-[var(--color-bg-primary)]/90 backdrop-blur-xl border-b border-[var(--color-border-subtle)] shadow-[0_4px_24px_rgba(0,0,0,0.1)]'
                    : 'bg-transparent'
                    }`}
            >
                <nav className="max-w-6xl mx-auto px-6 h-[70px] flex items-center justify-between">
                    {/* Logo & Avatar */}
                    <a
                        href="#hero"
                        onClick={e => handleNav(e, '#hero')}
                        className="flex items-center gap-3 font-bold text-lg tracking-tight text-slate-900 dark:text-white hover:opacity-80 transition-opacity"
                    >
                        <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-tr from-orange-400 to-purple-600 p-[2px] shadow-md flex-shrink-0">
                            <div className="w-full h-full bg-[#0b0f19] rounded-full overflow-hidden flex items-center justify-center">
                                {/* Placeholder for Profile Photo */}
                                <svg className="w-6 h-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                {/* Uncomment below when placing profile.jpg in public/ */}
                                {/* <img src="/profile.jpg" alt="Haneesh" className="w-full h-full object-cover" /> */}
                            </div>
                        </div>
                        <span className="hidden sm:block text-blue-600 dark:text-blue-500">Haneesh M</span>
                    </a>

                    {/* Desktop Links */}
                    <ul className="hidden md:flex items-center gap-6">
                        {navLinks.map(link => {
                            const id = link.href.replace('#', '');
                            const isActive = active === id;
                            return (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={e => handleNav(e, link.href)}
                                        className={`nav-link-underline text-sm font-medium transition-colors cursor-pointer ${isActive
                                            ? 'text-[#818cf8] active'
                                            : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                                            }`}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>

                    {/* CTA */}
                    <div className="hidden md:flex items-center">
                        <ThemeToggle />
                    </div>

                    {/* Mobile Hamburger & Theme Toggle */}
                    <div className="md:hidden flex items-center gap-4">
                        <ThemeToggle />
                        <button
                            onClick={() => setMenuOpen(v => !v)}
                            className="flex flex-col gap-[5px] p-2 group"
                            aria-label="Toggle menu"
                        >
                            <span
                                className={`block w-5 h-[1.5px] bg-slate-300 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''
                                    }`}
                            />
                            <span
                                className={`block w-5 h-[1.5px] bg-slate-300 transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''
                                    }`}
                            />
                            <span
                                className={`block w-5 h-[1.5px] bg-slate-300 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''
                                    }`}
                            />
                        </button>
                    </div>
                </nav>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-[70px] left-0 right-0 z-[99] bg-[var(--color-bg-primary)]/95 backdrop-blur-xl border-b border-[var(--color-border-subtle)] px-6 py-4 md:hidden"
                    >
                        <ul className="flex flex-col gap-1">
                            {navLinks.map(link => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={e => handleNav(e, link.href)}
                                        className="block px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.04] rounded-lg transition-all"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                            <li className="mt-2 pt-2 border-t border-white/[0.06]">
                                <a
                                    href="#contact"
                                    onClick={e => handleNav(e, '#contact')}
                                    className="block px-4 py-3 text-sm font-semibold text-center text-cyan-400 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/10 transition-all"
                                >
                                    Hire Me
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
