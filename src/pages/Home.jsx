import { motion } from "framer-motion";
import Banner from "../components/Banner";
import Img from "../assets/banner.png";

const pageVariants = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 },
};

function Home() {
  return (
    <motion.main
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
    >
      <Banner
        header={
          <h1 className="text-4xl md:text-6xl lg:text-9xl font-bold mb-4 md:mb-6 lg:mb-8 text-light">
            Software <span className="text-primary">Developer</span>
          </h1>
        }
        header2={
          <h2 className="text-lg md:text-xl lg:text-3xl font-semibold text-light">
            My name is Alvin and I am passionate about crafting efficient and
            innovative solutions.
          </h2>
        }
        img={<img className="w-full md:w-auto md:ml-12 lg:ml-24" src={Img} alt="Banner Img" />}
      />
    </motion.main>
  );
}

export default Home;
