import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/utils/cn';

interface ExternalLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  showIcon?: boolean;
  mono?: boolean;
}

export const ExternalLink: React.FC<ExternalLinkProps> = ({
  href,
  children,
  showIcon = true,
  mono = false,
  className,
  ...props
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group inline-flex items-center gap-1 text-content-secondary hover:text-content-primary transition-colors focus-ring rounded-sm',
        mono && 'font-mono text-xs tracking-wider',
        className
      )}
      {...props}
    >
      <span className="relative">
        {children}
        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-content-primary transition-all duration-200 group-hover:w-full" />
      </span>
      {showIcon && (
        <ArrowUpRight
          size={14}
          className="shrink-0 opacity-60 transition-transform duration-200 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </a>
  );
};
