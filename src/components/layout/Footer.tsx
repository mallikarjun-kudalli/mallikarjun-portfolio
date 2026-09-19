import React from 'react';
import { ArrowUp } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { ExternalLink } from '@/components/common/ExternalLink';
import { portfolioData } from '@/data/portfolioData';

export const Footer: React.FC = () => {
  const { personal, socials } = portfolioData;

  // Filter links explicitly requested: GitHub, LinkedIn, LeetCode, Email
  const footerLinks = socials.filter((s) =>
    ['GitHub', 'LinkedIn', 'LeetCode', 'Email'].includes(s.platform)
  );

  return (
    <footer className="border-t border-border-hairline py-12 bg-canvas relative">
      <Container size="wide">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Identity & Department */}
          <div>
            <div className="flex items-center gap-2.5 mb-1">
              <span className="w-6 h-6 rounded bg-surface-elevated border border-border-hairline flex items-center justify-center font-mono font-bold text-2xs text-content-primary">
                {personal.initials}
              </span>
              <span className="text-sm font-semibold text-content-primary tracking-tight">
                {personal.name}
              </span>
            </div>
            <p className="text-xs font-mono text-content-muted">
              {personal.title}
            </p>
          </div>

          {/* Social Links & Mail */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-mono">
            {footerLinks.map((link) => (
              <ExternalLink
                key={link.platform}
                href={link.url}
                mono
                showIcon={link.platform !== 'Email'}
                className="text-content-secondary hover:text-accent-emerald transition-colors"
              >
                {link.platform}
              </ExternalLink>
            ))}
          </div>

          {/* Technical Signature & Return to Top */}
          <div className="flex items-center gap-4 pt-4 md:pt-0 border-t md:border-t-0 border-border-hairline/60">
            <span className="text-xs font-mono text-content-dim">
              Designed &amp; built with curiosity.
            </span>
            <a
              href="#"
              className="p-2 rounded-md bg-surface-elevated border border-border-hairline text-content-secondary hover:text-content-primary hover:border-border-subtle transition-colors focus-ring"
              aria-label="Back to top"
            >
              <ArrowUp size={14} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
