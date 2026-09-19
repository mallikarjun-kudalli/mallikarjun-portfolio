import React, { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface TechnicalLatticeProps {
  reducedMotion?: boolean;
}

export const TechnicalLattice: React.FC<TechnicalLatticeProps> = ({
  reducedMotion = false,
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const outerCageRef = useRef<THREE.LineSegments>(null);
  const secondaryRingRef = useRef<THREE.Group>(null);
  const nodesRef = useRef<THREE.InstancedMesh>(null);
  const packet1Ref = useRef<THREE.Mesh>(null);
  const packet2Ref = useRef<THREE.Mesh>(null);

  // Define structured node positions for an architectural network
  const { nodePositions, linePositions } = useMemo(() => {
    // 20 architectural coordinates defining a multi-layered data network
    const rawNodes: [number, number, number][] = [
      // Central cluster
      [0, 1.4, 0],
      [1.3, 0.4, 0.7],
      [-1.3, 0.4, 0.7],
      [0.8, -1.2, 0.8],
      [-0.8, -1.2, 0.8],
      [0, 0, 1.6],
      [0, 0, -1.6],
      [1.3, 0.4, -0.7],
      [-1.3, 0.4, -0.7],
      [0.8, -1.2, -0.8],
      [-0.8, -1.2, -0.8],
      [0, -1.5, 0],
      // Outer peripheral nodes
      [2.2, 1.2, 0.3],
      [-2.2, 1.2, -0.3],
      [2.0, -1.5, 0.5],
      [-2.0, -1.5, -0.5],
      [0.2, 2.3, 0.8],
      [-0.2, -2.4, 0.8],
      [1.8, 0, -1.8],
      [-1.8, 0, 1.8],
    ];

    // Find nearest neighbor connections for thin technical lines
    const lineCoords: number[] = [];
    const maxDistance = 2.4;

    for (let i = 0; i < rawNodes.length; i++) {
      for (let j = i + 1; j < rawNodes.length; j++) {
        const [x1, y1, z1] = rawNodes[i];
        const [x2, y2, z2] = rawNodes[j];
        const dist = Math.hypot(x2 - x1, y2 - y1, z2 - z1);
        if (dist < maxDistance) {
          lineCoords.push(x1, y1, z1, x2, y2, z2);
        }
      }
    }

    return {
      nodePositions: rawNodes,
      linePositions: new Float32Array(lineCoords),
    };
  }, []);

  // Initialize instanced mesh matrices for nodes after DOM/canvas mounts
  useEffect(() => {
    if (!nodesRef.current) return;
    const dummy = new THREE.Object3D();
    nodePositions.forEach((pos, idx) => {
      dummy.position.set(pos[0], pos[1], pos[2]);
      const scale = idx < 12 ? 0.08 : 0.06;
      dummy.scale.set(scale, scale, scale);
      dummy.updateMatrix();
      nodesRef.current?.setMatrixAt(idx, dummy.matrix);
    });
    nodesRef.current.instanceMatrix.needsUpdate = true;
  }, [nodePositions]);

  // Create crisp wireframe geometry for central polyhedral core
  const { coreEdgesGeometry, outerEdgesGeometry } = useMemo(() => {
    const coreGeo = new THREE.IcosahedronGeometry(1.15, 0);
    const outerGeo = new THREE.DodecahedronGeometry(1.7, 0);
    return {
      coreEdgesGeometry: new THREE.EdgesGeometry(coreGeo),
      outerEdgesGeometry: new THREE.EdgesGeometry(outerGeo),
    };
  }, []);

  // Animation frame loop with smooth lerping, gentle breathing, and packets
  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (groupRef.current) {
      // Gentle mouse parallax interpolation
      const targetRotY = state.pointer.x * 0.22;
      const targetRotX = -state.pointer.y * 0.15;

      if (!reducedMotion) {
        groupRef.current.rotation.y = THREE.MathUtils.lerp(
          groupRef.current.rotation.y,
          targetRotY + time * 0.025,
          0.04
        );
        groupRef.current.rotation.x = THREE.MathUtils.lerp(
          groupRef.current.rotation.x,
          targetRotX,
          0.04
        );
      } else {
        groupRef.current.rotation.y = 0.2;
        groupRef.current.rotation.x = 0.1;
      }
    }

    if (!reducedMotion) {
      // Very slow counter-rotation on inner core for subtle depth perception
      if (coreRef.current) {
        coreRef.current.rotation.y = -time * 0.04;
        coreRef.current.rotation.z = time * 0.02;
      }

      if (outerCageRef.current) {
        outerCageRef.current.rotation.y = time * 0.035;
        outerCageRef.current.rotation.x = time * 0.015;
      }

      if (secondaryRingRef.current) {
        secondaryRingRef.current.rotation.z = -time * 0.03;
      }

      // Subtle pulse data packets traversing between nodes
      if (packet1Ref.current) {
        const t1 = (time * 0.4) % 1;
        // Interpolate between node 0 (0, 1.4, 0) and node 11 (0, -1.5, 0) via node 5 (0, 0, 1.6)
        if (t1 < 0.5) {
          const subT = t1 * 2;
          packet1Ref.current.position.set(
            0,
            THREE.MathUtils.lerp(1.4, 0, subT),
            THREE.MathUtils.lerp(0, 1.6, subT)
          );
        } else {
          const subT = (t1 - 0.5) * 2;
          packet1Ref.current.position.set(
            0,
            THREE.MathUtils.lerp(0, -1.5, subT),
            THREE.MathUtils.lerp(1.6, 0, subT)
          );
        }
      }

      if (packet2Ref.current) {
        const t2 = (time * 0.35 + 0.5) % 1;
        // Interpolate between node 1 (1.3, 0.4, 0.7) and node 8 (-1.3, 0.4, -0.7)
        packet2Ref.current.position.set(
          THREE.MathUtils.lerp(1.3, -1.3, t2),
          0.4,
          THREE.MathUtils.lerp(0.7, -0.7, t2)
        );
      }
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* 1. Inner Faceted Structural Core (Dark Semi-Translucent Crystalline Solid) */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[1.05, 0]} />
        <meshPhysicalMaterial
          color="#0d1424"
          emissive="#062e24"
          emissiveIntensity={0.35}
          roughness={0.25}
          metalness={0.7}
          transparent
          opacity={0.65}
          wireframe={false}
          flatShading
        />
      </mesh>

      {/* 2. Inner Structural Edges (Emerald Accent Hairlines) */}
      <lineSegments geometry={coreEdgesGeometry}>
        <lineBasicMaterial
          color="#10b981"
          transparent
          opacity={0.75}
          linewidth={1}
        />
      </lineSegments>

      {/* 3. Outer Geometric Cage (Dodecahedron Hairlines in Technical Slate/Cyan) */}
      <lineSegments ref={outerCageRef} geometry={outerEdgesGeometry}>
        <lineBasicMaterial
          color="#06b6d4"
          transparent
          opacity={0.35}
          linewidth={1}
        />
      </lineSegments>

      {/* 4. Secondary Structural Axis Indicator Ring */}
      <group ref={secondaryRingRef}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[2.0, 2.015, 64]} />
          <meshBasicMaterial
            color="#2d3748"
            transparent
            opacity={0.3}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>

      {/* 5. Thin Technical Interconnection Lines (Neural/Data Network) */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#64748b"
          transparent
          opacity={0.22}
          linewidth={1}
        />
      </lineSegments>

      {/* 6. Interconnected Network Nodes */}
      <instancedMesh
        ref={nodesRef}
        args={[undefined, undefined, nodePositions.length]}
      >
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#f8fafc"
          emissive="#10b981"
          emissiveIntensity={0.6}
          roughness={0.3}
          metalness={0.8}
        />
      </instancedMesh>

      {/* 7. Active Data Packets Traversing Network Vectors */}
      {!reducedMotion && (
        <>
          <mesh ref={packet1Ref}>
            <sphereGeometry args={[0.045, 12, 12]} />
            <meshBasicMaterial color="#10b981" />
          </mesh>
          <mesh ref={packet2Ref}>
            <sphereGeometry args={[0.04, 12, 12]} />
            <meshBasicMaterial color="#06b6d4" />
          </mesh>
        </>
      )}
    </group>
  );
};
