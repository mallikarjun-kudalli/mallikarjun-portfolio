import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Terminal,
  Code2,
  Globe,
  Database,
  BarChart3,
  BrainCircuit,
  BookOpen,
  Wrench,
  ArrowDown,
  Layers,
} from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { portfolioData } from '@/data/portfolioData';

// Map each category to an icon and semantic theme
const CATEGORY_CONFIG: Record<
  string,
  {
    index: string;
    icon: React.ComponentType<{ size?: number; className?: string }>;
    accent: 'emerald' | 'cyan' | 'slate';
    subsystemTag: string;
    roleSummary: string;
  }
> = {
  Programming: {
    index: '01',
    icon: Code2,
    accent: 'emerald',
    subsystemTag: 'LOGIC & RUNTIMES',
    roleSummary: 'Foundational languages for systems, scripting, and application logic.',
  },
  'Web Technologies': {
    index: '02',
    icon: Globe,
    accent: 'emerald',
    subsystemTag: 'CLIENT / API INTERFACES',
    roleSummary: 'Full-stack application layer, client rendering, and REST microservices.',
  },
  Databases: {
    index: '03',
    icon: Database,
    accent: 'slate',
    subsystemTag: 'PERSISTENCE & SCHEMAS',
    roleSummary: 'Relational and document storage engines for transactional and analytical workloads.',
  },
  'Data Analytics': {
    index: '04',
    icon: BarChart3,
    accent: 'cyan',
    subsystemTag: 'ANALYTICAL PIPELINES',
    roleSummary: 'Exploratory data processing, KPI monitoring, and business visualization.',
  },
  'Machine Learning': {
    index: '05',
    icon: BrainCircuit,
    accent: 'cyan',
    subsystemTag: 'APPLIED INTELLIGENCE',
    roleSummary: 'Neural networks, computer vision forensics, and predictive model pipelines.',
  },
  'Core Subjects': {
    index: '06',
    icon: BookOpen,
    accent: 'slate',
    subsystemTag: 'SYSTEM FOUNDATIONS',
    roleSummary: 'Academic CS principles governing computation, algorithms, and system resources.',
  },
  Tools: {
    index: '07',
    icon: Wrench,
    accent: 'emerald',
    subsystemTag: 'TOOLING & DEVOPS',
    roleSummary: 'Version control, development environments, and container runtime.',
  },
};

