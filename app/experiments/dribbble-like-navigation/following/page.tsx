import React from 'react';
import { Metadata } from 'next';
import { Following } from './Following';

export const metadata: Metadata = {
  title: 'Dribbble Like Navigation',
  description:
    'Navigating between pages without reloading the page just like dribbble. Thanks to @YuanDev2024 on X (Twitter) for the suggestion',
};

const DownloadAnimation = () => {
  return <Following />;
};

export default DownloadAnimation;
