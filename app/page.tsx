import Link from 'next/link';
import React from 'react';

const Home = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div className="text-center">
        <p className="text-[22px] font-bold">Experiment by Prashant</p>
        <p className="text-[15px]">
          The website is under development. Components are not responsive to mobile devices.
        </p>
        <p className="mt-4">
          <span>meanwhile you can check out these</span><br/>
          <Link href="/experiments" className="font-semibold text-blue-700 underline underline-offset-2">
            Explore Experiments (3)
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
