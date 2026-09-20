import React from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
      {/* Desktop: floating icon tiles — CSS/motion only, no WebGL.
          Previously 14 <BallCanvas> instances; together with the hero, Earth and
          Stars canvases that put 17 WebGL contexts on one page, past Chrome's ~16
          limit, so the browser evicted the oldest context — the hero. */}
      <div className='hidden sm:flex flex-row flex-wrap justify-center gap-8'>
        {technologies.map((technology, index) => (
          <motion.div
            key={technology.name}
            className='w-28 h-28 flex flex-col items-center justify-center rounded-2xl bg-tertiary/60 border border-[#0D9488]/25 shadow-card'
            animate={{ y: [0, -9, 0] }}
            transition={{
              duration: 3 + (index % 4) * 0.45,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: (index % 6) * 0.25,
            }}
            whileHover={{ scale: 1.08, borderColor: "#C9A84C" }}
          >
            <img
              src={technology.icon}
              alt={technology.name}
              className='w-12 h-12 object-contain'
            />
            <span className='mt-2 text-[11px] text-secondary tracking-wide text-center px-1'>
              {technology.name}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Mobile: Horizontal scrolling pill strip */}
      <div className='sm:hidden'>
        <div className='flex gap-3 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide'>
          {technologies.map((technology) => (
            <div
              key={technology.name}
              className='flex-shrink-0 snap-start flex items-center gap-2.5 bg-tertiary/80 border border-[#0D9488]/20 rounded-full py-2.5 px-4'
            >
              <img
                src={technology.icon}
                alt={technology.name}
                className='w-7 h-7 object-contain'
              />
              <span className='text-white-100 text-[13px] font-medium whitespace-nowrap'>
                {technology.name}
              </span>
            </div>
          ))}
        </div>

        {/* Second row offset for visual interest */}
        <div className='flex gap-3 overflow-x-auto pb-2 -mx-4 px-8 mt-3 snap-x snap-mandatory scrollbar-hide'>
          {[...technologies].reverse().slice(0, 7).map((technology) => (
            <div
              key={`${technology.name}-2`}
              className='flex-shrink-0 snap-start flex items-center gap-2.5 bg-black-100/80 border border-[#C9A84C]/15 rounded-full py-2.5 px-4'
            >
              <img
                src={technology.icon}
                alt={technology.name}
                className='w-7 h-7 object-contain'
              />
              <span className='text-secondary text-[13px] font-medium whitespace-nowrap'>
                {technology.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
