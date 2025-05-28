import React from 'react';
import { Metadata } from 'next';
import { GlassLayersWithDyRotation } from './GlassLayersWithDyRotation';

export const metadata: Metadata = {
  title: 'Glass Layers with Dynamic Rotation',
  description: 'Made using framer motion. Inspired by @rndr_realm on X (twitter)',
};

const Page = () => {
  return <GlassLayersWithDyRotation />;
};

export default Page;
