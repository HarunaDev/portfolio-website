import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const imgVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

function Banner(prop) {
  return (
    <section className="h-[650px] px-48 bg-background flex justify-between items-center">
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.3 }}
        variants={textVariants}
      >
        {prop.header}
        {prop.header2}
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.5 }}
        variants={imgVariants}
      >
        {prop.img}
      </motion.div>
    </section>
  );
}

export default Banner;
