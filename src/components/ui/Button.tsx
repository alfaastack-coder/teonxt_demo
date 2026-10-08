import React, { forwardRef } from 'react';
import type { ButtonHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';
import { Link } from 'react-router-dom';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', href, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary disabled:opacity-50 disabled:pointer-events-none";
    
    const variants = {
      primary: "bg-brand-primary text-white hover:bg-brand-primary/90 shadow-sm",
      secondary: "bg-brand-secondary text-white hover:bg-brand-secondary/90 shadow-sm",
      outline: "border border-brand-border bg-transparent hover:bg-brand-light text-brand-primary",
      ghost: "hover:bg-brand-light text-brand-text hover:text-brand-primary",
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-base",
      lg: "h-14 px-8 text-lg",
    };

    const combinedClassName = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
      return (
        <Link to={href} className={combinedClassName}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={combinedClassName} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
