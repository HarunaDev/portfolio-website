import Banner from "../components/Banner"
import Img from "../assets/banner.png"

function Home() {
    return (
        <main>
            <Banner header={<h1 className="font-bold text-9xl mb-8 text-light">Software <span className="text-primary">Developer</span></h1>} header2={<h2 className="font-semibold text-light text-3xl">My name is Alvin and I am passionate about crafting efficient and innovative solutions.</h2>} img={<img className="ml-[50px]" src={Img} alt="Banner Img" />} />
        </main>
    )
}

export default Home