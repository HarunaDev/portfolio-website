import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function Slider() {
    const sliderRef = useRef(null);
    const containerRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const { top, bottom, height } = containerRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                // Calculate scroll progress based on the slider's position in the viewport
                if (top <= windowHeight && bottom >= 0) {
                    const scrollY = windowHeight - top;
                    const progress = Math.min(Math.max(scrollY / (height + windowHeight), 0), 1);

                    setScrollProgress(progress); // Set the horizontal scroll progress
                }
            }
        };

        // Add event listener for scroll
        window.addEventListener("scroll", handleScroll);

        // Clean up the listener on unmount
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="bg-background py-8 px-4 sm:px-6 md:px-8 lg:px-16" ref={containerRef}>
            <h1 className="text-light text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-8 mb-12">This is the slider</h1>

            <motion.div
                ref={sliderRef}
                className="cursor-grab overflow-hidden"
                style={{ width: '100%', display: 'flex', alignItems: 'center' }}
            >
                <motion.div
                    className="flex space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10"
                    style={{
                        x: `${-scrollProgress * (300 * 8)}px`, // Smooth horizontal scroll progress based on vertical scroll
                        transition: 'x 0.5s ease-out' // Smooth transition for horizontal scrolling
                    }}
                >
                    {/* Example Cards inside the Slider */}
                    {Array.from({ length: 8 }).map((_, index) => (
                        <motion.div
                            key={index}
                            className={`flex-shrink-0 min-w-[250px] sm:min-w-[300px] md:min-w-[350px] lg:min-w-[400px] bg-${index % 2 === 0 ? 'primary' : 'secondary'} text-light rounded-md p-6 sm:p-8 md:p-10 lg:p-12`}
                            style={{
                                height: `${150 + scrollProgress * 100}px`, // Adjust height as scroll progresses
                            }}
                        >
                            <p className="text-center text-lg font-semibold">Card {index + 1}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}

export default Slider;
