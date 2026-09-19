import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface DataParticlesProps {
  count?: number;
  reducedMotion?: boolean;
}

// Deterministic pseudo-random number generator to ensure render purity
function pseudoRandom(seed: number): number {
  const x = Math.sin(seed * 12.9898 + 78.233) * 43758.5453;
  return x - Math.floor(x);
}

/**
 * Subtle spatial data particles floating in depth layers.
 * Simulates discrete data packets in a software network.
 * Restrained count and subtle opacity to avoid chaotic particle storms.
 */
export const DataParticles: React.FC<DataParticlesProps> = ({
  count = 140,
  reducedMotion = false,
}) => {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);

    const emerald = new THREE.Color('#10b981');
    const cyan = new THREE.Color('#06b6d4');
    const slate = new THREE.Color('#64748b');

    for (let i = 0; i < count; i++) {
      // Spatial volume around the core using deterministic generator
      pos[i * 3] = (pseudoRandom(i * 3 + 1) - 0.5) * 12;
      pos[i * 3 + 1] = (pseudoRandom(i * 3 + 2) - 0.5) * 10;
      pos[i * 3 + 2] = (pseudoRandom(i * 3 + 3) - 0.5) * 8 - 1;

      // Color distribution: mostly subtle technical slate, with emerald and cyan accents
      const r = pseudoRandom(i * 7 + 4);
      let c: THREE.Color;
      if (r > 0.82) {
        c = emerald;
      } else if (r > 0.68) {
        c = cyan;
      } else {
        c = slate;
      }

      cols[i * 3] = c.r;
      cols[i * 3 + 1] = c.g;
      cols[i * 3 + 2] = c.b;
    }

    return [pos, cols];
  }, [count]);

  useFrame((state) => {
    if (reducedMotion || !pointsRef.current) return;
    const time = state.clock.getElapsedTime() * 0.08;
    const positionsAttr = pointsRef.current.geometry.attributes.position;
    const posArr = positionsAttr.array as Float32Array;

    for (let i = 0; i < count; i++) {
      // Gentle vertical laminar drift
      const i3 = i * 3 + 1;
      posArr[i3] += Math.sin(time + i * 0.3) * 0.0015;
    }
    positionsAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.65}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};
