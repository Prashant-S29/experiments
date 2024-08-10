'use client';

import React, { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { CloseIcon } from '@/icons';
import useKeyBinder from '@/hooks/useKeyBinder';

// Define the type for the props
interface ShotModalProps {
  shotId: string;
  handleClose: () => void;
}

/**
 * ShotModal Component
 *
 * Displays a modal with shot details based on the shotId.
 * Fetches the shot data when the component mounts.
 *
 * @param {ShotModalProps} props - The props for the ShotModal component.
 * @returns {JSX.Element} The rendered ShotModal component.
 */
const ShotModal: React.FC<ShotModalProps> = ({ shotId, handleClose }) => {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    /**
     * Fetch shot data using the shotId.
     *
     * Simulates an API call to fetch shot data.
     */
    const fetchShotData = async () => {
      setLoading(true);
      try {
        // Simulate API call with a delay
        await new Promise((resolve) => setTimeout(resolve, 3000));
        // replace with actual API call:
        // const data = await fetch(`/api/shots/${shotId}`)
      } finally {
        setLoading(false);
      }
    };
    fetchShotData();
  }, [shotId]);

  return (
    <div className="fixed left-0 top-0 z-20 h-screen w-full">
      <div className="flex w-full cursor-pointer items-center justify-end bg-black/60 p-5" onClick={handleClose}>
        <CloseIcon className="text-[20px] text-white" />
      </div>
      <div className="flex h-full w-full items-center justify-center bg-white">
        {loading ? (
          <div className="flex h-full w-full items-center justify-center">
            <div className="h-16 w-16 animate-spin rounded-full border-b-2 border-t-2 border-gray-300" />
          </div>
        ) : (
          <p className='text-black' >Shot {shotId}</p>
        )}
      </div>
    </div>
  );
};

/**
 * Following Component
 *
 * Implements Dribbble-like navigation where clicking on a shot opens a modal,
 * and the URL changes without reloading the page. Utilizes shallow routing in Next.js 14.
 *
 * @returns {JSX.Element} The rendered Following component.
 */
export const Following: React.FC = () => {
  const [shotId, setShotId] = useState<string | null>(null);

  /**
   * Handle opening a new shot modal.
   *
   * Updates the URL using shallow routing and sets the shotId state.
   *
   * @param {string} newShotId - The ID of the shot to open.
   */
  const handleNewShotOpen = useCallback((newShotId: string) => {
    setShotId(newShotId);
    history.pushState(
      { shotId: newShotId },
      `Shot ${newShotId}`,
      `/experiments/dribbble-like-navigation/shots/${newShotId}`,
    );
  }, []);

  /**
   * Handle closing the shot modal.
   *
   * Clears the shotId state and reverts the URL back to the base.
   */
  const handleClose = useCallback(() => {
    setShotId(null);
    history.pushState(null, '', '/experiments/dribbble-like-navigation/following');
  }, []);

  useKeyBinder({
    key: 'Escape',
    func: handleClose,
  });

  return (
    <>
      <div className="relative flex min-h-screen w-full justify-center py-8">
        <div className="w-full">
          <div className="flex h-[500px] items-center justify-center text-center">
            <div>
              <p className="text-[22px] font-bold">Dribbble Like Navigation</p>
              <p className="text-[16px]">Navigate between pages without reloading the page just like Dribbble</p>
              <p className="text-[16px]">Best example of Shallow Routing in NextJs 14</p>
              <p className="mt-5 font-medium">
                Thanks to{' '}
                <Link href="https://x.com/YuanDev2024" target="_blank" className="text-blue-600">
                  @YuanDev2024
                </Link>{' '}
                for the suggestion
              </p>
            </div>
          </div>

          <div className="bottom-[50px] grid w-full grid-cols-4 items-center justify-center gap-8 px-[100px]">
            {Array.from({ length: 12 }).map((_, index) => (
              <div
                key={index}
                className="flex h-[200px] cursor-pointer items-center justify-center rounded-[10px] bg-gray-300 dark:bg-[#1c1c1c]"
                onClick={() => handleNewShotOpen(`${index + 1}`)}
              >
                Shot {index + 1}
              </div>
            ))}
          </div>
        </div>
      </div>

      {shotId && <ShotModal shotId={shotId} handleClose={handleClose} />}
    </>
  );
};
