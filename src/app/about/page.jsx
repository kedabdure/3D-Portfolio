"use client"

import { useState } from 'react';


import Globe from '@/components/Globe';

import Button from '@/components/Botton';

const About = () => {
  const [emailCopied, setEmailCopied] = useState(false)
  const [phoneCopied, setPhoneCopied] = useState(false)

  const handleCopy = (value) => {
    navigator.clipboard.writeText('+251953431572');
    if (value === 'phone') {
      setPhoneCopied(true);
      setTimeout(() => {
        setPhoneCopied(false);
      }, 2000);
    } else {
      navigator.clipboard.writeText('abdurehimk77@gmail.com');
      setEmailCopied(true);
      setTimeout(() => {
        setEmailCopied(false);
      }, 2000);
    }

  };

  return (
    <section className="c-space my-20" id="about">
      <div className='mt-28 my-7'>
        <p className='sm:text-3xl text-3xl font-semibold text-gray_gradient'>About Me</p>
      </div>
      <div className="grid xl:grid-cols-3 xl:grid-rows-3 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/developer.jpg" alt="grid-1" className="rounded-2xl w-full sm:h-[300px] h-fit object-cover" />

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
            <img src="assets/techno-stack.png" alt="grid-2" className="rounded-2xl w-full sm:h-[300px] h-fit object-cover" />

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
            <div className="rounded-2xl w-full h-fit flex justify-center items-center overflow-hidden">
              <Globe height={300} width={350} />
            </div>
            <div>
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I&apos;m based in Addis Ababa, Ethiopia and open to remote work worldwide.</p>
            </div>
          </div>
        </div>

        {/* Passion */}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/github-contribution.png" alt="grid-3" className="w-full max-h-[266px] object-contain mb-2" />

            <div>
              <p className="grid-headtext github-title">Like I Never Sleep</p>
              <p className="grid-subtext github-subtext">
                Coding is my craft and my passion. Just like a GitHub graph filled with relentless contributions,
                I thrive on solving problems, building innovative solutions, and continuously improving my skills.
                Every line of code is a step forward, every project a milestone in my journey as a developer.
              </p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="xl:col-span-1 xl:row-span-3 relative">
          <div className="grid-container flex flex-col">
            <img
              src="assets/email-icon.png"
              alt="grid-4"
              className="h-[96px] object-contain"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={() => handleCopy('email')}>
                <img src={emailCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" className='w-7 h-7' />
                <p className="lg:text-lg font-medium text-gray_gradient text-white">abdurehimk77@gmail.com</p>
              </div>
              <div className="copy-container" onClick={() => handleCopy('phone')}>
                <img src={phoneCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" className='w-7 h-7' />
                <p className="lg:text-lg font-medium text-gray_gradient text-white">+251 953 431 572</p>
              </div>
            </div>
            <Button name="Contact Me" isBeam containerClass="w-full md:w-[200px] mt-4 md:mt-20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
