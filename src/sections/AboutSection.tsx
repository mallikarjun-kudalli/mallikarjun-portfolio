import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  GraduationCap,
  ArrowRight,
  Code2,
  Binary,
  BarChart3,
  Brain,
  ScanEye,
  Database,
  Terminal,
} from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Badge } from '@/components/common/Badge';
import { portfolioData } from '@/data/portfolioData';

// Six focused technical domains supported strictly by the resume
const TECHNICAL_DOMAINS = [
  {
    id: '01',
    title: 'Software Engineering',
    category: 'FULL-STACK',
    icon: Code2,
    accent: 'emerald',
    description: 'Component architecture, REST API pipelines, and user-centric web applications.',
    technologies: ['React.js', 'Flask', 'JavaScript', 'REST APIs'],
  },
  {
    id: '02',
    title: 'Data Structures & Algorithms',
    category: 'CORE COMPUTATION',
    icon: Binary,
    accent: 'emerald',
    description: 'Algorithmic efficiency, complexity analysis, and problem-solving.',
    technologies: ['C++', 'Python', '100+ LeetCode', 'Optimization'],
  },
  {
    id: '03',
    title: 'Data Analytics',
    category: 'INTELLIGENCE',
    icon: BarChart3,
    accent: 'cyan',
    description: 'Exploratory data analysis, KPI modeling, and executive dashboard engineering.',
    technologies: ['Power BI', 'SQL', 'Pandas', 'NumPy', 'Excel'],
  },
  {
    id: '04',
    title: 'Machine Learning',
    category: 'INTELLIGENCE',
    icon: Brain,
    accent: 'emerald',
    description: 'Supervised predictive modeling, feature engineering, and model evaluation.',
    technologies: ['TensorFlow', 'Keras', 'Scikit-learn', 'Pipelines'],
  },
  {
    id: '05',
    title: 'Computer Vision',
    category: 'PERCEPTION',
    icon: ScanEye,
    accent: 'cyan',
    description: 'Image preprocessing, CNN architectures, forensics, and biometric authentication.',
    technologies: ['OpenCV', 'CNNs', 'Image Forensics', 'Face Detection'],
  },
  {
    id: '06',
    title: 'Database Systems',
    category: 'CORE COMPUTATION',
    icon: Database,
    accent: 'slate',
    description: 'Relational data modeling, schema indexing, and complex analytical SQL queries.',
    technologies: ['MySQL', 'SQLite', 'MongoDB', 'DBMS'],
  },
];

