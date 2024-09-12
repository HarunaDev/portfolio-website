// import Banner from "../components/Banner";
import CtaButton from "../components/CtaButton";
import Services from "../components/Services";

function About() {
    return (
        <main className="px-4 sm:px-6 lg:px-8">
            {/* <Banner
                header={
                    <h1 className="text-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight max-w-full sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] mb-4 sm:mb-6 md:mb-8 lg:mb-8">
                        I deliver results that <span className="text-primary">exceed</span> your expectations.
                    </h1>
                }
                header2={
                    <CtaButton
                        styles="border-4 border-primary bg-primary px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 lg:py-5 mt-6 sm:mt-8 md:mt-10 lg:mt-12 text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-light rounded hover:bg-secondary hover:text-dark"
                        url="/contact"
                        text="Hire me"
                    />
                }
            /> */}
            <section className="py-24 px-32">
                    <h1 className="text-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight max-w-full sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] mb-4 sm:mb-6 md:mb-8 lg:mb-8">
                        I deliver results that <span className="text-primary">exceed</span> your expectations.
                    </h1>

                    <CtaButton
                        styles="border-4 border-primary bg-primary px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 lg:py-5 mt-6 sm:mt-8 md:mt-10 lg:mt-12 text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-light rounded hover:bg-secondary hover:text-dark"
                        url="/contact"
                        text="Hire me"
                    />
            </section>
            <Services />
        </main>
    );
}

export default About;
