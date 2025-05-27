import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import NavbarMobileView from "./MobileDialog";

const Footer = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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
    <div className="md:hidden fixed bottom-[24px] inset-x-0 md:mx-auto px-4 flex items-center gap-2">
      <motion.footer
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-full md:w-[1200px] px-4 py-4 flex justify-between items-center bg-[#F7F7F7] rounded-3xl h-[56px]"
      >
        <motion.div variants={itemVariants} className="flex items-center gap-3">
          <Image
            src="/images/footer-logo.png"
            alt="Marhaba Group Logo"
            width={900}
            height={900}
            className="w-[36px] md:w-[41px] h-[40px] md:h-[46px] object-cover"
          />
          <div className="flex flex-col">
            <span className="text-[#2E2E2E] font-InterTight text-[15px] md:text-lg font-medium leading-[135%]">
              © Marhaba Group
            </span>
            <span className="mt-1 text-[#5D5D5D] font-InterTight text-[13px] md:text-sm font-normal leading-[135%]">
              2025 all rights reserved.
            </span>
          </div>
        </motion.div>
      </motion.footer>

      <motion.div variants={itemVariants} className="flex gap-6">
        <motion.div 
          onClick={() => setIsDialogOpen(!isDialogOpen)}
          className="flex rounded-[84px] w-[56px] h-[56px] p-[8px_24px] flex-col justify-center items-center gap-[819px] flex-shrink-0 bg-[#F7CD45] cursor-pointer z-[1000]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <motion.svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            animate={{ rotate: isDialogOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <path d="M19 15L12 8L5 15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </motion.svg>
        </motion.div>
      </motion.div>

      <NavbarMobileView isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </div>
  );
};

export default Footer;
