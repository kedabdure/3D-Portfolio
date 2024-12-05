import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { easing } from "maath"

const HeroCamera = ({ children, isMobile }) => {
  const groupRef = useRef()

  useFrame((state, delta) => {
    easing.damp3(groupRef.current.position, [0, 0, 8], 0.25, delta);

    if (!isMobile) {
      easing.dampE(groupRef.current.rotation, [-state.pointer.y / 3, state.pointer.x / 5, 0])
    }
  })

  return (
    <group ref={groupRef}>
      {children}
    </group>
  )
}

export default HeroCamera
