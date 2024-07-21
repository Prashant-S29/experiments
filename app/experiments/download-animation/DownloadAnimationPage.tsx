'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';

// Framer Motion
import { AnimatePresence, motion } from 'framer-motion';

// Icons
import { CheckIcon, CloseIcon, DeleteIcon, DownloadIcon } from '@/icons';

// Card Data Type
type CardDataProps = {
  title: string;
  imageUrl: string;
};

// Card Data

const cardData: CardDataProps[] = [
  { title: 'Bag', imageUrl: 'https://i.ibb.co/0Gjmjpx/pngtree-handdrawing-school-backpack-png-image-6136819.png' },
  { title: 'Ticket', imageUrl: 'https://i.ibb.co/vZL6fbJ/pngtree-golden-ticket-png-image-6621563.png' },
  {
    title: 'FlowerPot',
    imageUrl:
      'https://i.ibb.co/MG7Fpww/c-HJpdm-F0-ZS9sci9pb-WFn-ZXMvd2-Vic2l0-ZS8y-MDIy-LTA2-L2-Zy-Zmxvd2-Vy-X2dlcm-Fua-XVt-X3-Bvd-F9y-ZWQt.png',
  },
  { title: 'Toy', imageUrl: 'https://i.ibb.co/nBB2bQs/egg-driving-green-vehicle-1156-400-1.png' },
];

/**
 * DownloadAnimationPage component handles the main layout and logic for displaying,
 * selecting, and deleting cards.
 */
