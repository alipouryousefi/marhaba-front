import React, { useCallback, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';

interface MobileDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileDialog = ({ isOpen, onClose }: MobileDialogProps) => {



  const mobileMenuVariant = {
    opened: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
    closed: {
      opacity: 0,
      transition: {
        duration: 0.63,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
  };


  const ulVariant = {
    opened: {
      transition: {
      }
    },
    closed: {
      transition: {
      }
    },
  };

  const liVariant = {
    opened: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
  };



  const controls = useAnimation();
  const controlsSocial = useAnimation();


  useEffect(() => {
    if (isOpen) {
      controls.start('opened');
      controlsSocial.start('opened');
    } else {
      controls.start('closed');
      controlsSocial.start('closed');
    }
  }, [isOpen, controls, controlsSocial]);



 

 

  return (
    <motion.div
      variants={mobileMenuVariant}
      initial="closed"
      animate={controls}
      exit="closed"
      onClick={onClose}
      className="fixed left-0 top-0 z-50 h-full w-full flex flex-col items-end justify-end overflow-y-hidden overflow-x-hidden bg-[rgba(255,255,255,0.60)] backdrop-blur-[4px] px-6 py-8 laptop:!hidden"
    >
      <motion.div 
        variants={ulVariant}
        initial="closed"
        animate={controlsSocial}
        className="flex flex-col gap-5 items-end w-full mb-16 -mr-1"
      >
        <motion.a
          href="#"
          variants={liVariant}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex w-12 h-12 p-3 justify-center items-center aspect-square rounded-[88px] bg-black"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2.16082C15.2063 2.16082 15.5859 2.17488 16.8469 2.23113C18.0188 2.28269 18.6516 2.47957 19.0734 2.64363C19.6313 2.85925 20.0344 3.12175 20.4516 3.53894C20.8734 3.96082 21.1313 4.35925 21.3469 4.91707C21.5109 5.33894 21.7078 5.97644 21.7594 7.14363C21.8156 8.40925 21.8297 8.78894 21.8297 11.9905C21.8297 15.1968 21.8156 15.5764 21.7594 16.8374C21.7078 18.0093 21.5109 18.6421 21.3469 19.0639C21.1313 19.6218 20.8687 20.0249 20.4516 20.4421C20.0297 20.8639 19.6313 21.1218 19.0734 21.3374C18.6516 21.5014 18.0141 21.6983 16.8469 21.7499C15.5813 21.8061 15.2016 21.8202 12 21.8202C8.79375 21.8202 8.41406 21.8061 7.15313 21.7499C5.98125 21.6983 5.34844 21.5014 4.92656 21.3374C4.36875 21.1218 3.96563 20.8593 3.54844 20.4421C3.12656 20.0202 2.86875 19.6218 2.65313 19.0639C2.48906 18.6421 2.29219 18.0046 2.24063 16.8374C2.18438 15.5718 2.17031 15.1921 2.17031 11.9905C2.17031 8.78425 2.18438 8.40456 2.24063 7.14363C2.29219 5.97175 2.48906 5.33894 2.65313 4.91707C2.86875 4.35925 3.13125 3.95613 3.54844 3.53894C3.97031 3.11707 4.36875 2.85925 4.92656 2.64363C5.34844 2.47957 5.98594 2.28269 7.15313 2.23113C8.41406 2.17488 8.79375 2.16082 12 2.16082ZM12 -0.00012207C8.74219 -0.00012207 8.33438 0.0139404 7.05469 0.0701904C5.77969 0.12644 4.90313 0.33269 4.14375 0.628003C3.35156 0.937378 2.68125 1.34519 2.01563 2.0155C1.34531 2.68113 0.9375 3.35144 0.628125 4.13894C0.332812 4.903 0.126563 5.77488 0.0703125 7.04988C0.0140625 8.33425 0 8.74207 0 11.9999C0 15.2577 0.0140625 15.6655 0.0703125 16.9452C0.126563 18.2202 0.332812 19.0968 0.628125 19.8561C0.9375 20.6483 1.34531 21.3186 2.01563 21.9843C2.68125 22.6499 3.35156 23.0624 4.13906 23.3671C4.90313 23.6624 5.775 23.8686 7.05 23.9249C8.32969 23.9811 8.7375 23.9952 11.9953 23.9952C15.2531 23.9952 15.6609 23.9811 16.9406 23.9249C18.2156 23.8686 19.0922 23.6624 19.8516 23.3671C20.6391 23.0624 21.3094 22.6499 21.975 21.9843C22.6406 21.3186 23.0531 20.6483 23.3578 19.8608C23.6531 19.0968 23.8594 18.2249 23.9156 16.9499C23.9719 15.6702 23.9859 15.2624 23.9859 12.0046C23.9859 8.74675 23.9719 8.33894 23.9156 7.05925C23.8594 5.78425 23.6531 4.90769 23.3578 4.14832C23.0625 3.35144 22.6547 2.68113 21.9844 2.0155C21.3188 1.34988 20.6484 0.937378 19.8609 0.63269C19.0969 0.337378 18.225 0.131128 16.95 0.0748779C15.6656 0.0139404 15.2578 -0.00012207 12 -0.00012207Z" fill="white"/>
            <path d="M12 5.83582C8.59688 5.83582 5.83594 8.59675 5.83594 11.9999C5.83594 15.403 8.59688 18.1639 12 18.1639C15.4031 18.1639 18.1641 15.403 18.1641 11.9999C18.1641 8.59675 15.4031 5.83582 12 5.83582ZM12 15.9983C9.79219 15.9983 8.00156 14.2077 8.00156 11.9999C8.00156 9.79207 9.79219 8.00144 12 8.00144C14.2078 8.00144 15.9984 9.79207 15.9984 11.9999C15.9984 14.2077 14.2078 15.9983 12 15.9983Z" fill="white"/>
            <path d="M19.8469 5.59202C19.8469 6.38889 19.2 7.03108 18.4078 7.03108C17.6109 7.03108 16.9688 6.38421 16.9688 5.59202C16.9688 4.79514 17.6156 4.15295 18.4078 4.15295C19.2 4.15295 19.8469 4.79983 19.8469 5.59202Z" fill="white"/>
          </svg>
        </motion.a>

        <motion.a
          href="#"
          variants={liVariant}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex w-12 h-12 p-3 justify-center items-center aspect-square rounded-[88px] bg-black"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.94043 5.00008C6.94017 5.53052 6.7292 6.03912 6.35394 6.41401C5.97868 6.78889 5.46986 6.99935 4.93943 6.99908C4.409 6.99882 3.90039 6.78785 3.52551 6.41259C3.15062 6.03733 2.94016 5.52852 2.94043 4.99808C2.9407 4.46765 3.15166 3.95905 3.52692 3.58416C3.90218 3.20928 4.411 2.99882 4.94143 2.99908C5.47186 2.99935 5.98047 3.21032 6.35535 3.58558C6.73024 3.96084 6.9407 4.46965 6.94043 5.00008ZM7.00043 8.48008H3.00043V21.0001H7.00043V8.48008ZM13.3204 8.48008H9.34043V21.0001H13.2804V14.4301C13.2804 10.7701 18.0504 10.4301 18.0504 14.4301V21.0001H22.0004V13.0701C22.0004 6.90008 14.9404 7.13008 13.2804 10.1601L13.3204 8.48008Z" fill="white"/>
          </svg>
        </motion.a>

        <motion.a
          href="#"
          variants={liVariant}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex w-12 h-12 p-3 justify-center items-center aspect-square rounded-[88px] bg-black"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_701)">
              <path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z" fill="white"/>
            </g>
            <defs>
              <clipPath id="clip0_1_701">
                <rect width="24" height="24" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </motion.a>

        <motion.a
          href="#"
          variants={liVariant}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex w-12 h-12 justify-center items-center aspect-square rounded-[88px] bg-black"
        >
          <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.7609 4.19999C23.7609 4.19999 23.5266 2.5453 22.8047 1.81874C21.8906 0.862488 20.8688 0.8578 20.4 0.80155C17.0438 0.5578 12.0047 0.5578 12.0047 0.5578H11.9953C11.9953 0.5578 6.95625 0.5578 3.6 0.80155C3.13125 0.8578 2.10938 0.862488 1.19531 1.81874C0.473438 2.5453 0.24375 4.19999 0.24375 4.19999C0.24375 4.19999 0 6.1453 0 8.08593V9.90467C0 11.8453 0.239062 13.7906 0.239062 13.7906C0.239062 13.7906 0.473437 15.4453 1.19062 16.1719C2.10469 17.1281 3.30469 17.0953 3.83906 17.1984C5.76094 17.3812 12 17.4375 12 17.4375C12 17.4375 17.0438 17.4281 20.4 17.1891C20.8688 17.1328 21.8906 17.1281 22.8047 16.1719C23.5266 15.4453 23.7609 13.7906 23.7609 13.7906C23.7609 13.7906 24 11.85 24 9.90467V8.08593C24 6.1453 23.7609 4.19999 23.7609 4.19999ZM9.52031 12.1125V5.36718L16.0031 8.75155L9.52031 12.1125Z" fill="white"/>
          </svg>
        </motion.a>

        <motion.a
          href="#"
          variants={liVariant}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex w-12 h-12 p-3 justify-center items-center aspect-square rounded-[88px] bg-black"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 21L10.5484 13.4516M10.5484 13.4516L3 3H8L13.4516 10.5484M10.5484 13.4516L16 21H21L13.4516 10.5484M21 3L13.4516 10.5484" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </motion.a>
   
      </motion.div>

   
    </motion.div>
  );
};

export default MobileDialog;
