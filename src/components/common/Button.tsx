import React from 'react';
import { cn } from '@/utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  isLoading?: boolean;
  href?: string;
  external?: boolean;
  download?: boolean | string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  isLoading = false,
  href,
  external = false,
  download,
  className,
  disabled,
  ...props
}) => {
  const baseStyles =
    'relative inline-flex items-center justify-center font-medium transition-all duration-200 focus-ring select-none active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none disabled:active:scale-100';

  const variantStyles = {
    primary:
      'bg-content-primary text-canvas hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] font-semibold border border-white/20',
    secondary:
      'bg-surface-elevated text-content-primary border border-border-hairline hover:border-border-subtle hover:bg-surface-hover shadow-sm',
    outline:
      'bg-transparent text-content-primary border border-border-subtle hover:border-content-secondary hover:bg-surface/50',
    ghost:
      'bg-transparent text-content-secondary hover:text-content-primary hover:bg-surface/60',
    accent:
      'bg-accent-emerald text-canvas font-semibold hover:bg-accent-emerald-light shadow-[0_0_20px_rgba(16,185,129,0.3)]',
  };

  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 rounded gap-1.5 tracking-tight',
    md: 'text-sm px-4 py-2 rounded-md gap-2 tracking-tight',
    lg: 'text-base px-5 py-2.5 rounded-md gap-2.5 tracking-tight',
  };

  const classes = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  const content = (
    <>
      {isLoading ? (
        <svg
          className="animate-spin h-4 w-4 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      ) : (
        iconLeft && <span className="shrink-0">{iconLeft}</span>
      )}
      <span>{children}</span>
      {!isLoading && iconRight && <span className="shrink-0">{iconRight}</span>}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        download={download}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={classes} disabled={disabled || isLoading} {...props}>
      {content}
    </button>
  );
};
