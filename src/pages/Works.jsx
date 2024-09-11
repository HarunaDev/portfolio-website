import CtaButton from "../components/CtaButton"
import Slider from "../components/Slider"

function Works() {
    return (
        <section className="bg-background h-[800px]">
            <div className="h-1/2 px-40 py-16">
                <h6 className="text-light font-semibold text-lg mb-20">ABOUT MY WORK</h6>

                <div className="flex justify-between items-center h-1/2">
                    <h2 className="text-light font-bold text-4xl w-[500px]">Dive in to explore how I turn ideas into functional, user-centric solutions.</h2>

                    <div className="h-full">
                        <h4 className="text-semibold text-light text-2xl w-[250px] mb-4">Checkout my github to see more projects</h4>

                        <CtaButton url="https://github.com/HarunaDev" text="View more" styles="border-2 border-primary bg-primary px-4 py-2 rounded font-semibold text-light text-lg" />
                    </div>
                </div>
            </div>

            <Slider />

        </section>
    )
}

export default Works