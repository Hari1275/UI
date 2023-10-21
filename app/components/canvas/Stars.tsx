'use client';

import { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
function getRandomNumber(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
function getRandomSphereCoordinate(radius: any) {
  return (Math.random() * 2 - 1) * radius;
}
function generateRandomSphereCoordinates(size: any, radius: any) {
  const sphereCoordinates = new Float32Array(size);
  for (let i = 0; i < size; i++) {
    sphereCoordinates[i] = getRandomSphereCoordinate(radius);
  }
  return sphereCoordinates;
}
const Stars = (props: any) => {
  const ref: any = useRef();
  const sphereSize = 5000;
  const sphereRadius = 1.2;

  const [sphere, setSphere] = useState(() =>
    generateRandomSphereCoordinates(sphereSize, sphereRadius)
  );

  // If you want to regenerate the sphere at some point, you can do so with a function:
  // const regenerateSphere = () => {
  //   const newSphere = generateRandomSphereCoordinates(sphereSize, sphereRadius);
  //   setSphere(newSphere);
  // };
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
