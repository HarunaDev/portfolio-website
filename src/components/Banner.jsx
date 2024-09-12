/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const imgVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

function Banner({ header, header2, img }) {
  return (
    <section className="h-[400px] md:h-[500px] lg:h-[650px] px-4 md:px-8 lg:px-16 mb-6 bg-background flex flex-col lg:flex-row justify-between items-center">
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.3 }}
        variants={textVariants}
        className="text-center lg:text-left lg:mb-0 lg:mr-8"
      >
        {header}
        {header2}
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.5 }}
        variants={imgVariants}
        className="w-full lg:w-auto mt-6 lg:mt-0 lg:ml-8"
      >
        {img}
      </motion.div>
    </section>
  );
}

export default Banner;
