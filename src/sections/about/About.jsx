"use client"

import { useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamic import for Globe component to prevent SSR error
const Globe = dynamic(() => import('react-globe.gl'), { ssr: false });

import Button from '@/components/Botton';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  // const handleCopy = () => {
  //   navigator.clipboard.writeText('abdurehimk77@gmail.com');
  //   setHasCopied(true);

  //   setTimeout(() => {
  //     setHasCopied(false);
  //   }, 2000);
  // };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-3 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/developer.jpg" alt="grid-1" className="w-full sm:h-[276px] h-fit object-cover" />

            <div>
              <p className="grid-headtext">Hi, I’m Abdurehim Kedir</p>
              <p className="grid-subtext">
                With three years of experience, I have developed expertise in both frontend and backend development, building dynamic and responsive websites.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/techno-stack.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-cover" />

            <div>
              <p className="grid-headtext">Technology Stack</p>
              <p className="grid-subtext">
                I specialize in a diverse range of languages, frameworks, and tools that enable me to create robust and scalable applications.
              </p>
            </div>
          </div>
        </div>

        {/* 3D Globe */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={300}
                width={300}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={.1}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 9.0192, lng: 38.7525, text: 'Addis Ababa, Ethiopia', color: 'white', size: 50 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I&apos;m based in Addis Ababa, Ethiopia and open to remote work worldwide.</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        {/* Passion */}
        {/* <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div> */}

        {/* Contact */}
        {/* <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">abdurehimk77@gmail.com</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;