export const AboutSection: React.FC = () => {
  const [activeDomain, setActiveDomain] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const primaryEdu = portfolioData.education[0];

  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 border-b border-border-hairline bg-canvas overflow-hidden"
    >
      <Container size="wide">
        {/* ========================================================= */}
        {/* EDITORIAL ASYMMETRIC HEADER: 2-Column Split */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16 sm:mb-20">
          {/* Left Column: Technical Kicker & Editorial Headline */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 mb-4 px-2.5 py-1 rounded bg-surface-elevated border border-border-hairline">
              <Terminal size={12} className="text-accent-emerald" />
              <span className="font-mono text-xs text-accent-emerald uppercase tracking-wider font-medium">
                01 // PROFILE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-editorial text-content-primary leading-[1.14]">
              Building across software, data and intelligence.
            </h2>
          </div>

          {/* Right Column: Concise, Human-Written Technical Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-between pt-1">
            <div className="space-y-4 text-base sm:text-lg text-content-secondary leading-relaxed font-light">
              <p>
                Currently pursuing a B.E. in Computer Science and Engineering with a specialization in Data Science at{' '}
                <span className="text-content-primary font-medium">RNS Institute of Technology, Bengaluru</span> (CGPA 8.07/10).
                My work bridges core software engineering and applied data intelligence—spanning full-stack application development,
                computer vision models, and analytical data pipelines.
              </p>
              <p className="text-sm sm:text-base text-content-muted leading-relaxed">
                With foundational training in Data Structures, Algorithms, OOP, Operating Systems, and SQL, I approach systems
                with an emphasis on structural clarity and algorithmic efficiency. Whether building deep learning image forensics
                applications, developing interactive analytics dashboards, or engineering biometric authentication systems, the focus
                remains constant: construct software that solves genuine user problems with engineering rigor.
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* CONNECTED TECHNICAL STRUCTURE: 6-Domain Architectural Grid */}
        {/* ========================================================= */}
        <div className="relative mb-16 sm:mb-20">
          {/* Section Kicker Bar */}
          <div className="flex items-center justify-between border-b border-border-hairline pb-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald" />
              <span className="font-mono text-2xs uppercase tracking-widest text-content-muted">
                TECHNICAL_DOMAINS // INTERCONNECTED_MATRIX
              </span>
            </div>
            <span className="font-mono text-2xs text-content-dim hidden sm:inline-block">
              SYS_NODES: 06 // ACTIVE
            </span>
          </div>

          {/* Matrix Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 relative">
            {TECHNICAL_DOMAINS.map((domain, index) => {
              const Icon = domain.icon;
              const isHovered = activeDomain === domain.id;
              const accentColor =
                domain.accent === 'emerald'
                  ? 'text-accent-emerald'
                  : domain.accent === 'cyan'
                  ? 'text-accent-cyan'
                  : 'text-content-secondary';

              return (
                <motion.div
                  key={domain.id}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    duration: 0.35,
                    delay: shouldReduceMotion ? 0 : index * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  onMouseEnter={() => setActiveDomain(domain.id)}
                  onMouseLeave={() => setActiveDomain(null)}
                  className={`group relative p-5 sm:p-6 rounded-lg transition-all duration-250 ${
                    isHovered
                      ? 'bg-surface-hover/90 border-border-subtle shadow-[0_4px_24px_rgba(0,0,0,0.4)]'
                      : 'bg-surface/70 border-border-hairline hover:border-border-subtle'
                  } border flex flex-col justify-between min-h-[220px]`}
                >
                  {/* Subtle Hairline Reticle Markers */}
                  <div className="absolute top-2 right-2 font-mono text-2xs text-content-dim opacity-40 group-hover:opacity-100 transition-opacity">
                    +
                  </div>

                  {/* Header Row: Index & Category */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-semibold text-content-muted group-hover:text-content-primary transition-colors">
                          {domain.id}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-border-subtle" />
                        <span className="font-mono text-2xs uppercase tracking-wider text-content-dim">
                          {domain.category}
                        </span>
                      </div>
                      <div
                        className={`p-1.5 rounded bg-surface-elevated border border-border-hairline transition-colors ${
                          isHovered ? accentColor : 'text-content-muted'
                        }`}
                      >
                        <Icon size={14} />
                      </div>
                    </div>

                    {/* Domain Title */}
                    <h3 className="text-base sm:text-lg font-semibold text-content-primary tracking-tight mb-2">
                      {domain.title}
                    </h3>

                    {/* Domain Description */}
                    <p className="text-xs text-content-secondary leading-relaxed mb-4">
                      {domain.description}
                    </p>
                  </div>

                  {/* Technologies Blueprint Badges */}
                  <div className="pt-3 border-t border-border-hairline/60 flex flex-wrap gap-1.5">
                    {domain.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`text-2xs font-mono px-2 py-0.5 rounded transition-colors ${
                          isHovered
                            ? 'bg-canvas text-content-primary border border-border-hairline'
                            : 'bg-surface-elevated/80 text-content-muted border border-transparent'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* COMPACT ACADEMIC HIGHLIGHT (EDUCATION SNAPSHOT) */}
        {/* ========================================================= */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative p-5 sm:p-6 rounded-lg bg-surface/90 border border-border-hairline hover:border-border-subtle transition-all duration-200"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            {/* Institution & Degree */}
            <div className="flex items-start sm:items-center gap-3.5">
              <div className="p-2.5 rounded-md bg-surface-elevated border border-border-hairline text-accent-emerald shrink-0">
                <GraduationCap size={20} />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h4 className="text-sm sm:text-base font-semibold text-content-primary">
                    {primaryEdu.institution}
                  </h4>
                  <span className="text-2xs font-mono text-content-muted">
                    • {primaryEdu.location}
                  </span>
                </div>
                <div className="text-xs text-content-secondary font-mono">
                  {primaryEdu.degree} ({primaryEdu.period})
                </div>
              </div>
            </div>

            {/* Score & Direct Section Transition */}
            <div className="flex items-center gap-4 sm:shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-border-hairline">
              <Badge variant="accent" size="md">
                {primaryEdu.scoreLabel}: {primaryEdu.score}
              </Badge>

              <a
                href="#education"
                className="group inline-flex items-center gap-1.5 text-xs font-mono text-content-secondary hover:text-content-primary focus-ring rounded py-1 px-2"
                aria-label="Navigate to full Education section"
              >
                <span>Full Timeline</span>
                <ArrowRight
                  size={13}
                  className="transition-transform duration-200 group-hover:translate-x-1 text-accent-emerald"
                />
              </a>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
