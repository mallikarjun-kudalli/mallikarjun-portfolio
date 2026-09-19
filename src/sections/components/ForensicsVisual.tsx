import React, { useState } from 'react';
import { Scan, Eye, Activity, Cpu, Layers } from 'lucide-react';

export const ForensicsVisual: React.FC = () => {
  const [scanning, setScanning] = useState(false);

  return (
    <div className="w-full rounded-lg border border-border-hairline bg-surface-elevated/70 p-4 sm:p-5 font-mono relative overflow-hidden">
      {/* Forensic Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border-hairline/70 pb-3 mb-4 text-2xs">
        <div className="flex items-center gap-2">
          <Scan size={13} className="text-accent-cyan animate-pulse" />
          <span className="text-content-primary font-medium tracking-wide">
            CNN_FORENSICS // NEURAL_INSPECTION_WORKSPACE
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-2xs text-content-dim">STATUS: READY</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setScanning(!scanning);
            }}
            className="px-2 py-0.5 rounded bg-surface border border-border-hairline text-accent-cyan hover:bg-canvas text-2xs transition-colors"
          >
            {scanning ? 'Pause Scan' : 'Trigger Scan'}
          </button>
        </div>
      </div>

      {/* Main Forensic Viewport */}
      <div className="relative rounded bg-canvas border border-border-hairline h-48 sm:h-56 overflow-hidden flex items-center justify-center">
        {/* Subtle Background Pixel / Spatial Frequency Grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(6, 182, 212, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(6, 182, 212, 0.15) 1px, transparent 1px)',
            backgroundSize: '16px 16px',
          }}
        />

        {/* Central Abstract Image Wireframe & Spectral Heatmap Region */}
        <div className="relative w-44 sm:w-56 h-36 sm:h-44 border border-border-subtle rounded flex items-center justify-center bg-surface/50">
          {/* Authentic Baseline Geometric Structure */}
          <div className="w-28 h-24 border border-border-hairline rounded flex flex-col items-center justify-center p-2 relative">
            <Eye size={22} className="text-content-dim mb-1" />
            <span className="text-3xs text-content-dim">PAYLOAD_INPUT</span>

            {/* Simulated Splicing / Forgery Bounding Box Detected by CNN */}
            <div className="absolute top-2 right-2 w-12 h-10 border border-accent-cyan bg-accent-cyan/10 rounded flex items-center justify-center">
              <span className="text-3xs font-bold text-accent-cyan animate-pulse">
                TAMPER
              </span>
            </div>
          </div>

          {/* Scanning Beam (Active when scanning) */}
          <div
            className={`absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent-cyan to-transparent shadow-[0_0_12px_rgba(6,182,212,0.8)] ${
              scanning ? 'animate-bounce' : 'top-1/2'
            }`}
          />

          {/* Coordinate Overlay Ticks */}
          <div className="absolute top-1 left-1 text-3xs text-content-dim">
            [X: 128.4, Y: 256.0]
          </div>
          <div className="absolute bottom-1 right-1 text-3xs text-accent-emerald">
            DETECTION_STATE: ACTIVE
          </div>
        </div>

        {/* Reticle Corner Brackets */}
        <div className="absolute top-2 left-2 text-2xs text-content-dim">+</div>
        <div className="absolute top-2 right-2 text-2xs text-content-dim">+</div>
        <div className="absolute bottom-2 left-2 text-2xs text-content-dim">+</div>
        <div className="absolute bottom-2 right-2 text-2xs text-content-dim">+</div>
      </div>

      {/* Pipeline Micro-Tiers (Responsive for mobile 320px-375px) */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 mt-3 text-3xs text-center font-mono">
        {[
          { label: '01 UPLOAD', icon: Activity, active: true },
          { label: '02 PREPROCESS', icon: Layers, active: true },
          { label: '03 OPENCV CV', icon: Scan, active: true },
          { label: '04 CNN TENSOR', icon: Cpu, active: true },
          { label: '05 PREDICT', icon: Eye, active: true },
        ].map((step) => (
          <div
            key={step.label}
            className="p-1.5 rounded bg-surface border border-border-hairline text-content-secondary"
          >
            <span className="text-accent-cyan">{step.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
