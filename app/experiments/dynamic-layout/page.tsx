import React from 'react';
import { Metadata } from 'next';
import { DynamicLayoutPage } from './DynamicLayoutPage';

export const metadata: Metadata = {
  title: 'Dynamic Layout',
  description: 'Dynamic Layout made using framer motion. Inspired by @henrikruscon on X (twitter)',
};

const DynamicLayout = () => {
  return <DynamicLayoutPage />;
};

export default DynamicLayout;
