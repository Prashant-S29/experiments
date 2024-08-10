import Link from 'next/link';
import React from 'react';

export const ExperimentsPage = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-white dark:bg-[#121212]">
      <div className="text-center">
        <p>
          <Link
            href="/experiments/download-animation"
            className="text-black underline-offset-2 hover:underline dark:text-white"
          >
            Download Animation
          </Link>
        </p>
        <p>
          <Link
            href="/experiments/dynamic-layout"
            className="text-black underline-offset-2 hover:underline dark:text-white"
          >
            Dynamic Layout
          </Link>
        </p>
        <p>
          <Link
            href="/experiments/dribbble-like-navigation/following"
            className="text-black underline-offset-2 hover:underline dark:text-white"
          >
            Dribbble Like Navigation
          </Link>
        </p>
      </div>
    </div>
  );
};
