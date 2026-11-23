import React from 'react';
import { Canvas } from '@react-three/fiber/native';

export default function Visor3D() {
  return (
    <Canvas camera={{ position: [4, 4, 6], fov: 50 }}>
      <color attach="background" args={['#1E293B']} />
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 8, 5]} intensity={2} />
      <gridHelper args={[20, 20, '#64748B', '#334155']} />
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#3B82F6" />
      </mesh>
    </Canvas>
  );
}
