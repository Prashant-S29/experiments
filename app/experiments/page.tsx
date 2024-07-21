import React from 'react';
import { Metadata } from 'next';
import { ExperimentsPage } from './ExperimentsPage';

export const metadata: Metadata = {
  title: 'Experiments',
  description: 'Download Animation made using framer motion. Inspired by @zzerou_ on X (twitter)',
};

const Experiments = () => {
  return <ExperimentsPage />;
};

export default Experiments;
