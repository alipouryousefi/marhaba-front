import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="hidden md:block fixed bottom-[19px] inset-x-0 md:mx-auto px-4 max-w-[1200px] w-full">
      <motion.footer
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className=" w-full max-w-[1200px] px-6 py-4 flex justify-between items-center bg-[#F7F7F7] rounded-3xl"
      >
        <motion.div variants={itemVariants} className="flex items-center gap-3">
          <Image
            src="/images/footer-logo.png"
            alt="Marhaba Group Logo"
            width={900}
            height={900}
            className="w-[41px] h-[46px] object-cover"
          />
          <div className="flex flex-col">
            <span className="text-[#2E2E2E] font-InterTight text-lg font-medium leading-[135%]">
              © Marhaba Group
            </span>
            <span className="mt-1 text-[#5D5D5D] font-InterTight text-sm font-normal leading-[135%]">
              2025 all rights reserved
            </span>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="hidden md:flex gap-6">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="flex w-10 h-10 p-2.5 justify-center items-center rounded-[73.333px] border border-[#E4E4E4] transition-all duration-300 hover:bg-[#000000]/50 hover:shadow-lg hover:shadow-[#000000]/20 hover:border-transparent group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              className="transition-all duration-500 group-hover:fill-white fill-[#000000] group-hover:scale-110"
            >
              <path d="M10 2.30078C12.6719 2.30078 12.9883 2.3125 14.0391 2.35937C15.0156 2.40234 15.543 2.56641 15.8945 2.70312C16.3594 2.88281 16.6953 3.10156 17.043 3.44922C17.3945 3.80078 17.6094 4.13281 17.7891 4.59766C17.9258 4.94922 18.0898 5.48047 18.1328 6.45312C18.1797 7.50781 18.1914 7.82422 18.1914 10.4922C18.1914 13.1641 18.1797 13.4805 18.1328 14.5312C18.0898 15.5078 17.9258 16.0352 17.7891 16.3867C17.6094 16.8516 17.3906 17.1875 17.043 17.5352C16.6914 17.8867 16.3594 18.1016 15.8945 18.2812C15.543 18.418 15.0117 18.582 14.0391 18.625C12.9844 18.6719 12.668 18.6836 10 18.6836C7.32812 18.6836 7.01172 18.6719 5.96094 18.625C4.98438 18.582 4.45703 18.418 4.10547 18.2812C3.64062 18.1016 3.30469 17.8828 2.95703 17.5352C2.60547 17.1836 2.39062 16.8516 2.21094 16.3867C2.07422 16.0352 1.91016 15.5039 1.86719 14.5312C1.82031 13.4766 1.80859 13.1602 1.80859 10.4922C1.80859 7.82031 1.82031 7.50391 1.86719 6.45312C1.91016 5.47656 2.07422 4.94922 2.21094 4.59766C2.39062 4.13281 2.60937 3.79687 2.95703 3.44922C3.30859 3.09766 3.64062 2.88281 4.10547 2.70312C4.45703 2.56641 4.98828 2.40234 5.96094 2.35937C7.01172 2.3125 7.32812 2.30078 10 2.30078ZM10 0.5C7.28516 0.5 6.94531 0.511719 5.87891 0.558594C4.81641 0.605469 4.08594 0.777344 3.45312 1.02344C2.79297 1.28125 2.23438 1.62109 1.67969 2.17969C1.12109 2.73437 0.78125 3.29297 0.523437 3.94922C0.277344 4.58594 0.105469 5.3125 0.0585938 6.375C0.0117188 7.44531 0 7.78516 0 10.5C0 13.2148 0.0117188 13.5547 0.0585938 14.6211C0.105469 15.6836 0.277344 16.4141 0.523437 17.0469C0.78125 17.707 1.12109 18.2656 1.67969 18.8203C2.23438 19.375 2.79297 19.7187 3.44922 19.9727C4.08594 20.2187 4.8125 20.3906 5.875 20.4375C6.94141 20.4844 7.28125 20.4961 9.99609 20.4961C12.7109 20.4961 13.0508 20.4844 14.1172 20.4375C15.1797 20.3906 15.9102 20.2187 16.543 19.9727C17.1992 19.7187 17.7578 19.375 18.3125 18.8203C18.8672 18.2656 19.2109 17.707 19.4648 17.0508C19.7109 16.4141 19.8828 15.6875 19.9297 14.625C19.9766 13.5586 19.9883 13.2187 19.9883 10.5039C19.9883 7.78906 19.9766 7.44922 19.9297 6.38281C19.8828 5.32031 19.7109 4.58984 19.4648 3.95703C19.2187 3.29297 18.8789 2.73437 18.3203 2.17969C17.7656 1.625 17.207 1.28125 16.5508 1.02734C15.9141 0.78125 15.1875 0.609375 14.125 0.5625C13.0547 0.511719 12.7148 0.5 10 0.5Z" />
              <path d="M10 5.36328C7.16406 5.36328 4.86328 7.66406 4.86328 10.5C4.86328 13.3359 7.16406 15.6367 10 15.6367C12.8359 15.6367 15.1367 13.3359 15.1367 10.5C15.1367 7.66406 12.8359 5.36328 10 5.36328ZM10 13.832C8.16016 13.832 6.66797 12.3398 6.66797 10.5C6.66797 8.66016 8.16016 7.16797 10 7.16797C11.8398 7.16797 13.332 8.66016 13.332 10.5C13.332 12.3398 11.8398 13.832 10 13.832Z" />
              <path d="M16.5391 5.1601C16.5391 5.82416 16 6.35932 15.3398 6.35932C14.6758 6.35932 14.1406 5.82025 14.1406 5.1601C14.1406 4.49603 14.6797 3.96088 15.3398 3.96088C16 3.96088 16.5391 4.49994 16.5391 5.1601Z" />
            </svg>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="flex w-10 h-10 p-2.5 justify-center items-center rounded-[73.333px] border border-[#E4E4E4] transition-all duration-300 hover:bg-[#000000]/50 hover:shadow-lg hover:shadow-[#000000]/20 hover:border-transparent group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              className="transition-all duration-300 group-hover:fill-white fill-[#000000] group-hover:scale-110"
            >
              <path d="M5.78329 4.66671C5.78306 5.10873 5.60726 5.53257 5.29454 5.84497C4.98182 6.15738 4.55781 6.33276 4.11578 6.33254C3.67376 6.33232 3.24992 6.15651 2.93752 5.8438C2.62511 5.53108 2.44973 5.10707 2.44995 4.66504C2.45017 4.22301 2.62598 3.79918 2.9387 3.48677C3.25141 3.17437 3.67542 2.99899 4.11745 2.99921C4.55948 2.99943 4.98331 3.17523 5.29572 3.48795C5.60812 3.80067 5.78351 4.22468 5.78329 4.66671ZM5.83329 7.56671H2.49995V18H5.83329V7.56671ZM11.1 7.56671H7.78329V18H11.0666V12.525C11.0666 9.47504 15.0416 9.19171 15.0416 12.525V18H18.3333V11.3917C18.3333 6.25004 12.45 6.44171 11.0666 8.96671L11.1 7.56671Z" />
            </svg>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="flex w-10 h-10 p-2.5 justify-center items-center rounded-[73.333px] border border-[#E4E4E4] transition-all duration-300 hover:bg-[#000000]/50 hover:shadow-lg hover:shadow-[#000000]/20 hover:border-transparent group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              className="transition-all duration-300 group-hover:fill-white fill-[#000000] group-hover:scale-110"
            >
              <g clipPath="url(#clip0_1_627)">
                <path d="M20 10.5C20 4.97715 15.5229 0.5 10 0.5C4.47715 0.5 0 4.97715 0 10.5C0 15.4912 3.65684 19.6283 8.4375 20.3785V13.3906H5.89844V10.5H8.4375V8.29688C8.4375 5.79063 9.93047 4.40625 12.2146 4.40625C13.3084 4.40625 14.4531 4.60156 14.4531 4.60156V7.0625H13.1922C11.95 7.0625 11.5625 7.8334 11.5625 8.625V10.5H14.3359L13.8926 13.3906H11.5625V20.3785C16.3432 19.6283 20 15.4912 20 10.5Z" />
              </g>
              <defs>
                <clipPath id="clip0_1_627">
                  <rect width="20" height="20" transform="translate(0 0.5)" />
                </clipPath>
              </defs>
            </svg>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="flex w-10 h-10 p-2.5 justify-center items-center rounded-[73.333px] border border-[#E4E4E4] transition-all duration-300 hover:bg-[#000000]/50 hover:shadow-lg hover:shadow-[#000000]/20 hover:border-transparent group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="15"
              viewBox="0 0 20 15"
              className="transition-all duration-300 group-hover:fill-white fill-[#000000] group-hover:scale-110"
            >
              <path d="M19.8008 3.50006C19.8008 3.50006 19.6055 2.12115 19.0039 1.51569C18.2422 0.718811 17.3906 0.714905 17 0.66803C14.2031 0.464905 10.0039 0.464905 10.0039 0.464905H9.99609C9.99609 0.464905 5.79688 0.464905 3 0.66803C2.60938 0.714905 1.75781 0.718811 0.996094 1.51569C0.394531 2.12115 0.203125 3.50006 0.203125 3.50006C0.203125 3.50006 0 5.12115 0 6.73834V8.25397C0 9.87115 0.199219 11.4922 0.199219 11.4922C0.199219 11.4922 0.394531 12.8712 0.992187 13.4766C1.75391 14.2735 2.75391 14.2462 3.19922 14.3321C4.80078 14.4844 10 14.5313 10 14.5313C10 14.5313 14.2031 14.5235 17 14.3243C17.3906 14.2774 18.2422 14.2735 19.0039 13.4766C19.6055 12.8712 19.8008 11.4922 19.8008 11.4922C19.8008 11.4922 20 9.87506 20 8.25397V6.73834C20 5.12115 19.8008 3.50006 19.8008 3.50006ZM7.93359 10.0938V4.47272L13.3359 7.29303L7.93359 10.0938Z" />
            </svg>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="flex w-10 h-10 p-2.5 justify-center items-center rounded-[73.333px] border border-[#E4E4E4] transition-all duration-300 hover:bg-[#000000]/50 hover:shadow-lg hover:shadow-[#000000]/20 hover:border-transparent group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill=""
              className="transition-all duration-300 group-hover:stroke-white stroke-[#000000] group-hover:scale-110 fill-none"
            >
              <path
                d="M2.5 18L8.79033 11.7097M8.79033 11.7097L2.5 3H6.66667L11.2097 9.29033M8.79033 11.7097L13.3333 18H17.5L11.2097 9.29033M17.5 3L11.2097 9.29033"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.a>
        </motion.div>
      </motion.footer>
    </div>
  );
};

export default Footer;
