/* eslint-disable react/no-unescaped-entities */
import ResumeButton from "../components/ResumeButton";
import CtaButton from "./CtaButton";
import { motion } from "framer-motion";

function ContactBanner() {
    return (
        <>
            <motion.section
                className="bg-background py-10 px-4 sm:px-8 md:px-16 flex flex-col justify-center items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <h6 className="text-xl sm:text-2xl md:text-3xl text-primary font-semibold mb-8">
                    Let's Talk
                </h6>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-light font-semibold text-center mb-8 md:mb-12 w-full md:w-[800px]">
                    Ready to build something great? Let's connect and collaborate!
                </h1>

                <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
                    <CtaButton
                        url="/contact"
                        text="Contact me"
                        styles="px-4 py-2 text-base sm:text-lg rounded font-semibold bg-primary text-light border-2 border-primary mb-4 md:mb-0"
                    />
                    <ResumeButton />
                </div>
            </motion.section>
        </>
    )
}

export default ContactBanner