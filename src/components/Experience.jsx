import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#0A1F1A",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid #134E4A" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-[#2DD4BF] text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const MobileExperienceCard = ({ experience, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.15, 0.5)}
    className='relative'
  >
    {/* Connector line */}
    {index < experiences.length - 1 && (
      <div className='absolute left-[19px] top-[52px] bottom-[-12px] w-[2px] bg-gradient-to-b from-[#0D9488] to-[#0D9488]/10' />
    )}

    <div className='flex gap-4'>
      {/* Timeline dot + icon */}
      <div className='flex-shrink-0 flex flex-col items-center'>
        <div className='w-10 h-10 rounded-full bg-black-100 border-2 border-[#0D9488] flex items-center justify-center overflow-hidden'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-6 h-6 object-contain'
          />
        </div>
      </div>

      {/* Content */}
      <div className='flex-1 pb-8'>
        <div className='flex items-center gap-2 mb-1'>
          <span className='text-[11px] text-[#C9A84C] font-semibold tracking-widest uppercase bg-[#C9A84C]/10 px-2 py-0.5 rounded-full'>
            {experience.date}
          </span>
        </div>
        <h3 className='text-white text-[17px] font-bold leading-tight'>
          {experience.title}
        </h3>
        <p className='text-[#2DD4BF] text-[13px] font-semibold mt-0.5'>
          {experience.company_name}
        </p>

        <ul className='mt-3 space-y-2'>
          {experience.points.map((point, i) => (
            <li
              key={`mobile-exp-${index}-${i}`}
              className='text-secondary text-[13px] leading-[20px] pl-3 relative before:content-[""] before:absolute before:left-0 before:top-[8px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-[#0D9488]/50'
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </motion.div>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          The path so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          My Journey.
        </h2>
      </motion.div>

      {/* Desktop: VerticalTimeline */}
      <div className='mt-20 hidden sm:flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>

      {/* Mobile: Custom clean timeline */}
      <div className='mt-10 flex flex-col sm:hidden'>
        {experiences.map((experience, index) => (
          <MobileExperienceCard
            key={`mobile-experience-${index}`}
            experience={experience}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
