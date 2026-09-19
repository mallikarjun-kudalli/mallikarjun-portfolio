import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Terminal,
  ArrowRight,
  GitBranch,
} from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { portfolioData } from '@/data/portfolioData';
import { Project } from '@/data/types';
import { FintechVisual } from './components/FintechVisual';
import { ForensicsVisual } from './components/ForensicsVisual';
import { BiometricVisual } from './components/BiometricVisual';
import { ProjectDetailModal } from './ProjectDetailModal';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const { projects } = portfolioData;

  const fintechProject = projects.find((p) => p.id === 'fintech-growth-analytics') || projects[0];
  const cnnProject = projects.find((p) => p.id === 'image-forgery-detection') || projects[1];
  const votingProject = projects.find((p) => p.id === 'smart-voting-facial-recognition') || projects[2];

  return (
    <section
      id="projects"
      className="relative py-20 sm:py-28 border-b border-border-hairline bg-canvas overflow-hidden"
    >
      <Container size="wide">
        {/* ========================================================= */}
        {/* SECTION HEADER: Editorial Kicker & Title */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16 sm:mb-20">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 mb-4 px-2.5 py-1 rounded bg-surface-elevated border border-border-hairline">
              <Terminal size={12} className="text-accent-emerald" />
              <span className="font-mono text-xs text-accent-emerald uppercase tracking-wider font-medium">
                03 // SELECTED WORK
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-editorial text-content-primary leading-[1.14]">
              Things I've built.
            </h2>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-between pt-1">
            <p className="text-base sm:text-lg text-content-secondary leading-relaxed font-light mb-4">
              Applied across data analytics, computer vision and full-stack application development.
              Each project represents an end-to-end engineering implementation grounded in real data and model architectures.
            </p>

            <div className="flex items-center gap-2 font-mono text-2xs text-content-dim">
              <span>[3 Verified Case Studies // Pure Resume Data]</span>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* PROJECT 01: Large Horizontal Analytics Case Study */}
        {/* ========================================================= */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl border border-border-hairline bg-surface/50 p-6 sm:p-8 lg:p-10 mb-12 hover:border-border-subtle transition-all duration-300 relative group"
        >
          {/* Top Classification Tag & Flow */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border-hairline/80 pb-4 mb-8">
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-xs font-bold text-accent-emerald">
                CASE_STUDY // 01
              </span>
              <span className="text-content-dim">•</span>
              <span className="font-mono text-2xs uppercase tracking-wider text-content-muted">
                {fintechProject.categoryTag}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" size="sm">
                {fintechProject.role}
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Content Column */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-content-primary mb-3">
                  {fintechProject.title}
                </h3>
                <p className="text-sm sm:text-base text-content-secondary leading-relaxed mb-6 font-light">
                  {fintechProject.summary}
                </p>

                {/* Pipeline Flow Bar */}
                <div className="mb-6 p-3 rounded bg-surface-elevated/60 border border-border-hairline">
                  <div className="font-mono text-3xs uppercase tracking-wider text-content-dim mb-2">
                    ANALYTICS WORKFLOW PIPELINE:
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 font-mono text-2xs text-accent-emerald">
                    {fintechProject.pipeline.map((step, idx) => (
                      <React.Fragment key={step}>
                        <span className="px-1.5 py-0.5 rounded bg-surface border border-border-hairline">
                          {step}
                        </span>
                        {idx < fintechProject.pipeline.length - 1 && (
                          <span className="text-content-dim">→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Verified Resume Bullets */}
                <ul className="space-y-2 mb-6 text-xs text-content-secondary">
                  {fintechProject.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-accent-emerald mt-0.5">▪</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-border-hairline/60 flex flex-wrap items-center gap-3">
                <Button
                  onClick={() => setSelectedProject(fintechProject)}
                  variant="primary"
                  size="sm"
                  iconRight={<ArrowRight size={13} />}
                >
                  View Case Study
                </Button>
                <div className="flex flex-wrap gap-1.5">
                  {fintechProject.technologies.map((t) => (
                    <Badge key={t} variant="default" size="sm">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Interactive Visual Column */}
            <div className="lg:col-span-7">
              <FintechVisual />
            </div>
          </div>
        </motion.div>

        {/* ========================================================= */}
        {/* PROJECT 02: Large Immersive Computer-Vision Case Study */}
        {/* ========================================================= */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl border border-border-hairline bg-surface/50 p-6 sm:p-8 lg:p-10 mb-12 hover:border-border-subtle transition-all duration-300 relative group"
        >
          {/* Top Classification Tag & Flow */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border-hairline/80 pb-4 mb-8">
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-xs font-bold text-accent-cyan">
                CASE_STUDY // 02
              </span>
              <span className="text-content-dim">•</span>
              <span className="font-mono text-2xs uppercase tracking-wider text-content-muted">
                {cnnProject.categoryTag}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="cyan" size="sm">
                {cnnProject.role}
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Interactive Forensic Visual */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <ForensicsVisual />
            </div>

            {/* Right Content Column */}
            <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-content-primary mb-3">
                  {cnnProject.title}
                </h3>
                <p className="text-sm sm:text-base text-content-secondary leading-relaxed mb-6 font-light">
                  {cnnProject.summary}
                </p>

                {/* Pipeline Flow Bar */}
                <div className="mb-6 p-3 rounded bg-surface-elevated/60 border border-border-hairline">
                  <div className="font-mono text-3xs uppercase tracking-wider text-content-dim mb-2">
                    FORENSICS INFERENCE PIPELINE:
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 font-mono text-2xs text-accent-cyan">
                    {cnnProject.pipeline.map((step, idx) => (
                      <React.Fragment key={step}>
                        <span className="px-1.5 py-0.5 rounded bg-surface border border-border-hairline">
                          {step}
                        </span>
                        {idx < cnnProject.pipeline.length - 1 && (
                          <span className="text-content-dim">→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Verified Resume Bullets */}
                <ul className="space-y-2 mb-6 text-xs text-content-secondary">
                  {cnnProject.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-accent-cyan mt-0.5">▪</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons & Tech */}
              <div className="pt-4 border-t border-border-hairline/60 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <Button
                    onClick={() => setSelectedProject(cnnProject)}
                    variant="primary"
                    size="sm"
                    iconRight={<ArrowRight size={13} />}
                  >
                    View Case Study
                  </Button>
                  {cnnProject.githubUrl && (
                    <Button
                      href={cnnProject.githubUrl}
                      variant="outline"
                      size="sm"
                      iconLeft={<GitBranch size={13} />}
                      external
                    >
                      GitHub
                    </Button>
                  )}
                </div>
                <div className="flex flex-wrap gap-1">
                  {cnnProject.technologies.slice(0, 4).map((t) => (
                    <Badge key={t} variant="default" size="sm">
                      {t}
                    </Badge>
                  ))}
                  {cnnProject.technologies.length > 4 && (
                    <span className="text-2xs font-mono text-content-muted px-1.5 py-0.5">
                      +{cnnProject.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ========================================================= */}
        {/* PROJECT 03: Compact Desktop App Workflow Case Study */}
        {/* ========================================================= */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl border border-border-hairline bg-surface/50 p-6 sm:p-8 lg:p-10 mb-16 hover:border-border-subtle transition-all duration-300 relative group"
        >
          {/* Top Classification Tag & Flow */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border-hairline/80 pb-4 mb-8">
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-xs font-bold text-accent-emerald">
                CASE_STUDY // 03
              </span>
              <span className="text-content-dim">•</span>
              <span className="font-mono text-2xs uppercase tracking-wider text-content-muted">
                {votingProject.categoryTag}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" size="sm">
                {votingProject.role}
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Content Column */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-content-primary mb-3">
                  {votingProject.title}
                </h3>
                <p className="text-sm sm:text-base text-content-secondary leading-relaxed mb-6 font-light">
                  {votingProject.summary}
                </p>

                {/* Pipeline Flow Bar */}
                <div className="mb-6 p-3 rounded bg-surface-elevated/60 border border-border-hairline">
                  <div className="font-mono text-3xs uppercase tracking-wider text-content-dim mb-2">
                    BIOMETRIC WORKFLOW:
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 font-mono text-2xs text-accent-emerald">
                    {votingProject.pipeline.map((step, idx) => (
                      <React.Fragment key={step}>
                        <span className="px-1.5 py-0.5 rounded bg-surface border border-border-hairline">
                          {step}
                        </span>
                        {idx < votingProject.pipeline.length - 1 && (
                          <span className="text-content-dim">→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Verified Resume Bullets */}
                <ul className="space-y-2 mb-6 text-xs text-content-secondary">
                  {votingProject.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-accent-emerald mt-0.5">▪</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-border-hairline/60 flex flex-wrap items-center gap-3">
                <Button
                  onClick={() => setSelectedProject(votingProject)}
                  variant="primary"
                  size="sm"
                  iconRight={<ArrowRight size={13} />}
                >
                  View Case Study
                </Button>
                <div className="flex flex-wrap gap-1.5">
                  {votingProject.technologies.map((t) => (
                    <Badge key={t} variant="default" size="sm">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Interactive Biometric App Viewport */}
            <div className="lg:col-span-6">
              <BiometricVisual />
            </div>
          </div>
        </motion.div>

        {/* ========================================================= */}
        {/* SECTION END TRANSITION */}
        {/* ========================================================= */}
        <div className="text-center py-10 border-t border-border-hairline">
          <div className="font-mono text-xs uppercase tracking-widest text-accent-emerald font-semibold mb-2">
            Built with intent.
          </div>
          <p className="text-xs sm:text-sm font-mono text-content-muted max-w-md mx-auto">
            More experiments and projects will live here as the portfolio evolves.
          </p>
        </div>
      </Container>

      {/* Structured Case Study Modal Dialog */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
