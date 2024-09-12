/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import CtaButton from "../components/CtaButton";
import Slider from "../components/Slider";
import ResumeButton from "../components/ResumeButton";

function Works() {
    return (
        <>
            {/* First Section with Page Transition */}
            <motion.section
                className="bg-background h-[800px]"
                initial={{ opacity: 0, y: 50 }} // initial state before the page is fully visible
                animate={{ opacity: 1, y: 0 }} // animation when the page is loaded
                transition={{ duration: 0.8 }} // smooth transition
            >
                <div className="h-1/2 px-40 py-16">
                    <h6 className="text-light font-semibold text-lg mb-20">ABOUT MY WORK</h6>

                    <div className="flex justify-between items-center h-1/2">
                        <h2 className="text-light font-bold text-4xl w-[500px]">
                            Dive in to explore how I turn ideas into functional, user-centric solutions.
                        </h2>

                        <div className="h-full">
                            <h4 className="text-semibold text-light text-2xl w-[250px] mb-4">
                                Checkout my github to see more projects
                            </h4>

                            <CtaButton
                                url="https://github.com/HarunaDev"
                                text="View more"
                                styles="border-2 border-primary bg-primary px-4 py-2 rounded font-semibold text-light text-lg"
                            />
                        </div>
                    </div>
                </div>

                {/* Horizontal Scroll Slider Component */}
                <Slider />
            </motion.section>

            {/* Second Section with Scroll Animation */}
            <motion.section
                className="h-[600px] bg-background flex flex-col justify-center items-center"
                initial={{ opacity: 0, scale: 0.8 }} // start with smaller and less visible
                whileInView={{ opacity: 1, scale: 1 }} // animate to full size and opacity
                transition={{ duration: 0.8, delay: 0.8 }} // smooth transition with a delay
                viewport={{ once: true, amount: 0.2 }} // only animates when 20% of the section is in view
            >
                <h6 className="mb-16 text-xl text-primary font-semibold">Let's Talk</h6>

                <h1 className="text-6xl text-light mb-16 text-center font-semibold w-[800px]">
                    Ready to build something great? Let's connect and collaborate!
                </h1>

                <div>
                    <CtaButton
                        url="/contact"
                        text="Contact me"
                        styles="px-4 py-2 text-xl rounded font-semibold bg-primary text-light border-2 border-primary mr-8"
                    />
                    <ResumeButton />
                </div>
            </motion.section>
        </>
    );
}

export default Works;
