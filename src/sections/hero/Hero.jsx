"use client";

import Loading from '@/components/Loading';
import HackerRoom from '@/components/HackerRoom';
import { PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '@/constants';
import Target from '@/components/Target';
import ReactLogo from '@/components/ReactLogo';
import Cube from '@/components/Cube';
import Rings from '@/components/Rings';
import HeroCamera from '@/components/HeroCamera';
import Button from '@/components/Botton';

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isSmall = useMediaQuery({ maxWidth: 440 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen flex flex-col relative">
      {/* Text Section */}
      <div className="w-full mx-auto flex flex-col mt-28 sm:mt-36 lg:mt-[80px] gap-3">
        <p className="text-center font-medium text-white font-generalsans">
          <span className="sm:text-2xl lg:text-2xl text-xl">
            Hi, I am Abdurehim <span className="waving-hand">👋</span>
          </span>
        </p>
        <p className='hero_tag text-gray_gradient'>Building Products & Brands</p>
      </div>

      {/* 3D Objects Section */}
      <div className="w-full h-full absolute inset-0 mt-8 sm:mt-16 lg:mt-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<Loading />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HeroCamera>
              <HackerRoom
                isMobile={isMobile}
                scale={sizes.deskScale}
                position={sizes.deskPosition}
                rotation={[0.1, -Math.PI, 0]}
              />
            </HeroCamera>

            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Cube position={sizes.cubePosition} />
              <Rings position={sizes.ringPosition} />
            </group>
            <ambientLight intensity={1} />
            <directionalLight intensity={0.5} position={[0, 0, 5]} />
          </Suspense>
        </Canvas>
      </div>

      {/* Button */}
      <div className="absolute bottom-2 sm:bottom-4 lg:bottom-4 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-60" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
