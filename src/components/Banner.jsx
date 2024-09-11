import Img from "../assets/banner.png"

function Banner() {
    return (
        <section className="h-[600px] px-48 bg-background flex justify-center items-center">
            <div>
                <h1 className="font-bold text-9xl mb-8 text-light">Software <span className="text-primary">Developer</span></h1>
                <h2 className="font-semibold text-light text-3xl">My name is Alvin and I am passionate about crafting efficient and innovative solutions.</h2>
            </div>
            
            <img src={Img} alt="Banner Img" />
        </section>
    )
}

export default Banner