import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

function Services() {
    return (
        <motion.section
            className="bg-background pb-16 px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <h6 className="text-center text-secondary font-bold text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 lg:mb-12">
                SERVICES
            </h6>

            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-light font-semibold max-w-4xl mx-auto mb-12 sm:mb-16">
                Crafting custom solutions for your unique challenges.
            </h2>

            {/* Animated Service Cards */}
            <motion.div
                className="flex flex-col md:flex-row justify-between items-center gap-8 px-4 sm:px-6 md:px-8 lg:px-16"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.2 }}
            >
                {/* Individual service cards with primary color background */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="w-full max-w-xs bg-primary text-light p-6 rounded-lg shadow-md"
                >
                    <ServiceCard text="Frontend Development" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="w-full max-w-xs bg-primary text-light p-6 rounded-lg shadow-md"
                >
                    <ServiceCard text="Backend Development" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="w-full max-w-xs bg-primary text-light p-6 rounded-lg shadow-md"
                >
                    <ServiceCard text="UI/UX Design" />
                </motion.div>
            </motion.div>
        </motion.section>
    );
}

export default Services;
