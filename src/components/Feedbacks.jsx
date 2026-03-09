import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full hidden sm:block'
  >
    <p className='text-[#C9A84C] font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='teal-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);

const MobileFeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 0.5)}
    className='flex-shrink-0 w-[85vw] snap-center bg-black-200/80 backdrop-blur-sm rounded-2xl p-5 border border-[#0D9488]/10'
  >
    <div className='flex items-center gap-3 mb-4'>
      <img
        src={image}
        alt={name}
        className='w-10 h-10 rounded-full object-cover ring-2 ring-[#0D9488]/30'
      />
      <div>
        <p className='text-white font-semibold text-[14px]'>{name}</p>
        <p className='text-[#2DD4BF] text-[11px]'>
          {designation}, {company}
        </p>
      </div>
    </div>

    <div className='relative pl-4'>
      <div className='absolute left-0 top-1 bottom-1 w-[2px] bg-gradient-to-b from-[#C9A84C] to-[#C9A84C]/10 rounded-full' />
      <p className='text-white-100 text-[14px] leading-[22px]'>{testimonial}</p>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <>
      {/* Desktop: original layout */}
      <div className={`hidden sm:block mt-12 bg-black-100 rounded-[20px]`}>
        <div
          className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
        >
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>What others say</p>
            <h2 className={styles.sectionHeadText}>Testimonials.</h2>
          </motion.div>
        </div>
        <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
          {testimonials.map((testimonial, index) => (
            <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
          ))}
        </div>
      </div>

      {/* Mobile: Horizontal snap carousel */}
      <div className='sm:hidden'>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>

        <div className='mt-8 flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide'>
          {testimonials.map((testimonial, index) => (
            <MobileFeedbackCard key={testimonial.name} index={index} {...testimonial} />
          ))}
        </div>

        {/* Scroll hint dots */}
        <div className='flex justify-center gap-2 mt-2'>
          {testimonials.map((_, i) => (
            <div key={i} className='w-1.5 h-1.5 rounded-full bg-[#0D9488]/40' />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Feedbacks, "");
