import Link from 'next/link';
import React from 'react';

export const ExperimentsPage = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-white dark:bg-[#121212]">
      <div>
        <Link href="/experiments/download-animation" className="text-black dark:text-white">
          Download Animation
        </Link>
      </div>
    </div>
  );
};
