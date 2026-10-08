interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader = ({ 
  eyebrow, 
  title, 
  description, 
  align = 'left',
  className = ''
}: SectionHeaderProps) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center mx-auto' : ''} ${className}`}>
      {eyebrow && (
        <span className="inline-block py-1 px-3 rounded-full bg-brand-light text-brand-secondary text-xs font-bold uppercase tracking-wider mb-4 border border-brand-border">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary mb-4">
        {title}
      </h2>
      {description && (
        <p className={`text-lg text-brand-muted max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </div>
  );
};
