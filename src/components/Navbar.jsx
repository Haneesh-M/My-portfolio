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
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleNav = (e, href) => {
        e.preventDefault();
        setMenuOpen(false);
        const target = document.querySelector(href);
        if (target) {
            const top = target.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-[100] transition-colors duration-300 ${scrolled
                ? 'bg-[var(--color-bg-primary)]/90 backdrop-blur-xl border-b border-[var(--color-border-subtle)]'
                : 'bg-transparent py-4'
                }`}
        >
            <nav className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">

                {/* Logo */}
                <a
                    href="#hero"
                    onClick={e => handleNav(e, '#hero')}
                    className="font-bold text-lg tracking-tighter text-[var(--color-text-primary)] hover:opacity-80 transition-opacity"
                >
                    Haneesh M.
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map(link => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={e => handleNav(e, link.href)}
                            className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[#818cf8] transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                    <div className="w-px h-4 bg-[var(--color-border-subtle)]" />
                    <ThemeToggle />
                    <a
                        href={personal.resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold text-[var(--color-text-primary)] hover:text-[#818cf8] transition-colors pb-0.5"
                    >
                        Resume ↗
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:flex hidden lg:hidden items-center gap-4">
                    <ThemeToggle />
                </div>
                <div className="md:hidden flex items-center gap-4">
                    <ThemeToggle />
                    <button
                        onClick={() => setMenuOpen(v => !v)}
                        className="p-2 -mr-2 text-sm font-medium text-[var(--color-text-primary)] uppercase tracking-wider"
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? 'Close' : 'Menu'}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden absolute top-full left-0 right-0 bg-[var(--color-bg-primary)] border-b border-[var(--color-border-subtle)] shadow-xl"
                    >
                        <ul className="flex flex-col px-6 py-4 gap-4">
                            {navLinks.map(link => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={e => handleNav(e, link.href)}
                                        className="block text-lg font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                            <li className="pt-4 border-t border-[var(--color-border-subtle)] mt-2 pb-4">
                                <a
                                    href={personal.resumeUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-lg font-bold text-[var(--color-text-primary)]"
                                >
                                    Resume ↗
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
