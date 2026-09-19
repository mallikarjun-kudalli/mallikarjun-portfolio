import React from 'react';
import { cn } from '@/utils/cn';

interface SectionHeaderProps {
  number?: string;
  category?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  category,
  title,
  description,
  action,
  className,
}) => {
  return (
    <div className={cn('mb-10 sm:mb-14', className)}>
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-border-hairline pb-4 sm:pb-6">
        <div>
          {(number || category) && (
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs font-medium text-accent-emerald tracking-wider uppercase">
                {number && <span className="mr-1.5">{number} //</span>}
                {category}
              </span>
            </div>
          )}
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-editorial text-content-primary">
            {title}
          </h2>
          {description && (
            <p className="mt-2 text-sm sm:text-base text-content-secondary max-w-2xl leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {action && <div className="shrink-0">{action}</div>}
      </div>
    </div>
  );
};
