import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Terminal, MapPin } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Badge } from '@/components/common/Badge';
import { portfolioData } from '@/data/portfolioData';

export const EducationSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // Order progression: 2021 -> 2023 -> 2023–2027 as requested
  const timelineMilestones = [...portfolioData.education].reverse();

  return (
    <section
      id="education"
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
                04 // EDUCATION
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-editorial text-content-primary leading-[1.14]">
              Where the foundation was built.
            </h2>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-between pt-1">
            <p className="text-base sm:text-lg text-content-secondary leading-relaxed font-light mb-4">
              Academic progression in computer science and data science. A consistent record of
              academic distinction spanning primary foundations in Kalaburagi, pre-university sciences in Bidar,
              and ongoing engineering at RNSIT, Bengaluru.
            </p>

            <div className="flex items-center gap-2 font-mono text-2xs text-content-dim">
              <span>[CHRONOLOGICAL ACADEMIC PROGRESSION // 2021 → 2027]</span>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* REFINED VERTICAL ACADEMIC TIMELINE */}
        {/* ========================================================= */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Track Line */}
          <div className="absolute top-4 bottom-8 left-4 sm:left-1/2 -ml-[1px] w-[2px] bg-gradient-to-b from-border-subtle via-accent-emerald/40 to-accent-emerald pointer-events-none" />

          <div className="space-y-12 sm:space-y-16">
            {timelineMilestones.map((edu, index) => {
              const isLatest = index === timelineMilestones.length - 1; // 2023–2027 RNSIT

              return (
                <motion.div
                  key={edu.institution}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    duration: 0.4,
                    delay: shouldReduceMotion ? 0 : index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    index % 2 === 0 ? 'sm:flex-row-reverse' : ''
                  } gap-6 sm:gap-12`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-4 z-10 flex items-center justify-center">
                    <div
                      className={`w-8 h-8 rounded-full border flex items-center justify-center transition-transform duration-200 ${
                        isLatest
                          ? 'bg-canvas border-accent-emerald text-accent-emerald shadow-[0_0_16px_rgba(16,185,129,0.3)]'
                          : 'bg-canvas border-border-subtle text-content-muted'
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${
                          isLatest ? 'bg-accent-emerald animate-pulse' : 'bg-content-muted'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Left / Right Card Content */}
                  <div className="pl-12 sm:pl-0 w-full sm:w-1/2">
                    <div
                      className={`rounded-xl border p-6 sm:p-7 transition-all duration-200 ${
                        isLatest
                          ? 'bg-surface/80 border-border-subtle shadow-[0_4px_24px_rgba(0,0,0,0.35)]'
                          : 'bg-surface/50 border-border-hairline hover:border-border-subtle'
                      }`}
                    >
                      {/* Milestone Header: Period & Location */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span
                          className={`font-mono text-xs font-bold tracking-wider px-2 py-0.5 rounded border ${
                            isLatest
                              ? 'bg-accent-emerald/10 text-accent-emerald border-accent-emerald/30'
                              : 'bg-surface-elevated text-content-secondary border-border-hairline'
                          }`}
                        >
                          {edu.period}
                        </span>

                        <div className="flex items-center gap-1 text-2xs font-mono text-content-muted">
                          <MapPin size={11} />
                          <span>{edu.location}</span>
                        </div>
                      </div>

                      {/* Institution & Degree */}
                      <h3 className="text-lg sm:text-xl font-bold text-content-primary tracking-tight mb-1">
                        {edu.institution}
                      </h3>

                      <div className="text-xs sm:text-sm text-content-secondary leading-relaxed mb-4">
                        {edu.degree}
                      </div>

                      {/* Grade / Score Credential */}
                      <div className="pt-3 border-t border-border-hairline/80 flex items-center justify-between">
                        <span className="text-2xs font-mono text-content-dim uppercase">
                          {edu.scoreLabel}
                        </span>
                        <Badge
                          variant={isLatest ? 'accent' : 'default'}
                          size="sm"
                        >
                          {edu.score}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};
