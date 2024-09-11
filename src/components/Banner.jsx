import Img from "../assets/banner.png"

function Banner() {
    return (
        <section className="h-[650px] px-48 bg-background flex justify-between items-center">
            <div>
                <h1 className="font-bold text-9xl mb-8 text-light">Software <span className="text-primary">Developer</span></h1>
                <h2 className="font-semibold text-light text-3xl">My name is Alvin and I am passionate about crafting efficient and innovative solutions.</h2>
            </div>
            
            <img className="ml-[50px]" src={Img} alt="Banner Img" />
        </section>
    )
}

export default Banner