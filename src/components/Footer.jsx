import { personal } from '../data/personal';

export default function Footer() {
    return (
        <footer className="w-full border-t border-[var(--color-border-subtle)] py-12 text-center text-[var(--color-text-secondary)]">
            <div className="max-w-3xl mx-auto px-6 flex flex-col items-center gap-6">
                <div className="flex items-center gap-6">
                    <a href={personal.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#818cf8] transition-colors">GitHub</a>
                    <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#818cf8] transition-colors">LinkedIn</a>
                    <a href={`mailto:${personal.email}`} className="hover:text-[#818cf8] transition-colors">Email</a>
                </div>
                <p className="text-sm font-mono mt-4">
                    Designed & Built by {personal.name}
                </p>
            </div>
        </footer>
    );
}
