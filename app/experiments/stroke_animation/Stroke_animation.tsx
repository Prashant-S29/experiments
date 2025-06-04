'use client';

import { motion, useMotionValue } from 'framer-motion';
import Link from 'next/link';
import type React from 'react';
import { useCallback, useRef } from 'react';
import { AnimatedChar } from './AnimatedChar/AnimatedChar';
import { satoshi } from '@/fonts';

const text = 'designkul';

export const StrokeAnimation: React.FC = () => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring configuration
  const springConfig = {
    damping: 25,
    stiffness: 200,
    mass: 0.5,
  };

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLParagraphElement>) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    },
    [mouseX, mouseY],
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(-1000); // reset all effects
  }, [mouseX]);

  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center bg-[#181b26]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
        exit={{ opacity: 0 }}
        className="bg-radial-[at_85%_25%] absolute left-1/2 top-1/2 z-10 h-[200px] w-[600px] -translate-x-1/2 rotate-12 rounded-full from-[#202a4d] to-[#181b26] blur-3xl"
        style={{
          animation: 'morph 8s ease-in-out infinite',
        }}
      />
      <motion.p
        ref={containerRef}
        className="z-50 inline-flex"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {text.split('').map((char, index) => (
          <AnimatedChar
            key={char}
            char={char}
            index={index}
            mouseX={mouseX}
            springConfig={springConfig}
            containerRef={containerRef}
          />
        ))}
        <span className={`${satoshi.className} text-[50px] leading-none text-[#e7e4d9]`}>®</span>
      </motion.p>
      <div className={`z-10 mt-8 ${satoshi.className}`}>
        <p className="text-xl text-white/70">
          A creative community for UX Designers.{' '}
          <Link
            href="https://designkul.com/"
            target="_blank"
            className="cursor-pointer text-center text-white underline underline-offset-4"
          >
            Join Us
          </Link>
        </p>
      </div>
      <p className="absolute bottom-5 left-1/2 mt-2 -translate-x-1/2 text-center text-sm text-white/70">
        Inspired by{' '}
        <Link
          href="https://labs.aeoscompany.com/"
          target="_blank"
          className="text-white underline-offset-4 hover:underline"
        >
          AEOS Labs
        </Link>
      </p>
    </main>
  );
};
