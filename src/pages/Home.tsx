import { motion, type Variants } from "framer-motion";
import Banner from "../components/Banner";
// import Img from "../assets/banner.png";

const pageVariants : Variants = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 },
};

const Home = () : JSX.Element => {
  return (
    <motion.main
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
      className="min-h-full mt-[50px] lg:mt-[80px]"
    >
      <Banner/>
    </motion.main>
  );
}

export default Home;
