import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full hidden sm:block'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full teal-gold-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='service'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const MobileServiceCard = ({ index, title, icon }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 0.5)}
    className='flex items-center gap-4 bg-tertiary/60 backdrop-blur-sm rounded-2xl p-4 border-l-2 border-[#0D9488]'
  >
    <div className='w-12 h-12 flex-shrink-0 bg-black-100 rounded-xl flex items-center justify-center'>
      <img src={icon} alt={title} className='w-8 h-8 object-contain' />
    </div>
    <div>
      <h3 className='text-white text-[15px] font-bold'>{title}</h3>
      <div className='w-8 h-[2px] bg-[#C9A84C] mt-1 rounded-full' />
    </div>
  </motion.div>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Who I am</p>
        <h2 className={styles.sectionHeadText}>About Me.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[15px] sm:text-[17px] max-w-3xl leading-[26px] sm:leading-[30px]'
      >
        I'm a full-stack developer who builds things that matter. From enterprise
        platforms to wellness apps, I've shipped production code across React, React
        Native, Node.js, Python, and Three.js. But code is only half the story. I'm
        also the founder of{" "}
        <a href="https://ecogym.space" target="_blank" rel="noopener noreferrer" className="text-[#2DD4BF] hover:underline">
          EcoGym
        </a>{" "}
        — a mindfulness platform with 200+ guided audio tracks — and the creator of{" "}
        <a href="https://theanimatorshift.com" target="_blank" rel="noopener noreferrer" className="text-[#C9A84C] hover:underline">
          The Animator Shift
        </a>
        , a consciousness framework with a published book on Amazon. I believe the
        best technology serves the whole person. That's the SoulfulDev ethos.
      </motion.p>

      {/* Desktop: original tilt cards */}
      <div className='mt-20 hidden sm:flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      {/* Mobile: horizontal list with accent borders */}
      <div className='mt-8 flex flex-col gap-3 sm:hidden'>
        {services.map((service, index) => (
          <MobileServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
