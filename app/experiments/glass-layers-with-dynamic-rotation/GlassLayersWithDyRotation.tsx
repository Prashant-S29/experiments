'use client';
import { useState } from 'react';

export const GlassLayersWithDyRotation = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <main className="flex h-screen w-full flex-col items-center justify-center">
      <div className="perspective-1000 relative h-[450px] w-[350px] cursor-pointer" onClick={handleFlip}>
        <div className={`preserve-3d relative h-full w-full duration-700 ${isFlipped ? 'rotate-y-180' : ''}`}>
          <div className="backface-hidden preserve-3d absolute h-full w-full">
            <div className="preserve-3d relative flex h-full w-full items-center justify-center">
              <div className="transform-z-0 absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-lg bg-green-500/40" />
              <div className="transform-z-20 absolute left-1/2 top-1/2 h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-pink-500/60" />
              <div className="transform-z-40 absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-red-500/80" />
              <div className="transform-z-60 absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-yellow-500" />
              <div className="transform-z-80 absolute inset-0 flex items-center justify-center">
                <p className="text-2xl font-bold text-white shadow-md">Front Side</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="mb-2">Click on the card to flip it</p>
        <button onClick={handleFlip} className="rounded bg-blue-500 px-4 py-2 text-white">
          Flip Card
        </button>
      </div>

      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }

        .preserve-3d {
          transform-style: preserve-3d;
        }

        .backface-hidden {
          backface-visibility: hidden;
        }

        .rotate-y-180 {
          transform: rotateY(180deg);
        }

        .transform-z-0 {
          transform: translateZ(0px);
        }

        .transform-z-20 {
          transform: translateZ(20px);
        }

        .transform-z-40 {
          transform: translateZ(40px);
        }

        .transform-z-60 {
          transform: translateZ(60px);
        }

        .transform-z-80 {
          transform: translateZ(80px);
        }
      `}</style>
    </main>
  );
};
