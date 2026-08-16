import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

/*
  Signature visual: three translucent "stack layers" (Frontend / Backend / Database)
  hovering above one another, connected by pulsing light beams. Slowly auto-rotates,
  tilts toward the mouse. This is a literal visualization of "full stack developer".
*/

const LAYER_DATA = [
  { label: 'REACT', color: '#4fd1c5', y: 1.4 },
  { label: 'SPRING BOOT', color: '#c9a15e', y: 0 },
  { label: 'MYSQL', color: '#8a7147', y: -1.4 },
];

function Layer({ y, color, delay }) {
  const ref = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (ref.current) {
      ref.current.position.y = y + Math.sin(t * 0.6 + delay) * 0.08;
      ref.current.material.opacity = 0.55 + Math.sin(t * 0.8 + delay) * 0.15;
    }
  });
  return (
    <mesh ref={ref} position={[0, y, 0]} rotation={[-Math.PI / 2.6, 0, 0]}>
      <boxGeometry args={[2.6, 2.6, 0.08]} />
      <meshPhysicalMaterial
        color={color}
        transparent
        opacity={0.6}
        roughness={0.2}
        metalness={0.1}
        transmission={0.4}
        thickness={0.5}
      />
    </mesh>
  );
}

function Beam({ from, to, color }) {
  const ref = useRef();
  const points = useMemo(
    () => [new THREE.Vector3(...from), new THREE.Vector3(...to)],
    [from, to]
  );
  const geometry = useMemo(
    () => new THREE.BufferGeometry().setFromPoints(points),
    [points]
  );
  useFrame(({ clock }) => {
    if (ref.current) {
      const t = clock.getElapsedTime();
      ref.current.material.opacity = 0.25 + Math.abs(Math.sin(t * 1.2)) * 0.4;
    }
  });
  return (
    <line ref={ref} geometry={geometry}>
      <lineBasicMaterial color={color} transparent opacity={0.4} />
    </line>
  );
}

function Rig() {
  const group = useRef();
  const { mouse } = useThree();
  useFrame(({ clock }) => {
    if (group.current) {
      const t = clock.getElapsedTime();
      group.current.rotation.y = t * 0.15 + mouse.x * 0.4;
      group.current.rotation.x = mouse.y * 0.15;
    }
  });
  return (
    <group ref={group}>
      {LAYER_DATA.map((l, i) => (
        <Layer key={l.label} y={l.y} color={l.color} delay={i * 1.4} />
      ))}
      <Beam from={[0.9, 1.4, 0]} to={[0.9, 0, 0]} color="#4fd1c5" />
      <Beam from={[-0.9, 0, 0]} to={[-0.9, -1.4, 0]} color="#c9a15e" />
      <Beam from={[0, 1.4, 0.9]} to={[0, -1.4, 0.9]} color="#f5efe6" />
    </group>
  );
}

export default function Hero3D() {
  return (
    <Canvas
      camera={{ position: [3.2, 1.6, 3.2], fov: 45 }}
      style={{ position: 'absolute', inset: 0 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[4, 4, 4]} intensity={1.2} color="#c9a15e" />
      <pointLight position={[-4, -2, 2]} intensity={0.8} color="#4fd1c5" />
      <Rig />
    </Canvas>
  );
}
