import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function Slider() {
    const sliderRef = useRef(null);
    const containerRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            // Calculate the scroll progress relative to the section containing the slider
            if (containerRef.current) {
                const { top, bottom, height } = containerRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                if (top <= windowHeight && bottom >= 0) {
                    const visibleArea = Math.min(windowHeight, bottom) - Math.max(0, top);
                    const scrollAmount = Math.max(0, visibleArea / height);
                    setScrollProgress(1 - scrollAmount);
                }
            }
        };

        // Add scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Clean up the scroll event listener on component unmount
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="h-[800px] bg-background" ref={containerRef}>
            <h1 className="text-light text-center text-4xl mt-12 mb-8">This is the slider</h1>

            <motion.div
                ref={sliderRef}
                className="cursor-grab overflow-hidden"
                style={{ width: '100%', display: 'flex', alignItems: 'center' }}
            >
                <motion.div
                    className="flex space-x-8"
                    style={{ x: `${-scrollProgress * 100}%` }} // Move the slides based on scroll progress
                >
                    {/* Example Cards inside the Slider */}
                    <motion.div className="min-w-[300px] bg-primary text-light rounded-md p-8">
                        Card 1
                    </motion.div>
                    <motion.div className="min-w-[300px] bg-secondary text-light rounded-md p-8">
                        Card 2
                    </motion.div>
                    <motion.div className="min-w-[300px] bg-primary text-light rounded-md p-8">
                        Card 3
                    </motion.div>
                    <motion.div className="min-w-[300px] bg-secondary text-light rounded-md p-8">
                        Card 4
                    </motion.div>
                    <motion.div className="min-w-[300px] bg-primary text-light rounded-md p-8">
                        Card 5
                    </motion.div>
                    <motion.div className="min-w-[300px] bg-secondary text-light rounded-md p-8">
                        Card 6
                    </motion.div>
                    <motion.div className="min-w-[300px] bg-primary text-light rounded-md p-8">
                        Card 7
                    </motion.div>
                    <motion.div className="min-w-[300px] bg-secondary text-light rounded-md p-8">
                        Card 8
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}

export default Slider;
