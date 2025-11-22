import {useState, useRef} from "react";
import { Link } from "react-router-dom";

const BentoTilt = ({children, className = ''}) => {
  const [transformStyle, setTransformStyle] = useState('')
  const itemRef = useRef(null)

  const handleMouseMove = (e) => {
    if(!itemRef.current) return

    const {left, top, width, height} = itemRef.current.getBoundingClientRect()

    const relativeX = (e.clientX - left) / width
    const relativeY = (e.clientY - top) / height

    const tiltX = (relativeY - 0.5) * 15
    const tiltY = (relativeX - 0.5) * -15
    
    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.95, 0.95, 0.95)`
    setTransformStyle(newTransform)
  }

  const handleMouseLeave = () => {
    setTransformStyle('')
  }

  return (
    <div className={className} ref={itemRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{transform: transformStyle}}>
      {children}
    </div>
  )
}

// const BentoCard = ({ src, title, description, isComingSoon }) => {
//   return (
//     <div className="relative w-full h-full">
//       <video
//         src={src}
//         loop
//         muted
//         autoPlay
//         className="absolute left-0 top-0 size-full w-full object-center"
//       />

//       <div className="relative z-10 flex size-full flex-col justify-between p-4 md:p-5 text-primary">
//         <div>
//           <h1 className="bento-title special-font text-lg md:text-xl lg:text-2xl">{title}</h1>
//           {description && (
//             <p className="mt-2 md:mt-3 max-w-64 text-xs md:text-sm lg:text-base">{description}</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };


const BentoCard = ({ src, title, description, isComingSoon, link }) => {
  return (
    <div className="relative w-full h-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full w-full object-center"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent z-10"></div>

      <div className="relative z-20 flex size-full flex-col justify-between p-4 md:p-5 ">
        <div className=" bg-black/80 w-fit p-4">
          <Link to={link}>
          <h1 className=" special-font text-2xl md:text-2xl lg:text-2xl text-primary">{title}</h1>
          </Link>
          {description && (
            <p className="text-white/90 mt-2 md:mt-3 max-w-64 text-xs md:text-sm lg:text-base ">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="">
      <div className="container mx-auto px-4 md:px-0">
        {/* Large top video frame - Responsive height */}
        <BentoTilt className=" relative mb-6 md:mb-7 h-[50dvh] md:h-[60dvh] lg:h-[500px] w-full overflow-hidden rounded-md">
          <BentoCard
            src="videos/laundry-.mp4"
            link="https://fhemfel-laundry-admin-web.vercel.app/"
            title={
              <>
                {/* radia<b>n</b>t */}
                Laundry Admin Dashboard
              </>
            }
            description="Web Development (React)."
          />
        </BentoTilt>

        {/* Four cards - Stack on mobile, 2x2 grid on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-7 mb-6 md:mb-7">
          {/* Card 1 */}
          <BentoTilt className="overflow-hidden rounded-md h-[250px] sm:h-[300px] md:h-[350px]">
            <BentoCard 
              src="videos/la-globalis.mp4"
              title={<>Landing Page</>}
              link="https://laglobalislumiere.com/"
              description="UI/UX and Web Development (React)"
            />
          </BentoTilt>

          {/* Card 2 */}
          <BentoTilt className="overflow-hidden rounded-md h-[250px] sm:h-[300px] md:h-[350px]">
            <BentoCard 
              src="videos/apartment-.mp4"
              link="https://fhemfel-apartments-web-admin.vercel.app/"
              title={<>Apartments Admin Dashboard</>}
              description="Web Development (React)."
            />
          </BentoTilt>

          {/* Card 3 */}
          <BentoTilt className="overflow-hidden rounded-md h-[250px] sm:h-[300px] md:h-[350px]">
            <BentoCard 
              src="videos/touchline-.mp4"
              link="https://thetouchlinetimes.com/"
              title={<>Sports Blog</>}
              description="UI/UX Wordpress"
            />
          </BentoTilt>

          {/* Card 4 */}
          <BentoTilt className="overflow-hidden rounded-md h-[250px] sm:h-[300px] md:h-[350px]">
            <BentoCard 
              src="videos/client-home.mp4"
              link="https://fhemfel-homes-customer-web.vercel.app/login"
              title={<>User Authentication Flow</>}
              description="Web Development (React)"
            />
          </BentoTilt>
          
          {/* Card 5 */}
          <BentoTilt className="overflow-hidden rounded-md h-[250px] sm:h-[300px] md:h-[350px]">
            <BentoCard 
              src="videos/homes-admin.mp4"
              link="https://fhemfel-web-admin.vercel.app/"
              title={<>ERP Admin Dashboard</>}
              description="Web Development (React)"
            />
          </BentoTilt>
          
          {/* Card 6 */}
          <BentoTilt className="overflow-hidden rounded-md h-[250px] sm:h-[300px] md:h-[350px]">
            <BentoCard 
              src="videos/choji-.mp4"
              link="https://choji-frontend.onrender.com/"
              title={<>Landing Page with Auth</>}
              description="UI/UX & Web Development (React)"
            />
          </BentoTilt>
        </div>

        
      </div>
    </section>
  );
};

export default Features;