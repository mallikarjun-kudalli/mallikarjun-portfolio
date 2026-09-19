import React, { useState } from 'react';
import { ShieldCheck, AlertCircle, Camera, CheckCircle } from 'lucide-react';

export const BiometricVisual: React.FC = () => {
  const [testState, setTestState] = useState<'verified' | 'duplicate'>('verified');

  return (
    <div className="w-full rounded-lg border border-border-hairline bg-surface-elevated/70 p-4 sm:p-5 font-mono">
      {/* Desktop App Window Titlebar Simulation (Tkinter) */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border-hairline/70 pb-3 mb-4 text-2xs">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-border-subtle" />
            <span className="w-2.5 h-2.5 rounded-full bg-border-subtle" />
            <span className="w-2.5 h-2.5 rounded-full bg-border-subtle" />
          </div>
          <span className="text-content-primary font-medium text-xs ml-1 sm:ml-2">
            SmartVoting_GUI.py <span className="hidden sm:inline">// Tkinter Client</span>
          </span>
        </div>
        <div className="flex items-center gap-1 bg-surface rounded p-0.5 border border-border-hairline">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setTestState('verified');
            }}
            className={`px-2 py-0.5 rounded text-2xs transition-colors ${
              testState === 'verified'
                ? 'bg-canvas text-accent-emerald font-semibold'
                : 'text-content-muted'
            }`}
          >
            Valid Ballot
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setTestState('duplicate');
            }}
            className={`px-2 py-0.5 rounded text-2xs transition-colors ${
              testState === 'duplicate'
                ? 'bg-canvas text-accent-cyan font-semibold'
                : 'text-content-muted'
            }`}
          >
            Duplicate Check
          </button>
        </div>
      </div>

      {/* Main Workflow Viewport */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Left: OpenCV Face Mesh Detection Simulation */}
        <div className="p-3 rounded bg-canvas border border-border-hairline flex flex-col justify-between">
          <div className="flex items-center justify-between text-3xs text-content-dim mb-2">
            <span className="flex items-center gap-1">
              <Camera size={11} className="text-accent-emerald" />
              <span>OPENCV_WEBCAM_STREAM</span>
            </span>
            <span>FACE_DETECTION_PIPELINE</span>
          </div>

          <div className="h-28 rounded border border-border-subtle/50 flex flex-col items-center justify-center relative bg-surface/30">
            {/* Landmark Box */}
            <div className="w-16 h-20 border border-dashed border-accent-emerald rounded flex flex-col items-center justify-center relative">
              {/* Landmark Dots */}
              <span className="w-1 h-1 rounded-full bg-accent-emerald absolute top-6 left-3" />
              <span className="w-1 h-1 rounded-full bg-accent-emerald absolute top-6 right-3" />
              <span className="w-1 h-1 rounded-full bg-accent-emerald absolute top-10" />
              <span className="w-3 h-0.5 bg-accent-emerald absolute bottom-4" />
              <span className="text-3xs text-accent-emerald mt-10">FACE_ID</span>
            </div>
            <div className="absolute bottom-1 text-3xs text-content-dim font-mono">
              [STATUS: FACE_DETECTED]
            </div>
          </div>

          <div className="mt-2 text-3xs text-content-muted flex items-center justify-between">
            <span>Identity: Registered Voter</span>
            <span className="text-accent-emerald font-semibold">VERIFIED</span>
          </div>
        </div>

        {/* Right: Validation & Duplicate Prevention */}
        <div className="p-3 rounded bg-surface border border-border-hairline flex flex-col justify-between">
          <div className="text-3xs text-content-dim uppercase mb-2 flex items-center gap-1.5">
            <ShieldCheck size={12} className="text-accent-emerald" />
            <span>AUTHENTICATION ENGINE</span>
          </div>

          {testState === 'verified' ? (
            <div className="p-3 rounded bg-canvas border border-accent-emerald/30 my-auto">
              <div className="flex items-center gap-2 text-accent-emerald text-xs font-semibold mb-1">
                <CheckCircle size={14} />
                <span>BALLOT AUTHORIZED</span>
              </div>
              <p className="text-3xs text-content-secondary leading-relaxed">
                Voter identity verified against registered records. First voting attempt.
              </p>
            </div>
          ) : (
            <div className="p-3 rounded bg-canvas border border-accent-cyan/30 my-auto">
              <div className="flex items-center gap-2 text-accent-cyan text-xs font-semibold mb-1">
                <AlertCircle size={14} />
                <span>DUPLICATE PREVENTED</span>
              </div>
              <p className="text-3xs text-content-secondary leading-relaxed">
                Duplicate validation triggered: Prior voting record detected. Repeat attempt blocked.
              </p>
            </div>
          )}

          <div className="pt-2 border-t border-border-hairline text-3xs text-content-muted flex items-center justify-between">
            <span>Validation Rule: Single Ballot</span>
            <span className="text-content-primary">ENFORCED</span>
          </div>
        </div>
      </div>
    </div>
  );
};
