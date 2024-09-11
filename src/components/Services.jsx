import ServiceCard from "./ServiceCard"

function Services() {
    return (
        <section className="bg-background h-[800px] py-16">
            <h6 className="text-center text-secondary font-bold text-2xl mb-12">Services</h6>

            <h2 className="text-center text-4xl text-light font-semibold w-[555px] mx-auto mb-24">Crafting custom solutions for your unique challenges.</h2>

            <div className="h-2/3 bg-secondary px-40 flex justify-between items-center ">
                <ServiceCard text="Frontend Develpment" />
                <ServiceCard text="Backend Develpment" />
                <ServiceCard text="UI/UX Design" />
            </div>
        </section>
    )
}

export default Services