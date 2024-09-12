import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
function Slider({ onEndReached }) {
    const sliderRef = useRef(null);
    const [isEndReached, setIsEndReached] = useState(false);

    useEffect(() => {
        // Call the parent function once the end is reached
        if (isEndReached) {
            onEndReached(true);
        } else {
            onEndReached(false);
        }
    }, [isEndReached, onEndReached]);

    const handleDrag = (_, info) => {
        const distanceTraveled = info.point.x;
        const sliderWidth = sliderRef.current.scrollWidth;
        const containerWidth = sliderRef.current.offsetWidth;

        // Check if the user has reached the end of the slider
        if (Math.abs(distanceTraveled) + containerWidth >= sliderWidth) {
            setIsEndReached(true);
        } else {
            setIsEndReached(false);
        }
    };

    return (
        <section className="h-1/2 bg-background">
            <h1 className="text-light text-center text-4xl mt-12 mb-8">This is the slider</h1>

            <motion.div
                ref={sliderRef}
                className="cursor-grab overflow-hidden"
                style={{ width: '100%', display: 'flex', alignItems: 'center' }}
            >
                <motion.div
                    className="flex space-x-8"
                    drag="x"
                    dragConstraints={sliderRef}
                    whileTap={{ cursor: 'grabbing' }}
                    initial={{ x: 0 }}
                    style={{ display: 'flex' }}
                    onDrag={handleDrag} // Track drag to determine when the user has reached the end
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
