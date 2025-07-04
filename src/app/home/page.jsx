"use client";

import Loading from '@/components/Loading';
import { Center, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '@/constants';
import Button from '@/components/Botton';
import DeveloperRoom from '@/components/DeveloperRoom';
import { AuroraText } from "@/components/magicui/aurora-text";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isSmall = useMediaQuery({ maxWidth: 440 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen flex flex-col bg-black overflow-hidden " id='home'>
      <div className='c-space w-full h-screen flex flex-col lg:flex-row items-center justify-center relative gap-5'>
        <div className="flex flex-col items-center justify-center lg:items-start mt-28 sm:mt-36 lg:mt-28 gap-5">
          <p className="text-center font-medium text-white-700 font-generalsans">
            <span className="sm:text-2xl lg:text-2xl text-xl font-mono">
              Hi, I am Abdurehim <span className="waving-hand">👋</span>
            </span>
          </p>
          <p className='hero_tag w-full head-text'><AuroraText>Building Impactful</AuroraText> Problem Solving Products</p>
          <div className="mt-3 lg:mt-24">
            <a href="/contact" className="w-fit">
              <Button isBeam name="Let's work together" containerClass="relative sm:w-fit w-full sm:min-w-60 h-14 rounded-md" />
            </a>
          </div>
        </div>

        <div className="w-full h-full lg:max-w-[600px] mt-2 md:mt-20">
          <Canvas>
            <ambientLight intensity={1} />
            <directionalLight intensity={3} position={[0, 10, 5]} />
            <directionalLight intensity={3} position={[10, 10, -5]} />
            <directionalLight intensity={2} position={[0, 5, 10]} />
            <directionalLight intensity={1} position={[-10, -5, -10]} />
            <Suspense fallback={<Loading />}>
              <PerspectiveCamera makeDefault position={[0, 5, 26]} />
              <OrbitControls
                enableZoom={false}
                enablePan={true}
                enableRotate={true}
                target={[0, 0, 0]}
                autoRotate={true}
              />
              <Center>
                <DeveloperRoom
                  rotation={[0, 0, 0]}
                  scale={sizes.deskScale}
                  position={sizes.deskPosition}
                />
              </Center>
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Hero;
