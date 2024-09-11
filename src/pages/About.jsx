import Banner from "../components/Banner"
import CtaButton from "../components/CtaButton"

function About() {
    return (
        <section>
            <Banner header={<h1 className="text-light text-8xl font-bold w-[900px]">I can deliver results that <span className="text-primary">exceeds</span> your expectations.</h1>} header2={<CtaButton styles="border-4 border-primary bg-primary px-8 py-4 mt-16 text-2xl font-bold text-light rounded" url="/contact" text="Hire me"></CtaButton>}/>
        </section>
    )
}

export default About