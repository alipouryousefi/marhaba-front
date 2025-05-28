"use client"

import React, { useEffect, useState } from 'react'
import NumberFlow from '@number-flow/react'
import { motion } from 'framer-motion'

const CountDown = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2025-06-26T00:00:00');
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();
    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }  
  

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row gap-auto md:gap-6 mt-[32px] md:mt-10 max-w-[488px]"
    >
      {/* Days box - larger on mobile */}
      <motion.div 
        variants={itemVariants}
        className="relative flex flex-col justify-center items-center w-[280px] md:min-w-[104px] h-[144px] md:h-[96px] p-[12px_12px_20px_12px] gap-2 rounded-xl bg-[#F7F7F7]"
      >
        <NumberFlow
          value={timeLeft.days}
          className="text-[#656565] text-center font-InterTight text-[80px] md:text-[44px] font-light leading-[135%]"
        />
        <span className="absolute right-2 bottom-2 text-[#888] text-right font-InterTight text-sm font-medium leading-[125%]">
          D
        </span>
      </motion.div>

      {/* Other boxes - smaller on mobile */}
      <div className="flex flex-row md:flex-row justify-between md:gap-6 mt-4 md:mt-0 w-full">
        <motion.div 
          variants={itemVariants}
          className="relative flex flex-col justify-center items-center w-[80px] md:w-[104px] h-[80px] md:h-[96px] p-[12px_12px_20px_12px] gap-2 rounded-xl bg-[#F7F7F7]"
        >
          <NumberFlow
            value={timeLeft.hours}
            className="text-[#656565] text-center font-InterTight text-[34px] md:text-[44px] font-light leading-[135%]"
          />
          <span className="absolute right-2 bottom-2 text-[#888] text-right font-InterTight text-sm font-medium leading-[125%]">
            H
          </span>
        </motion.div>
        <motion.div 
          variants={itemVariants}
          className="relative flex flex-col justify-center items-center w-[80px] md:w-[104px] h-[80px] md:h-[96px] p-[12px_12px_20px_12px] gap-2 rounded-xl bg-[#F7F7F7]"
        >
          <NumberFlow
            value={timeLeft.minutes}
            className="text-[#656565] text-center font-InterTight text-[34px] md:text-[44px] font-light leading-[135%]"
          />
          <span className="absolute right-2 bottom-2 text-[#888] text-right font-InterTight text-sm font-medium leading-[125%]">
            M
          </span>
        </motion.div>
        <motion.div 
          variants={itemVariants}
          className="relative flex flex-col justify-center items-center w-[80px] md:w-[104px] h-[80px] md:h-[96px] p-[12px_12px_20px_12px] gap-2 rounded-xl bg-[#F7F7F7]"
        >
          <NumberFlow
            value={timeLeft.seconds}
            className="text-[#656565] text-center font-InterTight text-[34px] md:text-[44px] font-light leading-[135%]"
            spinTiming={{ duration: 500, easing: 'ease-in-out' }}
          />
          <span className="absolute right-2 bottom-2 text-[#888] text-right font-InterTight text-sm font-medium leading-[125%]">
            S
          </span>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default CountDown
