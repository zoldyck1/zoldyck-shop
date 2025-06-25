"use client";

import { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei';
import { Vector3 } from 'three';

function FloatingShape({ position, color }: { position: [number, number, number]; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.2) * 0.1;
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.1;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color={color} roughness={0.5} metalness={0.8} />
    </mesh>
  );
}

function Scene() {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0, 0, 10);
  }, [camera]);

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <FloatingShape position={[-4, 0, 0]} color="#ff6b6b" />
      <FloatingShape position={[0, 0, -2]} color="#4ecdc4" />
      <FloatingShape position={[4, 0, 0]} color="#45b7d1" />
      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  );
}

export function ThreeScene() {
  return (
    <div className="fixed inset-0 -z-10 opacity-50">
      <Canvas>
        <Scene />
      </Canvas>
    </div>
  );
}