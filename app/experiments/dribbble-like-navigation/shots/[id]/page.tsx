import React from 'react';

interface params {
  id: string;
}

const ShotPage = ({ params }: { params: params }) => {
  return <div className="flex h-screen w-full items-center justify-center">Shot {params.id}</div>;
};

export default ShotPage;
