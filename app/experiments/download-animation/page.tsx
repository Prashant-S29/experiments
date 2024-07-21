import React from 'react';
import { Metadata } from 'next';
import { DownloadAnimationPage } from './DownloadAnimationPage';

export const metadata: Metadata = {
  title: 'Download Animation',
  description: 'Download Animation made using framer motion. Inspired by @zzerou_ on X (twitter)',
};

const DownloadAnimation = () => {
  return <DownloadAnimationPage />;
};

export default DownloadAnimation;
