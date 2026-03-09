import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
      {/* Desktop: 3D floating balls */}
      <div className='hidden sm:flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
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
