"use client"

import React, { useEffect, useState } from 'react'
import NumberFlow from '@number-flow/react'
import { motion } from 'framer-motion'

const CountDown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [totalSeconds, setTotalSeconds] = useState(0);

  useEffect(() => {
    const targetDate = new Date('2025-06-26T00:00:00');
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();
    
    if (difference <= 0) {
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
      setTotalSeconds(0);
      return;
    }

    const initialTotalSeconds = Math.floor(difference / 1000);
    setTotalSeconds(initialTotalSeconds);
    setDays(Math.floor(initialTotalSeconds / (60 * 60 * 24)));
    setHours(Math.floor((initialTotalSeconds / (60 * 60)) % 24));
    setMinutes(Math.floor((initialTotalSeconds / 60) % 60));
    setSeconds(initialTotalSeconds % 60);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTotalSeconds(prev => {
        if (prev <= 0) return 0;
        
        const newTotalSeconds = prev - 1;
        setDays(Math.floor(newTotalSeconds / (60 * 60 * 24)));
        setHours(Math.floor((newTotalSeconds / (60 * 60)) % 24));
        setMinutes(Math.floor((newTotalSeconds / 60) % 60));
        setSeconds(newTotalSeconds % 60);
        
        return newTotalSeconds;
      });
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
          value={days}
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
            value={hours}
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
            value={minutes}
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
            value={seconds}
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
