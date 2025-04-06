import React from 'react';
import { Metadata } from 'next';
import { DavidWip } from './DavidWip';

export const metadata: Metadata = {
  title: 'David Visuals Hero Section',
  description: 'Hero Section inspired by @David_Visuals_ on X (twitter)',
};

const DavidWIPPage = () => {
  return <DavidWip />;
};

export default DavidWIPPage;
