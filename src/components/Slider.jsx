import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Img1 from "../assets/food.png"
import Img2 from "../assets/portfolio.png"
import Img3 from "../assets/passport.png"
import Features from "../pages/Features";

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
        <section className="bg-background py-12 px-4 sm:px-6 md:px-8 lg:px-0" ref={containerRef}>
            <h1 className="text-light text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-8 mb-16">Explore Live Projects</h1>

            <Features />

            
        </section>
    );
}

export default Slider;



