import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className='hidden sm:block'>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover gap-2'>
            {live_link && (
              <div
                onClick={() => window.open(live_link, "_blank")}
                className='bg-[#0D9488] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <span className='text-white text-[16px] font-bold'>&#8599;</span>
              </div>
            )}
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const MobileProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 0.5)}
    className='relative'
  >
    {/* Number label */}
    <div className='absolute -top-3 left-4 z-10'>
      <span className='text-[11px] font-bold tracking-[0.2em] uppercase text-[#C9A84C] bg-primary px-2'>
        Project 0{index + 1}
      </span>
    </div>

    <div className='border border-[#0D9488]/20 rounded-2xl overflow-hidden bg-tertiary/40'>
      {/* Full-bleed image */}
      <div className='relative w-full h-[200px]'>
        <img
          src={image}
          alt={name}
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-tertiary/90 via-transparent to-transparent' />

        {/* Action buttons floating on image */}
        <div className='absolute bottom-3 right-3 flex gap-2'>
          {live_link && (
            <div
              onClick={() => window.open(live_link, "_blank")}
              className='bg-[#0D9488] w-9 h-9 rounded-full flex justify-center items-center cursor-pointer backdrop-blur-sm'
            >
              <span className='text-white text-[14px] font-bold'>&#8599;</span>
            </div>
          )}
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className='bg-black/60 backdrop-blur-sm w-9 h-9 rounded-full flex justify-center items-center cursor-pointer'
          >
            <img
              src={github}
              alt='source code'
              className='w-1/2 h-1/2 object-contain'
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className='p-4 pt-3'>
        <h3 className='text-white font-bold text-[18px]'>{name}</h3>
        <p className='mt-2 text-secondary text-[13px] leading-[20px]'>{description}</p>

        <div className='mt-3 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <span
              key={`${name}-${tag.name}`}
              className={`text-[12px] ${tag.color} bg-black-100/50 px-2 py-0.5 rounded-full`}
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>What I've built</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[15px] sm:text-[17px] max-w-3xl leading-[26px] sm:leading-[30px]'
        >
          <span className='hidden sm:inline'>
            These aren't side projects — they're live platforms serving real users.
            Each one represents a complete vision brought to life through code:
            from AI-powered wardrobe intelligence, to a mindfulness ecosystem with
            200+ tracks, to a published philosophical framework with its own digital
            presence.
          </span>
          <span className='sm:hidden'>
            Live platforms. Real users. Every one built from vision to production.
          </span>
        </motion.p>
      </div>

      {/* Desktop: original cards */}
      <div className='mt-20 hidden sm:flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      {/* Mobile: full-bleed numbered cards */}
      <div className='mt-8 flex flex-col gap-8 sm:hidden'>
        {projects.map((project, index) => (
          <MobileProjectCard key={`mobile-project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
