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
        <section className="h-[600px] bg-background" ref={containerRef}>
            <h1 className="text-light text-center text-4xl mt-12 mb-16">This is the slider</h1>

            <motion.div
                ref={sliderRef}
                className="cursor-grab overflow-hidden"
                style={{ width: '100%', display: 'flex', alignItems: 'center' }}
            >
                <motion.div
                    className="flex space-x-8"
                    style={{
                        x: `${-scrollProgress * (300 * 7)}px`, // Smooth horizontal scroll progress based on vertical scroll
                    }}
                >
                    {/* Example Cards inside the Slider */}
                    {Array.from({ length: 8 }).map((_, index) => (
                        <motion.div
                            key={index}
                            className={`min-w-[300px] bg-${index % 2 === 0 ? 'primary' : 'secondary'} text-light rounded-md p-8`}
                            style={{
                                height: `${150 + scrollProgress * 100}px`, // Adjust height as scroll progresses
                            }}
                        >
                            Card {index + 1}
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}

export default Slider;
