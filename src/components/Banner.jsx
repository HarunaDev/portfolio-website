import Img from "../assets/banner-2.png"

export default function Banner() {
  return (
    <div className="bg-background">
      <div className="mx-auto max-w-7xl py-4 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-[#3333] px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          {/* <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2  sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
          </svg> */}
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
              Software
              <br />
              <span className="text-primary">Developer</span>
            </h2>
            <p className="mt-6 text-xl leading-8 text-light">
            My name is <span className="text-primary">Alvin Haruna</span> and I am passionate about crafting efficient and innovative solutions.
            </p>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <img
              alt="App screenshot"
              src={Img}
              width={1824}
              height={1080}
              className="absolute inset-0 m-auto mt-10 w-[300px] lg:w-[500px] sm:w-[500px] max-w-none rounded-md "
            />
          </div>
        </div>
      </div>
    </div>
  )
}
