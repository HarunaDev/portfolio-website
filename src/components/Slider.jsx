import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Img1 from "../assets/food.png"
import Img2 from "../assets/portfolio.png"
import Img3 from "../assets/passport.png"

function Slider() {
    const sliderRef = useRef(null);
    const containerRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    // Project data array
    const projects = [
        {
            id: 1,
            imageUrl: Img1,
            languages: "React, Django, Tailwind CSS",
            demoLink: "https://choji-frontend.onrender.com/",
            githubLink: "https://github.com/HarunaDev/chop-chop"
        },
        {
            id: 2,
            imageUrl: Img1,
            languages: "React, Django, Tailwind CSS",
            demoLink: "https://choji-frontend.onrender.com/",
            githubLink: "https://github.com/HarunaDev/chop-chop"
        },
        {
            id: 3,
            imageUrl: Img3,
            languages: "Flask, Javascript, CSS",
            demoLink: "https://github.com/HarunaDev/saas-passport-maker",
            githubLink: "https://github.com/HarunaDev/saas-passport-maker"
        },
        {
            id: 4,
            imageUrl: Img2,
            languages: "React, Tailwind CSS",
            demoLink: "https://harunadev.netlify.app",
            githubLink: "https://harunadev.netlify.app"
        }
        // Add more project data as needed
    ];

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
        <section className="bg-background py-12 px-4 sm:px-6 md:px-8 lg:px-16" ref={containerRef}>
            <h1 className="text-light text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-8 mb-16">Explore Live Projects</h1>

            <motion.div
                ref={sliderRef}
                className="cursor-grab overflow-hidden"
                style={{ width: '100%', display: 'flex', alignItems: 'center' }}
            >
                <motion.div
                    className="flex space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10"
                    style={{
                        x: `${-scrollProgress * (300 * projects.length)}px`, // Adjust scroll distance for all cards
                        width: `${projects.length * 350}px`, // Adjust container width to fit all cards
                        transition: 'x 0.5s ease-out' // Smooth transition for horizontal scrolling
                    }}
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            className="relative flex-shrink-0 min-w-[250px] sm:min-w-[300px] md:min-w-[350px] lg:min-w-[400px] rounded-md overflow-hidden"
                            style={{
                                height: `${150 + scrollProgress * 100}px`, // Adjust height as scroll progresses
                            }}
                        >
                            {/* Background Image */}
                            <img
                                src={project.imageUrl}
                                alt={`Project ${project.id}`}
                                className="w-full h-full object-cover"
                            />

                            {/* Transparent Overlay */}
                            <div className="absolute inset-0 bg-project flex flex-col justify-center items-center p-4">
                                <p className="text-white text-lg font-semibold">{project.languages}</p>

                                {/* Buttons */}
                                <div className="mt-4 flex justify-center space-x-4">
                                    <a
                                        href={project.demoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-white text-gray-900 font-semibold py-2 px-4 rounded-md shadow-md hover:bg-gray-100"
                                    >
                                        Live Demo
                                    </a>
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-gray-900 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-gray-800"
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}

export default Slider;
