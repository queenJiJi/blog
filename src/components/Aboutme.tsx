"use client";

import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Aboutme() {
  return (
    <motion.div
      className="px-6 py-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.p
        className="text-4xl font-extrabold mb-6"
        variants={itemVariants}
      >
        <span className="mr-2">About</span>
        <span className="text-pink-600 text-5xl">
          <Typewriter
            words={["Me."]}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
        {/* <span className="font-extrabold text-6xl text-pink-600 px-2">.</span> */}
      </motion.p>

      <motion.div
        className="space-y-6 text-lg text-gray-700 leading-8"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          직접 부딪히며 성장하는 개발자입니다. <span></span>1년 이상 실무에서
          프론트엔드 개발자로 일하며 React.js 기반의 웹 서비스를 개발했습니다.
        </motion.div>

        <motion.div variants={itemVariants}>
          저는 문제를 그냥 지나치지 않습니다. <span></span> 오너십을 가지고
          필요한 일을 먼저 찾아 해결하는 것을 좋아합니다.
          <br />
          이에 따라 고객사의 대시보드 성능을 12% 개선하고, 고객 문의 프로세스를
          개선했습니다.
        </motion.div>

        <motion.div variants={itemVariants}>
          단순 기능 구현을 넘어 고객과 도메인을 깊이 이해하는 개발자가 되고자
          합니다.
          <br />총 963시간의 데이터 분석 교육을 이수하며 AI에 대한 이해도를
          갖추었고, ‘최우수 수료자’로 선정되었습니다.
        </motion.div>

        <motion.div variants={itemVariants}>
          새로운 도전을 두려워하지 않으며, 한번 시작한 일은 끝까지 해내는
          개발자로 성장하고자합니다.
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
