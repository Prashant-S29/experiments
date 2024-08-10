import React from 'react';
import { Metadata } from 'next';
import { ShotPage } from './ShotPage';

export async function generateMetadata({ params }: { params: params }): Promise<Metadata> {
  // dynamically fetch data and set it as metadata
  // const shotData = await fetch(`https://.../${id}`).then((res) => res.json());

  return {
    title: `Shot ${params.id} - Dribbble`,
    description: `Dribbble like navigation using shallow routing in NextJs 14. Suggested by @YuanDev2024 on X (twitter)`,
  };
}

interface params {
  id: string;
}

const Shot = ({ params }: { params: params }) => {
  return <ShotPage shotId={params.id} />;
};

export default Shot;
