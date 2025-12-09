import * as THREE from "three"

const HeroLights = () => {
  return (
    <>
    <ambientLight intensity={0.6}  color="#3CAF2A"/>
    <directionalLight position={[5,5,5]} intensity={0.8} color="#3CAF2A"/>

    {/* <spotLight position={[2,5,6]} intensity={100} angle={0.15} penumbra={0.2} color="white"/> */}

    {/* <spotLight position={[4,5,4]} intensity={50} angle={0.3} penumbra={0.5} color="#3CAF2A"/> */}
    
    {/* <spotLight position={[-3,5,5]} intensity={60} angle={0.4} penumbra={1} color="#3CAF2A"/> */}

    <primitive object={new THREE.RectAreaLight('#3CAF2A', 8, 3, 2)} position={[1,3,4]} intensity={15} rotation={[-Math.PI/4, Math.PI / 4, 0]}/>

    <pointLight position={[-5,5,-5]} intensity={0.4} color="#3CAF2A"/>
    
    {/* <pointLight position={[0,2,-2]} intensity={10} color="#3CAF2A"/> */}
    
    </>
  )
}

export default HeroLights