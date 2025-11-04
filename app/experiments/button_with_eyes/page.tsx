'use client';
import React, { useRef, useCallback, useMemo } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { CgArrowRight } from 'react-icons/cg';

const ButtonWithEyesPage: React.FC = () => {
  const leftGridRef = useRef<HTMLDivElement>(null);
  const rightGridRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const leftPupilX = useMotionValue(0);
  const leftPupilY = useMotionValue(0);
  const rightPupilX = useMotionValue(0);
  const rightPupilY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const leftPupilXSpring = useSpring(leftPupilX, springConfig);
  const leftPupilYSpring = useSpring(leftPupilY, springConfig);
  const rightPupilXSpring = useSpring(rightPupilX, springConfig);
  const rightPupilYSpring = useSpring(rightPupilY, springConfig);

  const arrowRotations = Array.from({ length: 25 }).map(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const rotation = useMotionValue(0);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const spring = useSpring(rotation, { stiffness: 150, damping: 15, mass: 0.1 });
    return { rotation, spring };
  });

  const handleEyesMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current || !rightGridRef.current) return;

      const eyesContainer = cardRef.current.querySelector('.eyes-container') as HTMLElement;
      if (!eyesContainer) return;

      const eyesRect = eyesContainer.getBoundingClientRect();

      const leftEyeCenter = {
        x: eyesRect.left + 60,
        y: eyesRect.top + 80,
      };

      const rightEyeCenter = {
        x: eyesRect.left + 200,
        y: eyesRect.top + 80,
      };

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const leftAngle = Math.atan2(mouseY - leftEyeCenter.y, mouseX - leftEyeCenter.x);
      const leftDist = Math.sqrt(Math.pow(mouseX - leftEyeCenter.x, 2) + Math.pow(mouseY - leftEyeCenter.y, 2));
      const leftDistance = Math.min(leftDist, 36);

      const rightAngle = Math.atan2(mouseY - rightEyeCenter.y, mouseX - rightEyeCenter.x);
      const rightDist = Math.sqrt(Math.pow(mouseX - rightEyeCenter.x, 2) + Math.pow(mouseY - rightEyeCenter.y, 2));
      const rightDistance = Math.min(rightDist, 36);

      leftPupilX.set(Math.cos(leftAngle) * leftDistance);
      leftPupilY.set(Math.sin(leftAngle) * leftDistance);
      rightPupilX.set(Math.cos(rightAngle) * rightDistance);
      rightPupilY.set(Math.sin(rightAngle) * rightDistance);
    },
    [leftPupilX, leftPupilY, rightPupilX, rightPupilY],
  );

  const handleEyesMouseLeave = useCallback(() => {
    leftPupilX.set(0);
    leftPupilY.set(0);
    rightPupilX.set(0);
    rightPupilY.set(0);
  }, [leftPupilX, leftPupilY, rightPupilX, rightPupilY]);

  const handleArrowsMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!leftGridRef.current) return;

      const arrowGrid = leftGridRef.current.querySelector('.arrow-grid') as HTMLElement;
      if (!arrowGrid) return;

      const arrowGridRect = arrowGrid.getBoundingClientRect();
      const cellWidth = arrowGridRect.width / 5;
      const cellHeight = arrowGridRect.height / 5;

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      arrowRotations.forEach((arrow, index) => {
        const row = Math.floor(index / 5);
        const col = index % 5;

        const cellCenterX = arrowGridRect.left + col * cellWidth + cellWidth / 2;
        const cellCenterY = arrowGridRect.top + row * cellHeight + cellHeight / 2;

        const angle = Math.atan2(mouseY - cellCenterY, mouseX - cellCenterX);
        const degrees = (angle * 180) / Math.PI;
        arrow.rotation.set(degrees);
      });
    },
    [arrowRotations],
  );

  const handleArrowsMouseLeave = useCallback(() => {
    arrowRotations.forEach((arrow) => {
      arrow.rotation.set(0);
    });
  }, [arrowRotations]);

  return (
    <div className="grid h-screen w-full grid-cols-2">
      <div
        ref={leftGridRef}
        onMouseMove={handleArrowsMouseMove}
        onMouseLeave={handleArrowsMouseLeave}
        className="flex h-screen w-full items-center justify-center border-r bg-purple-600"
      >
        <div className="arrow-grid grid h-[400px] w-[400px] grid-cols-5 grid-rows-5 border bg-white">
          {arrowRotations.map((arrow, index) => (
            <div key={index} className="flex h-full w-full items-center justify-center">
              <motion.div style={{ rotate: arrow.spring }}>
                <CgArrowRight className="text-3xl" />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      <div
        ref={rightGridRef}
        onMouseMove={handleEyesMouseMove}
        onMouseLeave={handleEyesMouseLeave}
        className="flex h-screen w-full flex-col items-center justify-center bg-[#0E69B2]"
      >
        <div ref={cardRef} className="h-[500px] w-[350px] bg-white p-5">
          <div className="w-full">
            <div className="eyes-container relative flex h-[160px] w-full items-center justify-center gap-5 bg-[#F7DB24]">
              <div className="absolute h-8 w-full bg-black" />
              <div className="z-5 relative flex size-[120px] items-center justify-center rounded-full bg-white">
                <motion.div
                  className="size-12 rounded-full bg-black"
                  style={{
                    x: leftPupilXSpring,
                    y: leftPupilYSpring,
                  }}
                />
              </div>
              <div className="z-5 relative flex size-[120px] items-center justify-center rounded-full bg-white">
                <motion.div
                  className="size-12 rounded-full bg-black"
                  style={{
                    x: rightPupilXSpring,
                    y: rightPupilYSpring,
                  }}
                />
              </div>
            </div>
            <div className="relative h-[140px] w-full bg-[#0E69B2]">
              <div className="absolute left-1/2 mt-4 h-9 w-20 -translate-x-1/2 rounded-b-full border border-black" />
            </div>
            <div className="h-[20px] w-full bg-[#F7DB24]"></div>
          </div>

          <div className="p-5 leading-tight">
            <p>#Kevin</p>
            <p>Despicable me</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonWithEyesPage;
