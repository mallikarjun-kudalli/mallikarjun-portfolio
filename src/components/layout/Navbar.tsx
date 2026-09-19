import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowDownToLine } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { portfolioData } from '@/data/portfolioData';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { cn } from '@/utils/cn';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const sectionIds = portfolioData.navigation.map((item) =>
    item.href.replace('#', '')
  );
  const activeSection = useScrollSpy(sectionIds, 120);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-250',
        scrolled
          ? 'bg-canvas/85 backdrop-blur-md border-b border-border-hairline py-3 shadow-[0_4px_24px_rgba(0,0,0,0.5)]'
          : 'bg-transparent border-b border-transparent py-4 sm:py-5'
      )}
    >
      <Container size="wide">
        <div className="flex items-center justify-between">
          {/* Brand / Logo */}
          <a
            href="#"
            className="group flex items-center gap-3 focus-ring rounded-md"
            aria-label="Mallikarjun Kudalli Portfolio Home"
          >
            <div className="w-8 h-8 rounded bg-surface-elevated border border-border-hairline flex items-center justify-center font-mono font-bold text-xs text-content-primary group-hover:border-accent-emerald/50 group-hover:text-accent-emerald transition-colors">
              MK
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-content-primary tracking-tight group-hover:text-accent-emerald transition-colors">
                {portfolioData.personal.name}
              </span>
              <span className="text-2xs font-mono text-content-muted hidden sm:inline-block">
                Full-Stack & Data / AI
              </span>
            </div>
          </a>

          {/* Availability Status Tag (Desktop) */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-surface-elevated border border-border-hairline text-2xs font-mono text-content-secondary">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-emerald opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-emerald"></span>
            </span>
            <span>{portfolioData.personal.availability.openFor}</span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {portfolioData.navigation.map((item) => {
              const targetId = item.href.replace('#', '');
              const isActive = activeSection === targetId;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={cn(
                    'px-3 py-1.5 rounded-md text-xs font-mono transition-all duration-200 focus-ring',
                    isActive
                      ? 'text-accent-emerald bg-surface-elevated border border-border-hairline'
                      : 'text-content-secondary hover:text-content-primary hover:bg-surface/60'
                  )}
                >
                  {item.numberPrefix && (
                    <span className="opacity-50 mr-1.5">{item.numberPrefix}.</span>
                  )}
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Contact / Resume CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              href="#contact"
              variant="outline"
              size="sm"
            >
              Get in Touch
            </Button>
            <Button
              href="/Mallu_resume.pdf"
              variant="primary"
              size="sm"
              iconRight={<ArrowDownToLine size={13} />}
              external
              download="Mallikarjun_Kudalli_Resume.pdf"
            >
              Resume
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md bg-surface-elevated border border-border-hairline text-content-secondary hover:text-content-primary focus-ring"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {isOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 border-t border-border-hairline bg-surface/95 backdrop-blur-xl rounded-lg px-4 shadow-xl">
            {/* Live status badge in mobile */}
            <div className="flex items-center gap-2 py-2 mb-2 border-b border-border-hairline text-2xs font-mono text-content-secondary">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-emerald opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-emerald"></span>
              </span>
              <span>{portfolioData.personal.availability.openFor}</span>
            </div>

            <nav className="flex flex-col space-y-1">
              {portfolioData.navigation.map((item) => {
                const targetId = item.href.replace('#', '');
                const isActive = activeSection === targetId;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'px-3 py-2.5 rounded-md text-xs font-mono flex items-center justify-between transition-colors',
                      isActive
                        ? 'bg-surface-elevated text-accent-emerald border border-border-hairline'
                        : 'text-content-secondary hover:text-content-primary hover:bg-surface-hover'
                    )}
                  >
                    <span>{item.label}</span>
                    <span className="text-2xs text-content-muted">
                      {item.numberPrefix}
                    </span>
                  </a>
                );
              })}
            </nav>

            <div className="mt-4 pt-3 border-t border-border-hairline flex flex-col gap-2">
              <Button
                href="/Mallu_resume.pdf"
                variant="primary"
                size="sm"
                className="w-full justify-center"
                iconRight={<ArrowDownToLine size={14} />}
                external
                download="Mallikarjun_Kudalli_Resume.pdf"
              >
                Download Resume
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};
