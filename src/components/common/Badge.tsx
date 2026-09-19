import React from 'react';
import { cn } from '@/utils/cn';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'outline' | 'cyan';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  icon,
  className,
  ...props
}) => {
  const variantStyles = {
    default:
      'bg-surface-elevated text-content-secondary border border-border-hairline hover:border-border-subtle hover:text-content-primary',
    accent:
      'bg-accent-emerald-subtle text-accent-emerald border border-accent-emerald/30',
    cyan:
      'bg-accent-cyan-subtle text-accent-cyan border border-accent-cyan/30',
    outline:
      'bg-transparent text-content-secondary border border-border-hairline',
  };

  const sizeStyles = {
    sm: 'text-2xs px-2 py-0.5 tracking-wide font-mono rounded',
    md: 'text-xs px-2.5 py-1 tracking-wide font-mono rounded-md',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 font-medium transition-colors select-none',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
};