export const SkillsSection: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const { skills } = portfolioData;

  // Group into 3 architectural subsystems for the technical stack map
  const engineeringTier = skills.filter((s) =>
    ['Programming', 'Web Technologies', 'Databases'].includes(s.category)
  );
  const intelligenceTier = skills.filter((s) =>
    ['Data Analytics', 'Machine Learning'].includes(s.category)
  );
  const foundationsTier = skills.filter((s) =>
    ['Core Subjects', 'Tools'].includes(s.category)
  );

  const totalSkillCount = skills.reduce(
    (acc, cat) => acc + cat.skills.length,
    0
  );

  return (
    <section
      id="skills"
      className="relative py-20 sm:py-28 border-b border-border-hairline bg-canvas overflow-hidden"
    >
      <Container size="wide">
        {/* ========================================================= */}
        {/* SECTION HEADER: Editorial Asymmetric Composition */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16 sm:mb-20">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 mb-4 px-2.5 py-1 rounded bg-surface-elevated border border-border-hairline">
              <Terminal size={12} className="text-accent-emerald" />
              <span className="font-mono text-xs text-accent-emerald uppercase tracking-wider font-medium">
                02 // STACK
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-editorial text-content-primary leading-[1.14]">
              Tools I build with.
            </h2>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-between pt-1">
            <p className="text-base sm:text-lg text-content-secondary leading-relaxed font-light mb-4">
              A structured technical ecosystem spanning systems programming, web engineering,
              applied machine learning, and analytical modeling. Each tool is grounded in academic
              coursework and applied hands-on project implementation.
            </p>

            <div className="flex flex-wrap items-center gap-3 font-mono text-2xs text-content-muted">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-accent-emerald" />
                <span>Engineering & Tools</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-accent-cyan" />
                <span>Data & Applied ML</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-border-subtle" />
                <span>Databases & Systems</span>
              </span>
              <span className="text-content-dim ml-auto">
                [{skills.length} Subsystems // {totalSkillCount} Technologies]
              </span>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* TECHNICAL STACK MAP (SUB-SYSTEM COMPOSITION) */}
        {/* ========================================================= */}
        <div className="space-y-6 sm:space-y-8 mb-16">
          {/* ------------------------------------------------------- */}
          {/* TIER 1: APPLICATION & LOGIC SUBSYSTEM */}
          {/* ------------------------------------------------------- */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-xl border border-border-hairline bg-surface/40 p-5 sm:p-7 backdrop-blur-xs relative"
          >
            {/* Tier Header Line */}
            <div className="flex items-center justify-between border-b border-border-hairline/60 pb-3 mb-6">
              <div className="flex items-center gap-2 font-mono text-2xs text-content-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald" />
                <span className="tracking-widest uppercase font-medium text-content-primary">
                  TIER_01 // SOFTWARE & INTERFACES
                </span>
              </div>
              <span className="font-mono text-2xs text-content-dim hidden sm:inline-block">
                CLIENT / SERVER / PERSISTENCE
              </span>
            </div>

            {/* Subsystem Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {engineeringTier.map((group) => {
                const config = CATEGORY_CONFIG[group.category];
                const Icon = config?.icon || Code2;
                const isEmerald = config?.accent === 'emerald';

                return (
                  <div
                    key={group.category}
                    className="flex flex-col justify-between p-4 rounded-lg bg-surface-elevated/40 border border-border-hairline hover:border-border-subtle transition-all duration-200"
                  >
                    <div>
                      {/* Subsystem Tag & Index */}
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-2xs text-content-dim uppercase tracking-wider">
                          {config?.subsystemTag}
                        </span>
                        <span className="font-mono text-2xs text-content-muted">
                          SYS_{config?.index}
                        </span>
                      </div>

                      {/* Title & Icon */}
                      <div className="flex items-center gap-2 mb-2">
                        <div
                          className={`p-1.5 rounded bg-surface border border-border-hairline ${
                            isEmerald ? 'text-accent-emerald' : 'text-content-secondary'
                          }`}
                        >
                          <Icon size={14} />
                        </div>
                        <h3 className="text-sm font-semibold text-content-primary tracking-tight">
                          {group.category}
                        </h3>
                      </div>

                      <p className="text-2xs text-content-muted leading-relaxed mb-4">
                        {config?.roleSummary}
                      </p>
                    </div>

                    {/* Technology Items */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border-hairline/60">
                      {group.skills.map((tech) => {
                        const isHovered = hoveredSkill === tech;
                        return (
                          <div
                            key={tech}
                            onMouseEnter={() => setHoveredSkill(tech)}
                            onMouseLeave={() => setHoveredSkill(null)}
                            className={`group relative inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono transition-all duration-150 cursor-default select-none ${
                              isHovered
                                ? 'bg-canvas text-content-primary border border-accent-emerald/60 shadow-[0_2px_12px_rgba(16,185,129,0.15)] -translate-y-0.5'
                                : 'bg-surface text-content-secondary border border-border-hairline hover:text-content-primary hover:border-border-subtle'
                            }`}
                          >
                            <span
                              className={`w-1 h-1 rounded-full transition-colors ${
                                isHovered ? 'bg-accent-emerald' : 'bg-border-subtle'
                              }`}
                            />
                            <span>{tech}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* ------------------------------------------------------- */}
          {/* TIER 2: INTELLIGENCE & ANALYTICS SUBSYSTEM */}
          {/* ------------------------------------------------------- */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-xl border border-border-hairline bg-surface/40 p-5 sm:p-7 backdrop-blur-xs relative"
          >
            {/* Tier Header Line */}
            <div className="flex items-center justify-between border-b border-border-hairline/60 pb-3 mb-6">
              <div className="flex items-center gap-2 font-mono text-2xs text-content-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                <span className="tracking-widest uppercase font-medium text-content-primary">
                  TIER_02 // INTELLIGENCE & ANALYTICAL WORKLOADS
                </span>
              </div>
              <span className="font-mono text-2xs text-content-dim hidden sm:inline-block">
                NEURAL NETS / CV / EXPLORATORY DATA
              </span>
            </div>

            {/* Subsystem Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {intelligenceTier.map((group) => {
                const config = CATEGORY_CONFIG[group.category];
                const Icon = config?.icon || BrainCircuit;

                return (
                  <div
                    key={group.category}
                    className="flex flex-col justify-between p-4 rounded-lg bg-surface-elevated/40 border border-border-hairline hover:border-border-subtle transition-all duration-200"
                  >
                    <div>
                      {/* Subsystem Tag & Index */}
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-2xs text-content-dim uppercase tracking-wider">
                          {config?.subsystemTag}
                        </span>
                        <span className="font-mono text-2xs text-content-muted">
                          SYS_{config?.index}
                        </span>
                      </div>

                      {/* Title & Icon */}
                      <div className="flex items-center gap-2 mb-2">
                        <div className="p-1.5 rounded bg-surface border border-border-hairline text-accent-cyan">
                          <Icon size={14} />
                        </div>
                        <h3 className="text-sm font-semibold text-content-primary tracking-tight">
                          {group.category}
                        </h3>
                      </div>

                      <p className="text-2xs text-content-muted leading-relaxed mb-4">
                        {config?.roleSummary}
                      </p>
                    </div>

                    {/* Technology Items */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border-hairline/60">
                      {group.skills.map((tech) => {
                        const isHovered = hoveredSkill === tech;
                        return (
                          <div
                            key={tech}
                            onMouseEnter={() => setHoveredSkill(tech)}
                            onMouseLeave={() => setHoveredSkill(null)}
                            className={`group relative inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono transition-all duration-150 cursor-default select-none ${
                              isHovered
                                ? 'bg-canvas text-content-primary border border-accent-cyan/60 shadow-[0_2px_12px_rgba(6,182,212,0.15)] -translate-y-0.5'
                                : 'bg-surface text-content-secondary border border-border-hairline hover:text-content-primary hover:border-border-subtle'
                            }`}
                          >
                            <span
                              className={`w-1 h-1 rounded-full transition-colors ${
                                isHovered ? 'bg-accent-cyan' : 'bg-border-subtle'
                              }`}
                            />
                            <span>{tech}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* ------------------------------------------------------- */}
          {/* TIER 3: FOUNDATIONS & TOOLING SUBSYSTEM */}
          {/* ------------------------------------------------------- */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-xl border border-border-hairline bg-surface/40 p-5 sm:p-7 backdrop-blur-xs relative"
          >
            {/* Tier Header Line */}
            <div className="flex items-center justify-between border-b border-border-hairline/60 pb-3 mb-6">
              <div className="flex items-center gap-2 font-mono text-2xs text-content-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-border-subtle" />
                <span className="tracking-widest uppercase font-medium text-content-primary">
                  TIER_03 // FOUNDATIONS & DEVELOPMENT ENVIRONMENT
                </span>
              </div>
              <span className="font-mono text-2xs text-content-dim hidden sm:inline-block">
                ALGORITHMS / OS / DEVOPS
              </span>
            </div>

            {/* Subsystem Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {foundationsTier.map((group) => {
                const config = CATEGORY_CONFIG[group.category];
                const Icon = config?.icon || BookOpen;

                return (
                  <div
                    key={group.category}
                    className="flex flex-col justify-between p-4 rounded-lg bg-surface-elevated/40 border border-border-hairline hover:border-border-subtle transition-all duration-200"
                  >
                    <div>
                      {/* Subsystem Tag & Index */}
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-2xs text-content-dim uppercase tracking-wider">
                          {config?.subsystemTag}
                        </span>
                        <span className="font-mono text-2xs text-content-muted">
                          SYS_{config?.index}
                        </span>
                      </div>

                      {/* Title & Icon */}
                      <div className="flex items-center gap-2 mb-2">
                        <div className="p-1.5 rounded bg-surface border border-border-hairline text-content-secondary">
                          <Icon size={14} />
                        </div>
                        <h3 className="text-sm font-semibold text-content-primary tracking-tight">
                          {group.category}
                        </h3>
                      </div>

                      <p className="text-2xs text-content-muted leading-relaxed mb-4">
                        {config?.roleSummary}
                      </p>
                    </div>

                    {/* Technology Items */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border-hairline/60">
                      {group.skills.map((tech) => {
                        const isHovered = hoveredSkill === tech;
                        return (
                          <div
                            key={tech}
                            onMouseEnter={() => setHoveredSkill(tech)}
                            onMouseLeave={() => setHoveredSkill(null)}
                            className={`group relative inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono transition-all duration-150 cursor-default select-none ${
                              isHovered
                                ? 'bg-canvas text-content-primary border border-border-subtle shadow-[0_2px_12px_rgba(255,255,255,0.08)] -translate-y-0.5'
                                : 'bg-surface text-content-secondary border border-border-hairline hover:text-content-primary hover:border-border-subtle'
                            }`}
                          >
                            <span
                              className={`w-1 h-1 rounded-full transition-colors ${
                                isHovered ? 'bg-content-primary' : 'bg-border-subtle'
                              }`}
                            />
                            <span>{tech}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* ========================================================= */}
        {/* TRANSITION LEAD-IN TOWARD PROJECTS */}
        {/* ========================================================= */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="p-6 rounded-lg bg-surface-elevated/40 border border-border-hairline hover:border-border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-surface border border-border-hairline text-accent-emerald shrink-0">
              <Layers size={16} />
            </div>
            <div>
              <div className="text-sm font-semibold text-content-primary">
                From tools to things built.
              </div>
              <div className="text-2xs font-mono text-content-muted">
                Applied in real-world systems spanning fintech data analytics and CNN forensics.
              </div>
            </div>
          </div>

          <Button
            href="#projects"
            variant="outline"
            size="sm"
            iconRight={<ArrowDown size={14} />}
          >
            Explore Projects
          </Button>
        </motion.div>
      </Container>
    </section>
  );
};
