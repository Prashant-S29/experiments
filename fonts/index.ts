import localFont from 'next/font/local';

export const satoshi = localFont({
  src: [
    {
      path: './local/satoshi/satoshi-regular.otf',
      weight: '400',
    },
    {
      path: './local/satoshi/satoshi-medium.otf',
      weight: '500',
    },
  ],
  variable: '--font-satoshi',
});
