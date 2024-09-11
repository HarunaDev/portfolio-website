import Banner from "../components/Banner"
import CtaButton from "../components/CtaButton"
import Services from "../components/Services"

function About() {
    return (
        <main>
            <Banner 
                header={
                    <h1 className="text-light text-5xl sm:text-6xl lg:text-8xl font-bold leading-tight max-w-full sm:max-w-[500px] lg:max-w-[900px] mb-8">
                        I deliver results that <span className="text-primary">exceed</span> your expectations.
                    </h1>
                } 
                header2={
                    <CtaButton 
                        styles="border-4 border-primary bg-primary px-6 py-3 sm:px-8 sm:py-4 mt-12 sm:mt-16 text-lg sm:text-xl lg:text-2xl font-bold text-light rounded hover:bg-secondary hover:text-dark" 
                        url="/contact" 
                        text="Hire me"
                    />
                }
            />
            <Services />
        </main>
    )
}

export default About
