"use client";

import Footer from "@/components/Footer";
import Image from "next/image";
import CountDown from "@/components/CountDown";
import { motion } from "framer-motion";
import FooterMobileView from "@/components/Footer/MobileView";

export default function Home() {

  return (
    <div className="flex justify-start md:justify-center items-center h-[100vh] w-screen flex-col">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-[111px] md:w-[130px] h-[111px] md:h-[130px] flex justify-center items-center mt-6 md:mt-0"
      >
        <motion.svg
          initial={{ rotate: -180 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          xmlns="http://www.w3.org/2000/svg"
          width="104"
          height="104"
          viewBox="0 0 104 104"
          fill="none"
          style={{
            fill: "#F7CD45",
            width: "104px",
            height: "104px",
            flexShrink: 0,
            aspectRatio: "1/1",
          }}
        >
          <path
            d="M0 52C0 23.2812 23.2812 0 52 0C80.7188 0 104 23.2812 104 52C104 80.7188 80.7188 104 52 104C23.2812 104 0 80.7188 0 52Z"
            fill="#F7CD45"
          />
        </motion.svg>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          className="absolute inset-0 m-auto w-full"
        >
          <Image
            src="/images/logo.png"
            alt="Center Image"
            width={9000}
            height={9000}
            className="w-[111px] md:w-[130px] h-[111px] md:h-[130px] object-cover"
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="flex flex-col items-center"
      >
        <h1 className="mt-[3px] md:mt-[12px] text-[#2E2E2E] text-center font-Champ text-[20px] md:text-[26px] font-extrabold leading-[135%]">
          Marhaba Group
        </h1>
        <h2 className="mt-[22px] md:mt-[42px] text-[#2E2E2E] text-center font-InterTight text-[30px] md:text-[48px] font-normal leading-[135%]">
          Coming Soon
        </h2>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <CountDown />
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="pb-6"
      >
        <h3 className="mt-10 md:mt-[48px] text-[#2E2E2E] text-center font-InterTight text-lg font-medium leading-[135%]">
          Something Great is Brewing !
        </h3>
        <p className="mt-3 text-[#2E2E2E] text-center font-InterTight text-base font-normal leading-[135%] max-w-[301px] md:max-w-[404px] pb-[80px] md:pb-0">
          A new era of excellence in trade , branding , and innovation is about          to begin
        </p>
      </motion.div>
      

      <Footer />
      <FooterMobileView />
    </div>
  );
}