export const DownloadAnimationPage = () => {
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [deletedCards, setDeletedCards] = useState<number[]>([]);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDownloadComplete, setIsDownloadComplete] = useState(false);

  /**
   * Checks if all cards have been deleted.
   * @returns {boolean} True if all cards are deleted, otherwise false.
   */
  const allCardsDeleted = useMemo(() => deletedCards.length >= cardData.length, [deletedCards]);

  /**
   * Handles deleting the selected cards.
   * Updates the deletedCards array with new values of selectedCards and clears selectedCards.
   */
  const handleDeleteCard = () => {
    setDeletedCards((prevDeletedCards) => {
      const newDeletedCards = [...prevDeletedCards, ...selectedCards];
      setSelectedCards([]);
      return newDeletedCards;
    });
  };

  /**
   * Removes all selected cards by setting selectedCards to an empty array.
   */
  const handleAllRemoveSelectedCards = () => setSelectedCards([]);

  /**
   * Handles the downloading process. It sets isDownloading to true, and then sets isDownloadComplete to true after 6000 milliseconds.
   */
  // const handleDownloading = () => {
  //   setIsDownloading(true);
  //   setTimeout(() => {
  //     setIsDownloading(false);
  //     setSelectedCards([]);
  //   }, 6000);
  // };

  const handleDownloading = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloadComplete(true);
      setTimeout(() => {
        setIsDownloading(false);
        setIsDownloadComplete(false);
        setSelectedCards([]);
      }, 2000);
    }, 6000);
  };

  return (
    <div className="flex min-h-screen w-full select-none items-center justify-center bg-white dark:bg-[#121212]">
      <div>
        <div className="flex w-[280px] flex-wrap justify-center gap-2">
          {cardData.map((card, index) => (
            <Card
              key={index}
              cardKey={index}
              {...card}
              selectedCards={selectedCards}
              deletedCards={deletedCards}
              setSelectedCards={setSelectedCards}
              isDownloading={isDownloading}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          {selectedCards.length > 0 && !allCardsDeleted && !isDownloading && (
            <div className="flex justify-center">
              <motion.div
                animate={{ opacity: 1, y: 20 }}
                initial={{ opacity: 0, y: 40 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{
                  ease: 'easeInOut',
                  duration: 0.2,
                  type: 'spring',
                }}
                className="absolute -ml-[1px] flex justify-center"
              >
                <div className="flex items-center gap-3 rounded-full border bg-gray-100 px-5 py-2 dark:border-[#404040] dark:bg-[#1f1f1f]">
                  <div
                    className="flex size-[30px] cursor-pointer items-center justify-center rounded-full"
                    onClick={handleAllRemoveSelectedCards}
                  >
                    <CloseIcon className="text-[18px] text-black dark:text-white" />
                  </div>
                  <div
                    className="flex size-[30px] cursor-pointer items-center justify-center rounded-full"
                    onClick={handleDownloading}
                  >
                    <DownloadIcon className="text-[20px] text-green-500" />
                  </div>
                  <div
                    className="flex size-[30px] cursor-pointer items-center justify-center rounded-full"
                    onClick={handleDeleteCard}
                  >
                    <DeleteIcon className="text-[18px] text-red-500" />
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {isDownloading && (
            <div className="relative flex justify-center">
              <motion.div
                animate={{ opacity: 1, width: '280px' }}
                initial={{ opacity: 0, width: '10px' }}
                exit={{ opacity: 0, width: '10px' }}
                transition={{
                  ease: 'easeInOut',
                  duration: 0.5,
                  type: 'spring',
                }}
                className="absolute top-5 -ml-[1px] flex w-full justify-center"
              >
                <div
                  className={`relative w-full gap-3 overflow-hidden rounded-full border${isDownloadComplete ? 'border-green-600' : 'border-blue-700'} bg-blue-300 px-5 py-2 text-center dark:border-[#404040] dark:bg-[#1f1f1f]`}
                >
                  <motion.div
                    animate={{ width: '280px' }}
                    initial={{ width: '0px' }}
                    transition={{
                      ease: 'easeInOut',
                      duration: 3,
                      type: 'spring',
                      delay: 2,
                    }}
                    className={`absolute left-0 top-0 h-full rounded-full duration-200 ${isDownloadComplete ? 'bg-green-600' : 'bg-blue-700'} dark:bg-[#404040]`}
                  />
                  <div className="relative z-10">
                    <span className="text-[13px] font-medium text-white">
                      {isDownloadComplete ? 'completed' : 'Downloading...'}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* if all cards are deleted, show a refresh button */}
        {allCardsDeleted && (
          <div className="flex justify-center">
            <motion.div
              animate={{ opacity: 1, y: 20 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{
                ease: 'easeInOut',
                duration: 0.5,
                type: 'spring',
              }}
              className="cursor-pointer rounded-full bg-gray-200 px-5 py-2 dark:bg-[#404040]"
              onClick={() => window.location.reload()}
            >
              <span className="text-[14px] font-medium text-black dark:text-white">Refresh</span>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

/**
 * Card component represents an individual card with selectable and deletable functionality.
 *
 * @param {Object} props - The properties of the component.
 * @param {string} props.title - The title of the card.
 * @param {string} props.imageUrl - The URL of the image to display on the card.
 * @param {number} props.cardKey - The unique key for the card.
 * @param {number[]} props.selectedCards - The list of currently selected card keys.
 * @param {number[]} props.deletedCards - The list of currently deleted card keys.
 * @param {boolean} props.isDownloading - Whether the download is in progress.
 * @param {React.Dispatch<React.SetStateAction<number[]>>} props.setSelectedCards - Function to update the selected cards state.
 *
 * @returns {JSX.Element | null} The rendered card component or null if the card is deleted.
 */
const Card = ({
  title,
  imageUrl,
  cardKey,
  selectedCards,
  deletedCards,
  isDownloading,
  setSelectedCards,
}: CardDataProps & {
  cardKey: number;
  selectedCards: number[];
  deletedCards: number[];
  isDownloading: boolean;
  setSelectedCards: React.Dispatch<React.SetStateAction<number[]>>;
}): JSX.Element | null => {
  const isSelected = selectedCards.includes(cardKey);
  const isCardDeleted = deletedCards.includes(cardKey);

  /**
   * Handles selecting and deselecting a card.
   * If card is selected, it removes it from selectedCards, otherwise adds it to selectedCards.
   */
  const handleCardSelect = () => {
    if (isDownloading) return;
    setSelectedCards((prevSelectedCards) => {
      if (prevSelectedCards.includes(cardKey)) {
        return prevSelectedCards.filter((card) => card !== cardKey);
      } else {
        return [...prevSelectedCards, cardKey];
      }
    });
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {!isCardDeleted && (
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0, transitionDuration: '0.1s' }}
            transition={{
              ease: 'linear',
              duration: 0.1,
            }}
            className={`relative flex h-[150px] w-[130px] items-center justify-center overflow-hidden rounded-lg border ${isSelected ? 'border-blue-500' : 'border-gray-200'} bg-gray-100 duration-200 dark:border-[#404040] dark:bg-[#1f1f1f] ${isDownloading ? 'cursor-not-allowed' : 'cursor-pointer'}`}
            onClick={handleCardSelect}
          >
            {isSelected && (
              <motion.div
                animate={{ opacity: 1, scale: 20 }}
                initial={{ opacity: 0, scale: 0 }}
                transition={{ ease: 'easeInOut', duration: 0.5, type: 'spring' }}
                className="absolute size-[10px] rounded-full bg-blue-100 dark:bg-[#404040]"
              />
            )}
            {isSelected && (
              <motion.div
                animate={{ scale: 1 }}
                initial={{ scale: 0.8 }}
                exit={{ scale: 0 }}
                transition={{ ease: 'easeInOut', duration: 0.1, type: 'spring' }}
                className="absolute right-0 top-0 m-3"
              >
                <CheckIcon className="text-green-500" />
              </motion.div>
            )}
            <div className="relative z-10">
              <Image
                src={imageUrl}
                alt={title}
                width={120}
                height={120}
                unoptimized
                className="h-[80px] w-[80px] rounded-[10px] object-cover"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Card;
