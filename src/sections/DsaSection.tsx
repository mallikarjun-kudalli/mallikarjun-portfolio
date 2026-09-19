import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Terminal, Binary, ExternalLink as ExtIcon, Code2 } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { portfolioData } from '@/data/portfolioData';

export const DsaSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const leetcodeLink =
    portfolioData.socials.find((s) => s.platform === 'LeetCode')?.url ||
    'https://leetcode.com';

  return (
    <section
      id="dsa"
      className="relative py-20 sm:py-24 border-b border-border-hairline bg-canvas overflow-hidden"
    >
      <Container size="wide">
        {/* ========================================================= */}
        {/* SECTION HEADER: Editorial Kicker & Title */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-12 sm:mb-16">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 mb-4 px-2.5 py-1 rounded bg-surface-elevated border border-border-hairline">
              <Terminal size={12} className="text-accent-emerald" />
              <span className="font-mono text-xs text-accent-emerald uppercase tracking-wider font-medium">
                06 // PROBLEM SOLVING
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-editorial text-content-primary leading-[1.14]">
              Built on fundamentals.
            </h2>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-between pt-1">
            <p className="text-base sm:text-lg text-content-secondary leading-relaxed font-light mb-4">
              Algorithmic problem-solving anchored in core data structures, time and space complexity analysis,
              and iterative optimization across arrays, trees, graphs, and dynamic programming paradigms.
            </p>

            <div className="flex items-center gap-2 font-mono text-2xs text-content-dim">
              <span>[ALGORITHMIC PRACTICE // LEETCODE MILESTONE]</span>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* PROMINENT METRIC & ALGORITHMIC GRAPH VISUALIZATION */}
        {/* ========================================================= */}
        <div className="max-w-4xl mx-auto rounded-2xl border border-border-hairline bg-surface/50 p-6 sm:p-10 backdrop-blur-xs relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Column: Prominent Metric Callout */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-6 flex flex-col justify-between space-y-6"
            >
              <div>
                <div className="flex items-center gap-2 text-2xs font-mono text-content-dim uppercase tracking-wider mb-2">
                  <Binary size={13} className="text-accent-emerald" />
                  <span>LEETCODE PLATFORM VALIDATION</span>
                </div>

                {/* Big Prominent Number */}
                <div className="text-6xl sm:text-7xl font-extrabold font-mono tracking-tight text-accent-emerald mb-2">
                  100+
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-content-primary tracking-tight mb-2">
                  Data Structures &amp; Algorithms
                </h3>
                <div className="text-sm font-mono text-content-secondary uppercase tracking-wider">
                  Problems Solved
                </div>
              </div>

              <div className="pt-4 border-t border-border-hairline/80 flex flex-wrap items-center gap-4">
                <Button
                  href={leetcodeLink}
                  variant="primary"
                  size="sm"
                  iconRight={<ExtIcon size={13} />}
                  external
                >
                  View LeetCode Profile
                </Button>
                <span className="font-mono text-2xs text-content-dim">
                  C++ &amp; Python Implementations
                </span>
              </div>
            </motion.div>

            {/* Right Column: Subtle Decorative Algorithmic Graph Schematic */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-6 rounded-xl border border-border-hairline bg-canvas/90 p-5 font-mono text-2xs relative"
            >
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between border-b border-border-hairline pb-2.5 mb-4 text-3xs text-content-dim">
                <span className="flex items-center gap-1.5 text-accent-emerald">
                  <Code2 size={12} />
                  <span>algorithmic_graph.sys</span>
                </span>
                <span>ROOT_TREE // GRAPH_PARADIGM</span>
              </div>

              {/* Decorative Graph Structure (Vector Paths) */}
              <div className="relative h-44 flex items-center justify-center">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 240 140">
                  {/* Connecting Vector Lines */}
                  <line x1="120" y1="20" x2="60" y2="70" stroke="rgba(16,185,129,0.3)" strokeWidth="1.5" />
                  <line x1="120" y1="20" x2="180" y2="70" stroke="rgba(6,182,212,0.3)" strokeWidth="1.5" />
                  <line x1="60" y1="70" x2="30" y2="120" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                  <line x1="60" y1="70" x2="90" y2="120" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                  <line x1="180" y1="70" x2="150" y2="120" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                  <line x1="180" y1="70" x2="210" y2="120" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

                  {/* Level 0: Root Node */}
                  <circle cx="120" cy="20" r="14" fill="#11141e" stroke="#10b981" strokeWidth="1.5" />
                  <text x="120" y="23" textAnchor="middle" fill="#f8fafc" fontSize="8" fontFamily="monospace">
                    DSA
                  </text>

                  {/* Level 1: Core Paradigms */}
                  <circle cx="60" cy="70" r="13" fill="#11141e" stroke="#10b981" strokeWidth="1" />
                  <text x="60" y="73" textAnchor="middle" fill="#94a3b8" fontSize="7" fontFamily="monospace">
                    STRUCT
                  </text>

                  <circle cx="180" cy="70" r="13" fill="#11141e" stroke="#06b6d4" strokeWidth="1" />
                  <text x="180" y="73" textAnchor="middle" fill="#94a3b8" fontSize="7" fontFamily="monospace">
                    ALGO
                  </text>

                  {/* Level 2: Sub-Nodes */}
                  <circle cx="30" cy="120" r="10" fill="#090a0f" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                  <text x="30" y="123" textAnchor="middle" fill="#64748b" fontSize="6" fontFamily="monospace">
                    TREES
                  </text>

                  <circle cx="90" cy="120" r="10" fill="#090a0f" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                  <text x="90" y="123" textAnchor="middle" fill="#64748b" fontSize="6" fontFamily="monospace">
                    GRAPHS
                  </text>

                  <circle cx="150" cy="120" r="10" fill="#090a0f" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                  <text x="150" y="123" textAnchor="middle" fill="#64748b" fontSize="6" fontFamily="monospace">
                    DP
                  </text>

                  <circle cx="210" cy="120" r="10" fill="#090a0f" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                  <text x="210" y="123" textAnchor="middle" fill="#64748b" fontSize="6" fontFamily="monospace">
                    SEARCH
                  </text>
                </svg>
              </div>

              <div className="pt-2 border-t border-border-hairline flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 text-3xs text-content-dim">
                <span>PARADIGMS: ARRAYS // TREES // GRAPHS</span>
                <span className="text-accent-emerald">OPTIMIZATION: O(log N) / O(N)</span>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};
