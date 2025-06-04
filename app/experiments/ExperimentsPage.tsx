import Link from 'next/link';
import React from 'react';

export const ExperimentsPage = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-white dark:bg-[#121212]">
      <div className="text-center">
        <p>
          <Link
            prefetch
            href="/experiments/download-animation"
            className="text-black underline-offset-2 hover:underline dark:text-white"
          >
            Download Animation
          </Link>
        </p>
        <p>
          <Link
            prefetch
            href="/experiments/dynamic-layout"
            className="text-black underline-offset-2 hover:underline dark:text-white"
          >
            Dynamic Layout
          </Link>
        </p>
        <p>
          <Link
            prefetch
            href="/experiments/dribbble-like-navigation/following"
            className="text-black underline-offset-2 hover:underline dark:text-white"
          >
            Dribbble Like Navigation
          </Link>
        </p>
        <p>
          <Link
            prefetch
            href="/experiments/david_wip"
            className="text-black underline-offset-2 hover:underline dark:text-white"
          >
            David Visuals Hero Section
          </Link>
        </p>

        <p>
          <Link
            prefetch
            href="/experiments/stroke_animation"
            className="text-black underline-offset-2 hover:underline dark:text-white"
          >
            Text Stroke Animation
          </Link>
        </p>
      </div>
    </div>
  );
};
