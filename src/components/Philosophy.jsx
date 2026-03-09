import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Philosophy = () => {
  return (
    <>
      {/* Desktop: original card layout */}
      <div className='hidden sm:block mt-12 bg-black-100 rounded-[20px]'>
        <div
          className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
        >
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>The philosophy</p>
            <h2 className={styles.sectionHeadText}>SoulfulDev.</h2>
          </motion.div>

          <motion.div
            variants={fadeIn("", "", 0.2, 1)}
            className='mt-8 max-w-4xl'
          >
            <p className='text-white-100 text-[18px] leading-[32px]'>
              <span className='text-[#C9A84C] font-semibold text-[20px]'>
                "You are not the identity being animated — you are the energy that animates it."
              </span>
            </p>

            <p className='mt-6 text-secondary text-[16px] leading-[28px]'>
              That line is from my book. It's also how I approach code. Most developers
              build features. I build systems that serve a larger vision — platforms where
              technology, purpose, and human experience converge.
            </p>

            <p className='mt-4 text-secondary text-[16px] leading-[28px]'>
              The name SoulfulDev isn't branding. It's a decision. Every line of code,
              every product, every pixel exists to move someone — whether that's a user
              on EcoGym finding their breath, a reader of The Animator Shift recognizing
              their power, or a client watching their vision come to life for the first time.
            </p>

            <div className='mt-8 flex flex-wrap gap-4'>
              <a
                href='https://www.amazon.com/dp/B0GPXYL1N3'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-[#C9A84C] text-primary py-3 px-6 rounded-xl font-bold hover:bg-[#B8941F] transition-colors'
              >
                Read the Book
              </a>
              <a
                href='https://ecogym.space'
                target='_blank'
                rel='noopener noreferrer'
                className='border-2 border-[#0D9488] text-[#2DD4BF] py-3 px-6 rounded-xl font-bold hover:bg-[#0D9488] hover:text-white transition-colors'
              >
                Explore EcoGym
              </a>
              <a
                href='https://theanimatorshift.substack.com'
                target='_blank'
                rel='noopener noreferrer'
                className='border-2 border-[#C9A84C] text-[#C9A84C] py-3 px-6 rounded-xl font-bold hover:bg-[#C9A84C] hover:text-primary transition-colors'
              >
                Read the Substack
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile: Cinematic full-bleed quote section */}
      <div className='sm:hidden'>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>The philosophy</p>
          <h2 className={styles.sectionHeadText}>SoulfulDev.</h2>
        </motion.div>

        <motion.div variants={fadeIn("", "", 0.2, 1)}>
          {/* Quote block with accent */}
          <div className='mt-6 relative'>
            <div className='absolute -left-1 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#C9A84C] via-[#C9A84C]/50 to-transparent rounded-full' />
            <div className='pl-5'>
              <span className='text-[#C9A84C]/30 text-[60px] font-black leading-none block -mb-6'>"</span>
              <p className='text-white text-[18px] leading-[30px] font-medium'>
                You are not the identity being animated — you are the energy that animates it.
              </p>
            </div>
          </div>

          <p className='mt-6 text-secondary text-[14px] leading-[24px]'>
            That line is from my book. It's also how I approach code. Most developers
            build features. I build systems that serve a larger vision — platforms where
            technology, purpose, and human experience converge.
          </p>

          <p className='mt-3 text-secondary text-[14px] leading-[24px]'>
            The name SoulfulDev isn't branding. It's a decision. Every line of code
            exists to move someone.
          </p>

          {/* CTA pills — horizontal scroll */}
          <div className='mt-6 flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 snap-x'>
            <a
              href='https://www.amazon.com/dp/B0GPXYL1N3'
              target='_blank'
              rel='noopener noreferrer'
              className='flex-shrink-0 snap-start bg-[#C9A84C] text-primary py-2.5 px-5 rounded-full font-bold text-[13px] whitespace-nowrap'
            >
              Read the Book
            </a>
            <a
              href='https://ecogym.space'
              target='_blank'
              rel='noopener noreferrer'
              className='flex-shrink-0 snap-start border border-[#0D9488] text-[#2DD4BF] py-2.5 px-5 rounded-full font-bold text-[13px] whitespace-nowrap'
            >
              Explore EcoGym
            </a>
            <a
              href='https://theanimatorshift.substack.com'
              target='_blank'
              rel='noopener noreferrer'
              className='flex-shrink-0 snap-start border border-[#C9A84C]/50 text-[#C9A84C] py-2.5 px-5 rounded-full font-bold text-[13px] whitespace-nowrap'
            >
              Read the Substack
            </a>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Philosophy, "philosophy");
