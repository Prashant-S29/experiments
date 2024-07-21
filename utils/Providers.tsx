'use client';

import React from 'react';

// to make exit animations work
import { AnimatePresence } from 'framer-motion';

// next theme
import { ThemeProvider } from 'next-themes';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider attribute="class" disableTransitionOnChange defaultTheme="light">
        {children}
      </ThemeProvider>
    </>
  );
};

export default Providers;
