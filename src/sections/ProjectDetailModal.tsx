import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink as ExtIcon, Layers, CheckCircle2, GitBranch } from 'lucide-react';
import { Project } from '@/data/types';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
}) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-canvas/85 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl border border-border-subtle bg-surface p-6 sm:p-8 shadow-2xl z-10 custom-scrollbar"
        >
          {/* Close Button */}
          <button
            autoFocus
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-md bg-surface-elevated border border-border-hairline text-content-secondary hover:text-content-primary hover:border-border-subtle transition-colors focus-ring"
            aria-label="Close project modal"
          >
            <X size={16} />
          </button>

          {/* Header Metadata */}
          <div className="mb-6 border-b border-border-hairline pb-4 pr-10">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="font-mono text-2xs uppercase text-accent-emerald tracking-wider">
                {project.categoryTag}
              </span>
              <span className="text-content-dim">•</span>
              <Badge variant="outline" size="sm">
                {project.role}
              </Badge>
            </div>
            <h3
              id="project-modal-title"
              className="text-xl sm:text-2xl font-bold tracking-tight text-content-primary"
            >
              {project.title}
            </h3>
          </div>

          {/* Structured Case Study Sections */}
          <div className="space-y-6 text-sm text-content-secondary">
            {/* 01 // OVERVIEW */}
            <div>
              <div className="font-mono text-2xs uppercase tracking-wider text-accent-emerald mb-1.5">
                01 // OVERVIEW
              </div>
              <p className="text-sm leading-relaxed text-content-primary/90 font-light">
                {project.summary}
              </p>

              {project.metrics && project.metrics.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-3">
                  {project.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="p-3 rounded bg-surface-elevated/70 border border-border-hairline"
                    >
                      <div className="text-base font-bold text-accent-emerald font-mono">
                        {m.value}
                      </div>
                      <div className="text-2xs text-content-muted font-mono mt-0.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 02 // PROBLEM / PURPOSE */}
            {project.problemPurpose && (
              <div>
                <div className="font-mono text-2xs uppercase tracking-wider text-accent-emerald mb-1.5">
                  02 // PROBLEM &amp; PURPOSE
                </div>
                <p className="leading-relaxed">
                  {project.problemPurpose}
                </p>
              </div>
            )}

            {/* 03 // APPROACH */}
            {project.approach && (
              <div>
                <div className="font-mono text-2xs uppercase tracking-wider text-accent-emerald mb-1.5">
                  03 // APPROACH
                </div>
                <p className="leading-relaxed">
                  {project.approach}
                </p>
              </div>
            )}

            {/* 04 // TECHNOLOGY */}
            <div>
              <div className="font-mono text-2xs uppercase tracking-wider text-accent-emerald mb-2">
                04 // TECHNOLOGY STACK
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="default" size="sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* 05 // IMPLEMENTATION / WORKFLOW */}
            {project.implementationWorkflow && project.implementationWorkflow.length > 0 && (
              <div>
                <div className="font-mono text-2xs uppercase tracking-wider text-accent-emerald mb-2 flex items-center gap-1.5">
                  <Layers size={13} />
                  <span>05 // IMPLEMENTATION WORKFLOW</span>
                </div>
                <div className="space-y-2">
                  {project.implementationWorkflow.map((step, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-2.5 rounded bg-surface-elevated/40 border border-border-hairline text-xs font-mono"
                    >
                      <span className="text-accent-emerald font-semibold shrink-0">
                        [0{idx + 1}]
                      </span>
                      <span className="text-content-secondary leading-relaxed">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 06 // KEY RESULTS OR FUNCTIONALITY */}
            {project.keyResults && project.keyResults.length > 0 && (
              <div>
                <div className="font-mono text-2xs uppercase tracking-wider text-accent-emerald mb-2 flex items-center gap-1.5">
                  <CheckCircle2 size={13} />
                  <span>06 // KEY RESULTS &amp; FUNCTIONALITY</span>
                </div>
                <ul className="space-y-1.5 text-xs text-content-secondary list-none">
                  {project.keyResults.map((result, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-accent-emerald mt-0.5">•</span>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 07 // LINKS */}
            {(project.githubUrl || project.liveUrl) && (
              <div className="pt-4 border-t border-border-hairline flex flex-wrap items-center gap-3">
                <div className="font-mono text-2xs uppercase tracking-wider text-content-dim mr-2">
                  07 // LINKS:
                </div>
                {project.githubUrl && (
                  <Button
                    href={project.githubUrl}
                    variant="outline"
                    size="sm"
                    iconLeft={<GitBranch size={14} />}
                    external
                  >
                    GitHub Repository
                  </Button>
                )}
                {project.liveUrl && (
                  <Button
                    href={project.liveUrl}
                    variant="primary"
                    size="sm"
                    iconRight={<ExtIcon size={13} />}
                    external
                  >
                    Live Demo
                  </Button>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </div>
      )}
    </AnimatePresence>
  );
};
