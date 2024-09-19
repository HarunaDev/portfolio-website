/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import CtaButton from "../components/CtaButton";
import Slider from "../components/Slider"; // The horizontal scroll slider
import ContactBanner from "../components/ContactBanner";

function Works() {
    return (
        <>
            {/* First Section with Page Transition */}
            <motion.section
                className="bg-background py-8 px-4 sm:px-8 md:px-16 lg:px-40 h-auto mt-[50px] lg:mt-[100px]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="text-center md:text-left max-w-6xl mx-auto py-8">
                    <h6 className="text-light font-semibold text-base md:text-lg mb-6">ABOUT MY WORK</h6>

                    <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
                        <h2 className="text-light font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl w-full md:w-[500px] mb-8 md:mb-0">
                            Dive in to explore how I turn ideas into functional, user-centric solutions.
                        </h2>

                        <div className="text-center md:text-left">
                            <h4 className="text-semibold text-light text-xl sm:text-2xl mb-4">
                                Checkout my github to see more projects
                            </h4>

                            <CtaButton
                                url="https://github.com/HarunaDev"
                                text="View more"
                                styles="border-2 border-primary bg-primary px-4 py-2 rounded font-semibold text-light text-base sm:text-lg"
                            />
                        </div>
                    </div>
                </div>

                {/* Horizontal Scroll Slider Component */}
                <Slider />
            </motion.section>

            {/* Second Section with Scroll Animation */}
            <ContactBanner />            
        </>
    );
}

export default Works;