import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Terminal, FileText, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { portfolioData } from '@/data/portfolioData';

// Structured metadata for verified certifications
const CERT_METADATA = [
  {
    docId: 'NPTEL-IITKGP-01',
    provider: 'NPTEL',
    institution: 'IIT Kharagpur',
    category: 'DISTRIBUTED SYSTEMS & CLOUD',
    status: 'COMPLETED & VERIFIED',
  },
  {
    docId: 'COURSERA-JHU-02',
    provider: 'Coursera',
    institution: 'Johns Hopkins University',
    category: 'DATA VISUALIZATION & ANALYTICS',
    status: 'SPECIALIZATION COMPLETED',
  },
];

export const CertificationsSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const { certifications } = portfolioData;

  return (
    <section
      id="certifications"
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
                05 // CERTIFICATIONS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-editorial text-content-primary leading-[1.14]">
              Continuous learning.
            </h2>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-between pt-1">
            <p className="text-base sm:text-lg text-content-secondary leading-relaxed font-light mb-4">
              Independent coursework and rigorous specializations reinforcing distributed systems,
              cloud architectures, and exploratory data communication.
            </p>

            <div className="flex items-center gap-2 font-mono text-2xs text-content-dim">
              <span>[2 Verified Credentials // Academic & Global Providers]</span>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* REFINED CREDENTIAL PANELS (DOCUMENTATION LEDGER STYLE) */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => {
            const meta = CERT_METADATA[index] || {
              docId: `DOC_ID: 0${index + 1}`,
              provider: 'Certified Provider',
              institution: cert.issuer,
              category: 'TECHNICAL ADVANCEMENT',
              status: 'VERIFIED',
            };

            return (
              <motion.div
                key={cert.title}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.35,
                  delay: shouldReduceMotion ? 0 : index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="rounded-xl border border-border-hairline bg-surface/60 p-6 sm:p-7 hover:border-border-subtle hover:bg-surface-elevated/40 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  {/* Ledger Top Header */}
                  <div className="flex items-center justify-between border-b border-border-hairline/70 pb-3 mb-4 text-2xs font-mono">
                    <div className="flex items-center gap-1.5 text-content-dim">
                      <FileText size={12} className="text-accent-emerald" />
                      <span>{meta.docId}</span>
                    </div>
                    <span className="text-accent-emerald flex items-center gap-1">
                      <CheckCircle2 size={11} />
                      <span>{meta.status}</span>
                    </span>
                  </div>

                  {/* Course Title & Credential Name */}
                  <div className="mb-4">
                    <div className="font-mono text-3xs uppercase tracking-wider text-content-dim mb-1">
                      {meta.category}
                    </div>
                    <h3 className="text-lg font-bold text-content-primary tracking-tight leading-snug group-hover:text-accent-emerald transition-colors">
                      {cert.title}
                    </h3>
                  </div>
                </div>

                {/* Issuer & Provider Footer */}
                <div className="pt-4 border-t border-border-hairline/70 flex items-center justify-between text-xs font-mono">
                  <div>
                    <span className="text-content-dim block text-3xs uppercase">ISSUING BODY</span>
                    <span className="text-content-secondary font-medium">{cert.issuer}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-content-dim block text-3xs uppercase">PROVIDER</span>
                    <span className="text-content-primary font-semibold">{meta.provider}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
