import React, { useSyncExternalStore } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { TechnicalLattice } from './TechnicalLattice';
import { DataParticles } from './DataParticles';

interface CameraRigProps {
  reducedMotion: boolean;
  scrollY: number;
}

/**
 * CameraRig handles smooth mouse parallax and scroll-dependent framing
 */
const CameraRig: React.FC<CameraRigProps> = ({ reducedMotion, scrollY }) => {
  useFrame((state) => {
    if (reducedMotion) {
      state.camera.position.set(0, 0, 5.8);
      state.camera.lookAt(0, 0, 0);
      return;
    }

    // Gentle pointer parallax
    const targetX = state.pointer.x * 0.45;
    const targetY = state.pointer.y * 0.35 - scrollY * 0.002;
    const targetZ = 5.8 + scrollY * 0.003;

    state.camera.position.x = THREE.MathUtils.lerp(
      state.camera.position.x,
      targetX,
      0.035
    );
    state.camera.position.y = THREE.MathUtils.lerp(
      state.camera.position.y,
      targetY,
      0.035
    );
    state.camera.position.z = THREE.MathUtils.lerp(
      state.camera.position.z,
      targetZ,
      0.035
    );

    state.camera.lookAt(0, -scrollY * 0.001, 0);
  });

  return null;
};

// Hook to subscribe to reduced motion preference using useSyncExternalStore
function useReducedMotion(): boolean {
  return useSyncExternalStore(
    (callback) => {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      mediaQuery.addEventListener('change', callback);
      return () => mediaQuery.removeEventListener('change', callback);
    },
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    () => false
  );
}

// Hook to subscribe to window scroll position using useSyncExternalStore
function useScrollY(): number {
  return useSyncExternalStore(
    (callback) => {
      window.addEventListener('scroll', callback, { passive: true });
      return () => window.removeEventListener('scroll', callback);
    },
    () => window.scrollY,
    () => 0
  );
}

interface HeroCanvasProps {
  isMobile?: boolean;
  isTablet?: boolean;
}

export const HeroCanvas: React.FC<HeroCanvasProps> = ({
  isMobile = false,
  isTablet = false,
}) => {
  const reducedMotion = useReducedMotion();
  const scrollY = useScrollY();

  // Compute scroll-based fade opacity for seamless transition into #projects
  const scrollFade = Math.max(0, Math.min(1, 1 - scrollY / 650));
  const particleCount = isMobile ? 40 : isTablet ? 80 : 160;

  return (
    <div
      className="w-full h-full relative transition-opacity duration-300"
      style={{ opacity: scrollFade }}
    >
      <Canvas
        camera={{ position: [0, 0, 5.8], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        className="w-full h-full pointer-events-auto touch-pan-y"
        style={{ touchAction: 'pan-y' }}
      >
        {/* Soft atmospheric depth matching obsidian canvas */}
        <color attach="background" args={['#090a0f']} />
        <fog attach="fog" args={['#090a0f', 6.5, 14]} />

        {/* Ambient Dark Navy/Obsidian Technical Light */}
        <ambientLight intensity={0.7} color="#0c1322" />

        {/* Directional Key Light */}
        <directionalLight
          position={[-4, 5, 4]}
          intensity={1.1}
          color="#f8fafc"
        />

        {/* Emerald Technical Signal Point Light */}
        <pointLight
          position={[2.5, 1.8, 2.2]}
          intensity={2.8}
          color="#10b981"
          distance={9}
        />

        {/* Cyan Secondary Rim Point Light */}
        <pointLight
          position={[-2.5, -2, 2.5]}
          intensity={1.9}
          color="#06b6d4"
          distance={10}
        />

        <CameraRig reducedMotion={reducedMotion} scrollY={scrollY} />

        {/* Central Architectural Lattice Structure */}
        <TechnicalLattice reducedMotion={reducedMotion} />

        {/* Subtle Spatial Data Stream Field */}
        <DataParticles count={particleCount} reducedMotion={reducedMotion} />
      </Canvas>
    </div>
  );
};
