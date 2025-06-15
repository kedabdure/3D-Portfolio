"use client"

import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Developer from '@/components/Developer.jsx';
import Loading from '@/components/Loading.jsx';
import { workExperiences } from '@/constants/index.js';
import { SkillsOrbit } from '@/components/SkillOrbit';

const Experience = () => {
  const [animationName, setAnimationName] = useState('idle');

  return (
    <section className="c-space my-20" id="experience">
      <div className='mt-28 mb-7'>
        <p className='sm:text-3xl text-3xl font-semibold text-gray_gradient'>Experiences</p>
      </div>

      <div className='mt-28 mb-7'>
        <SkillsOrbit />
      </div>

      <div className="w-full text-white-600">
        <div className="work-container">
          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOver={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOut={() => setAnimationName('idle')}
                  className="work-content_container group">
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      <img className="w-full h-full" src={item.icon} alt="" />
                    </div>

                    <div className="work-content_bar" />
                  </div>

                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white-800">{item.name}</p>
                    <p className="text-sm mb-5">
                      {item.pos} -- <span>{item.duration}</span>
                    </p>
                    <p className="group-hover:text-white transition-all ease-in-out duration-500">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="work-canvas min-h-[450px]">
            <Canvas>
              <ambientLight intensity={1} />
              <directionalLight intensity={3} position={[0, 10, 5]} />
              <directionalLight intensity={3} position={[10, 10, -5]} />
              <directionalLight intensity={2} position={[0, 5, 10]} />
              <directionalLight intensity={1} position={[-10, -5, -10]} />
              <perspectiveCamera makeDefault position={[0, 0, 30]} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
              <Suspense fallback={<Loading />}>
                <Developer position-y={-3.2} scale={3} rotation={[0, -0.5, 0]} animationName={animationName} />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;