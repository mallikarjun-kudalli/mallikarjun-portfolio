import React from 'react';
import {
  ArrowDown,
  ArrowDownToLine,
  Terminal,
  Activity,
  Code2,
  Database,
  BrainCircuit,
} from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { ExternalLink } from '@/components/common/ExternalLink';
import { SceneContainer } from '@/3d/SceneContainer';
import { portfolioData } from '@/data/portfolioData';

export const HeroSection: React.FC = () => {
  const { personal, socials } = portfolioData;

  // Filter relevant primary social links
  const primarySocials = socials.filter((s) =>
    ['GitHub', 'LinkedIn', 'LeetCode', 'Email'].includes(s.platform)
  );

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-64px)] flex items-center overflow-hidden border-b border-border-hairline bg-tech-grid"
    >
      {/* Soft atmospheric gradient to ground the canvas */}
      <div className="absolute inset-0 bg-gradient-to-b from-canvas/30 via-canvas/80 to-canvas pointer-events-none" />

      <Container size="wide" className="relative z-10 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* ========================================================= */}
          {/* LEFT COLUMN: Editorial & Technical Information */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* System Status / Technical Kicker */}
            <div className="flex flex-wrap items-center gap-2.5 mb-5">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-surface-elevated border border-border-hairline">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-emerald opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-emerald"></span>
                </span>
                <span className="font-mono text-2xs uppercase tracking-wider text-accent-emerald font-medium">
                  SYS_STATUS: ACTIVE
                </span>
              </div>

              <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface border border-border-hairline font-mono text-2xs text-content-muted">
                <Terminal size={11} className="text-content-secondary" />
                <span>00 // INTRODUCTION</span>
              </div>
            </div>

            {/* Candidate Identity */}
            <div className="mb-3">
              <div className="text-sm sm:text-base font-mono text-accent-emerald font-medium tracking-wide mb-1">
                {personal.name}
              </div>
              <div className="text-xs sm:text-sm font-mono text-content-muted tracking-tight">
                {personal.title}
              </div>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-editorial text-content-primary leading-[1.12] mb-6">
              Building software where data meets intelligence.
            </h1>

            {/* Supporting Positioning Statement */}
            <p className="text-base sm:text-lg text-content-secondary leading-relaxed mb-8 max-w-xl font-light">
              Computer Science and Data Science student building full-stack applications, data analytics solutions and machine-learning systems.
            </p>

            {/* Primary & Secondary Call to Actions */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
              <Button
                href="#projects"
                variant="primary"
                size="lg"
                iconRight={<ArrowDown size={15} />}
              >
                View Projects
              </Button>
              <Button
                href="/Mallu_resume.pdf"
                variant="secondary"
                size="lg"
                iconRight={<ArrowDownToLine size={15} />}
                external
                download="Mallikarjun_Kudalli_Resume.pdf"
              >
                Download Resume
              </Button>
            </div>

            {/* Social Channels Bar */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-6 border-t border-border-hairline mb-8 text-xs">
              <span className="font-mono text-2xs uppercase text-content-dim tracking-wider">
                CHANNELS:
              </span>
              {primarySocials.map((social) => (
                <ExternalLink
                  key={social.platform}
                  href={social.url}
                  mono
                  className="text-xs text-content-secondary hover:text-accent-emerald transition-colors"
                >
                  {social.platform}
                </ExternalLink>
              ))}
            </div>

            {/* Technical Highlights / Engineering Footprint */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-border-hairline font-mono text-2xs">
              <div className="p-3 rounded bg-surface/80 border border-border-hairline">
                <div className="flex items-center gap-1.5 text-accent-emerald mb-1">
                  <Database size={13} />
                  <span className="font-semibold">100,000+</span>
                </div>
                <div className="text-content-muted leading-tight">
                  Financial Records Analyzed
                </div>
              </div>

              <div className="p-3 rounded bg-surface/80 border border-border-hairline">
                <div className="flex items-center gap-1.5 text-accent-cyan mb-1">
                  <BrainCircuit size={13} />
                  <span className="font-semibold">CNN Forensics</span>
                </div>
                <div className="text-content-muted leading-tight">
                  Image Forgery Detection
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 p-3 rounded bg-surface/80 border border-border-hairline">
                <div className="flex items-center gap-1.5 text-content-primary mb-1">
                  <Code2 size={13} className="text-accent-emerald-light" />
                  <span className="font-semibold">100+ Solved</span>
                </div>
                <div className="text-content-muted leading-tight">
                  DSA on LeetCode
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: 3D Technical Environment Visual Centerpiece */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 relative w-full h-[360px] sm:h-[460px] lg:h-[580px] flex items-center justify-center">
            {/* Outer Architectural Container with Hairline Reticle Corners */}
            <div className="relative w-full h-full rounded-xl border border-border-hairline bg-surface/30 backdrop-blur-xs overflow-hidden shadow-2xl">
              {/* Technical Reticle Overlay (Top Left & Bottom Right) */}
              <div className="absolute top-3 left-3 z-20 flex items-center gap-2 pointer-events-none">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-emerald" />
                <span className="font-mono text-2xs text-content-dim tracking-widest uppercase">
                  DATA_LATTICE_V2
                </span>
              </div>

              <div className="absolute top-3 right-3 z-20 font-mono text-2xs text-content-dim pointer-events-none hidden sm:block">
                [PARALLAX_ACTIVE]
              </div>

              <div className="absolute bottom-3 left-3 z-20 font-mono text-2xs text-content-dim pointer-events-none flex items-center gap-2">
                <Activity size={12} className="text-accent-cyan" />
                <span>INTERACTIVE 3D MESH</span>
              </div>

              <div className="absolute bottom-3 right-3 z-20 font-mono text-2xs text-content-dim pointer-events-none hidden sm:block">
                SYS: 42° FOV
              </div>

              {/* The 3D Scene */}
              <SceneContainer className="w-full h-full" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
