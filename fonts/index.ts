import { Montserrat, Inter, Instrument_Serif } from 'next/font/google';
import localFont from 'next/font/local';

export const montserrat = Montserrat({ subsets: ['latin'] });
export const inter = Inter({ subsets: ['latin'] });

export const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

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
