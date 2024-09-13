import CtaButton from "../components/CtaButton";
import Services from "../components/Services";

function About() {
    return (
        <main className="px-4 sm:px-6 lg:px-8">
            {/* Responsive First Section */}
            <section className="py-16 sm:py-16 md:py-20 lg:py-24 xl:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-32 flex flex-col justify-center items-start">
            <h1 className="text-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight max-w-full sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] mb-4 sm:mb-8 md:mb-10 lg:mb-12">
          I deliver top-notch digital solutions through innovation.
        </h1>

                <CtaButton
                    styles="border-4 border-primary bg-primary px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 lg:py-5 mt-4 sm:mt-8 md:mt-10 lg:mt-12 text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-light rounded hover:bg-background hover:text-dark"
                    url="/contact"
                    text="Hire me"
                />
            </section>

            {/* Services Section */}
            <Services />
        </main>
    );
}

export default About;
