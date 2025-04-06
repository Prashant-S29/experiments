import React from 'react';
import Link from 'next/link';

// fonts
import { inter } from '@/fonts';

// icons
import { DropdownIcon } from '@/icons';
import Image from 'next/image';
import { calenderIcon, line, moneyIcon, underline } from '@/public';
import { garamond } from '@/fonts/local';

export const DavidWip = () => {
  return (
    <>
      <main className={`relative h-screen w-full bg-[#F5EEE2] ${inter.className}`}>
        <Header />
        <LineDesign position="left" />
        <LineDesign position="right" />

        <Image src={line} alt="line" width={300} height={300} className="absolute left-[70px] top-[70px] -mt-1" />

        <div className="flex h-full w-full flex-col items-center justify-center gap-3">
          <BackedByYC />
          <section className="flex w-full flex-col">
            <div className="relative flex w-full justify-center gap-2 border-y border-[#e5ddda]">
              <h1 className="text-center text-[60px] font-bold leading-none tracking-tight text-[#2A4C2A]">
                Transform Your
              </h1>
              <Image src={moneyIcon} alt="moneyIcon" width={400} height={400} className="-mt-1 w-[50px]" />
              <h1 className="relative text-center text-[60px] font-bold leading-none tracking-tight text-[#2A4C2A]">
                Billing
                <div className="absolute -top-9 right-0 h-[20px] w-[5px] -rotate-[30deg] rounded-full bg-[#f5a159]" />
                <div className="absolute -right-5 -top-7 h-[25px] w-[5px] rotate-12 rounded-full bg-[#f5a159]" />
                <div className="absolute -right-9 -top-4 h-[30px] w-[5px] rotate-45 rounded-full bg-[#f5a159]" />
              </h1>
            </div>
            <div className="relative flex w-full justify-center gap-2 border-b border-[#e5ddda]">
              <h1 className="text-center text-[60px] font-bold leading-none tracking-tight text-[#2A4C2A]">From</h1>
              <Image src={calenderIcon} alt="calenderIcon" width={400} height={400} className="w-[70px]" />
              <h1 className="text-center text-[60px] font-bold leading-none tracking-tight text-[#2A4C2A]">Weeks to</h1>
              <h1
                className={`relative z-10 ml-2 text-center text-[64px] font-light italic leading-none text-[#2A4C2A] ${garamond.className}`}
              >
                One Day
                <Image
                  src={underline}
                  alt="underline"
                  width={400}
                  height={400}
                  className="absolute -right-4 -z-10 w-[200px]"
                />
              </h1>
            </div>
            <div className="mt-9 flex justify-center">
              <p className="max-w-[500px] text-center text-[#2A4C2A]">
                Accelerate cash flow and eliminate the headache of manual invoicing with AI powered automation.
              </p>
            </div>
            <div className="mt-9 flex w-full justify-center gap-3">
              <button className="flex items-center gap-1 rounded-full bg-[#2A4C2A] px-4 py-3 text-xs font-medium text-[#F9F6F1]">
                Get Started <DropdownIcon className="-rotate-90 text-base" />
              </button>
              <button className="flex items-center gap-2 rounded-full border border-[#e5ddda] px-4 py-3 text-xs font-medium text-[#2A4C2A]">
                Book a Demo
              </button>
            </div>
          </section>
        </div>
        <section className="absolute bottom-5 grid w-full grid-cols-4 border border-[#e5ddda] px-[50px]">
          <div className="flex w-full flex-col gap-3 border-r border-[#e5ddda] p-7">
            <h1 className="text-[40px] font-semibold leading-none text-[#2A4C2A]">98%</h1>
            <p className="text-[#2A4C2A]">Faster Invoice Processing</p>
          </div>
          <div className="flex w-full flex-col gap-3 border-r border-[#e5ddda] p-7">
            <h1 className="text-[40px] font-semibold leading-none text-[#2A4C2A]">3x</h1>
            <p className="text-[#2A4C2A]">Increase in Cash Flow Speed</p>
          </div>
          <div className="flex w-full flex-col gap-3 border-r border-[#e5ddda] p-7">
            <h1 className="text-[40px] font-semibold leading-none text-[#2A4C2A]">$2M+</h1>
            <p className="text-[#2A4C2A]">Collection via Platform</p>
          </div>
          <div className="flex w-full flex-col gap-3 p-7">
            <h1 className="text-[40px] font-semibold leading-none text-[#2A4C2A]">0</h1>
            <p className="text-[#2A4C2A]">Late Payments Reported</p>
          </div>
        </section>
      </main>

      {/* <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 text-xs flex-col items-center">
        <p className="font-medium">
          Inspired by{' '}
          <Link href="https://x.com/David_Visuals_" target="_blank" className="text-blue-600">
            @David_Visuals_
          </Link>{' '}
          on X (twitter)
        </p>
      </div> */}
    </>
  );
};

const NavData = [
  {
    label: 'Platforms',
    href: '#',
    subLinks: [],
  },
  {
    label: 'Patterns',
    href: '#',
    subLinks: [],
  },
  {
    label: 'About',
    href: '#',
    subLinks: null,
  },
  {
    label: 'Resources',
    href: '#',
    subLinks: [],
  },
];

const LineDesign = ({ position }: { position: 'left' | 'right' }) => {
  return (
    <div
      className={`absolute top-0 z-10 flex h-screen w-[50px] flex-col gap-3 overflow-hidden border-[#e5ddda] ${position === 'left' ? 'left-0 border-r' : 'right-0 border-l'}`}
    >
      {Array.from({ length: 200 }).map((_, index) => (
        <div key={index} className="-ml-3 min-h-[1px] min-w-[80px] -rotate-45 bg-[#e5ddda]" />
      ))}
    </div>
  );
};

const Header = () => {
  return (
    <header className={`absolute top-0 h-[70px] w-full bg-[#f0e9de] px-[70px] py-4 ${inter.className}`}>
      <nav className="flex w-full items-center justify-between">
        <ul className="flex items-center gap-8">
          {NavData.map((item, index) => (
            <li key={index}>
              <Link href={item.href} className="flex items-center gap-2 text-sm leading-none">
                {item.label}
                {item.subLinks && <DropdownIcon className="text-xs" />}
              </Link>
            </li>
          ))}
        </ul>

        <section className="flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-full bg-[#F9F6F1] px-4 py-3 text-xs font-medium">
            Login
          </button>
          <button className="flex items-center gap-1 rounded-full bg-[#2A4C2A] px-4 py-3 text-xs font-medium text-[#F9F6F1]">
            Book a Demo <DropdownIcon className="-rotate-90 text-base" />
          </button>
        </section>
      </nav>
    </header>
  );
};

const BackedByYC = () => {
  return (
    <div className="flex w-fit items-center gap-2 rounded-full bg-[#f0e9de] px-3 py-2 leading-none">
      <h1 className="text-xs font-medium text-[#9a9998]">Backed by</h1>

      <p className="flex aspect-square w-5 items-center justify-center bg-[#f36523] text-xs font-medium leading-none text-white">
        Y
      </p>
      <p className="-ml-1 text-xs font-medium text-[#f36523]">Combinator (W23)</p>
    </div>
  );
};
