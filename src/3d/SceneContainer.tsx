import React, { Suspense, useSyncExternalStore } from 'react';
import { HeroCanvas } from './HeroCanvas';
import { useMediaQuery } from '@/hooks/useMediaQuery';

interface SceneContainerProps {
  className?: string;
}

const emptySubscribe = () => () => {};

/**
 * SceneContainer provides the responsive 3D environment for the Hero section.
 * Renders the Three.js technical lattice with device-appropriate particle density.
 */
export const SceneContainer: React.FC<SceneContainerProps> = ({ className }) => {
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const isMobile = useMediaQuery('(max-width: 640px)');
  const isTablet = useMediaQuery('(max-width: 1024px)');

  if (!isMounted) {
    return (
      <div
        className={className}
        aria-hidden="true"
      >
        <div className="w-full h-full bg-canvas animate-pulse opacity-20" />
      </div>
    );
  }

  return (
    <div
      className={className}
      aria-hidden="true"
    >
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-6 h-6 rounded-full border border-accent-emerald/40 border-t-accent-emerald animate-spin" />
          </div>
        }
      >
        <HeroCanvas isMobile={isMobile} isTablet={isTablet} />
      </Suspense>
    </div>
  );
};
