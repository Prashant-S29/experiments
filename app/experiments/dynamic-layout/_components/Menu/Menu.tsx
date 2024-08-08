'use client';

import React, { useState } from 'react';

// Framer Motion
import { AnimatePresence, motion } from 'framer-motion';

// Icons
import { NotesIcon, CloseIcon } from '@/icons';

// Motion Variants
import {
  activeMenuTabVariant,
  articleCloseIconHoverTextVariant,
  articleCloseIconVariant,
  feedbackArticleContainerVariant,
  feedbackArticleVariant,
  menuToggleVariant,
} from '../../motionVariant';

// Data
import { MenuItem, NotesData } from '../../data';

// Hooks
import useKeyBinder from '@/hooks/useKeyBinder';

export const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenuTab, setActiveMenuTab] = useState(-1);
  const [showFeedbackArticle, setShowFeedbackArticle] = useState(false);
  const [isCloseIconHover, setIsCloseIconHover] = useState(false);

  const handleMenuOpen = (i: number) => {
    setIsMenuOpen(true);
    setActiveMenuTab(i);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
    setActiveMenuTab(-1);
  };

  useKeyBinder({
    key: 'Escape',
    func: () => {
      setShowFeedbackArticle(false);
    },
  });

  return (
    <>
      <div className="absolute bottom-[50px] left-[50%] w-fit translate-x-[-50%]" onMouseLeave={handleMenuClose}>
        <div className="absolute bottom-0 left-[50%] z-20 flex h-[50px] w-[350px] -translate-x-[50%] items-center rounded-[20px] bg-[#ecd2bf]">
          <div className="flex w-full gap-2 p-2">
            {MenuItem.map((item, index) => (
              <div
                key={index}
                className={`flex w-full cursor-pointer items-center justify-center gap-2 rounded-[10px] p-2 duration-150 ${activeMenuTab === index ? 'bg-black text-white' : 'bg-[#ecd2bf] text-[#4a3e34]'}`}
                onMouseEnter={() => {
                  handleMenuOpen(index);
                }}
              >
                <item.icon className="text-[13px]" /> <span className="text-[14px] font-semibold">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
        <motion.div
          variants={menuToggleVariant}
          initial="closed"
          animate={isMenuOpen ? 'open' : 'closed'}
          className="absolute bottom-0 left-[50%] -translate-x-[50%] rounded-[20px] bg-[#ecd2bf]"
        >
          <AnimatePresence>
            {activeMenuTab === 0 && (
              <motion.div
                variants={activeMenuTabVariant}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="absolute left-0 top-0 flex h-[150px] w-full justify-center rounded-t-[20px] bg-[#ecd2bf] p-3"
              >
                <p className="px-2 py-1 text-[15px] font-semibold">some app goes here</p>
              </motion.div>
            )}
            {activeMenuTab === 1 && (
              <motion.div
                variants={activeMenuTabVariant}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="absolute left-0 top-0 flex h-[150px] w-full justify-center rounded-t-[20px] bg-[#ecd2bf] p-3"
              >
                <p className="px-2 py-1 text-[15px] font-semibold">some component goes here</p>
              </motion.div>
            )}
            {activeMenuTab === 2 && (
              <motion.div
                variants={activeMenuTabVariant}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="absolute left-0 top-0 h-[150px] w-full rounded-t-[20px] bg-[#ecd2bf] p-3"
              >
                {NotesData.map((data, index) => (
                  <div
                    key={index}
                    className="flex w-full cursor-pointer items-center justify-between px-2 py-1 duration-150 hover:px-5"
                    onClick={() => {
                      handleMenuClose();
                      setShowFeedbackArticle(true);
                    }}
                  >
                    <p className="flex items-center gap-2 text-[14px] font-semibold">
                      <NotesIcon className="text-[14px] text-[#796455]" />
                      {data.title}
                    </p>
                    <p className="text-[14px] font-medium text-[#796455]">{data.data}</p>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {showFeedbackArticle && (
          <motion.div
            variants={feedbackArticleContainerVariant}
            transition={{
              duration: 0.1,
            }}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed left-0 top-0 z-20 h-screen w-full overflow-y-scroll bg-[#feefdb]"
          >
            <div className="fixed bottom-0 left-0 z-20 flex h-[150px] w-full justify-center bg-gradient-to-t from-[#feefdb] to-[#feefdb00]" />
            <motion.div
              variants={articleCloseIconVariant}
              transition={{
                ease: 'easeInOut',
                duration: 0.5,
                type: 'spring',
                left: '50%',
              }}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="absolute left-[50%] top-[100px] cursor-pointer"
              onClick={() => {
                setShowFeedbackArticle(false);
              }}
              onMouseEnter={() => {
                setIsCloseIconHover(true);
              }}
              onMouseLeave={() => {
                setIsCloseIconHover(false);
              }}
            >
              <CloseIcon className="text-[20px]" />
            </motion.div>
            <AnimatePresence>
              {isCloseIconHover && (
                <motion.div
                  variants={articleCloseIconHoverTextVariant}
                  transition={{
                    duration: 0.1,
                  }}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="pointer-events-none absolute left-[50%] top-[70px] rounded-full bg-[#e7d4bf] px-3 py-1 text-[12px] font-medium text-[#583c2a]"
                >
                  <span>close</span>
                </motion.div>
              )}
            </AnimatePresence>
            <motion.div
              variants={feedbackArticleVariant(isCloseIconHover)}
              transition={{
                ease: 'easeInOut',
                duration: 0.2,
                type: 'spring',
                left: '50%',
              }}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="absolute top-[30%] h-[120vh] w-[70%]"
            >
              <div className="h-[100vh] w-full rounded-[40px] bg-[#fff5ea] px-[100px] py-[80px] shadow-lg">
                <p className="text-[60px] font-bold">Changelog with Github</p>
                <p className="mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum expedita ea nobis quia culpa repellat
                  consequatur debitis, mollitia, excepturi veniam repudiandae. Aspernatur vel quo aperiam debitis
                  tempore. Et, eveniet dolorum Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui alias
                  aperiam placeat aliquam non sed ullam quibusdam in modi ipsum beatae excepturi, perferendis tempora
                  eum. Eos facere nostrum sunt veniam.
                </p>
                <p className="mt-5">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur perferendis placeat quis
                  repellendus accusamus accusantium ipsam optio. Soluta, distinctio, consequatur ab exercitationem
                  libero aspernatur sit in reprehenderit illum nemo itaque!
                </p>
                <p className="mt-5 text-[22px] font-bold">Why Github ?</p>
                <p className="mt-2">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur perferendis placeat quis
                  repellendus accusamus accusantium ipsam optio. Soluta, distinctio, consequatur ab exercitationem
                  libero aspernatur sit in reprehenderit illum nemo itaque!
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
