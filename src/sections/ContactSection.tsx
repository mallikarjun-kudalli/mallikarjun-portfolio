import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Terminal,
  Mail,
  Phone,
  Send,
  CheckCircle,
  AlertCircle,
  Sparkles,
} from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { ExternalLink } from '@/components/common/ExternalLink';
import { portfolioData } from '@/data/portfolioData';

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const ContactSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const { personal, socials } = portfolioData;

  // Form state
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [formStatus, setFormStatus] = useState<'idle' | 'opening_client'>('idle');

  // Filter primary social channels
  const socialLinks = socials.filter((s) =>
    ['GitHub', 'LinkedIn', 'LeetCode'].includes(s.platform)
  );

  // Validate inputs
  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please provide your name (at least 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide a message with at least 10 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Non-deceptive client behavior: explicitly trigger mailto with validated payload
    setFormStatus('opening_client');

    const subject = encodeURIComponent(
      `Portfolio Inquiry from ${formData.name.trim()}`
    );
    const body = encodeURIComponent(
      `${formData.message.trim()}\n\n---\nSender: ${formData.name.trim()} (${formData.email.trim()})`
    );

    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 border-b border-border-hairline bg-canvas overflow-hidden"
    >
      {/* Subtle architectural background grid line */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      <Container size="wide" className="relative z-10">
        {/* ========================================================= */}
        {/* 2-COLUMN ASYMMETRIC EDITORIAL LAYOUT */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* ------------------------------------------------------- */}
          {/* LEFT COLUMN: Headline, Positioning, Direct Channels */}
          {/* ------------------------------------------------------- */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            <div>
              {/* Technical Kicker */}
              <div className="inline-flex items-center gap-2 mb-4 px-2.5 py-1 rounded bg-surface-elevated border border-border-hairline">
                <Terminal size={12} className="text-accent-emerald" />
                <span className="font-mono text-xs text-accent-emerald uppercase tracking-wider font-medium">
                  07 // CONTACT
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="text-3xl sm:text-5xl font-bold tracking-editorial text-content-primary leading-[1.12] mb-4">
                Let's build something useful.
              </h2>

              {/* Supporting Positioning Text */}
              <p className="text-base sm:text-lg text-content-secondary leading-relaxed font-light mb-8 max-w-lg">
                Interested in software development, data and intelligent applications.
              </p>

              {/* Final Understated CTA Statement */}
              <div className="p-4 rounded-lg bg-surface/70 border border-border-hairline mb-8 max-w-lg">
                <div className="flex items-center gap-2 text-2xs font-mono uppercase tracking-wider text-accent-emerald mb-1">
                  <Sparkles size={12} />
                  <span>ORIENTATION</span>
                </div>
                <div className="text-sm font-medium text-content-primary">
                  Open to building useful software.
                </div>
              </div>
            </div>

            {/* Direct Actionable Channels */}
            <div className="space-y-3 pt-6 border-t border-border-hairline max-w-lg">
              <div className="font-mono text-3xs uppercase tracking-wider text-content-dim mb-2">
                DIRECT COMMUNICATION CHANNELS:
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  href={`mailto:${personal.email}`}
                  variant="primary"
                  size="md"
                  iconLeft={<Mail size={15} />}
                  className="w-full sm:w-auto"
                >
                  {personal.email}
                </Button>

                <Button
                  href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                  variant="secondary"
                  size="md"
                  iconLeft={<Phone size={15} />}
                  className="w-full sm:w-auto font-mono text-xs"
                >
                  {personal.phone}
                </Button>
              </div>

              {/* External Profile Links */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-4 text-xs font-mono">
                <span className="text-content-dim text-3xs uppercase">PROFILES:</span>
                {socialLinks.map((social) => (
                  <ExternalLink
                    key={social.platform}
                    href={social.url}
                    mono
                    className="text-content-secondary hover:text-accent-emerald transition-colors"
                  >
                    {social.platform}
                  </ExternalLink>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ------------------------------------------------------- */}
          {/* RIGHT COLUMN: Minimal Validated Contact Form */}
          {/* ------------------------------------------------------- */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="rounded-xl border border-border-hairline bg-surface/60 p-6 sm:p-8 backdrop-blur-xs shadow-xl">
              {/* Form Title */}
              <div className="flex items-center justify-between border-b border-border-hairline pb-3 mb-6">
                <div className="flex items-center gap-2 font-mono text-2xs text-content-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald" />
                  <span className="uppercase tracking-widest text-content-primary font-medium">
                    TRANSMISSION_FORM // DIRECT_MESSAGE
                  </span>
                </div>
                <span className="font-mono text-3xs text-content-dim">
                  CLIENT_VALIDATED
                </span>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Field: Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-mono uppercase tracking-wider text-content-secondary mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    placeholder="Your name"
                    className={`w-full rounded-md bg-canvas border px-3.5 py-2.5 text-sm text-content-primary placeholder:text-content-dim focus:outline-none transition-colors ${
                      errors.name
                        ? 'border-red-500/70 focus:border-red-500'
                        : 'border-border-hairline focus:border-accent-emerald'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-2xs font-mono text-red-400 flex items-center gap-1">
                      <AlertCircle size={11} />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Field: Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-mono uppercase tracking-wider text-content-secondary mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="name@example.com"
                    className={`w-full rounded-md bg-canvas border px-3.5 py-2.5 text-sm text-content-primary placeholder:text-content-dim focus:outline-none transition-colors ${
                      errors.email
                        ? 'border-red-500/70 focus:border-red-500'
                        : 'border-border-hairline focus:border-accent-emerald'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-2xs font-mono text-red-400 flex items-center gap-1">
                      <AlertCircle size={11} />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Field: Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono uppercase tracking-wider text-content-secondary mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    placeholder="Brief description of the project or opportunity..."
                    className={`w-full rounded-md bg-canvas border px-3.5 py-2.5 text-sm text-content-primary placeholder:text-content-dim focus:outline-none transition-colors resize-none ${
                      errors.message
                        ? 'border-red-500/70 focus:border-red-500'
                        : 'border-border-hairline focus:border-accent-emerald'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-2xs font-mono text-red-400 flex items-center gap-1">
                      <AlertCircle size={11} />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    className="w-full justify-center"
                    iconRight={<Send size={14} />}
                  >
                    Send Message
                  </Button>
                </div>

                {/* Non-Deceptive Status Notice */}
                {formStatus === 'opening_client' && (
                  <div className="p-3 rounded bg-surface-elevated border border-accent-emerald/40 text-2xs font-mono text-content-secondary flex items-start gap-2">
                    <CheckCircle size={14} className="text-accent-emerald shrink-0 mt-0.5" />
                    <div>
                      <span className="text-content-primary font-semibold block mb-0.5">
                        Opening Email Client
                      </span>
                      Validated payload prepared. If your mail client does not launch automatically,
                      please email directly to{' '}
                      <a
                        href={`mailto:${personal.email}`}
                        className="text-accent-emerald underline"
                      >
                        {personal.email}
                      </a>.
                    </div>
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
