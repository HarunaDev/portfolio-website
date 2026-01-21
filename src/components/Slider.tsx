import { useRef } from "react";
import Features from "../pages/Features";

const Slider = () : JSX.Element => {
    // const sliderRef = useRef(null);
    const containerRef = useRef<HTMLElement | null>(null);

    return (
        <section className="bg-background py-12 px-4 sm:px-6 md:px-8 lg:px-0" ref={containerRef}>
            <h1 className="text-light text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-8 mb-16">Explore Live Projects</h1>

            <Features />

            
        </section>
    );
}

export default Slider;



