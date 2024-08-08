import Link from 'next/link';
import React from 'react';
import { Menu } from './_components/Menu';

export const DynamicLayoutPage = () => {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-[#feefdb]">
      <div className="text-center">
        <p className="text-[22px] font-bold">Dynamic Layout</p>
        <p className="font-medium">
          Inspired by{' '}
          <Link href="https://x.com/henrikruscon" target="_blank" className="text-blue-600">
            @henrikruscon
          </Link>{' '}
          on X (twitter)
        </p>
      </div>
      <Menu />
    </div>
  );
};
