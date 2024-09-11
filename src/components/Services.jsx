import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

function Services() {
    return (
        <motion.section
            className="bg-background h-[800px] py-16"
            initial={{ opacity: 0, y: 50 }} // initial state before the section is visible
            whileInView={{ opacity: 1, y: 0 }} // animation when the section is in view
            transition={{ duration: 0.6 }} // smooth transition duration
            viewport={{ once: true, amount: 0.2 }} // triggers only once when 20% of the section is in view
        >
            <h6 className="text-center text-secondary font-bold text-2xl mb-12">SERVICES</h6>

            <h2 className="text-center text-4xl text-light font-semibold w-[555px] mx-auto mb-24">
                Crafting custom solutions for your unique challenges.
            </h2>

            {/* Animated Service Cards */}
            <motion.div
                className="h-2/3 bg-secondary px-40 flex justify-between items-center"
                initial={{ opacity: 0, scale: 0.8 }} // cards start off smaller and less visible
                whileInView={{ opacity: 1, scale: 1 }} // animate to full size and opacity
                transition={{ duration: 0.8 }} // base transition duration for the container
                viewport={{ once: true, amount: 0.2 }} // only animates when 20% of the section is in view
            >
                {/* Individual service cards with delay */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    transition={{ delay: 0.8, duration: 0.6 }} // 0.5s delay for the first card
                >
                    <ServiceCard text="Frontend Development" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    transition={{ delay: 1, duration: 0.6 }} // 0.7s delay for the second card
                >
                    <ServiceCard text="Backend Development" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    transition={{ delay: 1.2, duration: 0.6 }} // 0.9s delay for the third card
                >
                    <ServiceCard text="UI/UX Design" />
                </motion.div>
            </motion.div>
        </motion.section>
    );
}

export default Services;
