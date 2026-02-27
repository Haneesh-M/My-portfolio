export default function Button({
    children,
    href,
    onClick,
    variant = 'primary',
    className = '',
    icon,
    openInNewTab = false
}) {
    const baseStyles = "inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-[1.03] w-full sm:w-auto";

    const variants = {
        primary: "bg-[var(--color-text-primary)] text-[var(--color-bg-primary)] hover:bg-[var(--color-text-secondary)]",
        secondary: "border border-[var(--color-border-subtle)] text-[var(--color-text-primary)] bg-[var(--color-bg-secondary)] hover:border-[var(--color-text-muted)] hover:bg-[var(--color-bg-primary)]",
        outline: "border border-[var(--color-text-primary)] text-[var(--color-text-primary)] hover:bg-[var(--color-text-primary)] hover:text-[var(--color-bg-primary)]"
    };

    const content = (
        <>
            {icon && <span className="flex-shrink-0">{icon}</span>}
            <span className="relative z-10">{children}</span>
        </>
    );

    if (href) {
        return (
            <a
                href={href}
                className={`${baseStyles} ${variants[variant]} ${className}`}
                target={openInNewTab ? "_blank" : undefined}
                rel={openInNewTab ? "noopener noreferrer" : undefined}
            >
                {content}
            </a>
        );
    }

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            {content}
        </button>
    );
}
