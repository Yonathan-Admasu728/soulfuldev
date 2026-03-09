import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[90px] xs:top-[100px] sm:top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-3 xs:gap-5 z-10`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-4 h-4 xs:w-5 xs:h-5 rounded-full bg-[#0D9488]' />
          <div className='w-1 h-24 xs:h-32 sm:h-80 teal-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            I'm <span className='text-[#2DD4BF]'>Yonathan</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Developer. Founder. Creator. <br className='sm:block hidden' />
            <span className='sm:inline hidden'>I build technology that moves people.</span>
            <span className='sm:hidden inline'>Building tech that moves people.</span>
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-4 w-full flex justify-center items-center z-10'>
        <a href='#about'>
          <div className='w-[30px] h-[54px] xs:w-[35px] xs:h-[64px] rounded-3xl border-4 border-[#0D9488] flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-2.5 h-2.5 xs:w-3 xs:h-3 rounded-full bg-[#C9A84C] mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
