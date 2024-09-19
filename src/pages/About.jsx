import { motion } from 'framer-motion';
import CtaButton from "../components/CtaButton";
import Services from "../components/Services";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeInOut', delay: 0.2 } },
};

function About() {
  return (
    <motion.main 
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
      }}
      className="px-4 sm:px-6 lg:px-8 mt-[50px] lg:mt-[100px]"
    >
      {/* Responsive First Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="py-16 sm:py-16 md:py-20 lg:py-24 xl:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-32 flex flex-col justify-center items-start"
      >
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="text-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight max-w-full sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] mb-4 sm:mb-8 md:mb-10 lg:mb-12"
        >
          I deliver top-notch digital solutions through innovation.
        </motion.h1>

        <motion.div variants={buttonVariants}>
          <CtaButton
            styles="border-4 border-primary bg-primary px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 lg:py-5 mt-4 sm:mt-8 md:mt-10 lg:mt-12 text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-light rounded hover:bg-background hover:text-dark"
            url="/contact"
            text="Hire me"
          />
        </motion.div>
      </motion.section>

      {/* Services Section */}
      <Services />
    </motion.main>
  );
}

export default About;
