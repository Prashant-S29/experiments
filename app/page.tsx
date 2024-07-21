import Link from 'next/link';
import React from 'react';

const Home = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div>
        <div>
          <span>Home Page</span>
        </div>
        <div>
          <Link href="/experiments">Experiments</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
