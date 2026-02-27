import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { personal } from '../data/personal';

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleNav = (e, href) => {
        e.preventDefault();
        setMenuOpen(false);
        const target = document.querySelector(href);
        if (target) {
            const top = target.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            // Strict full-width top sticky header, plain, professional border.
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled
                ? 'bg-[var(--color-bg-primary)]/90 backdrop-blur-md border-b border-[var(--color-border-subtle)] shadow-sm py-4'
                : 'bg-transparent border-b border-transparent py-6'
                }`}
        >
            <nav className="flex items-center justify-between w-full px-[5%] md:px-[8%] lg:px-[12%] mx-auto">

                {/* Logo */}
                <a
                    href="#hero"
                    onClick={e => handleNav(e, '#hero')}
                    className="font-black text-2xl tracking-tighter text-[var(--color-text-primary)] hover:text-[#818cf8] transition-colors"
                >
                    Haneesh<span className="text-[#818cf8]">.</span>
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8 justify-center">
                    {navLinks.map(link => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={e => handleNav(e, link.href)}
                            className="text-sm font-bold text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors relative group py-2"
                        >
                            {link.label}
                            {/* Simple classic underline hover */}
                            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#818cf8] group-hover:w-full transition-all duration-300 ease-out" />
                        </a>
                    ))}
                </div>

                {/* Right Actions */}
                <div className="hidden md:flex items-center gap-6">
                    <ThemeToggle />
                    <a
                        href={personal.resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 border border-[var(--color-border-subtle)] bg-transparent hover:bg-[var(--color-bg-secondary)] hover:border-[#818cf8] text-[var(--color-text-primary)] text-sm font-bold transition-all duration-300"
                    >
                        Resume
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-4 ml-auto">
                    <ThemeToggle />
                    <button
                        onClick={() => setMenuOpen(v => !v)}
                        className="p-2 text-[var(--color-text-primary)] hover:text-[#818cf8] transition-colors"
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-5 flex flex-col justify-between">
                            <span className={`w-full h-0.5 bg-current transform transition-all duration-300 rounded ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                            <span className={`w-full h-0.5 bg-current transition-all duration-300 rounded ${menuOpen ? 'opacity-0' : ''}`} />
                            <span className={`w-full h-0.5 bg-current transform transition-all duration-300 rounded ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                        </div>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-full left-0 right-0 bg-[var(--color-bg-primary)] border-b border-[var(--color-border-subtle)] shadow-xl overflow-hidden md:hidden"
                    >
                        <ul className="flex flex-col p-6 gap-4">
                            {navLinks.map(link => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={e => handleNav(e, link.href)}
                                        className="block py-3 text-2xl font-bold text-[var(--color-text-primary)] hover:text-[#818cf8] transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                            <li className="pt-6 mt-2 border-t border-[var(--color-border-subtle)]">
                                <a
                                    href={personal.resumeUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex justify-center w-full py-4 bg-[var(--color-text-primary)] text-[var(--color-bg-primary)] text-lg font-bold hover:bg-[#818cf8] hover:text-white transition-colors"
                                >
                                    Resume
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
