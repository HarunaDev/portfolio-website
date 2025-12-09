import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive'

import { useRef, useEffect } from 'react'
import HeroLights from './HeroLights'
import { GamingChair } from '../models/Gaming_chair'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const HeroExperience = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)'})
    const isMobile = useMediaQuery({ query: '(max-width: 760px)'})

    const chairRef = useRef()

    // Responsive positions
    const chairPosition = isMobile 
        ? [0, 7.2, -1] 
        : isTablet 
            ? [0, 2.2, -1.5] 
            : [0, 4, -2] 

  return (
    <Canvas camera={{position: [0, 0, 15], fov: 45}} style={{ width: '100%', height: '500px' }}>
        
        <OrbitControls enablePan={false} enableZoom={!isTablet} maxDistance={20} minDistance={5} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableRotate={true}
            rotateSpeed={0.5}
/>

        <HeroLights />

        {/* <Particles count={300}/> */}

        <group scale={isMobile ? 0.7 : 1} position={[0, -3.5, 0]} rotation={[0, -Math.PI /3, 0]} >
        
        <GamingChair scale={[.2, .2, .2]} position={chairPosition} rotation={[0, Math.PI, 0]} ref={chairRef}/>
        {/* <GamingChair scale={[0.2, 0.2, 0.2]} position={[0, 4, -2]}/> */}

        </group>
    </Canvas>
  )
}

export default HeroExperience